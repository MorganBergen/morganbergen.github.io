import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas', { static: true })
  private readonly matrixCanvas!: ElementRef<HTMLCanvasElement>;

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/\\';

  private animationFrame = 0;
  private drops: number[] = [];
  private columnCount = 0;
  private lastFrameTime = 0;
  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    const canvas = this.matrixCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    this.resizeCanvas(canvas);
    this.resizeObserver = new ResizeObserver(() => this.resizeCanvas(canvas));
    this.resizeObserver.observe(canvas);

    const render = (time: number) => {
      if (time - this.lastFrameTime > 42) {
        this.drawFrame(canvas, context);
        this.lastFrameTime = time;
      }

      this.animationFrame = requestAnimationFrame(render);
    };

    this.animationFrame = requestAnimationFrame(render);
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) {
      return;
    }

    cancelAnimationFrame(this.animationFrame);
    this.resizeObserver?.disconnect();
  }

  private resizeCanvas(canvas: HTMLCanvasElement): void {
    const pixelRatio = window.devicePixelRatio || 1;
    const { width, height } = canvas.getBoundingClientRect();

    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);

    const fontSize = this.getFontSize();
    this.columnCount = Math.ceil(canvas.width / fontSize);
    this.drops = Array.from({ length: this.columnCount }, () =>
      Math.floor(Math.random() * (-canvas.height / fontSize)),
    );
  }

  private drawFrame(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
    const fontSize = this.getFontSize();

    context.fillStyle = 'rgba(0, 0, 0, 0.12)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = `${fontSize}px "SFMono-Regular", Consolas, "Liberation Mono", monospace`;
    context.textBaseline = 'top';

    for (let column = 0; column < this.columnCount; column += 1) {
      const x = column * fontSize;
      const y = this.drops[column] * fontSize;
      const glyph = this.getRandomGlyph();

      context.fillStyle = Math.random() > 0.975 ? '#d8ffe4' : '#17f35f';
      context.fillText(glyph, x, y);

      if (y > canvas.height && Math.random() > 0.965) {
        this.drops[column] = 0;
      }

      this.drops[column] += 1;
    }
  }

  private getFontSize(): number {
    return Math.max(14, Math.floor(window.innerWidth / 72));
  }

  private getRandomGlyph(): string {
    return this.glyphs[Math.floor(Math.random() * this.glyphs.length)];
  }
}

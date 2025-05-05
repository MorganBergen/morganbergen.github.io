/**
 * @file          src/app/layout.tsx
 * 
 */

export default function RootLayout( { children } : 
    { children : React.ReactNode; } ) {
    return (
      <html lang="en">
        <body>
          <header>
            <nav>
              <a href="#home">home</a>
              <a href="#about">about</a>
              <a href="#more">more</a>
            </nav>
          </header>
          {children}
        </body>
      </html>
    );
  }
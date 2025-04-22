/**
 * 
 * @file    src/app/page.tsx
 * 
 **/

import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <div className="column">
        <div className="box box-small">
          <div className="inner-column">
            <div className="headshot-container">
              <Image
                src="/headshot.jpeg"
                alt="headshot"
                width={200}
                height={200}
                className="headshot"
                style={{ objectFit: 'cover' }}
              />
              <div className="headshot-overlay" />
            </div>
          </div>
          <div className="inner-column"></div>
        </div>
        <div className="box box-small">
          <div className="inner-column"></div>
          <div className="inner-column"></div>
          <div className="inner-column"></div>
        </div>
        <div className="box box-small">
          <div className="inner-column"></div>
          <div className="inner-column"></div>
          <div className="inner-column"></div>
        </div>
      </div>
      <div className="column">
        <div className="box box-small">
          <div className="inner-column"></div>
          <div className="inner-column"></div>
          <div className="inner-column"></div>
        </div>
        <div className="box box-small">
          <div className="inner-column"></div>
          <div className="inner-column"></div>
          <div className="inner-column"></div>
        </div>
        <div className="box box-small">
          <div className="inner-column"></div>
          <div className="inner-column"></div>
          <div className="inner-column"></div>
        </div>
      </div>
      <div className="column">
        <div className="box box-small">
          <div className="inner-column"></div>
          <div className="inner-column"></div>
          <div className="inner-column"></div>
        </div>
        <div className="box box-small">
          <div className="inner-column"></div>
          <div className="inner-column"></div>
          <div className="inner-column"></div>
        </div>
        <div className="box box-small">
          <div className="inner-column"></div>
          <div className="inner-column"></div>
          <div className="inner-column"></div>
        </div>
      </div>
    </main>
  );
}
/**
 * 
 * @file    src/app/page.tsx
 * @description     commit #?  for 3 saving columns
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
          <div className="inner-column">
            <h4>about</h4>
            <br></br>
            <p className="primary">
              {/* <Image
                src="/public/person-fill.textClipping"
                alt="person icon"
                width={10}
                height={10}
                style={{ display: 'inline' }}
              /> */}
              morgan bergen
            </p>
            <p className="secondary">name</p>
          </div>
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
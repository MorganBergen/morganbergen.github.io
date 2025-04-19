/**
 * 
 * @file    src/app/page.tsx
 * 
 **/

import "./globals.css";

export default function Home() {
  return (
    <main className="page">
      <div className="column">
        <div className="box box-small">
          <div className="two-column-layout">
            <div className="inner-box"></div>
            <div className="inner-box"></div>
          </div>
        </div>
        <div className="box box-small">
        <div className="two-column-layout">
            <div className="inner-box"></div>
            <div className="inner-box"></div>
          </div>
        </div>
        <div className="box box-large"></div>
      </div>
      <div className="column">
      <div className="box box-small"></div>
        <div className="box box-small"></div>
        <div className="box box-medium"></div>
        <div className="box box-large"></div>
      </div>
      <div className="column">
        <div className="box box-small"></div>
        <div className="box box-medium"></div>
        <div className="box box-large"></div>
      </div>
    </main>
  );
}
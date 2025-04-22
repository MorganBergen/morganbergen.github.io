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
          <div className="inner-column"></div>          
          <div className="inner-column"></div>          
          <div className="inner-column"></div>          
                 
          
        </div>
        <div className="box box-small"></div>
        <div className="box box-small"></div>
      </div>
      <div className="column">
        <div className="box box-small"></div>
        <div className="box box-small"></div>
        <div className="box box-small"></div>
      </div>
      <div className="column">
        <div className="box box-small"></div>
        <div className="box box-small"></div>
        <div className="box box-small"></div>
      </div>
    </main>
  );
}
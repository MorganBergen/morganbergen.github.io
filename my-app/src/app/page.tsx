/**
 * 
 * @file    src/app/page.tsx
 * @description     commit #?  for 3 saving columns
 * 
 **/

import "./globals.css";
import Image from "next/image";

const PersonIcon = () => (
  <svg 
    width="1em" 
    height="1em" 
    viewBox="0 0 24.3139 24.3569" 
    style={{ 
      marginLeft: '0px', 
      verticalAlign: 'middle',
      fontSize: 'inherit'
    }}
  >
    <g>
      <rect height="24.3569" opacity="0" width="24.3139" x="0" y="0"/>
      <path d="M0.864874 7.85887C1.42724 7.85887 1.72977 7.54025 1.72977 6.9779L1.72977 3.88314C1.72977 2.48878 2.47218 1.76747 3.8349 1.76747L6.9824 1.76747C7.54477 1.76747 7.85786 1.45439 7.85786 0.902587C7.85786 0.340239 7.54477 0.0271415 6.9824 0.0271415L3.80273 0.0271415C1.28417 0.0271415 0 1.30076 0 3.79821L0 6.9779C0 7.54025 0.313103 7.85887 0.864874 7.85887ZM23.4488 7.85887C24.0167 7.85887 24.3137 7.54025 24.3137 6.9779L24.3137 3.79821C24.3137 1.31182 23.0456 0.0271415 20.5109 0.0271415L17.3368 0.0271415C16.7689 0.0271415 16.4558 0.340239 16.4558 0.902587C16.4558 1.45439 16.7689 1.76747 17.3368 1.76747L20.4787 1.76747C21.8194 1.76747 22.5894 2.48878 22.5894 3.88314L22.5894 6.9779C22.5894 7.54025 22.897 7.85887 23.4488 7.85887ZM3.80273 24.3569L6.9824 24.3569C7.54477 24.3569 7.85786 24.0438 7.85786 23.492C7.85786 22.9296 7.54477 22.6166 6.9824 22.6166L3.8349 22.6166C2.47218 22.6166 1.72977 21.8952 1.72977 20.5009L1.72977 17.4167C1.72977 16.8438 1.41668 16.5251 0.864874 16.5251C0.302537 16.5251 0 16.8438 0 17.4167L0 20.5858C0 23.0833 1.28417 24.3569 3.80273 24.3569ZM17.3368 24.3569L20.5109 24.3569C23.0456 24.3569 24.3137 23.0722 24.3137 20.5858L24.3137 17.4167C24.3137 16.8438 24.0061 16.5251 23.4488 16.5251C22.8864 16.5251 22.5894 16.8438 22.5894 17.4167L22.5894 20.5009C22.5894 21.8952 21.8194 22.6166 20.4787 22.6166L17.3368 22.6166C16.7689 22.6166 16.4558 22.9296 16.4558 23.492C16.4558 24.0438 16.7689 24.3569 17.3368 24.3569Z" fill="currentColor"/>
      <path d="M5.75383 19.5393L18.5598 19.5393C19.0498 19.5393 19.278 19.2257 19.278 18.7513C19.278 17.2333 17.0051 13.2354 12.1488 13.2354C7.303 13.2354 5.0251 17.2333 5.0251 18.7513C5.0251 19.2257 5.25327 19.5393 5.75383 19.5393ZM12.1488 12.1045C14.116 12.1256 15.6973 10.4484 15.6973 8.23434C15.6973 6.16001 14.116 4.43401 12.1488 4.43401C10.1815 4.43401 8.60579 6.16001 8.60579 8.23434C8.60579 10.4484 10.1815 12.094 12.1488 12.1045Z" fill="currentColor"/>
    </g>
  </svg>
);

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
            <p className="primary"> <PersonIcon /> morgan bergen</p>
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
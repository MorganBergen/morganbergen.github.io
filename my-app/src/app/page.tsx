/**
 *
 * @file    src/app/page.tsx
 * @description   Home page displaying user dashboard.
 *
 **/

import "./globals.css";
import Image from "next/image";

// --- Icon Components (Replace with actual SVGs or library) ---

const PersonIcon = () => (
  <svg className="icon" viewBox="0 0 24.3139 24.3569">
    {/* SVG path data from your original code */}
    <g>
        <rect height="24.3569" opacity="0" width="24.3139" x="0" y="0"/>
        <path d="M0.864874 7.85887C1.42724 7.85887 1.72977 7.54025 1.72977 6.9779L1.72977 3.88314C1.72977 2.48878 2.47218 1.76747 3.8349 1.76747L6.9824 1.76747C7.54477 1.76747 7.85786 1.45439 7.85786 0.902587C7.85786 0.340239 7.54477 0.0271415 6.9824 0.0271415L3.80273 0.0271415C1.28417 0.0271415 0 1.30076 0 3.79821L0 6.9779C0 7.54025 0.313103 7.85887 0.864874 7.85887ZM23.4488 7.85887C24.0167 7.85887 24.3137 7.54025 24.3137 6.9779L24.3137 3.79821C24.3137 1.31182 23.0456 0.0271415 20.5109 0.0271415L17.3368 0.0271415C16.7689 0.0271415 16.4558 0.340239 16.4558 0.902587C16.4558 1.45439 16.7689 1.76747 17.3368 1.76747L20.4787 1.76747C21.8194 1.76747 22.5894 2.48878 22.5894 3.88314L22.5894 6.9779C22.5894 7.54025 22.897 7.85887 23.4488 7.85887ZM3.80273 24.3569L6.9824 24.3569C7.54477 24.3569 7.85786 24.0438 7.85786 23.492C7.85786 22.9296 7.54477 22.6166 6.9824 22.6166L3.8349 22.6166C2.47218 22.6166 1.72977 21.8952 1.72977 20.5009L1.72977 17.4167C1.72977 16.8438 1.41668 16.5251 0.864874 16.5251C0.302537 16.5251 0 16.8438 0 17.4167L0 20.5858C0 23.0833 1.28417 24.3569 3.80273 24.3569ZM17.3368 24.3569L20.5109 24.3569C23.0456 24.3569 24.3137 23.0722 24.3137 20.5858L24.3137 17.4167C24.3137 16.8438 24.0061 16.5251 23.4488 16.5251C22.8864 16.5251 22.5894 16.8438 22.5894 17.4167L22.5894 20.5009C22.5894 21.8952 21.8194 22.6166 20.4787 22.6166L17.3368 22.6166C16.7689 22.6166 16.4558 22.9296 16.4558 23.492C16.4558 24.0438 16.7689 24.3569 17.3368 24.3569Z" fill="currentColor"/>
        <path d="M5.75383 19.5393L18.5598 19.5393C19.0498 19.5393 19.278 19.2257 19.278 18.7513C19.278 17.2333 17.0051 13.2354 12.1488 13.2354C7.303 13.2354 5.0251 17.2333 5.0251 18.7513C5.0251 19.2257 5.25327 19.5393 5.75383 19.5393ZM12.1488 12.1045C14.116 12.1256 15.6973 10.4484 15.6973 8.23434C15.6973 6.16001 14.116 4.43401 12.1488 4.43401C10.1815 4.43401 8.60579 6.16001 8.60579 8.23434C8.60579 10.4484 10.1815 12.094 12.1488 12.1045Z" fill="currentColor"/>
    </g>
  </svg>
);

// Placeholder icons - replace with actual SVGs or imports from a library
const PlaceholderIcon = ({ symbol = '?', color = 'currentColor' }: { symbol?: string; color?: string }) => (
    <span className="icon" style={{ color, border: `1px solid ${color}`, borderRadius: '3px', width: '1em', height: '1em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginRight: '6px' }}>{symbol}</span>
);
const LinkedInIcon = () => <PlaceholderIcon symbol="in" color="#0A66C2"/>;
const GithubIcon = () => <PlaceholderIcon symbol="G" />;
const DiscordIcon = () => <PlaceholderIcon symbol="D" color="#5865F2" />;
const BriefcaseIcon = () => <PlaceholderIcon symbol="B"/>;
const MortarboardIcon = () => <PlaceholderIcon symbol="Ed"/>; // Education
const PinIcon = () => <PlaceholderIcon symbol="P"/>; // Location Pin
const CheckIcon = () => <PlaceholderIcon symbol="✓" color="lightgreen"/>;
const ActivityIcon1 = () => <PlaceholderIcon symbol="A1"/>;
const ActivityIcon2 = () => <PlaceholderIcon symbol="A2"/>;
const ActivityIcon3 = () => <PlaceholderIcon symbol="A3"/>;
const StarIcon = () => <PlaceholderIcon symbol="★" color="gold"/>;
const CalendarIcon = () => <PlaceholderIcon symbol="Ca"/>;
const EmailIcon = () => <PlaceholderIcon symbol="@" />;
const PhoneIcon = () => <PlaceholderIcon symbol="Ph"/>;
const LinkIcon = () => <PlaceholderIcon symbol="L"/>;

// --- Helper Components ---
const ProgressBar = ({ value }: { value: number }) => (
  <div className="progress-bar-container">
    <div className="progress-bar" style={{ width: `${value}%` }}></div>
  </div>
);

const AccountLink = ({ icon, primary, secondary, href="#", }: { icon: React.ReactNode; primary: string; secondary: string; href?: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="account-link">
        <span className="account-icon">{icon}</span>
        <div className="account-info">
            <p className="primary">{primary}</p>
            <p className="secondary">{secondary}</p>
        </div>
        {/* Optionally add a button/arrow */}
    </a>
);


// --- Main Page Component ---
export default function Home() {
  return (
    <main className="page">
      {/* --- Column 1 --- */}
      <div className="column">
        {/* Box 1: About */}
        <div className="box box-row box-small"> {/* Use box-row for side-by-side */}
          <div className="inner-column" style={{flex: '0 0 180px'}}> {/* Fixed width for image column */}
            <div className="headshot-container">
              <Image
                src="/headshot.jpeg" // Ensure this image is in /public/headshot.jpeg
                alt="Headshot of Morgan Bergen"
                fill // Use fill with a sized container
                className="headshot"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 120px, 180px" // Provide sizes for optimization
              />
              <div className="headshot-overlay" />
              {/* Can add text/icons over the overlay if needed */}
            </div>
          </div>
          <div className="inner-column"> {/* Text content takes remaining space */}
            <h4>about</h4>
            <p className="primary"><PersonIcon /> morgan bergen</p>
            <p className="secondary">name</p>
            <p className="primary"><BriefcaseIcon /> study plan</p>
            <p className="secondary">major</p>
            <p className="primary"><MortarboardIcon /> university of kansas</p>
            <p className="secondary">institution</p>
             <p className="primary"><CheckIcon /> program progress</p>
            <p className="secondary">status</p>
          </div>
        </div>

        {/* Box 2: Education */}
        <div className="box box-small">
          <h4>education</h4>
          <p className="primary"><MortarboardIcon/> Bachelor of Science in Computer Science</p>
          <p className="secondary">University of Kansas | 2020 - 2024 (Expected)</p>
          <p className="primary">Relevant Coursework:</p>
          <p className="secondary">Data Structures, Algorithms, Web Dev, Databases</p>
          <br/>
           <p className="primary">GPA: 3.8 / 4.0</p>
           <ProgressBar value={85} /> {/* Example progress */}
           <p className="secondary" style={{textAlign: 'right', fontSize: '10px'}}>85% complete</p>
        </div>

        {/* Box 3: Geography */}
        <div className="box box-large">
           <h4>geography</h4>
           <div style={{display: 'flex', flexDirection: 'row', gap: '15px', width: '100%'}}>
             <div style={{flex: 1}}> {/* Left side list */}
                <p><PinIcon /> Lawrence, KS, USA</p>
                <p className="secondary">Current Location</p>
                <p><PinIcon /> Wichita, KS, USA</p>
                <p className="secondary">Hometown</p>
                 <p><PinIcon /> San Francisco, CA, USA</p>
                <p className="secondary">Internship '23</p>
             </div>
              <div style={{flex: 1}}> {/* Right side list/indicators */}
                <p><CheckIcon /> Available for relocation</p>
                 <p><StarIcon /> Prefers West Coast</p>
                 <p style={{color: 'orange'}}><PlaceholderIcon symbol="!" color="orange"/> Limited Travel Q3</p>
              </div>
           </div>
           {/* Placeholder for Map Image/Component */}
           {/* <div className="map-placeholder">[ World Map Graphic Here ]</div> */}
            <Image
                src="/map.png" // Replace with your actual map image path in /public
                alt="World map showing locations"
                width={500} // Adjust width as needed
                height={150} // Adjust height as needed
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '10px', objectFit: 'contain' }}
             />
        </div>
      </div>

      {/* --- Column 2 --- */}
      <div className="column">
         {/* Box 4: Details */}
        <div className="box box-medium">
            <h4>details</h4>
             <p><EmailIcon /> m.bergen@example.com</p>
             <p className="secondary">Email Address</p>
             <p><PhoneIcon /> +1 (555) 123-4567</p>
             <p className="secondary">Phone Number</p>
             <p><LinkIcon /> portfolio.example.com</p>
             <p className="secondary">Website / Portfolio</p>
             <p><CalendarIcon /> Joined: May 5, 2025</p>
             <p className="secondary">Member Since</p>
             <p><PinIcon /> Timezone: CDT (UTC-5)</p>
             <p className="secondary">Current Timezone</p>
        </div>

        {/* Box 5: Activities */}
        <div className="box box-small">
            <h4>activities</h4>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                <div style={{ flex: 2 }}> {/* Left side activities list */}
                    <p><ActivityIcon1 /> Meeting - Project Sync</p>
                    <p><ActivityIcon2 /> Coding - Feature X</p>
                    <p><ActivityIcon3 /> Review - PR #123</p>
                    <p><ActivityIcon1 /> Learning - Next.js 14</p>
                    <p><ActivityIcon2 /> Coffee Break</p>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}> {/* Right side graphics */}
                    {/* Placeholder for the Kanji-like symbols */}
                    <span style={{fontFamily: 'monospace', fontSize: '1.8em', color: 'var(--gray-700)'}}>活 動</span>
                    <span style={{fontFamily: 'monospace', fontSize: '1.8em', color: 'var(--gray-700)'}}>記録</span>
                </div>
            </div>
        </div>

        {/* Box 6: Placeholder */}
        <div className="box box-small">
             <h4>skills</h4>
              <p> <CheckIcon/> React, Next.js, TypeScript</p>
              <p> <CheckIcon/> Node.js, Python</p>
              <p> <CheckIcon/> SQL, NoSQL Databases</p>
              <p> <CheckIcon/> Git, Docker, AWS</p>
              <p> <CheckIcon/> UI/UX Design Principles</p>
        </div>
      </div>

      {/* --- Column 3 --- */}
      <div className="column">
        {/* Box 7: Accounts */}
        <div className="box box-medium">
            <h4>accounts</h4>
            <AccountLink
                icon={<LinkedInIcon/>}
                primary="Morgan Bergen"
                secondary="[linkedin.com/in/morganb](https://linkedin.com/in/morganb)"
                href="[https://linkedin.com](https://linkedin.com)" // Replace with actual link
            />
             <AccountLink
                icon={<GithubIcon/>}
                primary="morganb-dev"
                secondary="[github.com/morganb-dev](https://github.com/morganb-dev)"
                href="[https://github.com](https://github.com)" // Replace with actual link
            />
             <AccountLink
                icon={<DiscordIcon/>}
                primary="morgan#1234"
                secondary="Discord Profile"
                href="[https://discord.com](https://discord.com)" // Replace with actual link
            />
             {/* Add more accounts if needed */}
        </div>

        {/* Box 8: Placeholder */}
        <div className="box box-small">
            <h4>projects</h4>
             <p><LinkIcon/> Project Dashboard UI</p>
             <p className="secondary">This current project</p>
             <p><LinkIcon/> E-commerce Platform</p>
             <p className="secondary">React, Node.js, Stripe</p>
             <p><LinkIcon/> Personal Blog</p>
             <p className="secondary">Next.js, MDX</p>
        </div>

        {/* Box 9: Placeholder */}
        <div className="box box-small">
            <h4>notes</h4>
             <p>Preparing for final exams.</p>
             <p>Researching state management solutions.</p>
             <p>Need to update LinkedIn profile.</p>
        </div>
      </div>
    </main>
  );
}
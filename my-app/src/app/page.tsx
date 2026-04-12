import "./globals.css";

export default function Home() {
  return (
    <main className="page" id="home">
      {/* Left column: Details (from Figma export) */}
      <section className="column" aria-labelledby="details-heading">
        <div className="box">
          <h4 id="details-heading">details</h4>
          <div className="inner-column">
            <p className="primary">􀥳 herbivore</p>
            <p className="secondary">dietary preference</p>

            <p className="primary">􀛤 libertarian</p>
            <p className="secondary">political philosophy</p>

            <p className="primary">􀵲 american</p>
            <p className="secondary">nationality</p>

            <p className="primary">􁙁 middle eastern &amp; white</p>
            <p className="secondary">race</p>

            <p className="primary">􀬚 pantheism</p>
            <p className="secondary">religion</p>
          </div>
        </div>
      </section>

      {/* Middle column: Education (from Figma export) */}
      <section className="column" aria-labelledby="education-heading">
        <div className="box">
          <h4 id="education-heading">education</h4>
          <div className="inner-column">
            <p className="primary">bachelors of science computer science</p>
            <p className="secondary">major</p>

            <p className="primary">mathematics concentration</p>
            <p className="secondary">minor</p>

            <p className="primary">wichita state university, school of engineering</p>
            <p className="secondary">university</p>
          </div>
        </div>

        <div className="box box-large">
          <div className="inner-column">
            <p className="primary">work in progress</p>
            <p className="secondary">additional content from the Figma export can go here</p>
          </div>
        </div>
      </section>

      {/* Right column: Headshot / placeholders to mirror rectangles */}
        <section className="column" aria-label="profile and widgets">
          <div className="box box-medium">
            <div className="inner-column" style={{alignItems: "center"}}>
              <img
                src="/headshot.jpeg"
                alt="Profile headshot"
                style={{ width: "100%", maxWidth: 160, borderRadius: 12 }}
              />
            </div>
          </div>
          <div className="box box-small">
            <div className="inner-column">
              <p className="primary">quick links</p>
              <p className="secondary">placeholder widgets reflecting small rectangles</p>
            </div>
          </div>
        </section>
    </main>
  );
}

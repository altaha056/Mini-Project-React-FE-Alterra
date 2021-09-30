import "./about.css";
function About() {
  return (
    <>
      <div className="about-title">
        <h1>About Anton.io</h1>
      </div>

      <div className="about-image">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/919692124181059.60feebd3a735c.jpg" />
      </div>

      <div className="about-desc">
        <p>
          Anton.io is a platform for creative professionals around the world to
          showcase their own work and to discover the creative work of others
          through three key features: Search (Discover), Live, and Jobs.
        </p>
        <p>
          These Behance Community Guidelines (“Guidelines”) govern your use of
          Behance to maintain an engaging and trustworthy community that fosters
          creativity across the platform, and are incorporate by reference into
          the Adobe’s Terms of Use. Unless otherwise noted in the Guidelines,
          the same rules apply to all content on Behance.
        </p>
        <p>
          If you come across content that violates these Guidelines, please
          follow the instructions in the 'Report Abuse' section below. We take
          these to heart and hope that you'll do the same as well.
        </p>
      </div>
    </>
  );
}
export default About;

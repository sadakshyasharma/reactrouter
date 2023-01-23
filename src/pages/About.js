import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="center-container">
        <img
          className="aboutimage"
          src="/furniture-world-logo.gif"
          alt="test"
          width="20%"
        />
      </div>
      <div className="abouthomebutton">
       
        CLICK HERE TO GO BACK <br />
        <Link to="/" className="btn">
          Homepage
        </Link>
      </div>
      <div className="about-container">
        <h2>Furniture World Magazine General Information</h2>
        <img src="/about.jpg" />
      </div>
      <div className="about-text">
        <p className="about-text">
          The home furnishings industry's premier furniture trade publication,
          FURNITURE WORLD provides a cost effective way to reach an extensive
          retail subscriber base in the US and Canada.
          <br />
          <br />
          FURNITURE WORLD is designed to achieve long shelf life and maximum
          response for advertisers who are manufacturers of home furnishings
          products and suppliers of services to home furnishings retailers.
          <br />
          <br />
          FURNITURE WORLD is read, not skimmed. That is why the magazine appeals
          to its target readers who are the owners, managers and buyers in
          retail furniture stores. These executives are looking for ways to
          market their products better and create store operating efficiencies.
          <br />
          <br />
          FURNITURE WORLD is the oldest, continuously published trade
          publication in the United States. In 1970, the magazine established
          and endowed the Bernice Bienenstock Furniture Library (
          <a href="http://www.furniturelibrary.com" target="_blank">
            www.furniturelibrary.com
          </a>
          ) in High Point, NC, now a public foundation containing more than
          8,000 books on furniture and design dating from 1540.
          <br /> <br />
          <h2> Services </h2>
          <ul className="my-list">
            <li> Print Advertising </li>
            <li> Classified Advertising </li>
            <li> E-Newsletter Advertising on weekly e-NewsMagazine. </li>
            <li> eBlasts Sent to over 11,000 e-Subscribers </li>
            <li>
              Banner Advertising on{" "}
              <a href="http://www.furninfo.com" target="_blank">
                www.furninfo.com
              </a>
            </li>
          </ul>
        </p>
      </div>

      <hr />

      <p className="about-text">
        <h2>Editorial Content</h2>
        FURNITURE WORLD speaks directly to the needs of home furnishings
        retailers. Every story is purely business. This is why top retail
        executives read FURNITURE WORLD carefully and consistently (see archived
        articles on this site). Editorial features are designed around four
        areas of intense retail interest.
        <ul className="my-list">
          <li>Retail Marketing</li>
          <li>Sales Management</li>
          <li>Financial Management</li>
          <li>Operations Management</li>
          <li>Retail Sales Education</li>
          <li>Trends</li>
          <li>Design</li>
        </ul>
      </p>
      <hr />
    </section>
  );
};
export default About;

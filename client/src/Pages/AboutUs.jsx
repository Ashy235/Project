import React from "react";
import Header from "../Components/Header";
import AboutUs1 from "../Components/AboutUs1";
import Footer from "../Components/Footer";
import AboutUsElement from "../Components/AboutUsElement";
import growBetter from "../assets/grow-better.webp";
import ourStory from "../assets/our-story.webp";
import AboutUs2 from "../Components/AboutUs2";

function AboutUs() {
  const description1 =
    "We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!";
  const description2 =
    "In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.";
  return (
    <div>
      <Header />
      <AboutUs1 />
      <AboutUsElement
        direction="row"
        image={growBetter}
        heading="Our Mission:"
        description={description1}
      />
      <AboutUsElement
        direction="row-reverse"
        image={ourStory}
        heading="Our Story:"
        description={description2}
      />
      <AboutUs2 />
      <Footer />
    </div>
  );
}

export default AboutUs;

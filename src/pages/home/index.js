import React from "react";
import {
  Hero,
  InfoGrid,
  Jumbotron,
  ArtistCarousel,
  Categories,
  CtaBox,
  Footer,
} from "../../components";

function Home() {
  return (
    <>
      <Hero />
      <InfoGrid />
      <Jumbotron />
      <ArtistCarousel />
      <Jumbotron />
      <Categories />
      <CtaBox />
      <Footer />
    </>
  );
}

export default Home;

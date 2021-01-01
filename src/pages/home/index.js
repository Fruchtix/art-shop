import React from "react";
import {
  Hero,
  InfoGrid,
  Jumbotron,
  ArtistCarousel,
  Categories,
  CtaBox,
  Footer,
  NavBar,
} from "../../components";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <InfoGrid />
      <Jumbotron />
      <ArtistCarousel />
      <Jumbotron reverse />
      <Categories />
      <CtaBox />
      <Footer />
    </>
  );
}

export default Home;

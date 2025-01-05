import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./Cover";
import Home from "../pages/Home";
import { useState, useEffect } from "react";
import MySkills from "../pages/MySkills";
import GithubStats from "../pages/GithubStats";
import MyPhilosophy from "../pages/MyPhilosophy";
import MyProjects from "../pages/Projects";
import MyProjects2 from "../pages/Projects2";
import ThankYou from "../pages/ThankYou";

const MyBook = (props) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setWidth(600)
      let height = (window.innerHeight * 90)/100 
      setHeight(height)
    } else {
      setWidth(window.innerWidth);
      let heightValue = window.innerHeight
      setHeight(heightValue);
    }
  }, [])
  
  return (
    <HTMLFlipBook width={width} height={height} showCover={true}>
      <Page number={1}>
        <Cover />
      </Page>
      <Page number={2}>
        <Home />
      </Page>
      <Page number={3}>
        <MySkills />
      </Page>
      <Page number={4}>
        <GithubStats />
      </Page>
      <Page number={5}>
        <MyPhilosophy />
      </Page>
      <Page number={6}>
      <MyProjects />
      </Page>
      <Page number={6}>
      <MyProjects2 />
      </Page>
      <Page number={7}>
      <ThankYou />
      </Page>
    </HTMLFlipBook>
  );
};

export default MyBook;

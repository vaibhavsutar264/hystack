import '../styles/globals.css';
// import $ from 'jquery';
// import Script from 'next/script';
// import Link from 'next/link';

{/* <Link href='//fonts.googleapis.com/css?family=Signika+Negative:300,400,600' rel='stylesheet' type='text/css'></Link>;
<Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" ></Link>;
<Link rel='stylesheet' href='https://codepen.io/GreenSock/pen/ZEGdQLM/7ba936b34824fefdccfe2c6d9f0b740b.css' ></Link>; */}


// import '../public/scrollMagic';
// import '../public/scrollMagicIndicators';
// import '../public/tweenMax';
// import { TimelineMax, Sine } from '../public/tweenMax';
// import ScrollMagic from 'scrollmagic';
// import '../public/scrollMagicAnimationGsap';
// import 'debug.addIndicators'
// import { TweenMax, TimelineMax, Linear } from "gsap";

// import '../public/scrollmagicFromStackOverFlow';
// import '../public/scrollmagicDebugFromStackOverFlow';
// import '../public/scrollMagicGsap';
// import '../public/scrollMagicAnimationGsap';




// import {ScrollMagic} from "scrollmagic";
// import { gsap, TimelineMax } from "gsap";
// import { TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap/all';

// import '../public/gsapMinVideoScrollTrial';
// import '../public/scrollTriggerMinVideoScrollTrial1';
import '../public/jquerry';
// import '../public/gsapMinVideoScrollTrial1.js';
// import '../public/scrollTriggerMinVideoScrollTrial1.js';
import '../public/src';
import '../public/Footer';

// import '../src/style/cloudFareAjaxVideoScrollTrial1.css';
// import '../src/style/googleApisVideoScrollTrial1.css';
// import '../src/style/greenSockVideoScrollTrial1.css';


// import '../public/gsapMin';

// import '../public/controller';

// import Link from 'next/link';

{/* <Link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css"></Link>;
<Link href="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></Link>;
<Link href="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js"></Link>;
<Link href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js"></Link>;
<Link href="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js"></Link>; */}

// import '../public/ScrollMagic.jsx';
// import '../public/ScrollMagicIndicators.jsx';
// import '../public/ScrollMagicGsap.jsx';
// import '../public/ScrollMagicAnimationGsap.jsx';
// import '../public/script';
// import 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js';
// import data from "../src/data/data.json";
import PreAnimationOnLoad from "../public/PreAnimationOnLoad";
import HambergerMenuWithScriptTag from "../public/HambergerMenuWithScriptTag";
// import NavbarContent from "../public/NavbarContent";
// import Navbar from "../src/components/Navbar";
// import OurPartners from "../src/components/OurPartners";
import TextVideo from "../public/textVideo";
// import About from "./About";
import Precision from "../public/Precision";
import Upgrade from "../public/Upgrade";
import WeGotCovered from "../public/WeGotCovered";
import Footer from "../public/Footer";

// import Video from "../public/Video";
import MouseMoveScroll from "../public/MouseMoveScroll";
import VideoRemake from "../public/VideoRemake";
import { motion } from 'framer-motion';
// import { ScrollContainer, ScrollPage, Animator, FadeOut, ZoomOut, batch, ZoomIn } from 'react-scroll-motion';
// import VideoScrollTrial1 from "../public/VideoScrollTrial1";
// import VideoScrollTrial from "../public/VideoScrollTrial";
// import HambergerMenuWithJQuery from "../src/components/HambergerMenuWithJQuery";
// import {  BrowserRouter as Router } from "react-router-dom"
// import React, { useEffect } from 'react'
// import Script from 'next/script'
// import $ from 'jquery';

// const ZoomOutScrollOut = batch(ZoomOut(-50) ,ZoomIn(50));

function MyApp({ Component, pageProps }) {
  return(
    <>
    
    {/* <HambergerMenuWithJQuery/> */}
    <PreAnimationOnLoad/>
    
    <HambergerMenuWithScriptTag />

      {/* <Navbar/> */}
      <div className="section" data-bg="white">
      <TextVideo/>
      </div>
      {/* <NavbarContent/> */}
      <div className="section" data-bg="white">
      <VideoRemake/>
      </div>
      
      {/* <VideoScrollTrial/> */}
      {/* <ScrollContainer>
        <ScrollPage>
          <Animator animation={ZoomOutScrollOut}> */}
          <div className="section" data-bg="rgb(20, 20, 20)">
      <Upgrade/>
      </div>
      {/* </Animator>
      </ScrollPage>
      </ScrollContainer> */}
      {/* <OurPartners ourPartner={data.ourPartner} /> */}
      <div className="section" data-bg="rgb(36, 101, 237)">
      <MouseMoveScroll/>
      </div>
      <div className="section" data-bg="rgb(36, 101, 237)">
      <Precision/>
      </div>
      <div className="section" data-bg="white" >
      
      <WeGotCovered/>
      </div>
      {/* <Video/> */}
      
      
      {/* <VideoScrollTrial1/> */}
      
      <hr/>
      <Footer/>
    </>
  );
}

export default MyApp







// import '../styles/globals.css';
// import data from "../src/data/data.json";
// import Navbar from "../src/components/Navbar";
// import OurPartners from "../src/components/OurPartners";
// // import About from "./About";
// import Precision from "../src/components/Precision";
// import Upgrade from "../src/components/Upgrade";
// import WeGotCovered from "../src/components/WeGotCovered";
// import Footer from "../src/components/Footer";
// import HambergerMenuWithScriptTag from "../src/components/HambergerMenuWithScriptTag";
// // import HambergerMenuWithJQuery from "../src/components/HambergerMenuWithJQuery";
// // import {  BrowserRouter as Router } from "react-router-dom"
// import React, { useEffect } from 'react'
// // import $ from 'jquery';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     // globalThis?.body?.style?.opacity = 1
//   }, [])
//   return(
//     <>
    
//     {/* <HambergerMenuWithJQuery/> */}
//     <HambergerMenuWithScriptTag/>
//       <Navbar/>
//       <Upgrade/>
//       <OurPartners ourPartner={data.ourPartner} />
//       <Precision/>
//       <WeGotCovered/>
//       <hr/>
//       <Footer/>

      
//       <Component {...pageProps}/> 
//     </>
//   );
// }

// export default MyApp

import '../styles/globals.css';
import $ from 'jquery';
// import {ScrollMagic} from "scrollmagic";
// import { gsap, TimelineMax } from "gsap";
// import { TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap/all';
import '../public/src';
import '../public/gsapMin';
import '../public/jquerry';
// import '../public/controller';

import Link from 'next/link';

<Link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css"></Link>;
<Link href="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></Link>;
<Link href="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js"></Link>;
<Link href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js"></Link>;
<Link href="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js"></Link>;

// import '../public/ScrollMagic.jsx';
// import '../public/ScrollMagicIndicators.jsx';
// import '../public/ScrollMagicGsap.jsx';
// import '../public/ScrollMagicAnimationGsap.jsx';
// import '../public/script';
// import 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js';
import data from "../src/data/data.json";
import Navbar from "../src/components/Navbar";
import OurPartners from "../src/components/OurPartners";
import TextVideo from "../public/textVideo";
// import About from "./About";
import Precision from "../src/components/Precision";
import Upgrade from "../src/components/Upgrade";
import WeGotCovered from "../src/components/WeGotCovered";
import Footer from "../src/components/Footer";
import HambergerMenuWithScriptTag from "../public/HambergerMenuWithScriptTag";
import Video from "../public/Video";
// import HambergerMenuWithJQuery from "../src/components/HambergerMenuWithJQuery";
// import {  BrowserRouter as Router } from "react-router-dom"
import React, { useEffect } from 'react'
// import Script from 'next/script'
// import $ from 'jquery';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // globalThis?.body?.style?.opacity = 1
  }, [])
  return(
    <>
    
    {/* <HambergerMenuWithJQuery/> */}
    <HambergerMenuWithScriptTag />
      <Navbar/>
      <TextVideo/>
      <Upgrade/>
      <OurPartners ourPartner={data.ourPartner} />
      <Precision/>
      <WeGotCovered/>
      <Video/>
      <hr/>
      <Footer/>

      
      <Component {...pageProps}/> 
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

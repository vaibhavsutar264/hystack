import React from 'react';
import Script from 'next/script'
import Link from 'next/link';
import Head from 'next/head';
<Link to="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css" />

// next.config.js

const textVideo = () => {
    return (
        <>
            <Head>
                <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
                <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css"></link>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
            </Head>
            <main className="flexbox" id="flexbox">
                <div className="button-wrapper link" id="button-wrapper">
                        <div className="relative">
                            <h2 id='text-video-h2'>
                                <span className="">I</span>
                                <span>N</span>
                                <span>F</span>
                                <span>E</span>
                                <span>C</span>
                                <span>T</span>
                                <span>I</span>
                                <span>0</span>
                                <span>U</span>
                                <span>S    </span>
                                <span>D</span>                              
                                <span>E</span>
                                <span>S</span>
                                <span>E</span>
                                <span>A</span>
                                <span>S</span>
                                <span>E</span>
                                <span>S </span>
                                <span className="spacing" >W</span>
                                <span>O</span>
                                <span>U</span>
                                <span>L</span>
                                <span>D</span>
                                <span>N</span>
                                <span>'</span>
                                <span>T </span>
                                <span className="spacing" >K</span>
                                <span>I</span>
                                <span>L</span>
                                <span>L </span>
                                <span className="spacing">A</span>
                                <span>N</span>
                                <span>Y</span>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                                
                            </h2>
                            <video id="banner" type="video/mp4" muted autoPlay loop >
                                <source src="istockphoto-454669794-640_adpp_is.mp4" />
                            </video>
                            

                             {/* <video src={require('./istockphoto-454669794-640_adpp_is.mp4')}  id="banner" type="video/mp4" autoPlay loop /> */}

                            {/* <video src="istockphoto-454669794-640_adpp_is.mp4" id="banner" type="video/mp4" muted loop autoPlay></video> */}
                        </div>
                        

                        <div className="btn-secondary"></div>
                </div>
                
            </main>
            <div><h2 id='text-video-h6'> Avoid Avoidable Deaths with The Haystack UID test</h2></div>

            <div className="cursor"></div>

            <Script src="src.js" strategy="lazyOnload"></Script>
            <Script src="gsapMin.js" strategy="lazyOnload"></Script>
            <Script src="jquerry.js" strategy="lazyOnload"></Script>
            {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></Script> */}
            {/* <Script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></Script> */}

        </>
    )
}

export default textVideo

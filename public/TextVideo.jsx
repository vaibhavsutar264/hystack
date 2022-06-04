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
            <main className="flexbox">
                <div className="button-wrapper link">
                    {/* <button type="button" className="button btn-primary "> */}
                        <div className="relative">
                            <h2 id='text-video-h2'>
                                <span className="relative" >B</span>
                                <span >U</span>
                                <span className="span1" >I</span>
                                <span >L</span>
                                <span >D</span>
                                <span >I</span>
                                <span >N</span>
                                <span >G   </span>
                                <span className="spacing" >T</span>
                                <span >H</span>
                                <span >E </span>
                                <br />
                                <span className="spacing-extra" >F</span>
                                <span >U</span>
                                <span >T</span>
                                <span >U</span>
                                <span >R</span>
                                <span >E</span>
                                <span className="spacing" >B</span>
                                <span >U</span>
                                <span >I</span>
                                <span >L</span>
                                <span >D</span>
                                <span >I</span>
                                <span >N</span>
                                <span >G </span>
                                <br />
                                <span className="spacing" >T</span>
                                <span >H</span>
                                <span >E </span>
                                <span className="spacing" >F</span>
                                <span >U</span>
                                <span >T</span>
                                <span >U</span>
                                <span >R</span>
                                <span >E</span>
                                {/* <span className="" onmouseover="setVideo()" onmouseout="noVideo()">B</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">U</span>
                                <span className="span1" onmouseover="setVideo1()" onmouseout="noVideo1()">I</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">L</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">D</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">I</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">N</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">G   </span>
                                <span className="spacing" onmouseover="setVideo()" onmouseout="noVideo()">T</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">H</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">E </span>
                                <br />
                                <span className="spacing-extra" onmouseover="setVideo()" onmouseout="noVideo()">F</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">U</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">T</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">U</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">R</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">E</span>
                                <span className="spacing" onmouseover="setVideo()" onmouseout="noVideo()">B</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">U</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">I</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">L</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">D</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">I</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">N</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">G </span>
                                <br />
                                <span className="spacing" onmouseover="setVideo()" onmouseout="noVideo()">T</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">H</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">E </span>
                                <span className="spacing" onmouseover="setVideo()" onmouseout="noVideo()">F</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">U</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">T</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">U</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">R</span>
                                <span onmouseover="setVideo()" onmouseout="noVideo()">E</span> */}
                            </h2>
                            <video id="banner" type="video/mp4" muted autoPlay loop >
                                <source src="istockphoto-454669794-640_adpp_is.mp4" />
                            </video>

                             {/* <video src={require('./istockphoto-454669794-640_adpp_is.mp4')}  id="banner" type="video/mp4" autoPlay loop /> */}

                            {/* <video src="istockphoto-454669794-640_adpp_is.mp4" id="banner" type="video/mp4" muted loop autoPlay></video> */}
                        </div>

                        <div className="btn-secondary"></div>
                    {/* </button> */}
                </div>
            </main>

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

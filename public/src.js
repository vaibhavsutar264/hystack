// import {ScrollMagic} from "scrollmagic";
import Link from 'next/link';
import $ from 'jquery';
<Link href="https://scrollmagic.io/docs/ScrollMagic_Controller.js.html"></Link>;
// window.jQuery = $;
// import './controller';



if (typeof window !== 'undefined'){        
if (process.browser){let abc = $('.menu_container'); 

$("DOMContentLoaded", function(){
    var navToggle = document.getElementById("bgtoggle");
    var navMenu = document.getElementById("menu_container");
    navToggle.addEventListener("click", function(e){
      // navMenu.classList.toggle("open");
      navMenu.style.opacity="1";
    });
  });
}
}

//   const stickyVideoModule = document.querySelector(".sticky-video-module");
// const boxed = stickyVideoModule.querySelector(".boxed");
// const videoWrapper = stickyVideoModule.querySelector(".video");
// const video = stickyVideoModule.querySelector("video");
// const textScene1 = stickyVideoModule.querySelector(".text-scene-1");
// const textScene2 = stickyVideoModule.querySelector(".text-scene-2");
// const textScene3 = stickyVideoModule.querySelector(".text-scene-3");

// const controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
// 	duration: 1500,
// 	triggerElement: videoWrapper,
// 	triggerHook: 0
// })
// 	.addIndicators({ name: "init" })
// 	.setPin(videoWrapper)
// 	.addTo(controller);

// scene.on("update", (e) => {
// 	scrollPos = e.scrollPos / 1000;
// });

// scene.on("enter", () => {
// 	boxed.style.width = `${window.innerWidth}px`;
// 	boxed.style.paddingTop = "100px";
// });

// scene.on("end", (e) => {
// 	if ("FORWARD" === e.scrollDirection) {
// 		boxed.style.width = "100vw";
// 	}
// });

// setInterval(() => {
// 	delay += (scrollPos - delay) * accelAmount;

// 	video.currentTime = scrollPos;
// }, 33.3);

// // Scale Scene
// const scale_tween = gsap.timeline();
// scale_tween.from(video, {
// 	transform: " scale(1)",
// 	opacity: 1,
// 	duration: 0
// });
// scale_tween.to(video, {
// 	transform: " scale(1.5)",
// 	opacity: 1,
// 	duration: 1
// });
// const scene1 = new ScrollMagic.Scene({
// 	duration: 3000,
// 	triggerElement: videoWrapper,
// 	triggerHook: 0
// })
// 	.addIndicators({ name: "scene1" })
// 	.setTween(scale_tween)
// 	.addTo(controller);




//text-in-video-script

// let foo = null; 
if (typeof window !== 'undefined'){
//   foo = window.localStorage.getItem("foo");

$($).ready(function() {

  var cursor = $(".cursor");
  var src = $("#banner").attr("src");

  $(window).mousemove(function(e) {
      cursor.css({
          top: e.clientY - cursor.height() / 2,
          left: e.clientX - cursor.width() / 2
      });
  });

  $(window)
      .mouseleave(function() {
          cursor.css({
              opacity: "0"
          });
      })
      .mouseenter(function() {
          cursor.css({
              opacity: "1"
          });
      });

  $(".link")
      .mouseenter(function() {
          cursor.css({
              transform: "scale(10.2)",   
          });
      })
      .mouseleave(function() {
          cursor.css({
              transform: "scale(1)"

          });
      });

  $(window)
      .mousedown(function() {
          cursor.css({
              transform: "scale(.2)"
          });
      })
      .mouseup(function() {
          cursor.css({
              transform: "scale(1)"
          });
      });
});

let updateScrollPos = function (e) {
  $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}

class Button {
  constructor(HTMLButtonElement) {
      this.button = HTMLButtonElement;
      this.width = this.button.offsetWidth;
      this.height = this.button.offsetHeight;
      this.left = this.button.offsetLeft;
      this.top = this.button.offsetTop;
      this.x = 0;
      this.y = 0;
      this.cursorX = 0;
      this.cursorY = 0;
      this.magneticPullX = 0.4;
      this.magneticPullY = 0.9;
      this.isHovering = false;
      // this.magnetise();
      // this.createRipple();
  }

  onEnter = () => {
      gsap.to(this.button, 0.4, {
          x: this.x * this.magneticPullX,
          y: this.y * this.magneticPullY,
          ease: Power4.easeOut
      });
  };

  onLeave = () => {
      gsap.to(this.button, 0.7, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut.config(1.1, 0.5)
      });
  };

  // magnetise = () => {
  //     document.querySelector("body").addEventListener("mousemove", (e) => {
  //         this.cursorX = e.clientX;
  //         this.cursorY = e.clientY;

  //         const center = {
  //             x: this.left + this.width / 2,
  //             y: this.top + this.height / 2
  //         };

  //         this.x = this.cursorX - center.x;
  //         this.y = this.cursorY - center.y;

  //         const distance = Math.sqrt(this.x * this.x + this.y * this.y);
  //         const hoverArea = this.isHovering ? 0.6 : 0.5;

  //         if (distance < this.width * hoverArea) {
  //             if (!this.isHovering) {
  //                 this.isHovering = true;
  //             }
  //             this.onEnter();
  //         } else {
  //             if (this.isHovering) {
  //                 this.onLeave();
  //                 this.isHovering = false;
  //             }
  //         }
  //     });
  // };

  createRipple = () => {
      this.button.addEventListener("click", () => {
          const circle = document.createElement("span");
          const diameter = Math.max(
              this.button.clientWidth,
              this.button.clientHeight
          );
          const radius = diameter / 2;

          const offsetLeft = this.left + this.x * this.magneticPullX;
          const offsetTop = this.top + this.y * this.magneticPullY;

          circle.style.width = circle.style.height = `${diameter}px`;
          circle.style.left = `${this.cursorX - offsetLeft - radius}px`;
          circle.style.top = `${this.cursorY - offsetTop - radius}px`;
          circle.classList.add("ripple");

          const ripple = this.button.getElementsByClassName("ripple")[0];

          if (ripple) {
              ripple.remove();
              
              
          }

          this.button.appendChild(circle);
      });
  };
}

const buttons = $("button");
for (const button of buttons) {
  new Button(button);
}

}


// function setVideo(){
//   // document.getElementById("banner").src="istockphoto-454669794-640_adpp_is.mp4";
//   document.getElementById("banner").src="https://media.istockphoto.com/videos/animation-floating-through-blue-microbes-healthy-microbiome-video-id1293799762";
// }

// function noVideo(){
//   document.getElementById("banner").src="";
// }








if (typeof window !== 'undefined'){

    if (typeof(controller) == 'undefined') {
  
      const stickyVideoModule = document.querySelector(".sticky-video-module");
      const boxed = stickyVideoModule.querySelector(".boxed");
      const videoWrapper = stickyVideoModule.querySelector(".video");
      const video = stickyVideoModule.querySelector("video");
  
      const controller = new ScrollMagic.Controller();
  
      const scene = new ScrollMagic.Scene({
          duration: 1500,
          triggerElement: videoWrapper,
          triggerHook: 0
      })
          .addIndicators({ name: "init" })
          .setPin(videoWrapper)
          .addTo(controller);
  
      scene.on("update", (e) => {
          scrollPos = e.scrollPos / 1000;
      });
  
      scene.on("enter", () => {
          boxed.style.width = `${window.innerWidth}px`;
          boxed.style.paddingTop = "100px";
      });
  
      scene.on("end", (e) => {
          if ("FORWARD" === e.scrollDirection) {
              boxed.style.width = "100vw";
          }
      });
  
      // Scale Scene
      const scale_tween = gsap.timeline();
      scale_tween.from(video, {
          transform: " scale(1)",
          opacity: 1,
          duration: 0
      });
      scale_tween.to(video, {
          transform: " scale(1.5)",
          opacity: 1,
          duration: 1
      });
      const scene1 = new ScrollMagic.Scene({
          duration: 3000,
          triggerElement: videoWrapper,
          triggerHook: 0
      })
          .addIndicators({ name: "scene1" })
          .setTween(scale_tween)
          // .addTo(controller);
  
    }}
  

// scroll magic gsap




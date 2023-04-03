gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(pageContainer, {
  // setter
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0)// setter
      : scroller.scroll.instance.scroll.y; // getter: get's how far object has scrolled on y
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  // all direct children of .pin-wrap
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  // console.log(pinBoxes)
  let pinWrap = document.querySelector(".pin-wrap");
  // scroll with including all hidden from viewport
  let pinWrapWidth = pinWrap.offsetWidth;
  console.log(pinWrapWidth)
  console.log(pinWrap.scrollWidth)
  console.log(window.innerWidth)
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    // triggered by sectionPin once the top of sectionPin hit the top of the scroller animation starts
    scrollTrigger: {
      // By default, the scroller is the viewport itself, but if you'd like to add a ScrollTrigger to a scrollable <div>, for example, just define that as the scroller. You can use selector text like "#elementID" or the element itself.
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",// check top for explaination
//       An exact scroll value, so 200 would trigger when the viewport/scroller scrolls by exactly 200 pixels.
      end: pinWrapWidth
    },
    // the animation starts once this conditions are met
    // the animation continues runing for the start and end duration i.e 
    // it would have scrolled -horizontalScrollLength by the time the end is triggered
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});



<!-- hero stuff -->

overlay has a bg of black and the preloader sits uontop of it
inside there are two canvas a background and foreground. 
the background is used during the preloading and the foreground is used to set the background image after preloaded



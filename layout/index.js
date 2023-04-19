import { useEffect, useRef } from "react"
import { useStore } from "lib/store.js"
import gsap from "gsap"
import CustomHead from 'components/custom-head'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Header from "components/header"
import Preloader from "components/preloader"
import s from './layout.module.scss'
gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children, seo="" }) {
	const mainRef = useRef()
	const [locomotive, setLocomotive] = useStore((state) => [state.locomotive, state.setLocomotive])
	useEffect(()=>{
		console.log(locomotive)
		if (!locomotive && typeof window !== "undefined") {
			(async () => {
				try {
					
					const LocomotiveScroll = (await import('locomotive-scroll')).default
					const scroller = new LocomotiveScroll({
						el: document.querySelector('[data-scroll-container]') ?? undefined,
						smooth: true,
						direction: 'horizontal'
					})
						setLocomotive(scroller)
						console.log(document.querySelector('[data-scroll-container]').scrollWidth - window.innerWidth)
						scroller.on("scroll", ScrollTrigger.update);
						scroller.on("scroll", (args)=>{
							console.log(args.scroll)
							
						})
						ScrollTrigger.scrollerProxy(mainRef.current, {
							// setter
							// scrollTop(value) {
							// 	return arguments.length
							// 		? scroller.scrollTo(value, 0)// setter
							// 		: scroller.scroll.instance.scroll.y; // getter: get's how far object has scrolled on y
							// },

							scrollLeft(value) {
								return arguments.length
									? scroller.scrollTo(value, 0)// setter
									: scroller.scroll.instance.scroll.x; // getter: get's how far object has scrolled on x
							},
							getBoundingClientRect() {
								return {
									left: 0,
									top: 0,
									width: window.innerWidth,
									height: window.innerHeight
								};
							},
							// this is for mobile devices and has to do with the way locomotive scroll handle scroll on mobile devices
							pinType: mainRef.current.style.transform ? "transform" : "fixed"
						});

						// window.addEventListener("load", init);
						
						function init() {
							// all direct children of .pin-wrap
							let pinBoxes = document.querySelectorAll(".pin-wrap > *");
							let pinWrap = document.querySelector(".pin-wrap");
							// scroll with including all hidden from viewport
							let pinWrapHeight= pinWrap.offsetHeight;
							
							let verticalScrollLength = pinWrapHeight - window.innerHeight;
						  
							// Pinning and horizontal scrolling
						  
							gsap.to(".pin-wrap", {
							  // triggered by sectionPin once the top of sectionPin hit the top of the scroller animation starts
							  scrollTrigger: {
								// By default, the scroller is the viewport itself, but if you'd like to add a ScrollTrigger to a scrollable <div>, for example, just define that as the scroller. You can use selector text like "#elementID" or the element itself.
								scroller: document.querySelector('[data-scroll-container]'), //locomotive-scroll
								scrub: true,
								trigger: ".sectionPin",
								pin: true,
								// anticipatePin: 1,
								start: "left left",// check top for explaination
						  //       An exact scroll value, so 200 would trigger when the viewport/scroller scrolls by exactly 200 pixels.
								end: pinWrapHeight
							  },
							  // the animation starts once this conditions are met
							  // the animation continues runing for the start and end duration i.e 
							  // it would have scrolled -horizontalScrollLength by the time the end is triggered
							  y: verticalScrollLength,
							  ease: "none"
							});
						  
							ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
						  
							ScrollTrigger.refresh();
						  }

						  init();

						} catch (error) {
							throw Error(`[SmoothScrollProvider]: ${error}`)
						}
					})()
				}
			return () => {
				locomotive && locomotive.destroy()
			}
	},[locomotive])
	
	return (
			<div className="">
				<div className="">
					<CustomHead {...seo} />
					<div className="">
						{/* preloader */}
						<Preloader />
						{/* <Cursor /> */}
					
						<div className={s.main__container}>
							<Header />
							<main className={s.main} data-scroll-container ref={mainRef}>
								{children}
							</main> 
						</div>	 
					</div>
				</div>
			</div>
	)
  }
  
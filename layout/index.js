import { useEffect, useRef } from "react"
import { useStore } from "lib/store.js"
import gsap from "gsap"
import CustomHead from 'components/custom-head'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Header from "components/header"

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children, seo="" }) {
	const mainRef = useRef()
	const [locomotive, setLocomotive] = useStore((state) => [state.locomotive, state.setLocomotive])
	useEffect(()=>{
		if (!locomotive && typeof window !== "undefined") {
			(async () => {
				try {
					const LocomotiveScroll = (await import('locomotive-scroll')).default
					const scroller = new LocomotiveScroll({
						el: document.querySelector('[data-scroll-container]') ?? undefined,
						smooth: true,
					})
						setLocomotive(scroller)
						
						scroller.on("scroll", ScrollTrigger.update);

						ScrollTrigger.scrollerProxy(mainRef.current, {
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
							// this is for mobile devices and has to do with the way locomotive scroll handle scroll on mobile devices
							pinType: mainRef.current.style.transform ? "transform" : "fixed"
						});

						


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
				<div className="{s.body}">
					<CustomHead {...seo} />
					<div className="{cn(s.layout, className)}">
						{/* preloader */}
						{/* <Cursor /> */}
						<div className="main__container">
							<Header />
							<main className="{s.main}" data-scroll-container ref={mainRef}>
								{children}
							</main> 
						</div>	 
					</div>
				</div>
			</div>
	)
  }
  
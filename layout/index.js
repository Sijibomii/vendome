import { useEffect, useRef, state, useState} from "react"
import { useStore } from "lib/store.js"
import gsap from "gsap"
import CustomHead from 'components/custom-head'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Header from "components/header"
import Preloader from "components/preloader"
import cn from "clsx"
import s from './layout.module.scss'
gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children, seo="" }) {
	const mainRef = useRef()
	const topRef = useRef()
	const [locomotive, setLocomotive] = useStore((state) => [state.locomotive, state.setLocomotive])
	const [vlocomotive, setVLocomotive] = useStore((state) => [state.vlocomotive, state.setVLocomotive])
	
	const verticalProgress = 0
	let isVertical = false
	let scroller;
	let vscroller;
	function getSection(){
		const rect = document.querySelector('.sectionPin').getBoundingClientRect();
		if (rect.left < -20){
			console.log('dd')
			if(!isVertical){
				document.querySelector('.sectionPin').style.position = "sticky"
				scroller.stop()
				vscroller.start()

				isVertical = true
			}
		}

		if (isVertical){
			// on the vertical page
		}

		window.requestAnimationFrame(getSection)
	}


	useEffect(()=>{
		console.log('dd')
		let scroll = "horizontal"
        import("locomotive-scroll").then((locomotiveModule) => {
            scroller = new locomotiveModule.default({
                el: document.querySelector('[data-scroll-container]') ?? undefined,
				smooth: true,
				direction: scroll
            });

			setLocomotive(scroller)
			// scroller.on("scroll", ScrollTrigger.update);
			

			vscroller = new locomotiveModule.default({
                el: document.querySelector('[data-vertical-scroll-container]') ?? undefined,
				smooth: true,
				direction: "vertical"
            });
			setVLocomotive(vscroller)
			vscroller.stop()
			

			
			window.requestAnimationFrame(getSection)
        });
		
		
	},[])


	
	
	return (
			<div className="">
				<div className="">
					<CustomHead {...seo} />
					<div className="">
						{/* preloader */}
						<Preloader />
						{/* <Cursor /> */}
					
						<div className={s.main__container} ref={topRef}>
							<Header />
							<main className={cn(s.main, "main")} data-scroll-container ref={mainRef}>
								{children}
							</main> 
						</div>	 
					</div>
				</div>
			</div>
	)
  }
  
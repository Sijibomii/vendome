import s from './preloader.module.scss'
import cn from "clsx"
import gsap from "gsap"
import { useEffect, useRef } from 'react'
import {init} from '@/utils/th'

export default function Preloader ({}){
    // const [leftRefs, addLeftRefs] = useMultiRefs()
    // const [rightRefs, addRightRefs] = useMultiRefs()
    const preloader = useRef()
    const first = useRef()
    const second = useRef()
    const third = useRef()
    const fourth = useRef()
    const fifth = useRef()
    // const right = rightRefs()
    useEffect(()=>{
        // const left = leftRefs()
        init();
        const timeline = gsap.timeline()
        timeline.fromTo(first.current, {
            y: 900,
            x: -200,
            duration: 2
        },{
            y: 0,
            x: 0,
        }, 0.5)

        timeline.fromTo(second.current, {
            y: 900,
            x: 200,
            duration: 2
        },{
            y: 0,
            x: 0,
        }, 1)

        timeline.fromTo(third.current, {
            y: 900,
            x: -200,
            duration: 2
        },{
            y: 0,
            x: 0,
        }, 1.5)

        timeline.fromTo(fourth.current, {
            y: 900,
            x: 200,
            duration: 2
        },{
            y: 0,
            x: 0,
        }, 2)

        timeline.fromTo(fifth.current, {
            y: 900,
            x: -200,
            duration: 2
        },{
            y: 0,
            x: 0,
        }, 2.5)

        const width = window.innerWidth
        const height = window.innerHeight

        timeline.to(fifth.current, {
            height,
            width,
            margin: 0,
            left: 0,
            top: 0,
            y: -10,
            transform: "rotate(0deg)",
            duration: 2
        }, 3)
       
        timeline.to(preloader.current, {
            opacity: 0,
            visibility: "hidden"
        })
        // make preloader opacity become zero and display image in canvas and widen it 
        // timeline.to(".background", {

        // })
    },[])
    

    return(
        <div className={s.preloader} ref={preloader}>
            <div className={s.preloader__wrap}>
                <div className={s.preloader__logo}>
                <svg width="311" height="120" viewBox="0 0 311 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip-sub-preloader)">
                        <path d="M82.5914 106.094C81.1815 107.504 78.966 108.833 76.1057 108.833C71.7753 108.833 68.915 105.711 68.915 101.844C68.915 98.037 71.7952 94.8748 76.0051 94.8748C78.4019 94.8748 80.6982 95.8215 82.1685 97.1913L80.6377 98.7019C79.4695 97.594 77.6567 96.8894 76.0455 96.8894C73.165 96.8894 71.292 99.1453 71.292 101.864C71.292 104.604 73.2053 106.819 76.146 106.819C78.2005 106.819 79.9529 105.812 81.0807 104.604L82.5914 106.094Z" fill="white"></path>
                        <path d="M87.868 95.2776V106.416H95.9448V108.43H85.6118V95.2776H87.868Z" fill="white"></path>
                        <path d="M98.6431 108.43V95.2776H100.899V108.43H98.6431Z" fill="white"></path>
                        <path d="M117.314 95.2776V108.43H115.32L107.727 99.3057H107.707V108.43H105.451V95.2776H107.445L115.038 104.402H115.059V95.2776H117.314Z" fill="white"></path>
                        <path d="M121.866 108.43V95.2776H124.122V108.43H121.866Z" fill="white"></path>
                        <path d="M134.897 94.8748C139.046 94.8748 142.35 97.9769 142.35 101.824C142.35 104.321 141 106.497 138.946 107.725L140.638 110.162L138.463 110.867L136.871 108.571C136.247 108.732 135.582 108.833 134.897 108.833C130.748 108.833 127.505 105.731 127.505 101.823C127.505 97.9765 130.748 94.8748 134.897 94.8748ZM136.106 103.616L137.738 105.973C139.087 105.087 139.973 103.536 139.973 101.824C139.973 99.1047 137.738 96.8891 134.897 96.8891C132.078 96.8891 129.882 99.1047 129.882 101.824C129.882 104.563 132.077 106.819 134.897 106.819C135.139 106.819 135.381 106.799 135.622 106.779L133.931 104.322L136.106 103.616Z" fill="white"></path>
                        <path d="M157.113 95.2776V103.757C157.113 107 154.615 108.833 151.272 108.833C147.949 108.833 145.451 107 145.451 103.757V95.2776H147.707V103.757C147.707 105.731 149.278 106.819 151.272 106.819C153.286 106.819 154.857 105.731 154.857 103.757V95.2776H157.113Z" fill="white"></path>
                        <path d="M168.714 102.569H163.659V106.416H172.561V108.43H161.403V95.2776H172.078V97.2918H163.659V100.555H168.714V102.569Z" fill="white"></path>
                        <path d="M188.453 98.6213C187.909 98.2185 186.942 97.6948 185.855 97.6948C184.908 97.6948 184.344 98.279 184.344 98.9436C184.344 99.9507 185.955 101.34 186.58 101.965L188.976 104.362C189.702 103.637 190.447 102.67 191.172 101.481L192.985 102.408C192.078 103.757 191.192 104.845 190.326 105.711L193.085 108.43H190.124L188.735 107.081C187.022 108.329 185.472 108.732 184.243 108.732C182.028 108.732 179.691 107.524 179.691 104.865C179.691 102.75 181.041 101.602 182.753 100.938C182.31 100.293 182.088 99.709 182.088 99.0041C182.088 96.9496 183.88 95.6806 185.895 95.6806C187.486 95.6806 188.735 96.3452 189.581 96.849L188.453 98.6213ZM184.001 102.388C183.075 102.75 181.947 103.334 181.947 104.744C181.947 106.134 183.256 106.718 184.444 106.718C185.21 106.718 186.237 106.436 187.365 105.711L184.807 103.173L184.001 102.388Z" fill="white"></path>
                        <path d="M209.802 98.3594C209.077 97.6948 207.446 96.8286 205.029 96.8286C203.458 96.8286 202.068 97.3321 202.068 98.7218C202.068 100.152 204.021 100.212 206.015 100.353C208.372 100.514 212.078 100.756 212.078 104.422C212.078 107.605 209.419 108.833 206.277 108.833C202.813 108.833 200.557 107.403 199.087 106.074L200.456 104.503C201.524 105.469 203.377 106.879 206.318 106.879C208.272 106.879 209.823 106.215 209.823 104.724C209.823 103.073 208.312 102.73 206.016 102.549C203.115 102.348 199.812 102.106 199.812 98.9235C199.812 95.8016 202.693 94.8748 205.109 94.8748C207.889 94.8748 210.125 95.9626 211.172 96.7882L209.802 98.3594Z" fill="white"></path>
                        <path d="M215.32 108.43V95.2776H222.571C224.425 95.2776 225.573 95.8013 226.378 96.6675C227.083 97.433 227.426 98.3392 227.426 99.306C227.426 100.434 226.962 101.421 226.217 102.146C225.432 102.891 224.324 103.375 222.571 103.375H217.576V108.43H215.32ZM217.576 97.2918V101.361H222.571C223.136 101.361 223.921 101.32 224.566 100.716C224.948 100.354 225.17 99.8499 225.17 99.3262C225.17 98.8024 224.968 98.3594 224.626 97.997C224.022 97.3526 223.216 97.2921 222.571 97.2921H217.576V97.2918Z" fill="white"></path>
                        <path d="M233.87 95.2776H235.925L242.028 108.43H239.551L237.959 104.885H231.695L230.124 108.43H227.768L233.87 95.2776ZM232.501 103.073H237.154L234.898 97.9768H234.777L232.501 103.073Z" fill="white"></path>
                        <path d="M27.0193 65.0116L12.1364 15.4709L12.0444 15.1659H0L19.6632 76.0649H26.0343L43.319 15.1659H40.7937L27.0193 65.0116Z" fill="white"></path>
                        <path d="M44.8904 76.0649H78.3226V74.1619H55.9629V44.9548H75.3495V43.2191H55.9629V17.0689H78.3226V15.1659H44.8904V76.0649Z" fill="white"></path>
                        <path d="M114.407 62.6627L91.1088 15.1659H80.0303V76.0649H82.1838V21.9507L109.511 75.8302L109.63 76.0649H116.56V15.1659H114.407V62.6627Z" fill="white"></path>
                        <path d="M141.019 15.1659H119.99V76.0646H141.019C149.246 76.0646 156.047 72.8173 160.169 66.9212C164.11 61.2863 166.108 54.0336 166.108 45.3641C166.108 37.2329 163.938 29.9502 159.831 24.304C155.651 18.4967 148.794 15.1659 141.019 15.1659ZM152.943 56.6689C152.943 61.9871 151.725 66.1895 149.219 69.5146C146.728 72.783 143.539 74.3715 139.469 74.3715H131.062V16.9009H139.469C144.075 16.9009 147.493 18.4727 149.628 21.576C151.827 24.7127 152.943 29.0818 152.943 34.561V56.6689Z" fill="white"></path>
                        <path d="M193.328 14.161C186.911 14.161 180.923 16.5436 176.902 20.6959C175.001 22.6379 173.314 25.0249 171.886 27.7929C169.216 33.0097 167.862 39.0905 167.862 45.8667C167.862 53.9734 170.15 61.6597 174.305 67.5108C178.619 73.5859 185.553 77.0699 193.328 77.0699C199.746 77.0699 205.78 74.6416 209.88 70.4096C211.835 68.4136 213.489 66.0789 214.936 63.2738C217.664 58.0614 219.047 52.0358 219.047 45.3644C219.047 35.5892 215.612 26.5958 209.626 20.6927C205.414 16.4809 199.626 14.161 193.328 14.161ZM205.337 57.7999C205.337 69.6769 201.521 75.2088 193.328 75.2088C185.305 75.2088 181.404 69.5143 181.404 57.7999V33.3472C181.404 21.6891 185.305 16.0221 193.328 16.0221C201.521 16.0221 205.337 21.5536 205.337 33.431V57.7999Z" fill="white"></path>
                        <path d="M249.047 63.1644L233.473 15.1659H221.595V76.0649H223.749V21.1831L241.854 76.0649H247.724L262.922 21.6069V76.0649H274.077V15.1659H262.606L249.047 63.1644Z" fill="white"></path>
                        <path d="M310.943 17.0689V15.1659H277.511V76.0649H310.943V74.1619H288.582V44.9548H307.969V43.2191H288.582V17.0689H310.943Z" fill="white"></path>
                        <path d="M192.226 3.56365L199.237 12.178H203.721L193.794 0H193.239L183.179 12.178H185.097L192.226 3.56365Z" fill="white"></path>
                    </g>
                    <defs>
                        <clipPath id="clip-sub-preloader">
                            <rect width="310.943" height="120" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
                </div>
                <div className={s.preloader__text}>
                    100%
                </div>
            </div>


            <div className={s.preloader__images__display}>
                <div className={s.preloader__images__display__wrap}>
                    {/* image 1 */}
                    <div className={cn(s.preloader__image, s.preloader__image__left)} ref={first}>
                        <figure className={s.preloader__image__container}>
                            <img className={s.preloader__image__media} src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbmNhcmUlMjBtb2RlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
                        </figure>
                    </div>

                    {/* image 2 */}
                    <div className={cn(s.preloader__image, s.preloader__image__right)} ref={second}>
                        <figure className={s.preloader__image__container}>
                            <img className={s.preloader__image__media} src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraW5jYXJlJTIwbW9kZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                        </figure>
                    </div>

                    {/* image 3 */}
                    <div className={cn(s.preloader__image, s.preloader__image__left)} ref={third}>
                        <figure className={s.preloader__image__container}>
                            <img className={s.preloader__image__media} src="https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHNraW5jYXJlJTIwbW9kZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                        </figure>
                    </div>

                    {/* image 4 */}
                    <div className={cn(s.preloader__image, s.preloader__image__right)} ref={fourth}>
                        <figure className={s.preloader__image__container}>
                            <img className={s.preloader__image__media} src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxza2luY2FyZSUyMG1vZGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                        </figure>
                    </div>

                    {/* image 5 */}
                    <div className={cn(s.preloader__image, s.preloader__image__left)} ref={fifth}>
                        <figure className={s.preloader__image__container}>
                            <img className={s.preloader__image__media} src="https://vendomeclinique.com/assets/components/phpthumbof/cache/29bd6ad7a2a1d35062947f92795dc219.28f22bb2cd462d5a4f21ae5e4efd271a.jpg" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

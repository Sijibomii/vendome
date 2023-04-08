import Layout from "@/layout"
import s from "./home.module.scss"
import Image from 'next/image'
import d from 'img/vendome.jpg'

export default function Home() {
  return (
    <Layout>
      {/* hero- section-1 */}
      <div className={s.hero}>
        <div className={s.hero__intro__bg}>
          <div className={s.hero__parallax}>
            <div className={s.hero__parallax__overlay}>
              <canvas className="foreground" width="2446" height="1764"></canvas>
            </div>
          </div>
        </div>

        <div className={s.hero__intro__container}>
          {/* marquee */}
          
          <div className={s.hero__title}>
            <h2>
              <span>L'Art </span>
              <br />
              <span>Francais </span> <span>of </span>
              <br />
              <span>beauty</span> 
              <br />
              <span>and</span> 
              <br />
              <span>wellness</span>
            </h2>
          </div>

          <div className={s.hero__promo__text}>
            <p>
              <span>VENDÔME CLINIQUE & SPA IS THE DESIRE TO SURPRISE, AMAZE</span>
              <br />
              <span>AND SURPASS IN A WORLD INSPIRED BY IMAGINATION,</span>
              <br />
              <span>GLAMOUR AND PERFECTION. AN INNOVATIVE VISION INSPIRED</span>
              <br />
              <span>BY LUXURY IN ITS ENTIRETY</span>
            </p>
          </div>

        </div>
      </div>
    </Layout>
  )
}

import Layout from "@/layout"
import s from "./home.module.scss"
import Marquee from "@/components/marquee"

export default function Home() {
  return (
    <Layout>
      {/* horizontal scroll section */}
      <div className={s.horizontal__scroll}>
        {/* hero- section-1 */}
        <div className={s.hero}>
            <div className={s.hero__intro__bg}>
              <div className={s.hero__parallax}>
                <div className={s.hero__parallax__overlay}>
                  <canvas className="foreground"></canvas>
                </div>
              </div>
            </div>

            <div className={s.hero__intro__container}>
              {/* marquee */}
              <div className={s.home__hero__marquee}>
                <div className={s.home__hero__marquee__wrap}>
                  <Marquee className={s.marquee} speed={3}>
                    <span className={s.marquee__scroll__down__span}>scroll down</span>
                    <span className={s.marquee__scroll__down__span}>scroll down</span>
                    <span className={s.marquee__scroll__down__span}>scroll down</span>
                    <span className={s.marquee__scroll__down__span}>scroll down</span>
                    <span className={s.marquee__scroll__down__span}>scroll down</span>
                  </Marquee>
                </div>
              </div>

              <div className={s.home__hero__services}>
                <div className={s.home__hero__services__inner}>
                  <p>
                    <span>Our</span>
                    <br />
                    <span>services</span>
                  </p>
                </div>
              </div>
              <div className={s.hero__title__con}>
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

          {/* section 2 */}
          <div className={s.section__image__display}>
            <div className={s.section__image__display__inner}>
              {/* larger img */}
              <figure className={s.section__image__lg__image}>
                <img src="https://vendomeclinique.com//assets/components/phpthumbof/cache/cc90bacc7f6b548f3479a4a2b6b2f0ef.28f22bb2cd462d5a4f21ae5e4efd271a.jpg?r=0.1686635248408015" />
              </figure>
              {/* smaller img */}
              <figure className={s.section__image__sm__image}>
                <img src="https://vendomeclinique.com//assets/components/phpthumbof/cache/cc90bacc7f6b548f3479a4a2b6b2f0ef.28f22bb2cd462d5a4f21ae5e4efd271a.jpg?r=0.1686635248408015" />
              </figure>
            </div>
            <div className={s.section__image__display__text}>
              <div className={s.section__image__display__text__inner}>
                <div className={s.text__top}>
                  <p className={s.text__top__paragraph}>
                    <span>WELCOME TO THE</span>
                    <br />
                    <span>VENDOME CLINIQUE &</span>
                    <br />
                    <span>SPA, A DISTINCTIVELY</span>
                    <br />
                    <span>UNIQUE APPROACH TO</span>
                    <br />
                    <span>WELLNESS AND BEAUTY</span>
                    <br />
                    <span>SITUATED IN SOFITEL</span>
                    <br />
                    <span>LOS ANGELES AT</span>
                    <br />
                    <span>BEVERLY HILLS</span>
                  </p>
                </div>
                <div className={s.text__bottom}>
                  <p className={s.text__bottom__paragraph}>
                    <span>We invite you to experience our exclusive treatment offerings thoughtfully designed to prepare, nurture </span>
                    <br />
                    <span>and delight the skin. Time-honored traditions, modern innovation and constant attention to detail result </span>
                    <br />
                    <span>in immersive, tailored experiences that restore mind, body, and essence. Vendome Clinique & Spa </span>
                    <br />
                    <span>philosophy is deeply rooted in French savoir-faire, while embracing and honoring the individual needs of </span>
                    <br />
                    <span>our guests. Enjoy the masterful blends of French art de vivre refinement and modernity married with Los </span>
                    <br />
                    <span>Angeles’ sophisticated luxury and health-conscious lifestyle.</span>  
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* vertical part */}
      <div className="sectionPin">
        <div className="pin-wrap">
          
        </div>
      </div>
    </Layout>
  )
}

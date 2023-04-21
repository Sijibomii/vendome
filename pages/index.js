import Layout from "@/layout"
import s from "./home.module.scss"
import Marquee from "@/components/marquee"
import Gallery from '@/components/gallery'
import cn from "clsx"

export default function Home() {
  return (
    <Layout>
      {/* horizontal scroll section */}
      <div className={s.horizontal__scroll} data-horizontal-scroll-container>
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

          {/* section 3 */}
          <div className={s.video__display}>
            <div className={s.video__display__inner}>
              <div className={s.video__display__inner__top}>
                <p className={s.video__display__inner__top__paragraph}>
                  <span>Here</span>
                  <br />
                  <span>you are</span>
                  <br />
                  <span>invited to savor</span>
                  <br />
                  <span>the rituals</span>
                  <br />
                  <span>of french beauty</span>
                  <br />
                  <span>and wellness</span>
                </p>
              </div>

              <div className={s.video__display__inner__bottom}>
                <figure className={s.video__display__inner__bottom__media}>
                  <img src="/vendome_1.png"/>
                </figure>
            </div>
            <p className={s.video__display__inner__paragraph}>
                  <span>watch</span>
                  <br />
                  <span>our</span>
                  <br />
                  <span>showreel</span>
                  <br />
                  <span>2021</span>
                </p>
              </div>
          </div>

          <div className={s.gallery}>
            <div className={s.gallery__inner}>
              <p className={s.gallery__text}>
                <span>gal</span>
                <br />
                <span>lery</span>
              </p>

              <p className={s.model__text}>
                <span>Mod</span>
                <br />
                <span>els</span>
              </p>

              <div className={s.gallery__media__container}>
                <figure className={s.gallery__media}>
                  <img src="/vendome_2.jpg"/>
                </figure>
            </div>
            </div>
          </div>

          {/* IMAGE GALLERY */}
          <div className={s.gallery__outer}>
            <Gallery speed={2} images={['https://vendomeclinique.com//assets/components/phpthumbof/cache/c305a6d3894062fa212f76b3570611e4.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.06825848080813546', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/f0c9c7bb9d321febb1a9ad7fafdaf936.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.7006175267808117', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/c305a6d3894062fa212f76b3570611e4.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.17599756232213037']}/>
            <Gallery speed={-2} images={['https://vendomeclinique.com//assets/components/phpthumbof/cache/b7951f3c93ee97f897c359928746a759.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.0855450088630414', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/92abc162d645646c0a2979641eb7ac0c.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.3624436129492543', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/b7951f3c93ee97f897c359928746a759.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.7228307650149668']}/>
            <Gallery speed={2}images={['https://vendomeclinique.com//assets/components/phpthumbof/cache/cbe66c973c140705914989a817f5e5a6.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.027197466792913794', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/aa18577ab39ae57d8c6097bb6990c6d1.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.6497169852637221', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/cbe66c973c140705914989a817f5e5a6.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.918012058200852']}/>
          </div> 

          <div className={s.gallery}>
            <div className={s.gallery__inner}>
              <p className={s.gallery__text}>
                <span>gal</span>
                <br />
                <span>lery</span>
              </p>

              <p className={s.model__text}>
                <span>clini</span>
                <br />
                <span>que</span>
              </p>

              <div className={s.gallery__media__container}>
                <figure className={s.gallery__media}>
                  <img src="/vendome_3.jpg"/>
                </figure>
            </div>
            </div>
          </div>

          {/* IMAGE GALLERY */}
          <div className={cn(s.gallery__outer ,'gallery__outer')}>
            <Gallery speed={2} images={['https://vendomeclinique.com//assets/components/phpthumbof/cache/bda27186c0eef7f1909bf0a43217906c.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.06531114454943143', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/0dd94c1b1d989f937ff450bf20256cd5.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.17640993096781865', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/bda27186c0eef7f1909bf0a43217906c.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.8673889504791934']}/>
            <Gallery speed={-2} images={['https://vendomeclinique.com//assets/components/phpthumbof/cache/53e5af2172c2bf209999d22d13395d55.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.9389781967121982', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/cbe43957647b13e2d46fa4788f9131bc.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.016785998890232134', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/53e5af2172c2bf209999d22d13395d55.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.7491963263161723']}/>
            <Gallery speed={2}images={['https://vendomeclinique.com//assets/components/phpthumbof/cache/95fb5c5fa0f8005c1449d1c96cab6a61.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.7403252152779141', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/95fb5c5fa0f8005c1449d1c96cab6a61.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.7403252152779141', 'https://vendomeclinique.com//assets/components/phpthumbof/cache/95fb5c5fa0f8005c1449d1c96cab6a61.f15d86ecaff40a0cc632f3a01a032b1b.jpg?r=0.5701928290774061']}/>
          </div> 

      </div>
      {/* vertical part */}
      <div className="sectionPin" data-vertical-scroll-container>
        <div className="pin-wrap">
            <div className={s.fullpage}>
              <div className={s.fullpage__hero}>
                <div className={s.fullpage__hero__text}>
                  <h2 className={s.fullpage__hero__text__heading}>
                    <span>vendome</span>
                    <br />
                    <span>Clinique & spa</span>
                    <br />
                    <span>we delight</span>
                    <br />
                    <span>in the rituals</span>
                    <br />
                    <span>of french beauty</span>
                    <br />
                    <span>and wellness</span>
                  </h2>
                </div>
                <div className={s.fullpage__hero__list}>
                  <ul>
                    <li><h3>all</h3></li>
                    <li><h3>/ spa</h3></li>
                    <li><h3>/ packages</h3></li>
                    <li><h3>/ beauty services</h3></li>
                    <li><h3>/ medical</h3></li>
                  </ul>
                </div>
              </div>

              {/* marquee */}
              <Marquee className={s.fullpage__marquee} speed={205}>
                <span className={s.fullpage__marquee__span}>spa</span>
                <span className={s.fullpage__marquee__dash}></span>
                <span className={s.fullpage__marquee__span}>spa</span>
                <span className={s.fullpage__marquee__dash}></span>
                <span className={s.fullpage__marquee__span}>spa</span>
                <span className={s.fullpage__marquee__dash}></span>
                <span className={s.fullpage__marquee__span}>spa</span>
                <span className={s.fullpage__marquee__dash}></span>
                <span className={s.fullpage__marquee__span}>spa</span>
                <span className={s.fullpage__marquee__dash}></span>
              </Marquee>

              
            </div>
        </div>
      </div>
    </Layout>
  )
}

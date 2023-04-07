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
            <div className={s.hero__parallax__overlay} id={'canvas-parent'}>
              <canvas className="foreground" width="2446" height="1764"></canvas>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

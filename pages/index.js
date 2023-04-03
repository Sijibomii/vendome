import Layout from "@/layout"
import s from "./home.module.scss"



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
      </div>
    </Layout>
  )
}

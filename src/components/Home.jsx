import React from 'react'
import vg from "../assets/pic2.jpg"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
        <h2>hemo</h2>
        <p>Heloo bhoi u r here..</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt='Graphics'/>
        <div>
          <p>
            fghftgvhjvhhhh,,,,,,,,,,,,,,,,,,,,xctrhsrytrhdcjt hcghdgrwfzbefrshrxwd cthgfezdsrgefdjcvyhrxdg
            fyftchgrfyhcthrgjvuyhrcxthcrgfgvuhrxgsdxsrgg
            yrfvhctdrxeqasxcyvyjujuhcvjxhtaedsfnghbtjuhegfdxcvhbjnjuj
            vtyhgrfchtrdgfvhbvjhgsfgvgdhngmhhfdxsecgvntjfydexeshjbmd
            swchrvtjkuifetxragesrdgfg
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>
            we are
          </h1>
          <div>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>

      <div className="home4">
        <div>
          <h1>
            Brands
          </h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div style={{animationDelay:"0.8s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>

            <div style={{animationDelay:"0.3s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
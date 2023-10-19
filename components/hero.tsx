import { subtle } from "crypto"
import { heroItems } from "../data"
import Image from "next/image"
function Hero() {
     const { title, subTitle, imgUrl } = heroItems
     return (
          <>
               <section className="container hero">
                    <div className="row">
                         <div className="col-6">
                              <h1>{title}</h1>
                              <p>{subTitle}</p>
                         </div>
                         <div className="col-6">
                              <Image src={imgUrl} alt="" width={500} height={500} />
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Hero
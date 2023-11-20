import { aboutHeaderData } from "../data"

function AboutHero() {
     const { title, description } = aboutHeaderData
     return (
          <section className='container'>
               <div className="row">
                    <h1>{title}</h1>
               </div>
               <div className="row">
                    <p>
                         {description}
                    </p>
               </div>
          </section>
     )
}

export default AboutHero
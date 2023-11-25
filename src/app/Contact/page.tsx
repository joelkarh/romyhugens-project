import { contacData } from "../../../data";
import Image from "next/image";


function Contact() {

     const { title, description, img, imgAuthor, imgCaption } = contacData
     return (
          <main className="contact">
               <div className="container  ">
                    <div className="row">
                         <div className="col">
                              <div className="" style={{
                                   position: "relative",
                                   backgroundImage: `url(/backdrop.jpg)`,
                                   backgroundSize: "cover",
                                   aspectRatio: "2/3",
                                   maxWidth: "545px",
                                   width: "100%",
                                   height: "100%",
                                   maxHeight: "617px",
                                   overflow: "hidden"
                              }}>
                                   <div style={{
                                        zIndex: "1",
                                        position: "absolute",
                                        mixBlendMode: "multiply",
                                        height: "100%",
                                        width: "100%",
                                   }}>
                                        <Image src={img} alt="" objectFit="cover" fill />
                                   </div>
                                   <div className="imgCaption">
                                        <p>{imgCaption}</p>
                                        <span >{imgAuthor}</span>
                                   </div>
                              </div>
                         </div>
                         <div className="col contactForm">
                              <h1>{title}</h1>
                              <p>{description}</p>
                         </div>
                    </div>
               </div>

          </main>
     )
}

export default Contact

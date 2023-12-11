'use client'

import { contacData } from "../../../data";

import CalendlyEmbed from "../../../components/calendly";




function Booking() {
     const { title, description, img, imgAuthor, imgCaption, communication } = contacData;
     const { mailtitle, calltitle, mailcontent, callcontent, mailIcon, callIcon } = communication

     return (
          <>
               <main className="contact">
                    <div className="container ">
                         <div className="row">
                              <div className="col  mt-5">
                                   <h1 className="text-center"> Book a call</h1>
                                   <CalendlyEmbed />
                              </div>
                         </div>
                    </div>
               </main>
          </>
     )
}

export default Booking

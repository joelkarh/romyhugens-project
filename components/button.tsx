import Link from "next/link"

function Button({ title, colorBtn }: buttonTxt) {
     return (
          <>
               <div>
                    <Link href="#" type="button" data-btnColor={colorBtn} className={`buttonPrimary`}>
                         {title}
                         <span className="arrow"></span>
                    </Link>
               </div>
          </>
     )
}

export default Button
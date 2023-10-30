import btnPrimaryStyle from "./button.module.scss"
function Button({ title }: buttonTxt) {
     return (
          <>
               <div>
                    <a type="button" className={`${btnPrimaryStyle.buttonPrimary}`}>
                         {title}
                         <span className={btnPrimaryStyle.arrow}></span>
                    </a>
               </div>
          </>
     )
}

export default Button
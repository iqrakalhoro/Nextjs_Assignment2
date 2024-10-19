import cssStyle from "./contact.module.css"

console.log(cssStyle, "CSS-Style");

function Contact(){
 return (
    <div>
 <h1 className={cssStyle.beige} style={{textAlign: "center"}} >This is Contact Page</h1>
 </div>)
}

export default Contact
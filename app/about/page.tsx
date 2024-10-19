import cssStyle from "./about.module.css"
import Header from "../components/Header/Header";

console.log(cssStyle, "CSS-Style");

function AboutPage(){
 return (
    <div>
 <h1 className={cssStyle.beige} style={{textAlign: "center"}} >This is AboutPage</h1>
 </div>)
}

export default AboutPage
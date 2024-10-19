import cssStyle from "./services.module.css"
import styles from "./services.module.css"
import Link from "next/link";

console.log(cssStyle, "CSS-Style");

function services(){
 return (
    <div>

 <h1 className={cssStyle.beige} style={{textAlign: "center"}} >These are my services</h1>
 <ul className={styles.ul}>
 <li><Link href="/services/web_development" className={styles.web_development}>Click here for services</Link></li>
 </ul>
 </div>)
}

export default services
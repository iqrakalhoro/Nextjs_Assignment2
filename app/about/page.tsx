import cssStyle from "./about.module.css";
import styles from './about.module.css';


console.log(cssStyle, "CSS-Style");

function AboutPage(){
 return (
   
    <div>
<div className={styles.overlay}>
 <h1 className={cssStyle.beige} style={{textAlign: "center"}} >Welcome to Iqras Salon
</h1>
<p className={cssStyle.paragraph}>At Iqras Salon, we believe that beauty is more than just skin deep—its about feeling confident and radiant inside and out. Our dedicated team of professionals is here to provide a relaxing and rejuvenating experience tailored to your individual needs. Whether you're looking for a fresh haircut, a luxurious facial, or a complete makeover, we offer a wide range of beauty services to help you look and feel your best.

With years of experience in the industry, Iqras Salon blends expert techniques with the latest trends and products to deliver exceptional results. We are committed to creating a welcoming environment where every client is treated with the utmost care and attention.

Thank you for choosing Iqras Salon, where beauty meets relaxation.</p>
</div>
 
 </div>
 
)
}

export default AboutPage
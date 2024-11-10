import cssStyle from "./services.module.css";
import styles from './services.module.css';

console.log(cssStyle, "CSS-Style");

function services(){
 return (
    
    <div>
<div className={styles.overlay}>
 <h1 className={cssStyle.beige} style={{textAlign: "center"}} >These are my services</h1>
 <div className={cssStyle.p}></div>
 <p>Our Services

At Iqras Salon, we provide a comprehensive range of beauty and grooming services designed to enhance your natural beauty. Whether you're here for a quick refresh or a complete makeover, our skilled professionals are dedicated to ensuring you leave feeling fabulous. Explore our services below:

<h2 className={cssStyle.h2}>Hair Care</h2>
<h3 className={cssStyle.h3}>Haircuts & Styling:</h3> From trendy cuts to classic styles, we cater to all hair types and lengths. Our expert stylists ensure a look that suits your face shape, lifestyle, and preferences.
<h3 className={cssStyle.h3}>Hair Coloring:</h3> Whether its a full color, highlights, balayage, or a bold new hue, our colorists create the perfect shade for you.
<h3 className={cssStyle.h3}>Hair Treatments:</h3> Revitalize your hair with nourishing treatments like deep conditioning, keratin smoothing, and scalp therapy.
<h3 className={cssStyle.h3}>Bridal & Special Occasion Styling:</h3> Perfect updos and intricate styles for weddings, parties, or any special event.
<h2 className={cssStyle.h2}>Skin Care</h2>
<h3 className={cssStyle.h3}>Facials:</h3> Tailored facials to cleanse, exfoliate, and nourish your skin, leaving you with a radiant glow.
<h3 className={cssStyle.h3}>Acne Treatments:</h3> Specialized treatments designed to target and reduce acne breakouts.
<h3 className={cssStyle.h3}>Anti-aging Treatments:</h3> Rejuvenating facials that combat fine lines and wrinkles, promoting youthful, glowing skin.
<h3 className={cssStyle.h3}>Waxing:</h3> Full body waxing for smooth and flawless skin, including eyebrow shaping, upper lip, arms, legs, and more.
<h2 className={cssStyle.h2}>Nail Care</h2>
<h3 className={cssStyle.h3}>Manicures & Pedicures:</h3> From classic polish to gel and acrylic nails, we offer a range of nail care services to keep your hands and feet looking elegant.
<h3 className={cssStyle.h3}>Nail Art:</h3> Custom-designed nail art to suit your personality, special occasions, or the latest trends.
<h2 className={cssStyle.h2}>Makeup Services</h2>
<h3 className={cssStyle.h3}>Makeup Application:</h3> Professional makeup for everyday looks, photoshoots, or special events.
<h3 className={cssStyle.h3}>Bridal Makeup:</h3> Flawless, long-lasting makeup for brides to ensure you look your best on your special day.
<h3 className={cssStyle.h3}>Makeup Lessons:</h3> Learn the tips and tricks from our makeup artists to enhance your beauty routine.
<h2 className={cssStyle.h2}>Massage & Relaxation</h2>
<h3 className={cssStyle.h3}>Swedish Massage:</h3> A soothing massage designed to reduce stress and promote relaxation.
<h3 className={cssStyle.h3}>Aromatherapy:</h3> Relax with a calming aromatherapy massage using essential oils to heal and uplift.
<h3 className={cssStyle.h3}>Deep Tissue Massage:</h3> Targeted massage therapy to relieve muscle tension and improve circulation.
<h2 className={cssStyle.h2}>Mens Grooming</h2>
<h3 className={cssStyle.h3}>Haircuts:</h3> Professional cuts tailored to mens styles.
<h3 className={cssStyle.h3}>Beard Grooming:</h3> Trim, shape, and style your beard with precision.
<h3 className={cssStyle.h3}>Shaving:</h3> Classic straight razor shaves for a smooth, refreshed look.</p>
</div>
 </div>)
}

export default services
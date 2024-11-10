import React from "react";
import cssStyle from './contact.module.css';

function ContactPage() {
  return (
    <section className={cssStyle.hero}>
      <div className={cssStyle.overlay}></div>
      <div className={cssStyle.content}>
        <h1 className={cssStyle.title}>Get in Touch</h1>
        <p className={cssStyle.subtitle}>
          We would love to hear from you! Reach out to us for any questions or to schedule an appointment.
        </p>
        <button className={cssStyle.ctaButton}>Contact Us</button>
      </div>
    </section>
  );
}

export default ContactPage;

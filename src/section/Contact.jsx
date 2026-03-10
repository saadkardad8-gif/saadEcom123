import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={style.Contact}>
      <h2>Contactez nous</h2>
      <div className={style.container}>
        <div className={style.map}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13588.23453009193!2d-8.023238210479835!3d31.632244986602167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d931f3209%3A0x96ce34d39325c762!2sGu%C3%A9liz%2C%20Marrakech%2040000!5e0!3m2!1sfr!2sma!4v1771361037662!5m2!1sfr!2sma" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form className={style.form}>
            <input type="text" placeholder="Nom" required  />
            <input type="text" placeholder="Email" required  />
            <textarea type="text" placeholder="Message" required rows="5" ></textarea>
            <button type="submit">Envoyez</button>
        </form>
      </div>
    </section>
  );
}

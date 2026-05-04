import "./contact.css";
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact__hero">
        <h1>Контакты</h1>
        <p>Свяжись с нами любым удобным способом</p>
      </section>

      <section className="contact__info">
        <div className="contact__card">
          <h3>Email</h3>
          <p>support@fashionstore.com</p>
        </div>

        <div className="contact__card">
          <h3>Телефон</h3>
          <p>+999-999-99-99</p>
        </div>

        <div className="contact__card">
          <h3>Адрес</h3>
          <p>Riga, Latvia</p>
        </div>
      </section>

      <section className="contact__form">
        <h2>Напиши нам</h2>

        <form>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Сообщение"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

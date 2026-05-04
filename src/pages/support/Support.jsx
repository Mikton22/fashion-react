import "./support.css";

import React from "react";

const Support = () => {
  return (
    <div className="support">
      <section className="support__hero">
        <h1>Поддержка</h1>
        <p>Ответы на частые вопросы и помощь клиентам</p>
      </section>

      <section className="support__faq">
        <div className="support__item">
          <h3>Как оформить заказ?</h3>
          <p>
            Добавьте товары в корзину, перейдите к оформлению и заполните
            данные.
          </p>
        </div>

        <div className="support__item">
          <h3>Доставка</h3>
          <p>Доставка занимает от 2 до 5 дней в зависимости от региона.</p>
        </div>

        <div className="support__item">
          <h3>Возврат</h3>
          <p>
            Вы можете вернуть товар в течение 14 дней, если он не использовался.
          </p>
        </div>

        <div className="support__item">
          <h3>Оплата</h3>
          <p>Мы принимаем карты, Apple Pay и Google Pay.</p>
        </div>
      </section>

      <section className="support__cta">
        <h2>Не нашли ответ?</h2>
        <a href="/contact" className="support__button">
          Связаться с поддержкой
        </a>
      </section>
    </div>
  );
};

export default Support;

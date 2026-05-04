import "./about.css";
import React from "react";

const About = () => {
  return (
    <div className="about">
      {/* HERO */}
      <section className="about__hero">
        <h1>О нас</h1>
        <p>
          Мы — fashion бренд, создающий стильную и доступную одежду для
          повседневной жизни. Наш фокус — качество, минимализм и актуальные
          тренды.
        </p>
      </section>

      {/* STORY */}
      <section className="about__story">
        <h2>Наша история</h2>
        <p>
          Бренд был основан с идеей сделать моду доступной каждому. Мы начинали
          с небольшого онлайн-магазина и выросли в полноценный fashion-бренд с
          собственной философией.
        </p>
      </section>

      {/* VALUES */}
      <section className="about__values">
        <h2>Наши ценности</h2>

        <div className="about__grid">
          <div className="about__card">
            <h3>Качество</h3>
            <p>Только проверенные материалы и контроль на каждом этапе.</p>
          </div>

          <div className="about__card">
            <h3>Стиль</h3>
            <p>Современный дизайн, который легко сочетать.</p>
          </div>

          <div className="about__card">
            <h3>Доступность</h3>
            <p>Мы делаем моду доступной без потери качества.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <h2>Присоединяйся к нам</h2>
        <p>Следи за новыми коллекциями и обновлениями.</p>

        <a href="/shop" className="about__button">
          Перейти в магазин
        </a>
      </section>
    </div>
  );
};

export default About;

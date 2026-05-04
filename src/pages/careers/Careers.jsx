import React from "react";
import './careers.css'

const Career = () => {
  return (
    <div className="career">
      {/* Hero */}
      <section className="career__hero">
        <h1>Карьера в Fashion React</h1>
        <p>
          Мы создаём стиль, который носят каждый день. Присоединяйся к нашей
          команде и развивайся вместе с нами.
        </p>
      </section>

      {/* Benefits */}
      <section className="career__benefits">
        <h2>Почему у нас классно работать</h2>

        <ul>
          <li>Гибкий график и комфортные условия</li>
          <li>Скидки на всю одежду магазина</li>
          <li>Обучение и рост внутри компании</li>
          <li>Дружная команда и поддержка</li>
        </ul>
      </section>

      {/* Vacancies */}
      <section className="career__vacancies">
        <h2>Открытые вакансии</h2>

        <div className="career__vacancy">
          <h3>Продавец-консультант</h3>
          <p>
            Помогай клиентам подбирать стильные образы и развивай навыки продаж.
          </p>
          <span>Опыт: не требуется</span>
        </div>

        <div className="career__vacancy">
          <h3>Контент-менеджер</h3>
          <p>Создание карточек товаров, работа с фото и описаниями одежды.</p>
          <span>Опыт: от 1 года</span>
        </div>

        <div className="career__vacancy">
          <h3>SMM-специалист</h3>
          <p>Ведение соцсетей бренда и создание модного контента.</p>
          <span>Опыт: от 1 года</span>
        </div>
      </section>

      {/* CTA */}
      <section className="career__cta">
        <h2>Хочешь с нами?</h2>
        <p>Отправь резюме и мы свяжемся с тобой в ближайшее время.</p>

        <a href="mailto:hr@fashionstore.com" className="career__button">
          Отправить резюме
        </a>
      </section>
    </div>
  );
};

export default Career;

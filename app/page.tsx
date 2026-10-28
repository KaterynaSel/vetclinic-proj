import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BOOK_URL } from "@/lib/constants";

const services = [
  {
    icon: "bi-heart-pulse",
    title: "Терапія та діагностика",
    text: "Огляд, аналізи та лікування собак, котів і дрібних тварин.",
  },
  {
    icon: "bi-shield-check",
    title: "Вакцинація",
    text: "Календар щеплень, чіпування та ветеринарні паспорти.",
  },
  {
    icon: "bi-scissors",
    title: "Хірургія",
    text: "Планові операції та стерилізація в сучасній операційній.",
  },
  {
    icon: "bi-house-heart",
    title: "Стаціонар",
    text: "Догляд після операцій та спостереження під наглядом лікаря.",
  },
];

const partners = ["ЗооКорм UA", "ВетЛаб", "Турбота+", "ЗооМаркет"];

const faqItems = [
  {
    id: "faq1",
    question: "Чи потрібен попередній запис?",
    answer:
      "Так, ми рекомендуємо записатися онлайн або зателефонувати. У разі невідкладного стану приймаємо без запису за можливості.",
    expanded: true,
  },
  {
    id: "faq2",
    question: "Які тварини обслуговуються?",
    answer:
      "Переважно собаки та коти. Також консультуємо щодо дрібних ссавців і птахів — уточнюйте по телефону.",
  },
  {
    id: "faq3",
    question: "Чи можна оплатити карткою?",
    answer: "Так, приймаємо готівку та безготівкову оплату (термінал і переказ).",
  },
  {
    id: "faq4",
    question: "Що взяти на перший візит?",
    answer:
      "Ветеринарний паспорт (якщо є), список кормів і препаратів, а також історію хвороб, якщо ви переходите від іншого лікаря.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section py-5 py-lg-6">
          <div className="container py-lg-4">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-5 fw-bold mb-3">
                  Турбота про ваших улюбленців — наш пріоритет
                </h1>
                <p className="lead text-muted mb-4">
                  Досвідчені ветеринари, сучасне обладнання та уважне ставлення до
                  кожного пацієнта.
                </p>
                <a
                  className="btn btn-warning btn-lg fw-bold px-5"
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Записатися на прийом
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 bg-white border-top border-bottom">
          <div className="container">
            <p className="text-center text-muted small text-uppercase fw-semibold mb-3">
              Наші партнери
            </p>
            <div className="row row-cols-2 row-cols-md-4 g-3">
              {partners.map((name) => (
                <div className="col" key={name}>
                  <div className="card border-0 bg-light partner-logo h-100 d-flex align-items-center justify-content-center">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5" id="services">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Наші послуги</h2>
              <p className="text-muted mb-0">
                Комплексний догляд для здоров&apos;я ваших тварин
              </p>
            </div>
            <div className="row g-4">
              {services.map((service) => (
                <div className="col-md-6 col-lg-3" key={service.title}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center p-4">
                      <i
                        className={`bi ${service.icon} text-primary fs-1 mb-3 d-block`}
                        aria-hidden="true"
                      />
                      <h3 className="h5 card-title fw-bold">{service.title}</h3>
                      <p className="card-text text-muted small mb-0">
                        {service.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light" id="faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold text-center mb-4">
                  Часті запитання
                </h2>
                <div className="accordion" id="faqAccordion">
                  {faqItems.map((item, index) => (
                    <div className="accordion-item" key={item.id}>
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={index === 0}
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h3>
                      <div
                        id={item.id}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import {
  ADDRESS,
  CLINIC_NAME,
  MAP_EMBED_URL,
  PHONE,
  PHONE_DISPLAY,
  WORK_HOURS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold">Контакти</h5>
            <p className="mb-1">
              <a
                className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                href={`tel:${PHONE}`}
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="text-white-50 mb-1">{ADDRESS}</p>
            <p className="text-white-50 mb-0">{WORK_HOURS}</p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Ми в соцмережах</h5>
            <div className="footer-social">
              <a
                href="#"
                className="footer-social__link footer-social__link--facebook"
                aria-label="Сторінка у Facebook"
              >
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="footer-social__link footer-social__link--instagram"
                aria-label="Сторінка в Instagram"
              >
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="footer-social__link footer-social__link--telegram"
                aria-label="Канал у Telegram"
              >
                <i className="bi bi-telegram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Як нас знайти</h5>
            <div className="ratio ratio-16x9 rounded overflow-hidden border border-secondary">
              <iframe
                src={MAP_EMBED_URL}
                title="Карта — м. Київ, вул. Хрещатик"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="footer-map"
              />
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="text-center text-white-50 small mb-0">
          © {CLINIC_NAME}. Усі права захищено.
        </p>
      </div>
    </footer>
  );
}

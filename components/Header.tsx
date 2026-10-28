import Link from "next/link";
import { BOOK_URL, CLINIC_NAME, PHONE, PHONE_DISPLAY } from "@/lib/constants";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" href="/">
          🐾 {CLINIC_NAME}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Відкрити меню"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href={`tel:${PHONE}`}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-warning fw-bold px-4"
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Записатися
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

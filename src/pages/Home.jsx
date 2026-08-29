import { Link } from "react-router-dom";

import heroLimora from "../assets/hero-limora.png";
import logoLimora from "../assets/logo-limora.png";


function BookIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 14c8-3 14-2 20 3v34c-6-5-12-6-20-3V14Z" />
      <path d="M52 14c-8-3-14-2-20 3v34c6-5 12-6 20-3V14Z" />
      <path d="M32 17v34" />
      <path d="M18 22c4-.5 7 .2 10 2" />
      <path d="M46 22c-4-.5-7 .2-10 2" />
    </svg>
  );
}


function LockIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="13" y="27" width="38" height="29" rx="7" />
      <path d="M21 27v-8c0-7 4-12 11-12s11 5 11 12v8" />
      <circle cx="32" cy="40" r="4" />
      <path d="M32 44v6" />
    </svg>
  );
}


function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}


function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}


function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M21 12c0-3-.4-5.1-1-5.8-.8-.9-2.2-1.2-8-1.2s-7.2.3-8 1.2C3.4 6.9 3 9 3 12s.4 5.1 1 5.8c.8.9 2.2 1.2 8 1.2s7.2-.3 8-1.2c.6-.7 1-2.8 1-5.8Z" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  );
}


function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}


export default function Home() {
  return (
    <main className="limora-page">

      <div className="ambient-glow ambient-left" />
      <div className="ambient-glow ambient-right" />
      <div className="page-grain" />

      <div className="limora-shell">

        {/* HERO */}
        <section className="hero">

          <div className="hero-frame">

            <img
              src={heroLimora}
              alt="Guardião do Universo Limora"
              className="hero-image"
            />

            <div className="hero-brand">

              <p>
                Histórias que abrem portas por dentro.
              </p>

              <img
                src={logoLimora}
                alt="LIMORA"
                className="hero-logo"
              />

              <div className="hero-key-divider">
                <span />
                <i>◆</i>
                <span />
              </div>

            </div>

            <div className="hero-shadow-bottom" />

          </div>

        </section>


        {/* ESCOLHA */}
        <section className="path-section">

          <div className="section-heading">

            <h1>
              Escolha seu caminho.
            </h1>

            <div className="ornament">
              <span />
              <i>◆</i>
              <span />
            </div>

          </div>


          <div className="cards">

            {/* E-BOOKS */}
            <Link
              to="/ebooks"
              className="limora-card ebook-card"
            >

              <div className="card-icon ebook-icon">
                <BookIcon />
              </div>

              <div className="card-text">

                <h2>
                  Acesso aos E-books
                </h2>

                <p>
                  Portas, Chaves e Casa
                </p>

              </div>

              <div className="card-chevron">
                <ChevronIcon />
              </div>

            </Link>


            {/* ÁREA DE MEMBROS */}
            <div
              className="limora-card members-card"
              aria-disabled="true"
            >

              <div className="card-icon members-icon">
                <LockIcon />
              </div>

              <div className="card-text">

                <h2>
                  Área de Membros
                </h2>

                <p>
                  Conteúdos, encontros e novas chaves.
                </p>

                <span className="coming-soon">
                  EM BREVE
                </span>

              </div>

              <div className="card-chevron muted">
                <ChevronIcon />
              </div>

            </div>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="limora-footer">

          <div className="footer-brand">
            <span>◆</span>

            <strong>
              LIMORA
            </strong>

            <span>◆</span>
          </div>

          <p>
            Para quem busca sentido, pertencimento e o
            <br />
            caminho de volta para si.
          </p>

          <div className="social-links">

            <a
              href="#"
              aria-label="Instagram"
              className="social-button"
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="social-button"
            >
              <YoutubeIcon />
            </a>

            <a
              href="#"
              aria-label="E-mail"
              className="social-button"
            >
              <MailIcon />
            </a>

          </div>

          <small>
            © 2026 Universo Limora
          </small>

        </footer>

      </div>

    </main>
  );
}

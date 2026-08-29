import { Link } from "react-router-dom";

import heroLimora from "../assets/hero-limora.webp";
import logoLimora from "../assets/logo-limora.webp";

function ArrowDown() {
  return <span aria-hidden="true">↓</span>;
}

function ArrowRight() {
  return <span aria-hidden="true">→</span>;
}

export default function Ebooks() {
  return (
    <main className="sales-ebooks">

      <div className="sales-grain" />

      {/* =====================================================
          TOPO
      ===================================================== */}
      <header className="sales-topbar">

        <Link to="/" className="sales-back">
          ← Voltar ao início
        </Link>

        <img
          src={logoLimora}
          alt="LIMORA"
          className="sales-logo"
        />

        <div className="sales-topbar-space" />

      </header>


      {/* =====================================================
          HERO / HEADLINE
      ===================================================== */}
      <section className="sales-hero">

        <div className="sales-hero-copy">

          <span className="sales-eyebrow">
            COLEÇÃO LIMORA
          </span>

          <div className="sales-mini-ornament">
            <span />
            <i>◆</i>
            <span />
          </div>

          <h1>
            Algumas portas precisam
            ser fechadas para que você
            consiga voltar para casa.
          </h1>

          <p>
            Três livros. Uma única jornada.
            <br />
            <strong>PORTAS, CHAVES e CASA</strong> conduzem você
            por uma travessia sobre limites, pertencimento
            e o caminho de volta para si.
          </p>


          <a href="#trilogia" className="sales-primary-cta">
            <span className="sales-cta-icon">⌑</span>
            Conhecer a coleção
            <ArrowDown />
          </a>

        </div>


        {/* Guardião integrado à headline */}
        <div className="sales-hero-visual">

          <div className="sales-hero-halo" />

          <img
            src={heroLimora}
            alt="Guardião LIMORA"
            className="sales-guardian-scene"
            loading="eager"
            fetchPriority="high"
          />

          <div className="sales-visual-fade" />



        </div>

      </section>


      {/* =====================================================
          TRILOGIA
      ===================================================== */}
      <section id="trilogia" className="sales-trilogy">

        <div className="sales-section-title">

          <span>
            TRILOGIA LIMORA
          </span>

          <h2>
            Portas. Chaves. Casa.
          </h2>

          <div className="sales-title-ornament">
            <span />
            <i>◆</i>
            <span />
          </div>

          <p>
            Cada volume abre uma etapa diferente da mesma jornada.
          </p>

        </div>


        <div className="sales-books">


          {/* PORTAS */}
          <article className="sales-book-card">

            <div className="sales-roman">
              I
            </div>

            <div className="sales-cover sales-cover-portas">

              <span className="sales-cover-title">
                PORTAS
              </span>

              <div className="cover-door">
                <div className="cover-door-line" />
                <div className="cover-door-knob" />
              </div>

              <small>
                LIMORA
              </small>

            </div>

            <div className="sales-book-content">

              <span>
                VOLUME I
              </span>

              <h3>
                PORTAS
              </h3>

              <h4>
                As portas que você continua mantendo abertas.
              </h4>

              <p>
                Sobre os lugares, relações e ciclos que continuam
                ocupando espaço mesmo depois de já terem terminado.
              </p>

            </div>

          </article>


          {/* CHAVES */}
          <article className="sales-book-card">

            <div className="sales-roman">
              II
            </div>

            <div className="sales-cover sales-cover-chaves">

              <span className="sales-cover-title">
                CHAVES
              </span>

              <div className="cover-key">
                <div className="cover-key-ring" />
                <div className="cover-key-stem" />
                <div className="cover-key-teeth" />
              </div>

              <small>
                LIMORA
              </small>

            </div>

            <div className="sales-book-content">

              <span>
                VOLUME II
              </span>

              <h3>
                CHAVES
              </h3>

              <h4>
                As chaves que você entregou demais.
              </h4>

              <p>
                Sobre limites, acesso e tudo aquilo que você permitiu
                que outras pessoas decidissem dentro de você.
              </p>

            </div>

          </article>


          {/* CASA */}
          <article className="sales-book-card">

            <div className="sales-roman">
              III
            </div>

            <div className="sales-cover sales-cover-casa">

              <span className="sales-cover-title">
                CASA
              </span>

              <div className="cover-house">
                <div className="cover-house-roof" />
                <div className="cover-house-body">
                  <span />
                  <span />
                </div>
              </div>

              <small>
                LIMORA
              </small>

            </div>

            <div className="sales-book-content">

              <span>
                VOLUME III
              </span>

              <h3>
                CASA
              </h3>

              <h4>
                O lugar para onde você volta quando para de se abandonar.
              </h4>

              <p>
                Sobre reconstruir pertencimento, presença e uma relação
                consigo que não dependa mais de ser escolhido por alguém.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
      ===================================================== */}
      <section id="checkout" className="sales-final">

        <div className="sales-final-symbol">
          ◆
        </div>

        <h2>
          Talvez você não precise encontrar
          um novo lugar.
        </h2>

        <p>
          Talvez precise apenas recuperar as chaves
          do lugar que sempre foi seu.
        </p>

        <div className="sales-offer">

          <span className="sales-offer-label">
            COLEÇÃO COMPLETA
          </span>

          <div className="sales-offer-price">
            <small>por apenas</small>
            <strong>R$ 19,90</strong>
          </div>

          <p>
            PORTAS + CHAVES + CASA
          </p>

          <span className="sales-offer-payment">
            Pagamento único
          </span>

        </div>

        <a
          href="https://pay.kiwify.com.br/Px8ro8T"
          target="_blank"
          rel="noopener noreferrer"
          className="sales-buy-button"
        >
          <span>⚿</span>
          Quero acessar a coleção
          <ArrowRight />
        </a>

        <small>
          🔒 Pagamento 100% seguro via Kiwify
        </small>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="sales-footer">

        <div className="sales-footer-line">
          <span />
          <i>◆</i>
          <span />
        </div>

        <strong>
          LIMORA
        </strong>

        <p>
          Histórias que abrem portas por dentro.
        </p>

        <Link to="/">
          Voltar ao Universo Limora
        </Link>

      </footer>

    </main>
  );
}

import { Link } from "react-router-dom";

export default function AreaMembros() {
  return (
    <main className="sales-page">

      <nav className="sales-nav">
        <Link to="/" className="back-link">
          ← Voltar ao Universo Limora
        </Link>
      </nav>

      <section className="sales-placeholder">

        <span className="sales-kicker">
          UNIVERSO LIMORA
        </span>

        <h1>
          Área de Membros
        </h1>

        <p>
          A experiência completa do Universo Limora está chegando.
        </p>

        <div className="sales-area">
          PÁGINA DA ÁREA DE MEMBROS RESERVADA
        </div>

      </section>

    </main>
  );
}

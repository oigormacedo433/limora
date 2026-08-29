import { Link } from "react-router-dom";

export default function Ebooks() {
  return (
    <main className="sales-page">

      <nav className="sales-nav">
        <Link to="/" className="back-link">
          ← Voltar ao Universo Limora
        </Link>
      </nav>

      <section className="sales-placeholder">

        <span className="sales-kicker">
          COLEÇÃO LIMORA
        </span>

        <h1>
          Portas, Chaves e Casa
        </h1>

        <p>
          Página de vendas da coleção LIMORA.
        </p>

        <div className="sales-area">
          A PÁGINA DE VENDAS DOS E-BOOKS SERÁ CONSTRUÍDA AQUI
        </div>

      </section>

    </main>
  );
}

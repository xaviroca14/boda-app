export default function Menu() {
  return (
    <main style={page}>
      <div style={wrap}>
        <h1 style={title}>Menú del cap de setmana</h1>

        <div style={timeline}>
          <section style={section}>
            <h2 style={h2}>🌿 Aperitiu</h2>
            <p style={text}>
              Patates i olives per començar i anar obrint boca.
            </p>
          </section>

          <section style={section}>
            <h2 style={h2}>🧺 Pica-pica</h2>
            <ul style={ul}>
              <li>Mini coques de trampó</li>
              <li>Mini burguer de vedella amb maionesa de tòfona</li>
              <li>Focaccia farcida de ceba caramelitzada</li>
              <li>Broquetes de pollastre tikka masala</li>
              <li>Barqueta d’ensaladilla amb anxoves</li>
              <li>Bowl de fruita a daus variada de temporada</li>
            </ul>
          </section>

          <section style={section}>
            <h2 style={h2}>🥘 Plat principal</h2>
            <ul style={ul}>
              <li>Paella de muntanya</li>
              <li>Arròs del senyoret</li>
            </ul>
          </section>

          <section style={section}>
            <h2 style={h2}>🍓 Postres</h2>
            <ul style={ul}>
              <li>Bowl de fruita variada</li>
              <li>Brownie amb gelat</li>
            </ul>
          </section>

          <section style={section}>
            <h2 style={h2}>🌙 Ressopó</h2>
            <ul style={ul}>
              <li>Pinxos variats</li>
              <li>Pizzes</li>
              <li>Pastissets</li>
            </ul>
          </section>

          <section style={section}>
            <h2 style={h2}>☀️ Esmorzar de diumenge</h2>
            <p style={text}>
              Esmorzar per qui es quedi a dormir a la casa.
            </p>
          </section>

          <section style={section}>
  <h2 style={h2}>🍷 Begudes</h2>
  <p style={text}>
    <strong>Cerveses:</strong> Estrella Galicia, Moritz Bruta, IPA B De Gust
    <br />
    <strong>Vermut:</strong> De Bodega
    <br />
    <strong>Vi blanc:</strong> Verd Albera
    <br />
    <strong>Vi negre:</strong> L’Oratori
    <br />
    <strong>Vi rosat:</strong> Ullones
    <br />
    <strong>Cava:</strong> Ramon Canals
    <br />
    <strong>Refrescos:</strong> variats
    <br />
    <strong>Sucs:</strong> Mooma — poma (Granny Smith) i mandarina
  </p>
</section>
        </div>



        <a href="/" style={back}>
          ← Tornar a la Home
        </a>
      </div>
    </main>
  );
}

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "#faf7f2",
  color: "#1f1a12",
  fontFamily: "system-ui, sans-serif",
};

const wrap: React.CSSProperties = {
  maxWidth: 420,
  margin: "0 auto",
  padding: "16px 16px 90px",
};

const title: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 900,
  marginBottom: 14,
};

const timeline: React.CSSProperties = {
  borderLeft: "1px solid rgba(0,0,0,0.10)",
  paddingLeft: 14,
};

const section: React.CSSProperties = {
  marginBottom: 18,
};

const h2: React.CSSProperties = {
  fontSize: 16,
  margin: 0,
  fontWeight: 900,
};

const text: React.CSSProperties = {
  marginTop: 6,
  fontSize: 13,
  color: "#444",
  lineHeight: 1.6,
};

const ul: React.CSSProperties = {
  marginTop: 6,
  marginBottom: 0,
  paddingLeft: 18,
  lineHeight: 1.6,
  fontSize: 13,
  color: "#444",
};

const note: React.CSSProperties = {
  marginTop: 16,
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  background: "rgba(255,255,255,0.9)",
  padding: 14,
  fontSize: 13,
  color: "#6b5a3a",
  lineHeight: 1.6,
};

const back: React.CSSProperties = {
  display: "inline-block",
  marginTop: 16,
  textDecoration: "none",
  color: "#1f1a12",
  fontSize: 13,
};
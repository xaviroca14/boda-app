export default function Llocs() {
  return (
    <main style={page}>
      <div style={wrap}>
        <h1 style={title}>Llocs</h1>

        {/* MAPA VISUAL */}
        <section style={mapCard}>
          <h2 style={h2}>🗺 Itinerari del cap de setmana</h2>
          <p style={text}>
            Esquema orientatiu del recorregut de divendres fins a l’arribada a
            la casa.
          </p>

          <div style={routeWrap}>
            <div style={node}>
              <div style={dot}>🚌</div>
              <div>
                <div style={nodeTitle}>Plaça de la Vila · El Brull</div>
                <div style={nodeText}>Bus a les 08:55</div>
              </div>
            </div>

            <div style={line} />

            <div style={node}>
              <div style={dot}>📍</div>
              <div>
                <div style={nodeTitle}>Collformic</div>
                <div style={nodeText}>Convocatòria general a les 09:30</div>
              </div>
            </div>

            <div style={line} />

            <div style={node}>
              <div style={dot}>🥾</div>
              <div>
                <div style={nodeTitle}>Matagalls</div>
                <div style={nodeText}>Excursió pel Montseny</div>
              </div>
            </div>

            <div style={line} />

            <div style={node}>
              <div style={dot}>🏡</div>
              <div>
                <div style={nodeTitle}>Casal Sagrat Cor · Viladrau</div>
                <div style={nodeText}>Arribada aprox. 17:00</div>
              </div>
            </div>
          </div>
        </section>

        {/* PLAÇA DEL BRULL */}
        <section style={card}>
          <h2 style={h2}>🚌 Plaça de la Vila · El Brull</h2>

          <p style={text}>
            Des d’aquí surt el <strong>bus a les 08:55</strong>.
          </p>

          <p style={text}>
            El bus té places limitades, així que no tothom hi pujarà.
          </p>

          <a
            href="https://maps.google.com/?q=El+Brull+plaça+de+la+vila"
            target="_blank"
            rel="noreferrer"
            style={button}
          >
            Obrir a Google Maps
          </a>
        </section>

        {/* COLLFORMIC */}
        <section style={card}>
          <h2 style={h2}>📍 Collformic</h2>

          <p style={text}>
            Punt de trobada principal de divendres a les <strong>09:30</strong>.
          </p>

          <p style={text}>
            Cadascú pot arribar-hi com vulgui. Hi ha dos pàrquings a la zona
            (aprox. 20 i 40 places).
          </p>

          <p style={text}>
            Aquest és el punt d’inici de la ruta cap al <strong>Matagalls</strong>.
          </p>

          <a
            href="https://maps.google.com/?q=Collformic"
            target="_blank"
            rel="noreferrer"
            style={button}
          >
            Obrir a Google Maps
          </a>
        </section>

        {/* RUTA WIKILOC */}
        <section style={card}>
          <h2 style={h2}>🥾 Ruta Matagalls</h2>

          <p style={text}>
            Ruta des de Collformic fins al Matagalls i tornada.
          </p>

          <p style={text}>
            Si vols veure el recorregut complet, aquí tens l’enllaç a Wikiloc:
          </p>

          <a
            href="https://es.wikiloc.com/rutas-senderismo/collformic-matagalls-per-les-11-fonts-132279035?h=xmen7rv9km&wa=sd&utm_campaign=badge&utm_source=unknown&utm_medium=unknown"
            target="_blank"
            rel="noreferrer"
            style={button}
          >
            Veure la ruta a Wikiloc
          </a>
        </section>

        {/* CASA */}
        <section style={card}>
          <h2 style={h2}>🏡 Casal Sagrat Cor · Viladrau</h2>

          <p style={text}>
            Casa on dormirem i celebrarem la boda.
          </p>

          <p style={text}>
            Arribarem aproximadament a les <strong>17:00</strong> després de
            l’excursió.
          </p>

          <p style={note}>
            ℹ️ L’accés al Casal Sagrat Cor és pel carrer que passa per
            <strong> La Magnòlia Blanca</strong>.
          </p>

          <a
            href="https://maps.google.com/?q=Casal+Sagrat+Cor+Viladrau"
            target="_blank"
            rel="noreferrer"
            style={button}
          >
            Obrir a Google Maps
          </a>
        </section>

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
  marginBottom: 16,
};

const mapCard: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 20,
  padding: 16,
  marginBottom: 14,
  background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(247,242,234,0.95))",
  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
};

const routeWrap: React.CSSProperties = {
  marginTop: 14,
  display: "grid",
  gap: 8,
};

const node: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "center",
};

const dot: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: 14,
  background: "rgba(139,111,71,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 18,
  flexShrink: 0,
};

const nodeTitle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 800,
};

const nodeText: React.CSSProperties = {
  fontSize: 12,
  color: "#6b5a3a",
  marginTop: 2,
};

const line: React.CSSProperties = {
  width: 2,
  height: 18,
  background: "rgba(139,111,71,0.25)",
  marginLeft: 20,
};

const card: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 20,
  padding: 16,
  marginBottom: 14,
  background: "rgba(255,255,255,0.9)",
  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
};

const h2: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 900,
  marginBottom: 8,
};

const text: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.6,
  marginBottom: 10,
};

const note: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.6,
  background: "#f3efe7",
  padding: 10,
  borderRadius: 10,
  marginBottom: 10,
};

const button: React.CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 10,
  background: "#e8dfd0",
  color: "#1f1a12",
  fontSize: 13,
  fontWeight: 600,
};

const back: React.CSSProperties = {
  display: "inline-block",
  marginTop: 10,
  textDecoration: "none",
  color: "#1f1a12",
  fontSize: 13,
};
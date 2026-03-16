export default function Rooms() {
  const floors = [
    {
      floor: "Planta 1  ",
      rooms: [
        {
          name: "PUIGMAL",
          img: "/mountains/puigmal.jpg",
          position: "center 15%",
          guests: ["Marina", "Xavi", "Rai"],
        },
        {
          name: "PUNTA GNIFETTI",
          img: "/mountains/gnifetti.jpg",
          position: "center 25%",
          guests: ["Mireia", "Pau", "Alba", "Joan", "Mar"],
        },
        {
          name: "MONT PERDUT",
          img: "/mountains/montperdut.jpg",
          position: "center 10%",
          guests: ["Uri", "Mire", "Nil", "Max"],
        },
        {
          name: "URIELLU",
          img: "/mountains/urriellu.jpg",
          position: "center 10%",
          guests: ["Pau", "Berta", "Martí", "Aram", "Irati"],
        },
        {
          name: "NEVADO HUARAPASCA",
          img: "/mountains/huarapasca.jpg",
          position: "center 10%",
          guests: ["Anna", "Benet", "Jan", "Greta", "Ot"],
        },
        {
          name: "NEVADO MATEO",
          img: "/mountains/mateo.jpg",
          guests: ["Carlota"],
        },
        {
          name: "BALMENHORN",
          img: "/mountains/balmenhorn.jpg",
          position: "center 0%",
          guests: ["Paula", "Albert", "Boi", "Sam"],
        },
      ],
    },

    {
      floor: "Planta 2 ",
      rooms: [
        {
          name: "PIC DE PEGUERA",
          img: "/mountains/peguera.jpg",
          position: "center 5%",
          guests: ["Manu", "Clàudia", "Teo"],
        },
        {
          name: "ENCANTATS",
          img: "/mountains/encantats.jpg",
          position: "center 10%",
          guests: ["Paula", "Paula"],
        },
        {
          name: "GRA DE FAJOL",
          img: "/mountains/grafajol.jpg",
          guests: ["Clàudia", "Anna"],
        },
        {
          name: "AGULLES DE TRAVESSANI",
          img: "/mountains/travessani.jpg",
          position: "center 10%",
          guests: ["Andrea", "Albert"],
        },
        {
          name: "PEDRAFORCA",
          img: "/mountains/pedraforca.jpg",
          position: "center 10%",
          guests: ["Nacho", "Lara"],
        },
        {
          name: "VULTURÓ",
          img: "/mountains/vulturo.jpg",
          guests: ["Esteve", "Josemi", "+1"],
        },
        {
          name: "CASTOR",
          img: "/mountains/castor.jpg",
          guests: ["Cesar", "Ana"],
        },
      ],
    },

    {
      floor: "Planta 3 ",
      rooms: [
        {
          name: "BASTIMENTS",
          img: "/mountains/bastiments.jpg",
          guests: ["Caterina", "Anna"],
        },
        {
          name: "BESIBERRI SUD",
          img: "/mountains/besiberri.jpg",
          guests: ["Clara", "Juanma"],
        },
        {
          name: "ANETO",
          
	  img: "/mountains/aneto.jpg",
          position: "center 10%",
          guests: ["Xavi", "Biel"],
        },
        {
          name: "RUSSELL",
          img: "/mountains/russell.jpg",
          position: "center 15%",
          guests: ["Ignasi", "Cris", "Gaia"],
        },
        {
          name: "MALADETA",
          img: "/mountains/maladeta.jpg",
          guests: ["Anna", "Ariadna"],
        },
      ],
    },
  ];

  return (
    <main style={page}>
      <div style={wrap}>
        <h1 style={title}>Habitacions</h1>

        {floors.map((floor, i) => (
          <section key={i} style={{ marginBottom: 30 }}>
            <h2 style={floorTitle}>{floor.floor}</h2>

            <div style={grid}>
              {floor.rooms.map((room, j) => (
                <div key={j} style={card}>
                  <img
                    src={room.img}
                    alt={room.name}
                    style={{
                      ...img,
                      objectPosition: room.position || "center 50%",
                    }}
                  />

                  <div style={roomBody}>
                    <h3 style={roomTitle}>{room.name}</h3>

                    <ul style={guestList}>
                      {room.guests.map((g, k) => (
                        <li key={k}>{g}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <a href="/" style={back}>
          ← Tornar
        </a>
      </div>
    </main>
  );
}

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "#faf7f2",
  fontFamily: "system-ui",
};

const wrap: React.CSSProperties = {
  maxWidth: 420,
  margin: "0 auto",
  padding: "16px 16px 80px",
};

const title: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 900,
  marginBottom: 20,
};

const floorTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 800,
  marginBottom: 10,
};

const grid: React.CSSProperties = {
  display: "grid",
  gap: 14,
};

const card: React.CSSProperties = {
  borderRadius: 18,
  overflow: "hidden",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
};

const img: React.CSSProperties = {
  width: "100%",
  height: 140,
  objectFit: "cover",
  display: "block",
};

const roomBody: React.CSSProperties = {
  padding: 12,
};

const roomTitle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 800,
  marginBottom: 6,
};

const guestList: React.CSSProperties = {
  fontSize: 12,
  paddingLeft: 14,
  lineHeight: 1.6,
};

const back: React.CSSProperties = {
  display: "inline-block",
  marginTop: 20,
  fontSize: 13,
  textDecoration: "none",
};
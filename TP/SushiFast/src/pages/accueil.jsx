import boxes from "../data/boxes.json";

function Accueil() {
    return (
        <div style={{ paddingTop: "150px", paddingBottom: "80px" }}>
            
            {/* SECTION TITLE */}
            <h1
                style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#b64537",
                    marginBottom: "40px",
                    paddingLeft: "40px",
                    textTransform: "uppercase"
                }}
            >
                Popular Now
            </h1>

            {/* GRID OF CARDS */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "40px",
                    padding: "0 40px",
                }}
            >
                {boxes.map((menu) => (
                    <div
                        key={menu.id}
                        style={{
                            border: "2px solid #e3b2a6",
                            borderRadius: "10px",
                            backgroundColor: "#fff",
                            padding: "25px",
                            textAlign: "center",
                            transition: "0.3s",
                        }}
                    >
                        {/* IMAGE */}
                        <img
                            src={menu.image}
                            alt={menu.nom}
                            style={{
                                width: "150px",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "50%",
                                marginBottom: "15px",
                            }}
                        />

                        {/* TITLE */}
                        <h3
                            style={{
                                color: "#b64537",
                                fontWeight: "700",
                                fontSize: "20px",
                                marginBottom: "10px",
                            }}
                        >
                            {menu.nom}
                        </h3>

                        {/* DESCRIPTION / SAVEURS */}
                        <p
                            style={{
                                color: "#444",
                                fontSize: "14px",
                                minHeight: "50px",
                                marginBottom: "20px",
                            }}
                        >
                            {menu.saveurs.slice(0, 3).join(", ")}
                        </p>

                        {/* PRICE + BUTTON */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "15px",
                            }}
                        >
                            <button
                                style={{
                                    padding: "10px 18px",
                                    borderRadius: "25px",
                                    backgroundColor: "#b64537",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                }}
                            >
                                {menu.prix} €
                            </button>

                            <button
                                style={{
                                    padding: "10px 20px",
                                    borderRadius: "25px",
                                    backgroundColor: "#b64537",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                }}
                            >
                                🛒 Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accueil;

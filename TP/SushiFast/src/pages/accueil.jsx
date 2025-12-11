import { useState } from "react";

function Accueil({ menus }) {
    const [selectedMenu, setSelectedMenu] = useState(null);

    return (
        <div style={{ paddingTop: "150px", paddingBottom: "80px" }}>
            <h1
                style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#b64537",
                    marginBottom: "40px",
                    paddingLeft: "40px",
                    textTransform: "uppercase",
                }}
            >
                Popular Now
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "40px",
                    padding: "0 40px",
                }}
            >
                {menus.map((menu) => (
                    <div
                        key={menu.id}
                        style={{
                            border: "2px solid #e3b2a6",
                            borderRadius: "15px",
                            backgroundColor: "#fff",
                            padding: "25px",
                            textAlign: "center",
                        }}
                    >
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

                        <h3
                            style={{
                                color: "#b64537",
                                fontWeight: "700",
                                fontSize: "22px",
                                marginBottom: "10px",
                            }}
                        >
                            {menu.nom}
                        </h3>

                        <p style={{ color: "#444" }}>
                            {menu.saveurs.slice(0, 3).join(", ")}
                        </p>

                        <p
                            style={{
                                color: "#b64537",
                                fontWeight: "700",
                                fontSize: "20px",
                                marginBottom: "15px",
                            }}
                        >
                            {menu.prix} €
                        </p>

                        <button
                            onClick={() => setSelectedMenu(menu)}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "25px",
                                backgroundColor: "#b64537",
                                border: "none",
                                color: "#fff",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            Détails
                        </button>
                    </div>
                ))}
            </div>

            {selectedMenu && (
                <div
                    onClick={() => setSelectedMenu(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 2000,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "16px",
                            padding: "24px",
                            width: "420px",
                            maxWidth: "90%",
                        }}
                    >
                        <h2 style={{ color: "#b64537" }}>
                            {selectedMenu.nom}
                        </h2>

                        <p><strong>{selectedMenu.pieces} pièces</strong></p>

                        <p>Saveurs : {selectedMenu.saveurs.join(", ")}</p>

                        <h4>Aliments :</h4>
                        <ul>
                            {selectedMenu.aliments.map((al, i) => (
                                <li key={i}>{al.nom} — {al.quantite}</li>
                            ))}
                        </ul>

                        <button
                            onClick={() => setSelectedMenu(null)}
                            style={{
                                marginTop: "15px",
                                padding: "10px 20px",
                                borderRadius: "25px",
                                backgroundColor: "#b64537",
                                border: "none",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Accueil;

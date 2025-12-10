import { useState } from "react";
import boxes from "../data/boxes.json";

function Accueil({ menus = boxes }) {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleCardClick = (menu) => {
        setSelectedMenu(menu);
    };

    const closeModal = () => {
        setSelectedMenu(null);
    };

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
                    textTransform: "uppercase",
                }}
            >
                Popular Now
            </h1>

            {/* GRID OF MENUS */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "40px",
                    padding: "0 40px",
                }}
            >
                {menus.map((menu) => (
                    <div
                        key={menu.id}
                        onClick={() => handleCardClick(menu)}
                        style={{
                            border: "2px solid #e3b2a6",
                            borderRadius: "15px",
                            backgroundColor: "#fff",
                            padding: "25px",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                    >
                        {/* IMAGE */}
                        <img
                            src={`${menu.image}`}
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
                                fontSize: "22px",
                                marginBottom: "10px",
                            }}
                        >
                            {menu.nom}
                        </h3>

                        {/* SAVEURS */}
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

                        {/* PRICE + BUTTONS */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "15px",
                            }}
                            onClick={(e) => e.stopPropagation()}
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

            {/* MODALE DETAILS */}
            {selectedMenu && (
                <div
                    onClick={closeModal}
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
                            padding: "24px 28px",
                            maxWidth: "420px",
                            width: "90%",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
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
                            onClick={closeModal}
                            style={{
                                marginTop: "15px",
                                padding: "10px 18px",
                                borderRadius: "25px",
                                border: "none",
                                backgroundColor: "#b64537",
                                color: "#fff",
                                fontWeight: "600",
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

import { useState } from "react";
import boxes from "../data/boxes.json";

function Accueil({ appliedFlavors }) {
    const [selectedMenu, setSelectedMenu] = useState(null);

    // FILTRAGE DES MENUS
    const menus = appliedFlavors.length === 0
        ? boxes
        : boxes.filter(menu =>
            appliedFlavors.some(flavor => menu.saveurs.includes(flavor))
        );

    return (
        <div style={{ paddingTop: "150px", paddingBottom: "80px" }}>

            {/* MODAL (POP-UP) */}
            {selectedMenu && (
                <div style={styles.modalOverlay} onClick={() => setSelectedMenu(null)}>
                    <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                        
                        {/* TITRE DU MENU */}
                        <h2 style={{ color: "#b64537", marginBottom: "15px" }}>
                            {selectedMenu.nom}
                        </h2>

                        {/* IMAGE */}
                        <img
                            src={selectedMenu.image}
                            alt={selectedMenu.nom}
                            style={{
                                width: "160px",
                                height: "160px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                marginBottom: "20px"
                            }}
                        />

                        {/* LISTE DES ALIMENTS */}
                        <h3 style={{ marginBottom: "10px", color: "#b64537" }}>Aliments :</h3>
                        <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px" }}>
                            {selectedMenu.aliments.map((a, index) => (
                                <li key={index} style={{ fontSize: "16px", marginBottom: "6px" }}>
                                    <strong>{a.nom}</strong> — quantité : {a.quantite}
                                </li>
                            ))}
                        </ul>

                        {/* BOUTON FERMER */}
                        <button
                            onClick={() => setSelectedMenu(null)}
                            style={styles.closeBtn}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}

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

            {/* GRID */}
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
                        style={styles.card}
                        onClick={() => setSelectedMenu(menu)}
                    >
                        <img
                            src={menu.image}
                            alt={menu.nom}
                            style={styles.image}
                        />

                        <h3 style={styles.title}>{menu.nom}</h3>

                        <p style={styles.subtitle}>
                            {menu.saveurs.join(", ")}
                        </p>

                        <p style={styles.price}>{menu.prix} €</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---- Styles ---- */
const styles = {
    card: {
        border: "2px solid #e3b2a6",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "25px",
        textAlign: "center",
        cursor: "pointer",
        transition: "0.3s",
    },
    image: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "15px",
    },
    title: {
        color: "#b64537",
        fontWeight: "700",
        fontSize: "22px",
        marginBottom: "10px"
    },
    subtitle: {
        color: "#444",
        fontSize: "14px",
        marginBottom: "10px"
    },
    price: {
        fontWeight: "bold",
        color: "#b64537",
        marginTop: "10px",
        fontSize: "16px"
    },

    /* MODAL */
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modal: {
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        width: "400px",
        maxHeight: "80vh",
        overflowY: "auto",
        textAlign: "center",
        border: "2px solid #e3b2a6",
    },
    closeBtn: {
        background: "#b64537",
        padding: "10px 20px",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "700",
        marginTop: "10px"
    }
};

export default Accueil;

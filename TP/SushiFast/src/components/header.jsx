import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { FaUser, FaShoppingBasket } from "react-icons/fa";

function Header({
    selectedFlavors,
    onToggleFlavor,
    onApplyFilters,
    onResetFilters,
    excludeCalifornia,
    onToggleExcludeCalifornia
}) {
    const [open, setOpen] = useState(false);

    // Toutes les saveurs disponibles
    const allFlavors = [
        "avocat",
        "coriandre",
        "saumon",
        "cheese",
        "thon",
        "viande",
        "spicy",
        "crevette"
    ];

    return (
        <>
            {/* CSS intégré */}
            <style>{`
                .header-custom {
                    background: #f4f1ea;
                }

                .logo h2 {
                    font-family: "Pacifico", cursive;
                    color: #b64537;
                    line-height: 1;
                }

                .nav-box {
                    padding: 12px 24px;
                    border: 2px solid #e3b2a6;
                    border-radius: 50px;
                    background: #f4f1ea;
                }

                .nav-item-custom {
                    color: #b64537 !important;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                }

                /* ------ MENU DÉROULANT ------ */
                .dropdown-box {
                    position: absolute;
                    top: 95px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #fff;
                    border: 2px solid #e3b2a6;
                    border-radius: 12px;
                    padding: 20px;
                    width: 300px;
                    z-index: 999;
                    box-shadow: 0px 4px 12px rgba(0,0,0,0.20);
                }

                .dropdown-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #b64537;
                    margin-bottom: 12px;
                }

                .dropdown-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 8px;
                    color: #b64537;
                    font-weight: 500;
                }

                .dropdown-buttons {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 15px;
                }

                .btn-filter {
                    flex: 1;
                    padding: 10px 15px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    color: #fff;
                    font-weight: 600;
                }

                .btn-apply { background-color: #b64537; margin-right: 10px; }
                .btn-reset { background-color: grey; }
            `}</style>

            {/* HEADER */}
            <Navbar expand="lg" className="py-3 header-custom">
                <Container className="d-flex justify-content-between align-items-center">

                    {/* LOGO */}
                    <div className="logo">
                        <h2 className="mb-0">Sushi<br />Fast</h2>
                    </div>

                    {/* NAVIGATION */}
                    <div className="nav-box d-none d-lg-flex">
                        <Nav className="align-items-center gap-4">
                            <span
                                className="nav-item-custom"
                                onClick={() => setOpen(!open)}
                            >
                                <BiMenu size={20} /> MENU
                            </span>
                        </Nav>
                    </div>

                    {/* ICONES DROITE */}
                    <div className="d-flex align-items-center gap-3">
                        <FaUser size={22} color="#b64537" />
                        <FaShoppingBasket size={22} color="#b64537" />
                    </div>

                </Container>
            </Navbar>

            {/* ------- MENU DÉROULANT ------- */}
            {open && (
                <div className="dropdown-box">
                    <div className="dropdown-title">Filtrer les saveurs</div>

                    {/* LISTE DES SAVEURS */}
                    {allFlavors.map((flavor) => (
                        <label key={flavor} className="dropdown-item">
                            <input
                                type="checkbox"
                                checked={selectedFlavors.includes(flavor)}
                                onChange={() => onToggleFlavor(flavor)}
                            />
                            {flavor}
                        </label>
                    ))}

                    {/* ------ EXCLUSION CALIFORNIA ------ */}
                    <label className="dropdown-item" style={{ marginTop: "10px" }}>
                        <input
                            type="checkbox"
                            checked={excludeCalifornia}
                            onChange={onToggleExcludeCalifornia}
                        />
                        Exclure "California Saumon Avocat"
                    </label>

                    {/* BOUTONS */}
                    <div className="dropdown-buttons">
                        <button
                            className="btn-filter btn-apply"
                            onClick={() => {
                                onApplyFilters();
                                setOpen(false);
                            }}
                        >
                            Appliquer
                        </button>

                        <button
                            className="btn-filter btn-reset"
                            onClick={() => {
                                onResetFilters();
                                setOpen(false);
                            }}
                        >
                            Réinitialiser
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;

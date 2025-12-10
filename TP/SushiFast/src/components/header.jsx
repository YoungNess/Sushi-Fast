import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaUser, FaShoppingBasket } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

function Header({ filters, onApplyFilters, onResetFilters }) {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedSaveurs, setSelectedSaveurs] = useState(
        filters.saveurs || []
    );
    const [excludeCalifornia, setExcludeCalifornia] = useState(
        filters.excludeCalifornia || false
    );

    useEffect(() => {
        setSelectedSaveurs(filters.saveurs || []);
        setExcludeCalifornia(filters.excludeCalifornia || false);
    }, [filters]);

    const allSaveurs = [
        "avocat",
        "coriandre",
        "saumon",
        "cheese",
        "thon",
        "viande",
        "spicy",
        "crevette",
    ];

    const toggleSaveur = (name) => {
        setSelectedSaveurs((prev) =>
            prev.includes(name)
                ? prev.filter((s) => s !== name)
                : [...prev, name]
        );
    };

    const handleApply = () => {
        onApplyFilters?.({
            saveurs: selectedSaveurs,
            excludeCalifornia,
        });
        setShowFilters(false);
    };

    const handleReset = () => {
        setSelectedSaveurs([]);
        setExcludeCalifornia(false);
        onResetFilters?.();
        setShowFilters(false);
    };

    return (
        <>
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

                .menu-button {
                    border: none;
                    background: transparent;
                    color: #b64537;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                }

                .menu-button:hover {
                    opacity: 0.7;
                }

                .icon-btn {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    border: 2px solid #e3b2a6;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #f4f1ea;
                    color: #b64537;
                    cursor: pointer;
                }

                .icon-btn:hover {
                    opacity: 0.7;
                }

                .filter-panel {
                    position: absolute;
                    top: 80px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 420px;
                    max-width: 90vw;
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.12);
                    padding: 24px 28px;
                    z-index: 1000;
                    border: 1px solid #f0d5c8;
                }

                .filter-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #b64537;
                    margin-bottom: 16px;
                }

                .filter-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 6px;
                    font-size: 14px;
                    color: #5a473f;
                }

                .filter-row input {
                    accent-color: #b64537;
                }

                .filter-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    margin-top: 18px;
                }

                .filter-btn-primary {
                    padding: 8px 18px;
                    border-radius: 20px;
                    border: none;
                    background-color: #b64537;
                    color: #fff;
                    font-weight: 600;
                    cursor: pointer;
                }

                .filter-btn-secondary {
                    padding: 8px 18px;
                    border-radius: 20px;
                    border: none;
                    background-color: #999;
                    color: #fff;
                    font-weight: 600;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .filter-panel {
                        top: 70px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <Navbar expand="lg" className="py-3 header-custom">
                <Container className="d-flex justify-content-between align-items-center position-relative">
                    {/* LOGO */}
                    <div className="logo">
                        <h2 className="mb-0">
                            Sushi<br />Fast
                        </h2>
                    </div>

                    {/* BOUTON MENU (ouvre filtres) */}
                    <div className="nav-box d-flex justify-content-center">
                        <button
                            type="button"
                            className="menu-button"
                            onClick={() => setShowFilters((v) => !v)}
                        >
                            <BiMenu size={20} />
                            MENU
                        </button>
                    </div>

                    {/* ICONES DROITE */}
                    <div className="d-flex align-items-center gap-3">
                        <div className="icon-btn">
                            <FaUser size={20} />
                        </div>
                        <div className="icon-btn">
                            <FaShoppingBasket size={20} />
                        </div>
                    </div>

                    {/* PANNEAU DE FILTRES */}
                    {showFilters && (
                        <div className="filter-panel">
                            <div className="filter-title">
                                Filtrer les saveurs
                            </div>

                            {allSaveurs.map((sav) => (
                                <label
                                    className="filter-row"
                                    key={sav}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedSaveurs.includes(sav)}
                                        onChange={() => toggleSaveur(sav)}
                                    />
                                    <span>{sav}</span>
                                </label>
                            ))}

                            <hr style={{ margin: "12px 0" }} />

                            <label className="filter-row">
                                <input
                                    type="checkbox"
                                    checked={excludeCalifornia}
                                    onChange={() =>
                                        setExcludeCalifornia((v) => !v)
                                    }
                                />
                                <span>
                                    Exclure "California Saumon Avocat"
                                </span>
                            </label>

                            <div className="filter-actions">
                                <button
                                    type="button"
                                    className="filter-btn-secondary"
                                    onClick={handleReset}
                                >
                                    Réinitialiser
                                </button>
                                <button
                                    type="button"
                                    className="filter-btn-primary"
                                    onClick={handleApply}
                                >
                                    Appliquer
                                </button>
                            </div>
                        </div>
                    )}
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

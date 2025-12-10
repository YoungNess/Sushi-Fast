import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { FaUser, FaShoppingBasket, FaTruck, FaInfoCircle } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

function Header({ selectedFlavors, onToggleFlavor, onApplyFilters, onResetFilters }) {
    const [open, setOpen] = useState(false);

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
            <style>{`
                .dropdown-box {
                    position: absolute;
                    top: 85px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #fff;
                    border: 2px solid #e3b2a6;
                    border-radius: 12px;
                    padding: 20px;
                    width: 280px;
                    z-index: 999;
                    box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
                }
                .dropdown-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
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
                    padding: 8px 12px;
                    border-radius: 8px;
                    border: none;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                }
                .btn-apply {
                    background-color: #b64537;
                    margin-right: 10px;
                }
                .btn-reset {
                    background-color: grey;
                }
            `}</style>

            <Navbar expand="lg" className="py-3 header-custom">
                <Container className="d-flex justify-content-between align-items-center">

                    <div className="logo">
                        <h2 className="mb-0" style={{ fontFamily: "Pacifico", color:"#b64537" }}>
                            Sushi<br/>Fast
                        </h2>
                    </div>

                    <div className="nav-box d-none d-lg-flex">
                        <Nav className="align-items-center gap-4">

                            {/* MENU DROPDOWN BUTTON */}
                            <Nav.Link 
                                className="nav-item-custom"
                                style={{ cursor:"pointer" }}
                                onClick={() => setOpen(!open)}
                            >
                                <BiMenu size={20} /> MENU
                            </Nav.Link>

                        </Nav>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <FaUser size={22} />
                        <FaShoppingBasket size={22} />
                    </div>
                </Container>
            </Navbar>

            {/* DROPDOWN */}
            {open && (
                <div className="dropdown-box">

                    <h4 style={{ color:"#b64537", marginBottom:"10px" }}>
                        Filtrer par saveur :
                    </h4>

                    {allFlavors.map(flavor => (
                        <label key={flavor} className="dropdown-item">
                            <input 
                                type="checkbox"
                                checked={selectedFlavors.includes(flavor)}
                                onChange={() => onToggleFlavor(flavor)}
                            />
                            {flavor}
                        </label>
                    ))}

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

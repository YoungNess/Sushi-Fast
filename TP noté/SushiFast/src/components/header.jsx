import { Nav, Navbar } from "react-bootstrap";
import { FaUser, FaShoppingBasket, FaTruck, FaInfoCircle } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";

function Header() {

    return (
        <>
            {/* CSS intégré */}
            <style>{`
                .header-custom {
                    background: #f4f1ea;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }

                /* Wrapper pour enlever les marges du container Bootstrap */
                .header-wrapper {
                    max-width: 100%;
                    width: 100%;
                    padding: 15px 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo h2 {
                    font-family: "Pacifico", cursive;
                    color: #b64537;
                    line-height: 1;
                    margin: 0;
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
                }

                .nav-item-custom:hover {
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
            `}</style>

            <Navbar expand="lg" className="py-0 header-custom">
                
                {/* WRAPPER FULL WIDTH */}
                <div className="header-wrapper">

                    {/* LOGO */}
                    <div className="logo">
                        <h2>Sushi<br />Fast</h2>
                    </div>

                    {/* NAVIGATION */}
                    <div className="nav-box d-none d-lg-flex">
                        <Nav className="align-items-center gap-4">

                            <Nav.Link href="#" className="nav-item-custom">
                                <BiMenu size={20} /> MENU
                            </Nav.Link>

                            <Nav.Link href="#" className="nav-item-custom">
                                <FaTruck size={20} /> DELIVERY
                            </Nav.Link>

                            <Nav.Link href="#" className="nav-item-custom">
                                <FaInfoCircle size={20} /> ABOUT
                            </Nav.Link>

                            <Nav.Link href="#" className="nav-item-custom">
                                <MdContactMail size={20} /> CONTACTS
                            </Nav.Link>

                        </Nav>
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

                </div>
            </Navbar>
        </>
    );
}

export default Header;

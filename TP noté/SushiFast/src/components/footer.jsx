import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
    return (
        <>
            <style>{`
                .footer {
                    width: 100%;
                    background: #000;
                    color: #fff;
                    text-align: center;
                    padding: 50px 20px;
                    margin-top: 100px;
                }

                .footer-title {
                    font-family: "Georgia", serif;
                    font-size: 48px;
                    letter-spacing: 4px;
                    margin-bottom: 25px;
                }

                .footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 40px;
                    font-size: 16px;
                    margin-bottom: 25px;
                }

                .footer-links a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 400;
                }

                .footer-links a:hover {
                    opacity: 0.7;
                }

                .footer-icons {
                    display: flex;
                    justify-content: center;
                    gap: 25px;
                    font-size: 22px;
                    margin-top: 20px;
                }

                .footer-icons a {
                    color: #fff;
                }

                .footer-icons a:hover {
                    opacity: 0.7;
                }
            `}</style>

            <footer className="footer">
                <h1 className="footer-title">SUSHI FAST</h1>

                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Contact</a>
                </div>

                <div className="footer-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaFacebookF /></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;

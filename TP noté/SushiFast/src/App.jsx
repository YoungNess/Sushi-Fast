import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./pages/accueil";

function App() {
    return (
        <div 
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Header />

            {/* zone qui pousse le footer vers le bas */}
            <div style={{ flex: 1 }}>
                <Accueil />
            </div>

            <Footer />
        </div>
    );
}

export default App;

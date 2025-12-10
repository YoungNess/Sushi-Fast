import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./pages/accueil";

function App() {

    const [selectedFlavors, setSelectedFlavors] = useState([]);
    const [appliedFlavors, setAppliedFlavors] = useState([]);

    function handleToggleFlavor(flavor) {
        setSelectedFlavors(prev =>
            prev.includes(flavor)
                ? prev.filter(f => f !== flavor)
                : [...prev, flavor]
        );
    }

    function applyFilters() {
        setAppliedFlavors([...selectedFlavors]);
    }

    function resetFilters() {
        setSelectedFlavors([]);
        setAppliedFlavors([]);
    }

    return (
        <>
            <Header
                selectedFlavors={selectedFlavors}
                onToggleFlavor={handleToggleFlavor}
                onApplyFilters={applyFilters}
                onResetFilters={resetFilters}
            />

            <Accueil appliedFlavors={appliedFlavors} />

            <Footer />
        </>
    );
}

export default App;

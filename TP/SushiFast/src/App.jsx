import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./pages/accueil";
import boxesData from "./data/boxes.json";

function App() {
    const [selectedFlavors, setSelectedFlavors] = useState([]);
    const [excludeCalifornia, setExcludeCalifornia] = useState(false);
    const [filteredMenus, setFilteredMenus] = useState(boxesData);

    // Toggle saveur cochée
    const handleToggleFlavor = (flavor) => {
        setSelectedFlavors((prev) =>
            prev.includes(flavor)
                ? prev.filter((f) => f !== flavor)
                : [...prev, flavor]
        );
    };

    // Activer / désactiver exclusion "California Saumon Avocat"
    const handleToggleExclude = () => {
        setExcludeCalifornia((prev) => !prev);
    };

    // Appliquer les filtres
    const handleApplyFilters = () => {
        let menus = boxesData;

        // Filtrer par saveurs
        if (selectedFlavors.length > 0) {
            menus = menus.filter((menu) =>
                selectedFlavors.every((flavor) => menu.saveurs.includes(flavor))
            );
        }

        // Exclure un aliment précis
        if (excludeCalifornia) {
            menus = menus.filter(
                (menu) =>
                    !menu.aliments.some(
                        (a) => a.nom === "California Saumon Avocat"
                    )
            );
        }

        setFilteredMenus(menus);
    };

    // Réinitialiser tous les filtres
    const handleResetFilters = () => {
        setSelectedFlavors([]);
        setExcludeCalifornia(false);
        setFilteredMenus(boxesData);
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header
                selectedFlavors={selectedFlavors}
                onToggleFlavor={handleToggleFlavor}
                onApplyFilters={handleApplyFilters}
                onResetFilters={handleResetFilters}
                excludeCalifornia={excludeCalifornia}
                onToggleExcludeCalifornia={handleToggleExclude}
            />

            {/* CONTENU */}
            <div style={{ flex: 1 }}>
                <Accueil menus={filteredMenus} />
            </div>

            <Footer />
        </div>
    );
}

export default App;

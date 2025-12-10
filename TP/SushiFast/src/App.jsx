import { useMemo, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./pages/accueil";
import boxes from "./data/boxes.json";

function App() {
    const [filters, setFilters] = useState({
        saveurs: [],
        excludeCalifornia: false,
    });

    const handleApplyFilters = (newFilters) => {
        setFilters({
            saveurs: newFilters.saveurs || [],
            excludeCalifornia: !!newFilters.excludeCalifornia,
        });
    };

    const handleResetFilters = () => {
        setFilters({
            saveurs: [],
            excludeCalifornia: false,
        });
    };

    const filteredMenus = useMemo(() => {
        return boxes.filter((menu) => {
            // Filtre par saveurs cochées
            if (filters.saveurs.length > 0) {
                const matchSaveur = menu.saveurs.some((s) =>
                    filters.saveurs.includes(s)
                );
                if (!matchSaveur) return false;
            }

           
            if (filters.excludeCalifornia) {
                const hasCalifornia = menu.aliments.some(
                    (a) => a.nom === "California Saumon Avocat"
                );
                if (hasCalifornia) return false;
            }

            return true;
        });
    }, [filters]);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header
                filters={filters}
                onApplyFilters={handleApplyFilters}
                onResetFilters={handleResetFilters}
            />

            <div style={{ flex: 1 }}>
                <Accueil menus={filteredMenus} />
            </div>

            <Footer />
        </div>
    );
}

export default App;

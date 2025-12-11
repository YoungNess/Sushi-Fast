import { useMemo, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./pages/accueil";
import boxes from "./data/boxes.json";

function App() {
    const [filters, setFilters] = useState({
        saveurs: [],
        excludeCalifornia: false,
        priceFilter: null // min & max menus
    });

    const handleApplyFilters = (newFilters) => {
        setFilters({
            ...filters,
            saveurs: newFilters.saveurs || [],
            excludeCalifornia: !!newFilters.excludeCalifornia,
            priceFilter: null
        });
    };

    const handleResetFilters = () => {
        setFilters({
            saveurs: [],
            excludeCalifornia: false,
            priceFilter: null
        });
    };

    const handlePriceFilter = () => {
        const min = boxes.reduce((a, b) => (a.prix < b.prix ? a : b));
        const max = boxes.reduce((a, b) => (a.prix > b.prix ? a : b));

        setFilters({
            saveurs: [],
            excludeCalifornia: false,
            priceFilter: [min, max]
        });
    };

    const filteredMenus = useMemo(() => {
        if (filters.priceFilter) return filters.priceFilter;

        let result = boxes;

        if (filters.saveurs.length > 0) {
            result = result.filter((menu) =>
                menu.saveurs.some((s) => filters.saveurs.includes(s))
            );
        }

        if (filters.excludeCalifornia) {
            result = result.filter(
                (menu) =>
                    !menu.aliments.some(
                        (a) => a.nom === "California Saumon Avocat"
                    )
            );
        }

        return result;
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
                onPriceFilter={handlePriceFilter}
            />

            <div style={{ flex: 1 }}>
                <Accueil menus={filteredMenus} />
            </div>

            <Footer />
        </div>
    );
}

export default App;

import { useEffect, useState } from "react";

export default function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://sheetdb.io/api/v1/6apthx3gqbxx8")
            .then(res => res.json())
            .then(data => {

                if (!Array.isArray(data)) {
                    console.error("API did not return array:", data);
                    return;
                }

                const formatted = data
                    .filter(p => p.status === "active")
                    .map(p => ({
                        ...p,
                        fragrance: p.fragrance?.trim(),
                        waxType: p.waxType?.trim(),
                        price: Number(p.price),
                        originalPrice: Number(p.originalPrice),
                        stock: p.stock === "TRUE",
                        images: p.images ? p.images.split(",") : [],
                        features: p.features ? p.features.split(",") : []
                    }));

                setProducts(formatted);
            })
            .catch(err => console.error("API Error:", err));

    }, []);

    return products;
}
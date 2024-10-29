import { Box, Stack, Typography } from "@mui/material"
import ProductItem from "../components/items/product-item"
import { useRef } from "react";

function Product() {
    const containerRef = useRef<HTMLDivElement>(null);
    const handleWheel = (e: React.WheelEvent) => {
        if (containerRef.current) {
            e.preventDefault();
            containerRef.current.scrollLeft += e.deltaY;
        }
    };
    return (
        <>
            <Stack sx={{ padding: '10px 70px' }}>
                <Typography variant="h4" sx={{ color: 'secondary.main', m: '5px 0 20px 0' }}>Clothes</Typography>
                <Box ref={containerRef} onWheel={handleWheel} sx={{ display: "flex", gap: "13px", overflowX: "auto", whiteSpace: "nowrap" }}>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </Box>
            </Stack>
            <Stack sx={{ padding: '10px 70px' }}>
                <Typography variant="h4" sx={{ color: 'secondary.main', m: '5px 0 20px 0' }}>Jacket</Typography>
                <Box ref={containerRef} onWheel={handleWheel} sx={{ display: "flex", gap: "13px", overflowX: "auto", whiteSpace: "nowrap" }}>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </Box>
            </Stack>
            <Stack sx={{ padding: '10px 70px', mb: 5 }}>
                <Typography variant="h4" sx={{ color: 'secondary.main', m: '5px 0 20px 0' }}>Technology</Typography>
                <Box ref={containerRef} onWheel={handleWheel} sx={{ display: "flex", gap: "13px", overflowX: "auto", whiteSpace: "nowrap" }}>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </Box>
            </Stack>
        </>
    )
}

export default Product
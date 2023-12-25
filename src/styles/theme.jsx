'use client';
import { createTheme } from "@mui/material";

const ligthTheme = createTheme({
    palette:{
        mode: "light",
    }
});

const darkTheme = createTheme({
    palette:{
        mode: "dark",
        background: {
            default: "#121212",
            paper: "#1e1e1e"
        }
    }
});

export {
    ligthTheme,
    darkTheme
}
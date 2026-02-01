import type { Metadata } from "next";
import { Inter, Playfair_Display, Pacifico } from "next/font/google";

import { Box, Container } from "@mui/material";
import LayoutClient from "./components/LayoutClient";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Textilslöjd med Mei - Textilslöjdsblogg",
  description: "En blogg om textilslöjd, pedagogik och kreativitet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body
        className={`${inter.className} ${playfair.className} ${pacifico.variable}`}
      >
        <LayoutClient>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <Container
              component="main"
              maxWidth="lg"
              sx={{
                flexGrow: 1,
                py: 4,
                mt: 2,
              }}
            >
              {children}
            </Container>
            <Box
              component="footer"
              sx={{
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: "primary.main",
                color: "white",
                textAlign: "center",
              }}
            >
              © {new Date().getFullYear()} Textilslöjd med Mei - Alla
              rättigheter förbehållna
            </Box>
          </Box>
        </LayoutClient>
      </body>
    </html>
  );
}

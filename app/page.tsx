"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import BrushIcon from "@mui/icons-material/Brush";
import SchoolIcon from "@mui/icons-material/School";
import CardItem from "./components/CardItem";

const projects = [
  {
    title: "3b Arvid",
    description: "Handdocka",
    image: "/img/3b Arvid.jpg",
  },
  {
    title: "3b Clint",
    description: "Handdocka",
    image: "/img/3b clint.jpg",
  },
  {
    title: "3b Milla",
    description: "Handdocka",
    image: "/img/3b Milla.jpg",
  },
  {
    title: "5a Line",
    description: "Lappteknik",
    image: "/img/5a Line.jpg",
  },
  {
    title: "5a Sophia",
    description: "Lappteknik",
    image: "/img/5a Sophia.jpg",
  },
];

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          p: 6,
          mb: 6,
          textAlign: "center",
          backgroundColor: "background.paper",
          borderRadius: 2,
          backgroundImage: "linear-gradient(to right, #FAF0E6, #FFF8DC)",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: "primary.main",
            fontFamily: "var(--font-pacifico), cursive",
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "3rem",
              xl: "3.5rem",
            },
          }}
        >
          Välkommen till textilslöjd med Mei
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Utforska textilslöjdens värld genom kreativa projekt, pedagogiska tips
          och inspiration
        </Typography>
      </Paper>

      {/* Features */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid sx={{ xs: 12, md: 4 }}>
          <Box sx={{ textAlign: "center", p: 3 }}>
            <LocalFloristIcon
              sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
              Kreativitet
            </Typography>
            <Typography>
              Utveckla dina kreativa färdigheter genom traditionella och moderna
              slöjdtekniker
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ xs: 12, md: 4 }}>
          <Box sx={{ textAlign: "center", p: 3 }}>
            <SchoolIcon sx={{ fontSize: 60, color: "secondary.main", mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Pedagogik
            </Typography>
            <Typography>
              Lärarresurser och planeringar för slöjdundervisning i skolan
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ xs: 12, md: 4 }}>
          <Box sx={{ textAlign: "center", p: 3 }}>
            <BrushIcon sx={{ fontSize: 60, color: "primary.light", mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Inspiration
            </Typography>
            <Typography>
              Få inspiration från elevarbeten och delade projekt
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Featured Projects */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Utvalda projekt
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: { xs: "center", md: "center", lg: "flex-start" },
        }}
      >
        {projects.map((project, index) => (
          <Grid
            sx={{ xs: 12, md: 4, display: "flex", justifyContent: "center" }}
            key={index}
          >
            <CardItem
              image={project.image}
              title={project.title}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

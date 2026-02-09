import CardItem from "@/app/components/CardItem";
import { Container, Typography, Box, Grid } from "@mui/material";

const projects = [
  {
    title: "3a Joel",
    description: "Handdocka",
    image: "/img/3a Joel.jpg",
  },
    {
    title: "3b Almas pepparkaksgubbe",
    description: "Pepparkaksgubbe",
    image: "/img/3b Almas pepparkaksgubbe.jpg",
  },
  {
    title: "3b Arvids handdocka",
    description: "Handdocka",
    image: "/img/3b Arvids handdocka.jpg",
  },
    {
    title: "3b Arvids pepparkaksgubbe",
    description: "Pepparkaksgubbe",
    image: "/img/3b Arvids pepparkaksgubbe.jpg",
  },
  {
    title: "3b Clints handdocka",
    description: "Handdocka",
    image: "/img/3b Clints handdocka.jpg",
  },
    {
    title: "3b Clints pepparkaksgubbe",
    description: "Pepparkaksgubbe",
    image: "/img/3b Clints pepparkaksgubbe.jpg",
  },
  {
    title: "3b Millas handdocka",
    description: "Handdocka",
    image: "/img/3b Millas handdocka.jpg",
  },
    {
    title: "3b Millas pepparkaksgubbe",
    description: "Pepparkaksgubbe",
    image: "/img/3b Millas pepparkaksgubbe.jpg",
  },
    {
    title: "3b Saimas pepparkaksgubbe",
    description: "Pepparkaksgubbe",
    image: "/img/3b Saimas pepparkaksgubbe.jpg",
  },
];

export default function Ak3Page() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Åk 3
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
              sx={{
                xs: 12,
                sm: 12,
                md: 4,
                display: "flex",
                justifyContent: "center",
              }}
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
    </Container>
  );
}

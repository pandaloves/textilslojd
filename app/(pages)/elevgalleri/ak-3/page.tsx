import CardItem from "@/app/components/CardItem";
import { Container, Typography, Box, Grid } from "@mui/material";

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
];

export default function Ak3Page() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Åk 3
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid sx={{ xs: 12, md: 4 }} key={index}>
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

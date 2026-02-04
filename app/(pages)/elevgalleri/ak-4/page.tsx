import CardItem from "@/app/components/CardItem";
import { Container, Typography, Box, Grid } from "@mui/material";

const projects = [
  {
    title: "4a Heini",
    description: "Broderi",
    image: "/img/4a Heini.jpg",
  },
  {
    title: "4a Hugo",
    description: "Broderi",
    image: "/img/4a Hugo.jpg",
  },
  {
    title: "4a Lilly",
    description: "Broderi",
    image: "/img/4a Lilly.jpg",
  },
];

export default function Ak4Page() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Åk 4
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

import { Container, Typography, Box } from "@mui/material";

export default function Ak4Page() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Åk 4
        </Typography>
        <Typography variant="body1">
          Se elevernas fantastiska slöjdarbeten här...
        </Typography>
      </Box>
    </Container>
  );
}

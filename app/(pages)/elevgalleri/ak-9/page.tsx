import { Container, Typography, Box } from "@mui/material";

export default function Ak9Page() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Åk 9
        </Typography>
        <Typography variant="body1">
          Se elevernas fantastiska slöjdarbeten här...
        </Typography>
      </Box>
    </Container>
  );
}

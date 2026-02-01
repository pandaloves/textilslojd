import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const safetyRules = [
  "Ta det lugnt. Tänk alltid efter vad du gör.",
  "Kontrollera att maskin och tillbehör är hela och fungerar innan du börjar arbeta.",
  "Meddela genast läraren om något går sönder eller saknas.",
  "Håll fingrar, huvud och fötter borta från rörliga maskindelar.",
  "Följ alltid lärarens instruktioner.",
  "Stanna maskinen innan du lämnar den. Rengör maskin och arbetsplats när du är klar.",
  "Bidra till en säker och trivsam arbetsmiljö för alla.",
  "Fråga alltid läraren om du är osäker.",
];

export default function SakerhetISlojden() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 5 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Säkerhet i textilslöjden
        </Typography>

        <Typography variant="body1" color="text.primary" sx={{ mb: 3 }}>
          För att alla ska kunna arbeta tryggt och säkert i slöjdsalen är det
          viktigt att följa reglerna nedan.
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
          <List>
            {safetyRules.map((rule, index) => (
              <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>

                <ListItemText
                  primary={rule}
                  primaryTypographyProps={{
                    fontWeight: 300,
                  }}
                  sx={{ mt: -0.01 }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
}

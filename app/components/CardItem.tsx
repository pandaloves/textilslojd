"use client";

import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function CardItem({ image, title, description }: CardProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          onClick={() => setOpen(true)}
          sx={{
            height: { xs: 220, md: 260 },
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>

          <Typography color="text.secondary">{description}</Typography>
        </CardContent>
      </Card>

      {/* IMAGE PREVIEW MODAL */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xl"
        fullScreen={fullScreen}
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.9)",
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            p: 2,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              backgroundColor: "rgba(255,255,255,0.15)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.3)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              maxHeight: "90vh",
              maxWidth: "95vw",
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}

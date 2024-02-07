import { Box, Container, Link, Toolbar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  const iconsSyle = { color: "white" };
  return (
    <Box
      sx={{
        bgcolor: "#008221",
        position: "absolute",
        p: 4,
        bottom: "0px",
        width: "100%",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 8 }}>
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                ml: 3,
                color: "#fff",
              }}
            >
              Recipes
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "white" }}>
              © 2023 Recipes. All Rights Reserved.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <InstagramIcon sx={iconsSyle}></InstagramIcon>
            <FacebookIcon sx={iconsSyle}></FacebookIcon>
            <LinkedInIcon sx={iconsSyle}></LinkedInIcon>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

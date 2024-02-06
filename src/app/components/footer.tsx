import { Box, Link, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{ bgcolor: "#008221" }}
        className="flex absolute bottom-0 p-5 w-full"
      >
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
        <div></div>
        <div></div>
      </Box>
    </>
  );
}

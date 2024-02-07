import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import RecipeReviewCard from "./card";
import { Recipe } from "../types/recipe";

interface CopmponentProps {
  recpies: Array<Recipe>;
}

export default function Recipes({ recpies }: CopmponentProps) {
  return (
    <Container sx={{ p: 3, pb: 20 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {recpies?.map((recpie) => (
            <Grid key={recpie.id} xs={4}>
              <RecipeReviewCard recipe={recpie}></RecipeReviewCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

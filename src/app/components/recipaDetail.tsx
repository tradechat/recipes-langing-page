import { Recipe } from "../types/recipe";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
interface CopmponentProps {
  recipe: Recipe;
}

export default function RecipeDetail({ recipe }: CopmponentProps) {
  console.log(recipe);

  return (
    <Container>
      <Box sx={{ p: 5 }}>
        <Grid spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
          <Grid item xs={6}>
            <Box>
              <Image
                src={recipe.image}
                alt="recipe image"
                width={500}
                height={500}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography> Test </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

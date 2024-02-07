"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Recipe } from "../types/recipe";
import { useRouter } from "next/navigation";
interface CopmponentProps {
  recipe: Recipe;
}

export default function RecipeReviewCard({ recipe }: CopmponentProps) {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        router.push(`${recipe.id}`);
      }}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
        sx={{ height: 290 }}
        image={recipe.image}
        title={recipe.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {recipe.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

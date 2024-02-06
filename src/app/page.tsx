"use client";

import Image from "next/image";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import RecipeReviewCard from "./components/card";

export default function Home() {
  return (
    <Container sx={{ p: 3, pb: 20 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
          <Grid xs={3}>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

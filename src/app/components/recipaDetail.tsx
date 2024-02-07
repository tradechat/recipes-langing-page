"use client";

import { Recipe } from "../types/recipe";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Container, Rating, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

interface CopmponentProps {
  recipe: Recipe;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function RecipeDetail({ recipe }: CopmponentProps) {
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ p: 5, flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
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
            <Box sx={{ py: 5 }}>
              <Typography variant="h5"> {recipe.name} </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, pt: 1 }}
              >
                <Typography> {recipe.rating} </Typography>
                <Rating
                  name="size-small"
                  defaultValue={2}
                  precision={0.5}
                  value={recipe.rating}
                  size="small"
                />
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 3 }}
              >
                <Typography>Meal Type : {recipe.mealType}</Typography>
                <Typography>Cuisine : {recipe.cuisine}</Typography>
                <Typography>difficulty : {recipe.difficulty}</Typography>
                <Typography>
                  Calories Per Serving : {recipe.caloriesPerServing}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", mt: 5, mb: 20 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#008220",
                },
              }}
              textColor="inherit"
            >
              <Tab label="Ingredients" />
              <Tab label="Instructions" />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {isClient && (
              <ul>
                {recipe.ingredients.map((i: string, index: number) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {isClient && (
              <ul>
                {recipe.instructions.map((i: string, index: number) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            )}
          </CustomTabPanel>
        </Box>
      </Box>
    </Container>
  );
}

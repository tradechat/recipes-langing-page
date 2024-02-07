import Recipes from "./components/recipes";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/recipes");
  const recipes = await response.json();

  return <Recipes recpies={recipes.recipes} />;
}

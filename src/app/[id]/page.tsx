import RecipeDetail from "../components/recipaDetail";

interface CopmponentProps {
  params: any;
}

export default async function Recipe({ params }: CopmponentProps) {
  console.log(params);

  const response = await fetch(`https://dummyjson.com/recipes/${params?.id}`);
  const recipe = await response.json();
  return <RecipeDetail recipe={recipe} />;
}

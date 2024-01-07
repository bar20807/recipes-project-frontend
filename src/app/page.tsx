import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"


interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:3001/recipes')
  //delay response
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {
          recipes.map(
            recipe => (
              <Card key={recipe.id} className="flex flex-col justify-between">
                <CardHeader className="flex-row grap-4 items-center">
                  <Avatar>
                    <AvatarImage src={`/img/${recipe.image}`} alt="recipe-image" />
                    <AvatarFallback>
                      {recipe.title.slice(0,2).toLocaleUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm sm:text-base md:text-lg">
                      {recipe.title}
                    </CardTitle>
                    <CardDescription>
                      {recipe.time} mins to cook
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    {recipe.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button >
                    View Recipe
                  </Button>
                  {
                    recipe.vegan ? <Badge variant="secondary" >Vegan</Badge> : <Badge variant="secondary">No Vegan</Badge>
                  }
                </CardFooter>
              </Card>
            )
          )
        }
      </div>
    </main>
  )
}

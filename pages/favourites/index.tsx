import { Layout } from "@/components/layouts"
import { FavouritePokemons } from "@/components/pokemon"
import { NoFavourites } from "@/components/ui"
import { localFavourites } from "@/utils"
import { Container, Text, Image, Grid, Card } from "@nextui-org/react"
import { NextPage } from "next"
import { useEffect, useState } from "react"


export const FavouritesPage: NextPage = () => {

  const [favouritePokemons, setFavouritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavouritePokemons(localFavourites.pokemons());
  }, []);

  return (
    <Layout title='Listado de favoritos'>

        {
          favouritePokemons.length === 0
          ? ( <NoFavourites/> )
          : ( <FavouritePokemons favouritePokemons={favouritePokemons}/>)
        }
    </Layout>
  )
}

export default FavouritesPage
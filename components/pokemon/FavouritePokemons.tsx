import { Card, Grid } from '@nextui-org/react'
import { FC } from 'react'
import { FavouriteCardPokemon } from './FavouriteCardPokemon'

interface Props {
    favouritePokemons: number[]
}

export const FavouritePokemons: FC<Props> = ({favouritePokemons}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
        {
        favouritePokemons.map( id => (
            <FavouriteCardPokemon id={id} key={id}/>
        ))
        }    
    </Grid.Container>
  )
}

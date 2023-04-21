import { NextPage, GetStaticProps } from 'next'
import { Layout } from '@/components/layouts'
import { pokeApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { Grid} from '@nextui-org/react'
import { PokemonCard } from '@/components/pokemon'

interface Props {
  pokemon: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemon}) => {

  console.log(pokemon);

  return (
    <Layout title='Listado de Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemon.map( (poke) => (
          <PokemonCard pokemon={poke} key={poke.id}/>
        ))}
      </Grid.Container>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemon: SmallPokemon[] = data.results.map((item, i) => ({
    ...item,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemon
    }
  }
}

export default HomePage;

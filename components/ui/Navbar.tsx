import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'

export const Navbar = () => {

  const { theme, isDark } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        paddingRight: '20px',
        backgroundColor: theme?.colors.gray50.value,
    }}>

        <Image 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Icono de la app"
          width={70}
          height={70}
        />

        <Link href="/">
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
        </Link>

        <Spacer css={{flex: 1}}/>

        <Link href="/favourites">
            <Text color="white">Favoritos</Text>
        </Link>
    </div>
  )
}

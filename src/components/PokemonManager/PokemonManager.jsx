import { useState } from 'react';
import { pokemonData } from '../constants/pokemonData';
import { PokemonCard } from '../PokemonCard';
import { TeamMember } from '../TeamMember';
import { TeamTable } from '../TeamTable';
import styles from './PokemonManager.module.css';

export const PokemonManager = () => {
  const [team, setTeam] = useState([]);

  const addPokemon = (p) => {
    setTeam([...team, {...p, count:1} ]);
    console.log("sebetdeki pokemonlar:",team);
    alert(`${p.name} komandaya əlavə olundu!`);
  }


  return (
    <div className={styles.container}>
      <h2>Pokemon siyahisi</h2>
      
      <div className={styles.pokedexSection}>
        {pokemonData.map((pokemon)=>(
          <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={()=> addPokemon(pokemon)}
          />
        ))}
      </div>
    </div>
  );
};
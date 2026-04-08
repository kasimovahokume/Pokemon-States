import { useState } from 'react';
import { pokemonData } from '../constants/pokemonData';
import { PokemonCard } from '../PokemonCard';
import { TeamMember } from '../TeamMember';
import { TeamTable } from '../TeamTable';
import styles from './PokemonManager.module.css';

export const PokemonManager = () => {
  const [team, setTeam] = useState([]);
  const [bgClass, setBgClass] = useState('');

  const addPokemon = (p) => {
    const isExisting = team.find((m) => m.id === p.id);
    const soundName = p.name.toLowerCase();
  const audio = new Audio(`/assets/sounds/${soundName}.mp3`);
  
  audio.play().catch(error => {
    console.error("Səs faylı tapılmadı:", soundName, error);

    new Audio('/assets/sounds/pika.mp3').play();
  });
  setBgClass(p.type.toLowerCase());

    if (isExisting) {
      alert(`Bu Pokemon artıq siyahıdadır!`);
      return; 
    }

    
    setTeam([...team, { ...p, count: 1 }]);
    
  };

  const increaseCount = (id) => {
    setTeam((prevTeam) =>
      prevTeam.map((m) =>
        m.id === id ? { ...m, count: m.count + 1 } : m
      )
    );
  };


  const decreaseCount = (id) => {
    setTeam((prevTeam) =>
      prevTeam.map((m) =>
        m.id === id ? { ...m, count: Math.max(1, m.count - 1) } : m
      )
    );
  };


  const removePokemon = (id) => {
    setTeam((prevTeam) => prevTeam.filter((m) => m.id !== id));
  };

 return (
    <div className={styles.container}>
      <div className={styles.pokedexSection}>
        {pokemonData.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={() => addPokemon(pokemon)}
          />
        ))}
      </div>

      <hr className={styles.divider} />

      <div className={styles.teamSection}>
        <div className={styles.teamList}>
          {team.map((member) => (
            <TeamMember
              key={member.id}
              member={member}
              onIncrease={() => increaseCount(member.id)} 
              onDecrease={() => decreaseCount(member.id)} 
              onRemove={() => removePokemon(member.id)}   
            />
          ))}
        </div>
      </div>
      <TeamTable team={team} />
    </div>
  );
};
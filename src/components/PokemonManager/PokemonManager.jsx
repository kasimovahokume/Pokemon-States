import { useState } from 'react';
import { pokemonData } from '../constants/pokemonData';
import { PokemonCard } from '../PokemonCard';
import { TeamMember } from '../TeamMember';
import { TeamTable } from '../TeamTable';
import styles from './PokemonManager.module.css';

export const PokemonManager = () => {
  // Komandanı (sebeti) burada saxlayırıq
  const [team, setTeam] = useState([]);

  // 1. Pokemon Əlavə Etmə Məntiqi (Sənin yazdığın addPokemon-un təkmilləşmiş versiyası)
  const addPokemon = (p) => {
    const isExisting = team.find((m) => m.id === p.id);

    if (isExisting) {
      // YALNIZ 2-ci dəfə basanda bu alert çıxacaq
      alert(`Bu Pokemon artıq siyahıdadır! Sayı dəyişmək üçün aşağıdakı "+" düyməsindən istifadə edin.`);
      return; 
    }

    // İlk dəfə basanda ALERT OLMADAN birbaşa əlavə edirik
    setTeam([...team, { ...p, count: 1 }]);
    
    // Konsolda yoxlamaq üçün saxlaya bilərsən
    console.log(`${p.name} əlavə olundu.`);
  };

  // Sayı artırmaq üçün ayrıca funksiya (+ düyməsi üçün)
  const increaseCount = (id) => {
    setTeam((prevTeam) =>
      prevTeam.map((m) =>
        m.id === id ? { ...m, count: m.count + 1 } : m
      )
    );
  };

  // Sayı azaltmaq üçün (- düyməsi üçün)
  const decreaseCount = (id) => {
    setTeam((prevTeam) =>
      prevTeam.map((m) =>
        m.id === id ? { ...m, count: Math.max(1, m.count - 1) } : m
      )
    );
  };

  // 3. Pokemonu Tamamilə Silmə Funksiyası
  const removePokemon = (id) => {
    setTeam((prevTeam) => prevTeam.filter((m) => m.id !== id));
  };

 return (
    <div className={styles.container}>
      {/* 1. Pokemon Kartları Siyahısı */}
      <div className={styles.pokedexSection}>
        {pokemonData.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={() => addPokemon(pokemon)} // Kartdakı düymə
          />
        ))}
      </div>

      <hr className={styles.divider} />

      {/* 2. Səbət (Team) Hissəsi */}
      <div className={styles.teamSection}>
        <div className={styles.teamList}>
          {team.map((member) => (
            <TeamMember
              key={member.id}
              member={member}
              onIncrease={() => increaseCount(member.id)} // Səbətdəki + düyməsi
              onDecrease={() => decreaseCount(member.id)} // Səbətdəki - düyməsi
              onRemove={() => removePokemon(member.id)}   // Səbətdəki Remove düyməsi
            />
          ))}
        </div>
      </div>

      {/* 3. Statistika Cədvəli */}
      <TeamTable team={team} />
    </div>
  );
};
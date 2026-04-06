import PropTypes from 'prop-types';
import { ButtonCustom } from '../ButtonCustom';
import styles from './PokemonCard.module.css';
import { getPokemonImageUrl } from '../helpers/PokemonHelper'; 

export const PokemonCard =({pokemon,onAdd})=>{
  const imgSrc = getPokemonImageUrl(pokemon.id)

  return(
    <div className={styles.card}>
      {/* 1. Arxa fondakı dumanlı effekt (Blurer) */}
      <div className={styles.blurer}></div>

      {/* 2. Arxa fondakı rəngli animasiyalı "blob"lar */}
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={`${styles.blob} ${styles.blob3}`}></div>
      <div className={`${styles.blob} ${styles.blob4}`}></div>

      {/* 3. Əsas məzmun (Content) */}
      <div className={styles.content}>
        <img 
          src={imgSrc} 
          alt={pokemon.name} 
          className={styles.pokemonImage} 
        />
        <h3 className={styles.pokemonName}>{pokemon.name}</h3>
        <p className={styles.pokemonType}>Type: {pokemon.type}</p>
        
        <div className={styles.addButton}>
          <ButtonCustom 
            text="Add to Team" 
            variant="add" 
            onClick={onAdd} 
          />
        </div>
      </div>
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  onAdd: PropTypes.func.isRequired
}
import PropTypes from 'prop-types';
import { ButtonCustom } from '../ButtonCustom';
import styles from './TeamMember.module.css';
import { getPokemonImageUrl } from '../helpers/PokemonHelper';


export const TeamMember = ({member, onRemove, onIncrease, onDecrease}) => {

  const imgSrc = getPokemonImageUrl(member.id);

  return(
    <div className={styles.memberRow}>
      <div className={styles.pokemonInfo}>
        <img src={imgSrc} className={styles.miniImg} alt={member.name} />
        <span className={styles.name}>{member.name}</span>
      </div>
      
      <div className={styles.controls}>
        <ButtonCustom text="-" variant="minus" onClick={onDecrease} />
        <span className={styles.countText}>{member.count}</span>
        <ButtonCustom text="+" variant="plus" onClick={onIncrease} />
        <ButtonCustom text="Remove" variant="remove" onClick={onRemove} />
      </div>
    </div>
  )
}

TeamMember.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired
} 
import PropTypes from 'prop-types';
import { ButtonCustom } from '../ButtonCustom';
import styles from './TeamMember.module.css';


export const TeamMember = ({member, onRemove}) => {

  return(
    <div>
      <span>{member.name} (x{member.count})</span>
      <ButtonCustom
      text="Remove"
      variant="remove"
      onClick={onRemove}
      />
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






























// export const TeamMember = ({ member, onInc, onDec, onRemove }) => {
//   return (
//     <div className={`${styles.memberRow} ${member.count > 1 ? styles.levelUpAnimation : ''}`} key={member.count}>
//       <span>{member.name} (x{member.count})</span>
//       <div className={styles.controls}>
//         <ButtonCustom text="-" variant="dec" onClick={onDec} />
//         <ButtonCustom text="+" variant="inc" onClick={onInc} />
//         <ButtonCustom text="Remove" variant="remove" onClick={onRemove} />
//       </div>
//     </div>
//   );
// };

// TeamMember.propTypes = {
//   member: PropTypes.object.isRequired,
//   onInc: PropTypes.func.isRequired,
//   onDec: PropTypes.func.isRequired,
//   onRemove: PropTypes.func.isRequired
// };
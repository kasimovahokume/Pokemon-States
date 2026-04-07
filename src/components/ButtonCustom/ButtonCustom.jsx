import PropTypes from "prop-types"
import styles from './ButtonCustom.module.css';

export const ButtonCustom = ({text, onClick,variant='add'})=>{

    const buttonClass = `${styles.gradientButton} ${styles[variant]}`;
    return(
        <button className={buttonClass} onClick={onClick}>
      <span className={styles.gradientText}>{text}</span>
    </button>
    )
}

ButtonCustom.propTypes ={
    text: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['add', 'plus', 'minus', 'remove'])
}
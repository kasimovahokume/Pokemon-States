import PropTypes from "prop-types"
import styles from './ButtonCustom.module.css';

export const ButtonCustom = ({text, onClick,variant})=>{

    return(
        <button
        className={`${styles.btn} ${styles[variant]}`}
        onClick={onClick}
        >
            {text}
        </button>
    )
}

ButtonCustom.protoTypes ={
    text: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    variant: PropTypes.string
}
import styles from './Buttons.module.scss';

interface IButtonAdd {
  children: JSX.Element | string
}

const ButtonAdd = ({children}:IButtonAdd) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default ButtonAdd;

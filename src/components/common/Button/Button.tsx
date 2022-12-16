import type { ButtonPropTypes } from "./Button.types"
import styles from "./Button.module.scss"

const Button: React.FC<React.PropsWithChildren<ButtonPropTypes>> = ({
  children,
  handleClick,
}) => {
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button

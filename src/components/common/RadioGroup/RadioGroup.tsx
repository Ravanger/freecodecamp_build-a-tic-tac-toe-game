import type { RadioGroupPropTypes } from "./RadioGroup.types"
import styles from "./RadioGroup.module.scss"

const RadioGroup: React.FC<RadioGroupPropTypes> = ({
  labelText,
  handleClick,
  values,
  checked,
  name,
  disabled,
}) => {
  return (
    <div className={styles.radioGroup}>
      <span>{labelText}</span>
      <div>
        {values.map((value) => {
          return (
            <label>
              <input
                type="radio"
                name={name}
                value={value}
                onChange={handleClick}
                checked={value === checked}
                disabled={disabled}
              />
              <span>{value}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default RadioGroup

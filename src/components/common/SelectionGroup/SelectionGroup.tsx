import type { SelectionGroupPropTypes } from "./SelectionGroup.types"
import styles from "./SelectionGroup.module.scss"

function SelectionGroup<T>({
  title,
  handleClick,
  values,
  selected,
  disabled,
}: SelectionGroupPropTypes<T>) {
  return (
    <div className={styles.selectionGroup}>
      <span>{title}</span>
      <span>
        {values.map((value) => {
          return (
            <button
              value={value}
              onClick={() => handleClick(value as T)}
              data-selected={value === selected}
              disabled={disabled}>
              {value}
            </button>
          )
        })}
      </span>
    </div>
  )
}

export default SelectionGroup

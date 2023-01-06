export interface SelectionGroupPropTypes<T> {
  title: string
  values: string[]
  selected: string
  handleClick: (value: T) => void
  disabled?: boolean
}

export interface SelectionGroupPropTypes<T = string> {
  title: string
  values: string[]
  selected: string
  handleClick: (value: T) => void
  disabled?: boolean
}

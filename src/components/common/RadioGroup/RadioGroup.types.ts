export interface RadioGroupPropTypes {
  labelText: string
  name: string
  values: string[]
  checked: string
  handleClick: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

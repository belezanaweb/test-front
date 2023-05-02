export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = (props: LabelProps) => {
  return <label className="mb-[5px] block text-sm font-medium text-gray-dark" {...props} />
}

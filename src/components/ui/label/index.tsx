export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = (props: LabelProps) => {
  return <label className="block mb-[5px] text-sm font-medium text-gray-dark" {...props} />
}

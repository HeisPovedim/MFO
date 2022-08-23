export const CustomStyles = {
  option: (provided) => ({
    ...provided,
    transition: 'max-height .2s ease-out'
  }),
  control: (provided) => ({
    ...provided,
    height: "48px",
    minHeight: "48px"
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "13px",
    whiteSpace: 'nowrap'
  })
}
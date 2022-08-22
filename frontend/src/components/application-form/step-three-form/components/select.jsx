import React from 'react'
import Select from 'react-select'

export const SelectComponent = ({ object, placeholder, options, style, onChange, onBlur }) => {
  return (
    <Select
      id="marital_status"
      options={options}
      name="zanyatosty_i_dohody[marital_status]"
      data-index_group=""
      className="education-select"
      classNamePrefix="education-select"
      styles={style}
      isSearchable={false}
      placeholder={placeholder}
      onChange={ (event) => {
        object(event)
        onChange(event.label)
      }}
      onBlur={onBlur}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "#ff662b;",
        },
      })}
    />
  );
}

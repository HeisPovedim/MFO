// REACT
import React from 'react'

// CUSTOM LIBRARIES
import NumberFormat from 'react-number-format'


export const PhoneField = ({ phone, setPhone, onChange, onBlur }) => {
  return(
    <NumberFormat
      type="tel"
      format="+7 (###) ###-####"
      allowEmptyFormatting
      mask="_"
      onBlur={onBlur}
      value={phone}
      onValueChange={(values) => {
        const { formattedValue, value } = values;
        // formattedValue = $2,223
        // value ie, 2223
        setPhone(value)
        onChange(value)
      }}
    />
  )
}
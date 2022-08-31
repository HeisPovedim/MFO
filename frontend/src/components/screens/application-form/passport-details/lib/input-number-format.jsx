// REACT
import React from "react";

// CUSTOM LIBRARIES
import NumberFormat from 'react-number-format'
import { IMaskInput } from 'react-imask'

export const FirstSetUp = ({format, setValue, onChange, onBlur}) => {
  return (
    <NumberFormat
      format={format}
      allowEmptyFormatting
      mask="_"
      onBlur={onBlur}
      onValueChange={(values) => {
        const { value } = values;
        // formattedValue = $2,223
        // value ie, 2223
        setValue(value);
        onChange(value)
      }}
    />
  )
}

export const SecondSetUp = ({type, id, className, format, val, setValue, onChange, onBlur}) => {
  return (
    <IMaskInput type={type} id={id} className={className}
      mask={format} maskChar="_" lazy={false} unmask={true}
      onBlur={onBlur}
      onAccept={ (value) => {
        onChange(value)
        setValue(value)
      }}
      value={val}
    />
  )
}


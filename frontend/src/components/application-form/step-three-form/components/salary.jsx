import React from 'react'
import { IMaskInput } from 'react-imask'

export const Salart = ({ value, onChange, onBlur }) => {
  return(
    <IMaskInput
      type="text"
      mask={Number}
      unmask={true}
      scale={2}
      signed={true}
      thousandsSeparator=" "
      normalizeZeros={true}
      padFractionalZeros={true}
      radix="."
      mapToRadix={[","]}
      onAccept={ (event) => {
        value(event)
        onChange(event)
      }}
      onBlur={onBlur}
      min={0}
    />
  )
}
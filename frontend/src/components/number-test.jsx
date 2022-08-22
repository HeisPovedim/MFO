import React, { useEffect, useState } from "react"
import { useForm, Controller } from 'react-hook-form'

import NumberFormat from 'react-number-format'
import { WarrningError } from "./helper/component/warrning-error"


const NumberTest = (props) => {


  useEffect(() => {
    // phone(phoneNumber)
    // console.log(phoneNumber)
  })


  const [phoneNumber, setPhoneNumber] = useState()


  const {
    formState: { errors },
    control
  } = useForm({
    mode: "all",
    defaultValues: {
      phoneNumber: localStorage.getItem("userPhone"),
      lastName: localStorage.getItem("userLastName"),
      firstName: localStorage.getItem("userFirstName"),
      middleName: localStorage.getItem("userMiddleName"),
      email: localStorage.getItem("userEmail")
    }
  })


  return (
    <>
      <NumberFormat
        type="tel"
        format="+7 (###) ###-####"
        allowEmptyFormatting
        mask="_"
        onBlur={props.onBlur}
        // value={phoneNumber}
        onValueChange={(values) => {
          const { formattedValue, value } = values;
          // formattedValue = $2,223
          // value ie, 2223
          props.phone(formattedValue.toString());
        }}
        onChange={(event) =>
          props.onChange(event.target.value.replace(/[^0-9]/g, ""))
        }
      />
      <WarrningError>
        {errors?.phoneNumber && (
          <p>
            {errors?.phoneNumber?.message ||
              `*Необходимо заполнить поле "Номер телефона"`}
          </p>
        )}
      </WarrningError>
    </>
  )
}
export { NumberTest }
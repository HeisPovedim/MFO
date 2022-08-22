import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { WarrningError } from './helper/component/warrning-error';
import NumberFormat from 'react-number-format'


export const TestNumber = ( props ) => {
  const {
    control,
    formState: { errors }
  } = useForm({
    mode: "all"
  })


  useEffect(() => {
    setPhoneNumber(props.value)
  }, [props.value])


  const [phoneNumber, setPhoneNumber] = useState()


  return (
    <>
      <Controller
        control={control}
        name={props.name}
        rules={{
          required: true,
          minLength: {
            value: 11,
            message: "*Заполните полностью поле телефона",
          },
        }}
        render={({ field: { onChange, onBlur } }) => (
          <>
            <NumberFormat
              type="tel"
              format="+7 (###) ###-####"
              allowEmptyFormatting
              mask="_"
              onBlur={onBlur}
              value={phoneNumber}
              onValueChange={(values) => {
                const { formattedValue, value } = values;
                // formattedValue = $2,223
                // value ie, 2223
                setPhoneNumber(formattedValue.toString());
              }}
              onChange={(event) =>
                onChange(event.target.value.replace(/[^0-9]/g, ""))
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
        )}
      />
    </>
  );
}


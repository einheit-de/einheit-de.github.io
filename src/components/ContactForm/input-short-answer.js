import React from 'react'
import { TextField } from '@mui/material'

import { useShortAnswerInput } from 'react-google-forms-hooks'

export default function ShortAnswerInput({ id }, props) {
  const { register } = useShortAnswerInput(id)
  console.log(props.label)

  return (
    <div>
      <TextField fullWidth={true} variant={"filled"} label={props.label}{...register()} />
    </div>
  )
}

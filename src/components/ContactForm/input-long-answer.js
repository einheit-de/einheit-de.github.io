import React from 'react'
import { TextareaAutosize } from '@mui/material'

import { useLongAnswerInput } from 'react-google-forms-hooks'

export default function LongAnswerInput({ id }) {
  const { register } = useLongAnswerInput(id)

  return (
    <div>
      <TextareaAutosize
        minRows={15}
        style={{ width: "100%" }}
        {...register()} />
    </div>
  )
}

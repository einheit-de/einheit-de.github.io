import React from 'react';
import styles from './styles.module.css';
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks';
import styled from 'styled-components';
import Translate from '@docusaurus/Translate';

import ShortAnswerInput from './input-short-answer';
import LongAnswerInput from './input-long-answer';
import { Button } from '@mui/material';

const Form = styled.form``

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`

const QuestionLabel = styled.h3`
  margin-bottom: 10px;
`

const QuestionHelp = styled.p`
  font-size: 0.8rem;
  color: #5c5c5c;
  margin-top: 0px;
`

const Questions = (props) => {
  return (
    <div>
      {props.JSON.fields.map((field) => {
        const { id } = field

        let questionInput = null
        switch (field.type) {
          // case 'CHECKBOX':
          //   questionInput = <CheckboxInput id={id} />
          //   break
          // case 'RADIO':
          //   questionInput = <RadioInput id={id} />
          //   break
          case 'SHORT_ANSWER':
            questionInput = <ShortAnswerInput id={id} label={field.label}/>
            break
          case 'LONG_ANSWER':
            questionInput = <LongAnswerInput id={id} />
            break
          // case 'RADIO_GRID':
          //   questionInput = <RadioGridInput id={id} />
          //   break
          // case 'CHECKBOX_GRID':
          //   questionInput = <CheckboxGridInput id={id} />
          //   break
          // case 'DROPDOWN':
          //   questionInput = <DropdownInput id={id} />
          //   break
          // case 'LINEAR':
          //   questionInput = <LinearGrid id={id} />
          //   break
        }

        if (!questionInput) {
          return null
        }

        return (
          <QuestionContainer key={id}>
            <QuestionLabel>{field.label}</QuestionLabel>
            {questionInput}
            <QuestionHelp>{field.description}</QuestionHelp>
          </QuestionContainer>
        )
      })}
    </div>
  )
}

export default function ContactForm(props) {
  const form = props.JSON
  const methods = useGoogleForm({form})
  const onSubmit = async (data) => {
    console.log('>>> Here is the data', data)
    await methods.submitToGoogleForms(data)
    alert('Form submitted with success!')
  }

  if (typeof window != "undefined") {
  console.log('>>> Here are the errors!!!', methods.formState.errors)
  }

  return (
    <GoogleFormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        {form.title && (
          <>
            <h1>{form.title}</h1>
            {form.description && (
              <p style={{ fontSize: '.8rem' }}>{form.description}</p>
            )}
          </>
        )}
        <Questions JSON={form}/>
        <Button type='submit'><Translate id="contact.submit.button">Absenden</Translate></Button>
      </Form>
    </GoogleFormProvider>
  )
}

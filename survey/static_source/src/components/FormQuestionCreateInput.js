import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import FormQuestionChoiceCreateInput from './FormQuestionChoiceCreateInput'

export default function FormQuestionCreateInput({
  data,
  index,
  handleQuestionChange,
  handleQuestionChoiceChange,
  handleAddChoices
}) {
  const handleChange = (e) => {
    handleQuestionChange(data.id, e.target.value)
  }
  const handleChoiceChange = (choiceId, text) => {
    handleQuestionChoiceChange(data.id, choiceId, text)
  }
  const addChoices = () => {
    handleAddChoices(data.id)
  }
  return (
    <section>
      <label>
        Question {index} Text:
        <input
          value={data.text}
          onChange={handleChange}
          placeholder="Input Question Text"
          type="text"
          name="question_text"
        />
      </label>
      {
        data.choices.map((item, index) => (
          <FormQuestionChoiceCreateInput
            key={item.id}
            index={index + 1}
            data={item}
            handleChoiceChange={handleChoiceChange}
          />
        ))
      }
      <Button type='dashed' onClick={addChoices}>Add choice</Button>
    </section>
  )
}
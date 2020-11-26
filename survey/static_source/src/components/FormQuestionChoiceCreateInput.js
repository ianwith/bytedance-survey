import React, { useState, useEffect } from 'react'

export default function FormQuestionChoiceCreateInput({ data, index, handleChoiceChange }) {
  const handleChange = (e) => {
    handleChoiceChange(data.id, e.target.value)
  }
  return (
    <section>
      <label>
        Choice {index}:
        <input
          value={data.choice_text}
          onChange={handleChange}
          placeholder="Input Choice Text"
          type="text"
          name="choice_text"
        />
      </label>
    </section>
  )
}

import React, { useState, useEffect } from 'react'
import { Select } from 'antd'

const { Option } = Select;

export default function QuestionDetail({ data, answeredChoice, handleSelectChange }) {
  const onChange = (value) => {
    handleSelectChange(value)
  }
  return (
    <section>
      <h2>{data.question_text}</h2>
      { answeredChoice ? (
        <div>You answered: {answeredChoice.choice_text} </div>
      ) : (
        <Select defaultValue={0} onChange={onChange}>
          <Option value={0}>
            Please select an option
          </Option>
          {
            data.choices.map(item => (
              <Option value={item.id}>
                {item.choice_text}
              </Option>
            ))
          }
        </Select>
      )}
      
    </section>
  )
}

import './FormCreateView.css'
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'antd'
import cuid from 'cuid';
import { post } from '../utils/api'
import FormQuestionCreateInput from '../components/FormQuestionCreateInput'
import FormCreateInput from '../components/FormCreateInput'

export default function FormCreateView() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [questions, setQuestions] = useState([])
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    post('forms/', {
      title,
      description,
      questions
    }).then((data) => {
      history.push(`/${data.id}`)
    })
  }
  const handleTitleChange = (e) => {
    const val = e.target.value
    setTitle(val)
  }

  const handleDescChange = (e) => {
    const val = e.target.value
    setDescription(val)
  }

  const handleQuestionChange = (id, text) => {
    const newQuestions = questions.slice()
    const index = newQuestions.findIndex(item => item.id === id)
    newQuestions[index].question_text = text
    setQuestions(newQuestions)
  }

  const handleQuestionChoiceChange = (id, choiceId, text) => {
    const newQuestions = questions.slice()
    const index = newQuestions.findIndex(item => item.id === id)
    const choices = newQuestions[index].choices
    const newchoices = [...choices]
    const cIndex = newchoices.findIndex(item => item.id === choiceId)
    newchoices[cIndex].choice_text = text
    newQuestions[index].choices = newchoices
    setQuestions(newQuestions)
  }

  const addQuestion = (e) => {
    const newQuestions = questions.concat({
      id: cuid(),
      question_text: '',
      choices: []
    })
    setQuestions(newQuestions)
  }

  const handleAddChoices = (id) => {
    const newQuestions = questions.slice()
    const index = newQuestions.findIndex(item => item.id === id)
    newQuestions[index].choices.push({
      id: cuid(),
      choice_text: ''
    })
    setQuestions(newQuestions)
  }
  return (
    <main>
      <Link to="/">Back to Form List</Link>
      <div className="App--wrap">
        <form onSubmit={handleSubmit}>
          <FormCreateInput
            title={title}
            description={description}
            handleTitleChange={handleTitleChange}
            handleDescChange={handleDescChange}
          />
          {
            questions.map((item, index) => (
              <FormQuestionCreateInput
                key={item.id}
                index={index + 1}
                data={item}
                handleQuestionChange={handleQuestionChange}
                handleQuestionChoiceChange={handleQuestionChoiceChange}
                handleAddChoices={handleAddChoices}
              />
            ))
          }
          <Button type='dashed' onClick={addQuestion}>Add question</Button>
          <div className="FormCreation-submit">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}

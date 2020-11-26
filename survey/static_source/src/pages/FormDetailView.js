import './FormDetailView.css'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'antd'
import cuid from 'cuid'
import { get, post } from '../utils/api'
import QuestionDetail from '../components/QuestionDetail'

export default function FormDetailView() {
  const { id } = useParams()
  const [formData, setFormData] = useState()
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [answers, setAnswers] = useState([])
  const [answered, setAnswered] = useState(false)
  useEffect(() => {
    get(`forms/${id}`)
      .then(data => {
        setFormData(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleSelectChange = (qid, value) => {
    const newAnswers = answers.slice()
    const index = newAnswers.findIndex(item => item.question === qid)
    if (index >= 0) {
      newAnswers[index].choice = value
    } else {
      newAnswers.push({
        question: qid,
        choice: value
      })
    }
    setAnswers(newAnswers)
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value)
  }

  const onSubmit = () => {
    console.log(answers)
    post(`responses/`, {
      form: id,
      user_name: userName,
      user_email: userEmail,
      answers
    })
      .then(data => {
        setAnswered(true)
        setAnswers(data.answers)
        setUserName(data.user_name)
        setUserEmail(data.user_email)
      })
      .catch(error => {
        console.log(error)
      })
  }

  if (!formData) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <main>
      <Link to="/">Back to Form List</Link>
      <section className="App--wrap">
        <div className="Form--header">
          <h1 className="Form--title">{formData.title}</h1>
          <p className="Form--description">{formData.description}</p>
        </div>
        <section>
          <ul>
            {
              formData.questions.map((item, index) => {
                const answer = answers.find(ans => ans.question === item.id)
                let answeredChoice
                if (answered && answer) {
                  answeredChoice = item.choices.find(ans => ans.id === answer.choice)
                }
                return (
                  <li key={item.id}>
                    Question {index + 1}:
                    <QuestionDetail data={item} answeredChoice={answeredChoice} handleSelectChange={(value) => {
                      handleSelectChange(item.id, value)
                    }} />
                  </li>
                )
              })
            }
          </ul>
        </section>

        <section>
          { answered ? (
            <div>
              Answer by {userName},
              contact email {userEmail}
            </div>
          ) : (
            <>
              <label>
                Tell us your name:
                <input
                  value={userName}
                  onChange={handleUserNameChange}
                  placeholder="Input your name"
                  type="text"
                  name="user_name"
                />
              </label>
              <label>
                Tell us your email:
                <input
                  value={userEmail}
                  onChange={handleUserEmailChange}
                  placeholder="Input your email"
                  type="text"
                  name="user_email"
                />
              </label>
            </>
          ) }
        </section>
        { answered ? null : (
          <Button type="primary" block onClick={onSubmit}>Submit answer</Button>
        ) }
      </section>
    </main>
  )
}

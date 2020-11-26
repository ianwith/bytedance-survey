import React, { useState, useEffect } from 'react'
import {
  Link,
  useRouteMatch
} from 'react-router-dom'
import cuid from 'cuid'
import { get } from '../utils/api'

export default function FormListView() {
  let { url, path } = useRouteMatch()
  const [forms, setForms] = useState([])
  useEffect(() => {
    get('form/')
      .then(data => {
        setForms(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <main>
      <a href="create">Create Form</a>
      <div className="App--wrap">
        <ul>
          {
            forms.map(item => 
              <li key={item.id}>
                <Link to={`${url}${item.id}`}>
                  {item.title}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </main>
  )
}

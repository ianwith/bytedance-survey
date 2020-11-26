import React, { useState, useEffect } from 'react'

export default function FormCreateInput({ title, description, handleTitleChange, handleDescChange }) {
  return (
    <section>
      <p className="FormCreation--title">Create Your Form</p>
      <label>
        Form Title:
        <input
          value={title}
          onChange={handleTitleChange}
          placeholder="Input Title"
          type="text"
          name="title"
        />
      </label>
      <label>
        Form Description:
        <input
          value={description}
          onChange={handleDescChange}
          placeholder="Input Description"
          type="text"
          name="description"
        />
      </label>
    </section>
  )
}
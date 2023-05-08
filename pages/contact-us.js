import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'

const ContactUs = () => {
  const [info, setInfo] = useState('')
  const { register, handleSubmit, control, formState } = useForm()
  const onSubmit = data => setInfo(data)
  const { errors } = formState

  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <h4>ContactUs</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            Name
            <span>{errors.name?.message}</span>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'name is required' })}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <span>{errors.email?.message}</span>
            <input
              type="text"
              id="email"
              {...register('email', {
                required: 'email is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'invalid email format',
                },
              })}
            />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message
            <span>{errors.message?.message}</span>
            <textarea
              id="message"
              cols="30"
              rows="10"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
          </label>
        </div>
        <div className="flex gap-4">
          <input type="submit" value="Submit" className="btn" />
          <button>Clear</button>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  )
}

export default ContactUs

import Antispam from '@/components/antispam'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, control, formState, reset } = useForm()
  const { errors } = formState
  const [allowForm, setAllowForm] = useState(false)

  const setPermission = flag => setAllowForm(flag)

  const onSubmit = data => {
    console.log(data)
    axios
      .post('https://bangkokpavilion.co.uk/mailer2_dev', {
        ...data,
        submitToOskars: true,
      })
      .then(res => {
        console.log(res)
        if (res.data === 'Success') setSubmitted(true)
        else setError('message not sent')
      })
      .catch(err => console.log(err))
  }

  const resetForm = e => {
    e.preventDefault()
    reset()
  }

  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <h4>ContactUs</h4>
      {submitted
        ? 'submitted'
        : allowForm && (
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
                    {...register('message', {
                      required: 'Message is required',
                    })}
                  ></textarea>
                </label>
              </div>
              <div className="flex gap-4">
                <input type="submit" value="Submit" className="btn" />
                <button onClick={resetForm}>Clear</button>
              </div>
            </form>
          )}
      {/* <DevTool control={control} /> */}
      {!allowForm && <Antispam setPermission={setPermission} />}
    </div>
  )
}

export default ContactUs

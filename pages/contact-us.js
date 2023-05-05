import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div>ContactUs</div>
      <form>
        <div>
          <label htmlFor="name">
            Name
            <input type="text" id="name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input type="text" id="email" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message
            <textarea id="message" cols="30" rows="10"></textarea>
          </label>
        </div>
      </form>
    </>
  )
}

export default ContactUs

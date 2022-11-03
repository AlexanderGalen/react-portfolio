import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
        <form class="">
          <div className="form-group p-4">
            <label htmlFor="name" className="mb-2">Name</label>
            <input className="form-control mb-4" id="name" type="name" />
            <label htmlFor="email" className="mb-2">Email</label>
            <input className="form-control mb-4" id="email" type="email" />
            <label htmlFor="message" className="mb-2">Message</label>
            <textarea className="form-control mb-4" name="message" id="contactMessage" cols="30" rows="10" placeholder="Input your message"></textarea>
            <button type="button" className="btn form-control btn-success">Send</button>
          </div>
        </form>
    </div>
  )
}

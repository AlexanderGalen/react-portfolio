import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="name" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
            <textarea name="message" id="contactMessage" cols="30" rows="10" defaultValue="Input your message"></textarea>
        </form>
    </div>
  )
}

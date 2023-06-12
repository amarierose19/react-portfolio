import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mlekqezw");
  if (state.succeeded) {
      return <p>I look forward to speaking with you!</p>;
  }
  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder='Name...'
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email...'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Message...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
    </div>
  );
}

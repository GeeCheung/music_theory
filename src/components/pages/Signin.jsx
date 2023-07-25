import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
      <div>
        <h1>Sign into account</h1>
        <p>
          Don't have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <form>
        <div>
          <label>Email Address</label>
          <input
           /*  onChange={(e) => setEmail(e.target.value)} */
            type='email'
          />
        </div>
        <div >
          <label>Password</label>
          <input
           /*  onChange={(e) => setPassword(e.target.value)} */
            type='password'
          />
        </div>
        <button >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signin

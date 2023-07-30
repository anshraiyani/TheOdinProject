import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>route does not exist</h1>
        <Link to='/'>Go back to home</Link>
    </div>
  )
}

export default ErrorPage
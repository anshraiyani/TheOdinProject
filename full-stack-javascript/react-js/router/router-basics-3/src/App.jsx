import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <div>
        <h1>Main page</h1>
        <ul>
          <li>
            <Link to='profile'>Profile Page</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App

import { Routes, Route, Link } from 'react-router'
import HomePage from './pages/Home'
import ContactsPage from './pages/Contacts'
import NewsPage from './pages/News'
import './App.css'

function App() {

  return (
    <div className="app">
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Contacts' element={<ContactsPage/>} />
        <Route path='/News' element={<NewsPage/>} />
      </Routes>
    </div>
  )
}

export default App

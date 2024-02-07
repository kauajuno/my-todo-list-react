import './header.css'

function Header() {
  return (
    <div className="header-container">
      <h1>
        My<span style={{ color: 'white' }}>ToDo</span>List
      </h1>
      <div className="header-container-navigation">
        <a href="">What is this?</a>
        <a href="">Who are we?</a>
      </div>
    </div>
  )
}

export default Header

import './Header.css';

function Header(props) {

  return (
    <header>
      <nav>
      <button onClick={props.GoHome}>Home</button>
      </nav>
    </header>
  )
}

export default Header

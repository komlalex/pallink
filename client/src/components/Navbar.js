import {useState} from 'react';


function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='navbar'>
        <div className='brand-title'>Pallink</div>
        <button className='navbar-toggle' onClick = {() => setShowMenu(!showMenu)}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </button>
        <div className= { showMenu ? "navbar-links active" : "navbar-links"}>
            <ul>
                <li><a href='#f'>Posts</a></li>
                <li><a href='#f'>Chats</a></li>
                <li><a href='#f'>Friends</a></li>
                <li><a href='#f'>Profile</a></li>
                <li><a href='#f'>About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
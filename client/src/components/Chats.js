

const Chats = () => {
    return ( 
        <div>
            <div className="chats-large">
        <div className="directchats">
           <h2>Personal</h2> 
        </div>
        <div className="output">
            <h2>Messages</h2>
            </div>
        <div className="groupchats">
             <h2>Groups</h2>
            </div>
        </div>

        <div className="chats-small">
            <nav>
                <ul>
                    <li><a href="#f">Personal</a></li>
                    <li><a href="#f">Groups</a></li>
                </ul>
            </nav>
            <div className="output">
                Output
            </div>
        </div>
        </div>
    )
}

export default Chats;
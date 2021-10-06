import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'
function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className='joinOuterContainer'>
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input type="text" placeholder='Name' name='name' className="joinInput" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='Room' name='room' className="joinInput mt-20" onChange={e => setRoom(e.target.value)} />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type="submit">Sing In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
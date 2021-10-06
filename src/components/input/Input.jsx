import './Input.css'
function Input({ message, setMessage, sendMessage }) {
    return (
        <div className="form">
            <input type="text" className='input' placeholder='Type a message...' value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
            <button className='sendButton' onClick={e => sendMessage(e)}>Send</button>
        </div>
    )
}

export default Input

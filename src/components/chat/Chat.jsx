import queryString from 'query-string'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import InfoBar from '../info-bar/InfoBar';
import Input from '../input/Input';
import Messages from '../Messages/Messages';
import TextCointainer from '../text-container/TextCointainer';
import './Chat.css'

let socket;

function Chat({ location }) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState([]);
    const [users, setUsers] = useState([])
    const ENDPOINT = 'https://realtime-chat-jm.herokuapp.com'
    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error)
            }
        })
        return () => {
            socket.emit('disconnectchat')
            socket.off()
        }

    }, [location, ENDPOINT])

    useEffect(() => {
        socket.on('message', msg => {
            setMessages([...messages, msg])
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })

    }, [messages])


    const sendMessage = e => {
        e.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage('')) // callback will run if message was sent successfully. And we are getting this callback by server logic
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextCointainer users={users} />
        </div>
    )
}

export default Chat

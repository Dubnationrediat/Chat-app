import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
function App() {
 if(!localStorage.getItem('username')) return <LoginForm></LoginForm>

  return (
    <>
  <ChatEngine
      height='100vh'
      projectID="3d846fa6-9305-4e6d-b5a4-b9b2cbfd5307"
      userName="Rediat"
      userSecret="Rediat@1234"
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
      onNewMesage={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
    </>
  )
}

export default App

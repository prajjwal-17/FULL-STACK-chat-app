import React from 'react'
import { useChatStore } from '../store/useChatStore';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import { useEffect } from 'react';

const ChatContainer = () => {
  const { messages, getMessages, isMessageLoading, selectedUser }=useChatStore();

  
  useEffect(()=>{
      getMessages(selectedUser._id)
  },[selectedUser._id , getMessages])

  if(isMessageLoading) return <div>Loading...</div>


  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader/>
      <p>messages....</p>
      <MessageInput/>
    </div>
  )
}

export default ChatContainer;
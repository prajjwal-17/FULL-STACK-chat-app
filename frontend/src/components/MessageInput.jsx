import React, { useRef, useState } from 'react'
import { useChatStore } from '../store/useChatStore';

const MessageInput = () => {
  
  const [text, setText]=useState("");
  const [imagePreview,setImagePreview]=useState(null);
  const fileInputRef=useRef(null);
  const {sendMessage}= useChatStore();
  

  const handleImageChange=(e)=>{};
  const removeImage=()=>{};
  const handleSendMessage=async(e)=>{};

  return (
    <div>
       Type
    </div>
  )
}

export default MessageInput
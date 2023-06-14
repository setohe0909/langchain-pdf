// pages/chat.tsx

import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/chat', { message: inputValue });
      setChatHistory([...chatHistory, inputValue, response.data]);
      setInputValue('');
    } catch (error) {
      console.error('Error sending chat message:', error);
    }
  };

  return (
    <div>
      <h1>Chatbot Example</h1>
      <div>
        {chatHistory.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;

import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE}/chat`, {
      message: input,
    });
    setResponse(res.data.response);
  };

  return (
    <div>
      <h2>Ask the Medical Chatbot</h2>
      <textarea value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
};

export default Chat;
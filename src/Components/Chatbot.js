import React, { useState } from 'react';
import './Chatbot.css';

const commonQuestions = {
  "What is your name?": "My name is Chatbot.",
  "How are you?": "I'm just a bunch of code, but I'm functioning as expected!",
  "What is the capital of France?": "The capital of France is Paris.",
  "What is 2 + 2?": "2 + 2 is 4.",
  
  // Add more questions and answers as needed
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    const botResponse = commonQuestions[input] || "Sorry, I don't understand that question.";
    const botMessage = { text: botResponse, sender: 'bot' };
    
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;

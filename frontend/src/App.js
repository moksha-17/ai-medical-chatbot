import React from 'react';
import Chat from './components/Chat';
import SymptomChecker from './components/SymptomChecker';
import InfoLookup from './components/InfoLookup';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>AI Medical Chatbot</h1>
      <Chat />
      <hr />
      <SymptomChecker />
      <hr />
      <InfoLookup />
    </div>
  );
}

export default App;
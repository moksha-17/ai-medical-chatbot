import React, { useState } from 'react';
import axios from 'axios';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const checkSymptoms = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE}/symptoms`, {
      symptoms: symptoms.split(',').map(s => s.trim())
    });
    setResult(res.data);
  };

  return (
    <div>
      <h2>Symptom Checker</h2>
      <input
        placeholder="Enter symptom IDs (e.g. s_21, s_98)"
        value={symptoms}
        onChange={e => setSymptoms(e.target.value)}
      />
      <button onClick={checkSymptoms}>Check</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default SymptomChecker;
import React, { useState } from 'react';
import axios from 'axios';

const InfoLookup = () => {
  const [topic, setTopic] = useState('');
  const [info, setInfo] = useState('');

  const fetchInfo = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE}/info?topic=${topic}`);
    setInfo(res.data.info);
  };

  return (
    <div>
      <h2>Medical Info Lookup</h2>
      <input value={topic} onChange={e => setTopic(e.target.value)} />
      <button onClick={fetchInfo}>Search</button>
      <p>{info}</p>
    </div>
  );
};

export default InfoLookup;
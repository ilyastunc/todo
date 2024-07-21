
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("xyz");
  const [message, setMessage] = useState([]);

  const onChangeFunc = (e) =>{
    setText(e.target.value);
  }

  const messageFunc = () => {
    setMessage(prev => [...prev, text]);
    setText('');
  }

  const deleteMessage = (index) => {
    setMessage(prev => prev.filter((msg,i) => i !== index ));
  }

  console.log(message, "message");

  return (
    <>
      <input value={text} onChange={onChangeFunc} type='text' placeholder='Ekle'></input>
      <button onClick={messageFunc}>Ekle</button>
      {
        message?.map((msg,i) => (
        <div key={i}>
          {msg}
          <button onClick={() => deleteMessage(i)}>Sil</button>
        </div>
      ))}
    </>
  );
}

export default App;

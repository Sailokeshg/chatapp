import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
         height="100vh"
         projectID="925381d0-aeb8-4b63-ae8c-6f876f1dbd2b"
         userName="john"
         userSecret="qwerty"
      />
    
    </div>
  );
}

export default App;

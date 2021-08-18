import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
function App() {
  return (
    <div className="App">
      <ChatEngine
         height="100vh"
         projectID="925381d0-aeb8-4b63-ae8c-6f876f1dbd2b"
         userName="john"
         userSecret="qwerty"
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    
    </div>
  );
}

export default App;

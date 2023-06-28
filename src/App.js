 
import './App.css';
import Profile from './Profile';
import Login from './Login';
import ChangeColor from './ChangeColor';
import { useSelector } from 'react-redux';
function App() {
  const   userList = useSelector((state)=>state.userss.value)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <input type="text" placeholder='Eingange something jetzt' />
      <button>
        Click In ordnung Zu Eingange fur ergibnesse
      </button>
      <ChangeColor />
      <Login />
      <Profile />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import RecursiveComponent from './recursive-component'


const styles = [
  {text: 'text1',color: 'red'},
  {text: 'text2',color: 'green'},
  {text: 'text3',color: 'blue'},
  {text: 'text4',color: 'crimson'},
  {text: 'text5',color: 'violet'},
  {text: 'text6',color: 'cyan'},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <RecursiveComponent styles={styles} index={0} ></RecursiveComponent>
      </header>
    </div>
  );
}

export default App;

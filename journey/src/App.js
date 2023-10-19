import './App.css';
import AccountSize from './components/AccountSize';
import Input from './components/Input';
import KeyCard from './components/KeyCard';

function App() {
  return (
    <div className="App">
      <AccountSize  />
      <Input/>
      <div className='card-container'>
        <KeyCard keys="Max Drawdown" value="10% of the account size" />
        <KeyCard keys="profit target" value="5% of the account size" />
        <KeyCard keys="number of trade to reach profit target" value=" to be calcuted" />
        <KeyCard keys="number of trade to reach max drawdown" value=" to be calcuted" />
        <KeyCard keys="number of day to reach max drawdown" value=" to be calcuted" />
        <KeyCard keys="number of day to reach max drawdown" value=" to be calcuted" />
        <KeyCard keys="total loss" value="$calculate total loss" />
        <KeyCard keys="total win" value="$calculate total win" />
        <KeyCard keys="Total" value="$calculate total" />
      </div>
    </div>
  );
}

export default App;

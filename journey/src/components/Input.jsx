import React from 'react';
function Input() {
  return (
    <div className='inputs'>
      <div>
        <label htmlFor="lotSize">Lot Size</label>
        <input type="number" id="lotSize" name="lotSize" />
      </div>
      <div>
        <label htmlFor="takeProfitPip">Take Profit (Pips)</label>
        <input type="number" id="takeProfitPip" name="takeProfitPip" />
      </div>
      <div>
        <label htmlFor="stopLossPip">Stop Loss (Pips)</label>
        <input type="number" id="stopLossPip" name="stopLossPip" />
      </div>
    </div>
  );
}

export default Input;

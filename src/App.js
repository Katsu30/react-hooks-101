import React, { useState } from 'react';

const App = (props) => {
  // 状態の初期化
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  }

  return (
      <div>
        <p>現在の{name}は、{price}円です</p>
        <button onClick={() => setPrice(price + 1)}>+1</button>
        <button onClick={() => setPrice(price - 1)}>-1</button>
        <button onClick={reset}>Reset</button>
        <input value={name} onChange={e => setName(e.target.value)}/>
      </div>
    );
}

// propsを利用する方法もある
App.defaultProps =  {
  name: '',
  price: 1000
}


export default App;

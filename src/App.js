import React, { useState } from 'react';

const App = (props) => {
  // 状態の初期化
  // 下記のように、オブジェクトをuseStateの引数に渡すこともできる
  const [state, setState] = useState(props);
  // 分割代入をして、リファクタリングしても良い
  const { name, price } = state;

  return (
      <div>
        <p>現在の{name}は、{price}円です</p>
        {/* stateを展開してから、該当の値を更新する */}
        <button onClick={() => setState({...state, price: price + 1})}>+1</button>
        <button onClick={() => setState({...state, price: price - 1})}>-1</button>
        <button onClick={() => setState(props)}>Reset</button>
        {/* inputでも同じ */}
        <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
      </div>
    );
}

// propsを利用する方法もある
App.defaultProps =  {
  name: '',
  price: 1000
}


export default App;

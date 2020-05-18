import React, { useState } from 'react';

const App = () => {
  // useStateの引数は、配列で返されるので分割代入で「状態名」と「動作名」で分ける
  // 慣習的に第二引数は、set~という名前にする
  const [count, setCount] = useState(0)

  // stateの変更を行いたい場合は、第二引数で選択した関数名を使用する
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  // 前の値を引数に取り、処理を加えることもできる
  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  }
  const decrement2 = () => {
    setCount((previousCount) => previousCount -1);
  }

  // 直接、値を代入するときは特別なプロパティ名などは必要ない
  const reset = () => {
    setCount(0);
  }
  const multiple = () => {
    setCount(count * 2);
  }
  const divided3 = () => {
    if(count % 3 === 0){
      setCount(count / 3);
    }
  }


  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={multiple}>x2</button>
      <button onClick={divided3}>3の倍数のときのみ３で割る</button>
    </div>
  );
}

export default App;

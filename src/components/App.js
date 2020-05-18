import React, { useState, useEffect } from 'react';
// bootstrapのインストールは下記
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  // 状態の初期化
  // 下記のように、オブジェクトをuseStateの引数に渡すこともできる
  const [state, setState] = useState(props);
  // 分割代入をして、リファクタリングしても良い
  const { name, price } = state;

  // componentDidMountedやcomponentDidUpdateの挙動を示す
  useEffect(() => {
    console.log('This is like componentDidMounted or componentDidUpdate.');
  })
  // 第二引数に空の配列を代入すると、componentDidMountedの挙動になる
  useEffect(() => {
    console.log('This is like componentDidMounted.');
  }, [])
  // 第二引数に該当のstateを代入すると、componentDidUpdateの挙動になる
  useEffect(() => {
    console.log('This callback is for name only.');
  }, [name])

  // 通常のレンダリングは上記のuseEffectよりも先に実行される
  // const renderPeriod = () => {
  //   console.log('renderPeriod renders period .')
  //   return '.';
  // }

  return (
      <div className="container-fluid">

        <h4>イベント作成ツール</h4>
        <form>
          <div className='form-group'>
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" />
          </div>
          <div className='form-group'>
            <label htmlFor="formEventBody">タイトル</label>
            <textarea className="form-control" id="formEventBody" />
          </div>
          <button className="btn btn-primary">イベントを作成する</button>
          <button className="btn btn-danger">すべてのイベントを削除する</button>
        </form>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
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

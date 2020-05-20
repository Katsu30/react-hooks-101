import React, { useReducer } from 'react';
// bootstrapのインストールは下記
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import AppContext from '../contexts/AppContext';

import EventForm from '../components/EventForm';
import Events from '../components/Events';

const App = (props) => {
  // 第一引数にはreducer、第二引数には空の配列を取る
  // 処理を実行したいタイミングでdispatchを呼ぶ
  const [state, dispatch] = useReducer(reducer, []);

  // Providerの使用方法
  // Valueに設定した値を子コンポーネントでも使用できる
  // このvalueはuseContextを使用することで、propsを経由しないでデータを取得できる
  // Providerのvalueには、オブジェクトも設定できるので、stateやdispatchを設定することで配下のどこでも使用が可能になる
  return (
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
          <EventForm />
          <Events />
        </div>
      </AppContext.Provider>
    );
}

export default App;

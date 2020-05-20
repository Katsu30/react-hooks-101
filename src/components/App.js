import React, { useEffect, useReducer } from 'react';
// bootstrapのインストールは下記
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import AppContext from '../contexts/AppContext';

import EventForm from '../components/EventForm';
import Events from '../components/Events';
import OperationLogs from  '../components/OperationLogs';

const APP_KEY = 'appWithRedux';

const App = (props) => {
  const appState = localStorage.getItem(APP_KEY);
  // combineReducerを使用したので書き方が変化
  // 配列全てに初期配列を設定して、useReducerに渡してあげる
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  // 第一引数にはreducer、第二引数には空の配列を取る
  // 処理を実行したいタイミングでdispatchを呼ぶ
  const [state, dispatch] = useReducer(reducer, initialState);

  // componentDidUpdateと同様の効果
  useEffect(() => {
    // JSON.stringifyを使用することで、JSONデータを文字列化させる
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state])

  // Providerの使用方法
  // Valueに設定した値を子コンポーネントでも使用できる
  // このvalueはuseContextを使用することで、propsを経由しないでデータを取得できる
  // Providerのvalueには、オブジェクトも設定できるので、stateやdispatchを設定することで配下のどこでも使用が可能になる
  return (
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </AppContext.Provider>
    );
}

export default App;

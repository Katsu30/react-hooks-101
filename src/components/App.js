import React, { useReducer } from 'react';
// bootstrapのインストールは下記
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import EventForm from '../components/EventForm';
import Events from '../components/Events';

const App = (props) => {
  // 第一引数にはreducer、第二引数には空の配列を取る
  // 処理を実行したいタイミングでdispatchを呼ぶ
  const [state, dispatch] = useReducer(reducer, []);

  return (
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>
    );
}

export default App;

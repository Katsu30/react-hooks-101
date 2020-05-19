import React, { useState, useReducer } from 'react';
// bootstrapのインストールは下記
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import Event from '../components/Event';

const App = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // 処理を実行したいタイミングでdispatchを呼ぶ
  const [state, dispatch] = useReducer(reducer, []);

  const addEvent = (e) => {
    e.preventDefault();

    // dispatchをここで呼ぶ
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    // テキストボックスの初期化
    setTitle('');
    setBody('');
  }

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('すべてのイベントを本当に削除しても良いですか？');
    if (result) {
      dispatch({
        type: 'DELETE_ALL_EVENTS',
      });
    }
  }

  const unCreatable = title === '' || body === '';


  return (
      <div className="container-fluid">

        <h4>イベント作成ツール</h4>
        <form>
          <div className='form-group'>
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
          </div>
          <div className='form-group'>
            <label htmlFor="formEventBody">内容</label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={(e) => {setBody(e.target.value)}}/>
          </div>
          <button className="btn btn-primary"　onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
          <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>すべてのイベントを削除する</button>
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
            { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          </tbody>
        </table>
      </div>
    );
}

export default App;

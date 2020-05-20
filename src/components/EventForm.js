import React, { useState, useContext } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS} from '../actions';
import AppContext from '../contexts/AppContext';

const EventForm = () => {
  // propsからuseContextを使用しての受け取りにリファクタリング
  // App.jsでAppContextのProviderにデータが設定されているので、useContextを使用してデータの受け渡しが可能
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // 処理を実行したいタイミングでdispatchを呼ぶ
  // App.jsのstateとは異なるので、リストが表示されない
  // const [state, dispatch] = useReducer(reducer, []);
  // App.jsと共通のstateを使用するためには、propsでstateとreducerを渡してやる必要がある

  const addEvent = (e) => {
    e.preventDefault();

    // dispatchをここで呼ぶ
    dispatch({
      type: CREATE_EVENT,
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
        type: DELETE_ALL_EVENTS,
      });
    }
  }

  const unCreatable = title === '' || body === '';


  return (
    <>
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
    </>
  );
}

export default EventForm;
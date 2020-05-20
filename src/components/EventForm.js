import React, { useState, useContext } from 'react';

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

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

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました',
      operatedAt: timeCurrentIso8601()
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

      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'すべてのイベントを削除しました',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const unCreatable = title === '' || body === '';

  const deleteAllOperationLogs = e => {
    e.preventDefault();

    const result = window.confirm('すべての操作ログを削除してもいいですか？');

    if(result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      })
    }
  }


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
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>すべてのイベントを削除する</button>
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>すべての操作ログを削除する</button>
      </form>
    </>
  );
}

export default EventForm;
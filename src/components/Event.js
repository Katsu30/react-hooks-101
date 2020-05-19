import React from 'react';

// コンポーネントを作成したら、dispatchも同様に引っ張ってくる
const Event = ({ event, dispatch }) => {
    const id = event.id;
    const handleClickDeleteButton = () => {
      const result = window.confirm(`イベント(${id})を本当に削除しても良いですか？`);
      if(result){
        dispatch({ type: 'DELETE_EVENT', id});
      }
    }

    return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
    )

}

export default Event;
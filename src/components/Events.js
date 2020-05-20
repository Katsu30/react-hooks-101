import React, { useContext } from 'react';
import Event from '../components/Event';
import AppContext from '../contexts/AppContext';

// stateとreducerを共通にするために、propsで取得する
const Events = () => {

  // useContextを使用することで、propsを使用しないでもデータの受け渡しが可能になる
  // 中継ぎのコンポーネントの記述量が減るため、useContextの使用効果は高い
  const { state } = useContext(AppContext);
  return (
    <>
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
          { state.events.map((event, index) => (<Event key={index} event={event} />))}
        </tbody>
      </table>
    </>
  );
}

export default Events;
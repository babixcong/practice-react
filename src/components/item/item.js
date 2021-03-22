import React from 'react';

function Item(props) {
	return (
		<div className="todo__item">
      <div className="row">
        <div className="todo-name">
        	<label className="control control--checkbox">{props.name}
          	<input type="checkbox" onChange={props.onClick} checked={props.completed}/>
          	<div className="control__indicator"></div>
        	</label>
        </div>
      	<div className="button-remove">
        <button onClick={props.removeTodo}>Remove</button>
        	{/*<span>-</span>*/}
      	</div>
        </div>
    </div>
	);
}

Item.defaultProps = {
    name: 'To do',
    completed: false,
}
export default Item;

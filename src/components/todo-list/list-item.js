import React from 'react';
import Item from '../item/item';

function ListItem(props) {
	return (
		<div className="todo__list">
		{
			props.listItems.map(item => {
				return <Item key={item.id} completed={item.completed} onClick={()=> props.handleCheckBox(item.id)} name={item.name} removeTodo={() => props.removeTodo(item.id)}/>
			})

		}
      	</div>
	);
}

export default ListItem;

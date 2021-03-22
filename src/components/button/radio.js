import React from 'react';

function Radio(props) {
	return (
		<span className="todo__filter-item">
          <label className="control control--radio">{props.name}
            <input type="radio" name="filter" type={props.type} onClick={() => props.onChangeFilter('SHOW_ALL')} checked={true} />
            <div className="control__indicator"></div>
          </label>
        </span>
	);
}	

export default Radio;
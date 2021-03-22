import React from 'react';

function Filter(props) {
	return (
		<div className="todo__filter">
        <span className="todo__filter-item">
          <label className="control control--radio">Show All
            <input type="radio" name="filter" onChange={() => props.onChangeFilter('SHOW_ALL')} checked={props.type === 'SHOW_ALL'} />
            <div className="control__indicator"></div>
          </label>
        </span>
        <span className="todo__filter-item">
          <label className="control control--radio">Show Completed
            <input type="radio" name="filter" onChange={() => props.onChangeFilter('COMPLETED')} checked={props.type === 'COMPLETED'} />
            <div className="control__indicator"></div>
          </label>
        </span>
        <span className="todo__filter-item">
          <label className="control control--radio">Show Uncompleted
            <input type="radio" name="filter" onChange={() => props.onChangeFilter('UNCOMPLETED')} checked={props.type === 'UNCOMPLETED'} />
            <div className="control__indicator"></div>
          </label>
        </span>
  	</div>
	);
}

Filter.defaultProps = {
      type: 'SHOW_ALL',
}

export default Filter;

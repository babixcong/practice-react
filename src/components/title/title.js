import React from 'react';

function Title(props) {
	return (
		<div className="todos">
			<div className="todos--header">
	          "You've got {props.unCompleted} thing(s) to do"
	        </div>
        </div>
	);
}

export default Title;

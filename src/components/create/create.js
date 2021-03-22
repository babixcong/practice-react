import React from 'react';

class Create extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			create: false,
			title: '',
		};

	}

	openCreate() {
		this.setState({create: true});
	}

	closeCreate() {
		this.setState({
			create: false,
			title: '',
		});	}

	addTodo() {
		if (this.state.title === '') {
			alert('Enter todo name');
			return;
		}
		this.props.addTodo(this.state.title);
		this.closeCreate();
		
	}

	updateChange(e) {
		this.setState({title:e.target.value});
	}

	render() {
		if (this.state.create === false) {
			return (
				<div className="create-todo">
		            <div className="new-button">
		                <button onClick={() => this.openCreate()}>New thing to do</button>
		            </div>
		        </div>
			);
		}

		return (
			<div className="save-todo">
	            <input name="name"	ref={(c) => this.name = c} value={this.state.title} onChange={(e) => this.updateChange(e)} placeholder="Adding todo here"/>
	            <button onClick={() => this.addTodo()}>Save</button>
	            <button onClick={() => this.closeCreate()}>Cancel</button>
	        </div>

		);
	}
}

export default Create;

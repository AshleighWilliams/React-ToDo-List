import React, {Component} from 'react';

/*Importing components from Bootstrap for react.*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';


class App extends Component {
constructor(props) {
	super(props);

	/*Setting up the state.*/
	this.state = {
	userInput : "",
	list:[]
	}
}

/*Setting a user input value that allows user to input text.*/
updateInput(value) {
	this.setState( {
	userInput: value,
	});
}

/*Allow user to add item if user input is not empty.*/
addItem() {
	if(this.state.userInput !== '' ) {
	const userInput = {

		/*Random id used to delete item.*/
		id : Math.random(),

		value : this.state.userInput
	};

	/*Update list*/
	const list = [...this.state.list];
	list.push(userInput);

	/*reset state*/
	this.setState({
		list,
		userInput:""
	});
	}
}

/*deleteItem allows items to be deleted from list.*/
deleteItem(key){
	const list = [...this.state.list];

	/*Filter values.*/
	const updateList = list.filter(item => item.id !== key);

	/*Update the list in state.*/
	this.setState({
	list:updateList,
	});

}

/*Render and return container with row header, input and button. */
render() {
	return(<Container>

		<Row style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontSize: '3rem',
				fontWeight: 'bolder',
				}}
				>TO-DO LIST
			</Row>

		<hr/>
		<Row>
		<Col md={{ span: 5, offset: 4 }}>

		<InputGroup className="mb-3">
		<FormControl
			placeholder="type an item to add to your list. . "
			size="lg"
			value = {this.state.userInput}
			onChange = {item => this.updateInput(item.target.value)}
			aria-label="add something"
			aria-describedby="basic-addon2"
		/>
		<InputGroup.Append>
			<Button
			variant="dark"
			size="lg"
			onClick = {()=>this.addItem()}
			>
			ADD
			</Button>
		</InputGroup.Append>
		</InputGroup>

	</Col>
</Row>
<Row>
	<Col md={{ span: 5, offset: 4 }}>
		<ListGroup>
		{/*Map over the items.*/}
		{this.state.list.map(item => {return(

			<ListGroup.Item variant="dark" action
			onClick = { () => this.deleteItem(item.id) }>
			{item.value}
			</ListGroup.Item>

		)})}
		</ListGroup>
	</Col>
</Row>
	</Container>
	);
}
}

/*Export the code.*/
export default App;
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import {
	Form,
	ControlLabel,
	Button,
	FormGroup,
	InputGroup,
	FormControl
} from 'react-bootstrap';
import { Field, actions } from 'react-redux-form';
import { OPTION } from '../constants/tasks.js';

const Priority = OPTION.priority;

const TaskInput = class extends React.Component{
	render(){
		let {dispatch, formForm:{fields}} = this.props;
//{fields.task.validity.length?'error':''}
		return (
			<Form>
				<FormGroup validationState={fields.task.errors.length?'error':''}>
					<ControlLabel>{fields.task.errors.length}</ControlLabel>
					<Field
						model="form.task">

						<FormControl
							ref="input"
							onBlur={this.validateInputValue.bind(this)}
							onChange={(e)=>{dispatch(actions.change('form.task', e))}}
							type="text" />
					</Field>

				</FormGroup>

				<FormGroup>
					<FormControl ref="select" componentClass="select" placeholder="select">
						{
							_.map(Priority, (item, index)=>{
								return <option key={index} value={item.value}>{item.name}</option>
							})
						}
					</FormControl>
				</FormGroup>

				<div style={{textAlign:'right'}}>
					<Button bsStyle="info" onClick={this.add.bind(this)}> Add Task </Button>
				</div>

			</Form>
		);
	}

	add(){
		if(this.props.formForm.fields.task.errors.length){
			return false;
		}

		this.props.addButtonCallback && this.props.addButtonCallback(this.getValue());

		//reset input
		findDOMNode(this.refs.input).value = '';
		this.props.dispatch(actions.reset('form.task'));

		findDOMNode(this.refs.select).value = Priority[0].value;
	}

	getValue(){

		return {
			text : this.props.form.task,
			priority : findDOMNode(this.refs.select).value
		};
	}

	validateInputValue(){

		this.props.dispatch(actions.validateErrors('form.task', {
			length : (v)=>v.length<5 && 'Input value length is too short.'
		}))
	}

};

TaskInput.propTypes = {};

export default TaskInput;
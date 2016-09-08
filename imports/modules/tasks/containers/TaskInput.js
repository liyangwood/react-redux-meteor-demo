import { connect } from 'react-redux';
import TaskInput from '../components/TaskInput';

const mapState = (store) => {
	return {
		form : store.form,
		formForm : store.formForm
	}
};
const mapDispatch = (dispatch, getState) => {
	return {
		dispatch
	}
};

export default connect(
	mapState, mapDispatch
)(TaskInput)

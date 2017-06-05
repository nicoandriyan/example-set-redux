import axios from 'axios';

export const fetchToday = () => {
	return (dispatch) => {
		axios.get("http://localhost:4000/todos")
			.then((response)=>{
				dispatch({type:"FETCH_TODAY_FULFILLED", payload: response.data})
			})
			.catch((err)=>{
				dispatch({type:"FETCH_TODAY_REJECTED", payload: err})
			})
	}
}

export const addToday = (id, task) => {
	return {
		type: "ADD_TODAY",
		payload: {
			id, task,
		}
	}
}
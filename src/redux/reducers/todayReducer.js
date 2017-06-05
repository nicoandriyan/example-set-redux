const initialState = {
	todays:[],
	fetching: false, 
	fetched: false,
	error: null,
};

export default (state = initialState, action) => {
	switch(action.type){
		case "FETCH_TODAY": {
			return {
				...state, fething: true
			}
		}
		case "FETCH_TODAY_REJECTED": {
			return {
				...state, fetching: false, error: action.payload
			}
		}
		case "FETCH_TODAY_FULFILLED":{
			return{
				...state, fetching: false, fetched: true, todays: action.payload
			}
		}
		case "ADD_TODAY":{
			return{
				...state, todays: [...state.todays, action.payload],
			}
		}
		default:
			return state;
	}
};
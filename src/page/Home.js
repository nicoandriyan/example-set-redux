import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchToday } from './../redux/actions';

class Home extends Component {
	componentWillMount(){
		this.props.dispatchFetchToday();
		console.log('hai');
	}
	render() {
		return (
			<div className="main-container">
				<div className="p1020 home">
					<div className="row">
						<div className="col-md-10">
							<section className="content">
								<h3>Today</h3>
								{
									this.props.todays.todays.map(
										(today)=>{
											return (
												<div key={today.id} className="item">
													{today.todo}
												</div>
											);
										}
									)
								}
							</section>
						</div>
						<div className="col-md-2">
							<section className="control">
								<button type="button" className="btn btn-primary">Add Task</button>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return{
		todays: state.today,
	}
}

const matchDispatchToProps = (dispatch)=>{
	return bindActionCreators({
		dispatchFetchToday: fetchToday,
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
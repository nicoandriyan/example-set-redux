import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div className="nav-container">
				<NavLink exact activeClassName="active" to="/inbox">
					<div className="flex space-between p1020">
						<div><i className="fa fa-inbox"></i>Inbox</div>
						<div>3</div>
					</div>
				</NavLink>
				<NavLink exact activeClassName="active" to="/">
					<div className="flex space-between p1020">
						<div><i className="fa fa-calendar-o"></i>Today</div>
						<div>3</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/next-7-days">
					<div className="flex space-between p1020">
						<div><i className="fa fa-calendar-plus-o"></i>Next 7 Days</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/project">
					<div className="flex space-between p1020">
						<div><i className="fa fa-list-alt"></i>Project</div>
					</div>
				</NavLink>
			</div>
		);
	}
}

export default Nav;
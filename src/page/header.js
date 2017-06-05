import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header-container">
			<div className="container-fluid flex">
				<div>
					<img src="https://s-media-cache-ak0.pinimg.com/736x/db/02/98/db02984f31a38f2c914fd50c935f609a.jpg" alt=""/>
				</div>
				<div>
					<p>Hai,</p><p>Allan Richards</p>
				</div>
			</div>
			</div>
		);
	}
}

export default Header;
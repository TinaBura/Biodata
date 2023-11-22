"use strict";

class App extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div> 
				<headerPage />
				<NavbarPage />
				<div class="row">
					<SidebarPage />
					<ContentPage />
				</div>
				<FooterPage />
			</div>
		);
	}
}
//render element to Dom
ReactDOM.render(<App />, document.getElementById("app"));
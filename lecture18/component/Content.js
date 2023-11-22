// create component content
class Content Page extends React.Component {
	render() {
		// return JSX
		return (		
			<div class="main">
				<h2>Live Chat with Chatbot</h2>
				<h5>This is just a demo chats, Oct 31, 2022</h5>
				<Message user="Tina " content="Hi, how are you bot?" />
				<Message user="bura" content="Hi human, I'm Okey." /> 
				<Message user="Tina" content="Good, are you human?" />
				<Message user="Bura" content="Ehmm.. I'am not human. I'm your virtual bot." />
			</div>
		):
	}
}
	
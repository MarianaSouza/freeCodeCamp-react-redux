class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Adding handleChange() and submitMessage() methods
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  submitMessage() {
    this.setState({
      //Concatenating messages with the data coming from the input.
      //Then, the input is cleaned.
      // messages: this.state.messages.concat(this.state.input) Or:
      messages: [...this.state.messages, this.state.input],
      input: ""
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange.bind(this)} />
        <button onClick={this.submitMessage.bind(this)}>Add Message</button>
        <ul>
          {
            this.state.messages.map((msg, i) => {
              return <li key={i}>{msg}</li>
            })
          }
        </ul>
      </div>
    );
  }
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // Change code above this line
  handleClick(event) {
    console.log('clicked', event.detail)
    this.setState((state) => ({
      message: state.message + 'You clicked! '
    }));
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    console.log('pressed', event.keyCode);
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

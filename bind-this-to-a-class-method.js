//In addition to setting and updating state, you can also define methods for your component class. 
//A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. 
//There are a few ways to allow your class methods to access this.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

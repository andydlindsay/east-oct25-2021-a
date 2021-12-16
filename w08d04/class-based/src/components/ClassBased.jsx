import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      interviewer: props.interviewer || null,
      name: 'Alice',
      interval: null
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    // runs only once
    // only when the component is first added to the DOM
    // fires after first render
    // set up socket connections, retrieve data from API, set up timers
    console.log('the component has mounted');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 1000);

    // clearInterval(interval);
    this.setState({ interval });
  };

  componentDidUpdate(prevProps, prevState) {
    // fires any time state or props change
    // fires on every render

    // if (prevProps.userId !== this.props.userId) {
    //   axios.get(`/user/${this.props.userId}`)
    // }
    console.log('the component has updated');
  };

  componentWillUnmount() {
    // cleanup
    // severing socket connections, cancelling timers/intervals
    console.log('the component will be unmounted');
    clearInterval(this.state.interval);
  };

  // clickHandler = () => {
  clickHandler() {
    // this is BAD
    // this.state.counter = this.state.counter + 1;

    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    // const {someProp} = this.props;
    return (
      <div>
        <h2>This is the class-based component</h2>
        <h2>{this.props.someProp}</h2>
        <h2>The name is: {this.state.name}</h2>
        <h2>This is the current count: {this.state.counter}</h2>
        <button onClick={() => this.clickHandler()}>Increment</button>
      </div>
    );
  }
}

// const yourComponent = new ClassBased(props);
// yourComponent.props = props;

export default ClassBased;

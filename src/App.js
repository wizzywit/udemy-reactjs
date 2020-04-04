import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Main from './Main'
import LoginForm from './LoginForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "Wisdom",
      last: "Praise",
      microsoftValue: 100,
      twitterValue: 300,
      amazonValue: 200,
      facebookValue: 400,
      values: [
        { 'company': 'Microsoft', 'value': 100 },
        { 'company': 'Twitter', 'value': 300 },
        { 'company': 'Amazon', 'value': 200 },
        { 'company': 'Facebook', 'value': 400 },
      ],
      email: "email@email.com",
      password: "password",
      stockData: []
    }
  }

  componentDidMount() {
    fetch("https://cloud.iexapis.com/stable/ref-data/market/us/exchanges?token=pk_0856aa46e22340c19b5ee28d4f28f7a1")
      .then(response => response.json())
      .then(response => this.setState({
        stockData: response
      }))
  }

  increaseValues() {
    this.setState((prevState) => ({
      microsoftValue: prevState.microsoftValue + 1,
      twitterValue: prevState.twitterValue + 1,
      amazonValue: prevState.amazonValue + 1,
      facebookValue: prevState.facebookValue + 1
    }))
  }

  decreaseValues() {
    this.setState((prevState) => ({
      microsoftValue: prevState.microsoftValue - 1,
      twitterValue: prevState.twitterValue - 1,
      amazonValue: prevState.amazonValue - 1,
      facebookValue: prevState.facebookValue - 1
    }))
  }

  jumbleValues() {
    this.setState(prevState => ({
      microsoftValue: prevState.twitterValue,
      twitterValue: prevState.amazonValue,
      amazonValue: prevState.microsoftValue,
      facebookValue: prevState.amazonValue
    }))
  }

  increaseValues2() {
    this.setState((prevState) => ({
      values: [
        { 'company': 'Microsoft', 'value': prevState.values[0].value + 1 },
        { 'company': 'Twitter', 'value': prevState.values[1].value + 1 },
        { 'company': 'Amazon', 'value': prevState.values[2].value + 1 },
        { 'company': 'Facebook', 'value': prevState.values[3].value + 1 },
      ]
    }))
  }

  decreaseValues2() {
    this.setState((prevState) => ({
      values: [
        { 'company': 'Microsoft', 'value': prevState.values[0].value - 1 },
        { 'company': 'Twitter', 'value': prevState.values[1].value - 1 },
        { 'company': 'Amazon', 'value': prevState.values[2].value - 1 },
        { 'company': 'Facebook', 'value': prevState.values[3].value - 1 },
      ]
    }))
  }

  jumbleValues2() {
    this.setState(prevState => ({
      values: [
        { 'company': 'Microsoft', 'value': prevState.values[1].value },
        { 'company': 'Twitter', 'value': prevState.values[3].value },
        { 'company': 'Amazon', 'value': prevState.values[0].value },
        { 'company': 'Facebook', 'value': prevState.values[2].value },
      ]
    }))
  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.first)
    console.log(this.state.last)

  }

  handleFormUpdate(values) {
    this.setState({
      email: values.email,
      password: values.password
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Stock Data App</h1>
        <Welcome first={this.state.first} last={this.state.last} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>First Name:
            <input type="text" name="first" value={this.state.first} onChange={this.handleChange.bind(this)} />
          </label><br />
          <label>Last Name:
            <input type="text" name="last" value={this.state.last} onChange={this.handleChange.bind(this)} />
          </label><br />
          <button type="submit">Submit</button>
        </form>
        <Main values={this.state.values}
          microsoftValue={this.state.microsoftValue}
          twitterValue={this.state.twitterValue}
          amazonValue={this.state.amazonValue}
          facebookValue={this.state.facebookValue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
          jumble={this.jumbleValues.bind(this)}
          increase2={this.increaseValues2.bind(this)}
          decrease2={this.decreaseValues2.bind(this)}
          jumble2={this.jumbleValues2.bind(this)}
        />
        <LoginForm handleFormUpdate={this.handleFormUpdate.bind(this)} />
        {
          this.state.stockData.map((items) =>
            <div key={items.mic}>
              <h1>{items.longName}</h1>
              <p>The acronym is: {items.mic}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;

import React from 'react'

export default class Main extends React.Component {

    render() {
    return(
        <div>
            <h1>Stock data for today</h1>
            <ul>
                <li>Microsoft: {this.props.microsoftValue}</li>
                <li>Twitter: {this.props.twitterValue}</li>
                <li>Amazon: {this.props.amazonValue}</li>
                <li>Facebook: {this.props.facebookValue}</li>
                <button onClick={this.props.increase}>Increase Stock Values</button>
                <button onClick={this.props.decrease}>Decrease Stock Values</button>
                <button onClick={this.props.jumble}>Jumble Stock Values</button>
            </ul>
            <ul>
                {
                    this.props.values.map((items) => {
                    return <li>{items.company}: {items.value}</li>
                }
                    )
                }
                <button onClick={this.props.increase2}>Increase Stock Values</button>
                <button onClick={this.props.decrease2}>Decrease Stock Values</button>
                <button onClick={this.props.jumble2}>Jumble Stock Values</button>
            </ul>
        </div>
    )
    }
}
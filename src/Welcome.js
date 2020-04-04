import React from 'react'

export default function Welcome(props) {

    const date = new Date()
    const hour = date.getHours()
    return (
        <div>
            <h1>Welcome! {props.first} {props.last}</h1>
            <p>Hours: {hour}</p>
        </div>
    )
}
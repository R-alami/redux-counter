import React from 'react';
import CounterButton from './CounterButton'

// Import connect from react-redux to establich a connection to our store
import { connect } from 'react-redux'


const CounterControls = props => (
    <div>
        <CounterButton store={props.store}>
            <button onClick={() => props.dispatch({type: "DECREASE"})}>
                Decrease
            </button>
        </CounterButton>

        <CounterButton store={props.store}>
            <button onClick={() => props.dispatch({type: "INCREASE"})}>
                Increase
            </button>
        </CounterButton>
    </div>
)

const mapStateToProps = state => { return {number: state}}
export default connect(mapStateToProps)(CounterControls)
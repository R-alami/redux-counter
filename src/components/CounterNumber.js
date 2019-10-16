import React from 'react';


// import connect so we can establish a connection to out store
import { connect } from 'react-redux'


const CounterNumber = props => (
    <div>
        {props.number}
    </div>
)

const mapStateToProps = state => {
    return { number: state}
}

export default connect(mapStateToProps)(CounterNumber)
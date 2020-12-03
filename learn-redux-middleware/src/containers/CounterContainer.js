import React from 'react';
import {connect} from 'react-redux';
// import {increase, decrease} from '../modules/counter';
import {increaseAsync, decreaseAsync} from '../modules/counter'; // 비동기적으로 increase, decrease 실행
import Counter from '../components/Counter';

// const CounterContainer = ({number, increase, decrease}) => {
const CounterContainer = ({number, increaseAsync, decreaseAsync}) => {
    return (
        <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} /> 
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);
import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = { // 초기 state
        number: 0, 
        color: null
    }

    myRef = null; // ref 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor 메서드 실행');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps 메서드 실행');
        if(nextProps.color !== prevState.color) { // 부모 컴포넌트에서 받은 color와 다르다면 state의 color값에 동기화.
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount 메서드 실행');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate 메서드 실행');
        console.log('========= nextProps: ', nextProps, 'nextState: ', nextState); // 확인용
        return nextState.number % 10 !== 4 // 숫자 마지막 자리가 4이면 렌더링하지 않도록 설정(4가 아닐 때 true 반환)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount 메서드 실행');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate 메서드 실행');
        if(prevProps.color !== this.props.color) { // 변화가 일어나기 직전에 color 속성을 snapshot으로 반환해서 ref에 준다.
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate 메서드 실행');
        if(snapshot) {
            console.log('업데이트 전 색상: ', snapshot)
        }
    }

    render() {
        console.log('render 메서드 실행');
        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref = {ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;
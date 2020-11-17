import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus(); // ref 설정 후 this.input이 input DOM 요소를 가리킨다.
    }

    render() {
        return (
            <div>
                <input 
                    ref={(ref) => this.input=ref} // ref 설정
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} // 클릭했을 때 유효하면 success, 아니면 failure. 클릭되지 않으면 공백.
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;
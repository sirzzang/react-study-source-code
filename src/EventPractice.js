import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
    };

    // constructor가 필요 없다.
    // 화살표 함수로 바로 반환한다.

    handleChange = (e) => {
        this.setState({
            message: e.target.value,
        });
    };

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: "",
        });
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="무엇이든 입력하세요."
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;

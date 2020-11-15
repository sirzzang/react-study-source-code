import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => this.scrollBox=ref}/> {/*ref 생성, 이름: scrollBox*/}
                {/*<button onClick={this.scrollBox.scrollToBottom}>*/} {/*undefined 오류*/} 
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    scrollToBottom 메서드
                </button>
            </div>
        );
    }
}

export default App;
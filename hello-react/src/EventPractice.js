import React, { useState } from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        // form 객체 활용.
        username: "",
        message: "",
    });
    const { username, message } = form; // form에 비구조화 할당.
    const onChange = (e) => {
        const nextForm = {
            ...form, // 기존 form 내용 복사
            [e.target.name]: e.target.value, // 원하는 값으로 바꾸기
        };
        setForm(nextForm); // setForm을 nextForm으로 바꾸기
    };
    const onClick = () => {
        alert(username + ":" + message);
        setForm({
            username: "",
            message: "",
        });
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자 이름"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="무엇이든 입력하세요."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;

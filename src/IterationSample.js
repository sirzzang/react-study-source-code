import React, {useState} from 'react';

const IterationSample = () => {
    // 데이터 배열로 사용할 상태
    const [names, setNames] = useState([ 
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ]);
    const [inputText, setInputText] = useState(''); // input 값으로 사용할 상태
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value); // 변화 시 input 값의 상태를 value로 바꿈.
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정
            text: inputText // inputText 값을 text로 설정
        });
        setNextId(nextId + 1); // nextId 값 1 더하기
        setNames(nextNames); // names 값 업데이트
        console.log(nextNames); // 확인용
        setInputText(''); // inputText 초기화
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id); // id가 현재 id인 것을 제외하고 배열 반환
        setNames(nextNames); // names 상태 업데이트
    }

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (    
    <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>데이터 추가</button> {/*버튼 클릭 시 onClick 이벤트 추가*/}
        <ul>{namesList}</ul>
    </>
    );
};

export default IterationSample;
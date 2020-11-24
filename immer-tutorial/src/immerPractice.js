import produce from "immer";

const originalState = [
    {
        id: 1,
        todo: "불변성 유지하기",
        checked: true,
    },
    {
        id: 2,
        todo: "immer 익히기",
        checked: false,
    },
];

const nextState = produce(originalState, (draft) => {
    // id로 항목 찾아 값 바꾸기
    const todo = draft.find((t) => t.id === 2); // id가 2인 항목 찾기
    todo.checked = true; // 찾은 항목의 checked 값을 true로 바꾼다.
    // draft[1].checked = true; 와 같다.

    // 새로운 항목 추가
    draft.push({
        id: 3,
        todo: "immer 적용하기",
        checked: false,
    });

    // id로 항목 찾아 제거하기
    draft.splice(
        draft.findIndex((t) => t.id === 1),
        1
    );
});

import {createAction, handleActions} from 'redux-actions';

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 3초 뒤에 increase 혹은 decrease 함수를 디스패치
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 3000);
};
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

// 초기 상태 정의
const initialState = 0;

// counter 리듀서 함수
const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
);

export default counter;
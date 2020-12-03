import {handleActions} from 'redux-actions';
import * as api from '../lib/api';

// API에서 데이터 받아 와 상태 관리할 sample 리듀서 -> 이후 root reducer에 포함.
// 반복되는 로직의 경우 재사용하는 형태로 코드 리팩토링할 필요 있음.

// 액션 타입 선언: 한 요청 당 3개
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수: 시작할 때, 성공했을 때, 실패했을 때 각각 다른 액션 디스패치
export const getPost = id => async dispatch => {
    dispatch({type: GET_POST}); // 요청 시작 알림
    try {
        const response = await api.getPost(id); // getPost 요청 await로 기다림
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data
        }); // 요청 성공 시 GET_POST_SUCCESS 액션 디스패치
    } catch (e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e, 
            error: true
        }); // 요청 실패(에러 발생) 시 GET_POST_FAILURE 액션 디스패치
        throw e; // 컴포넌트단에서 에러를 조회하기 위함.
    }
};

// 초기 상태
// loading 객체: 요청의 로딩 중 상태 관리
const initialState = {
    loading: { // 요청 시 로딩 중의 상태 관리
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const sample = handleActions(
    {
        // 요청 시 액션: 각 경우에 따라 3가지.
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true // 요청 시작
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false // 요청 완료
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false // 요청 완료
            }
        }),
        [GET_USERS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true // 요청 시작
            }
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false // 요청 완료
            },
            users: action.payload
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false // 요청 완료
            }
        })
    },
    initialState
);

export default sample;

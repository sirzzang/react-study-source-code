import React from 'react';
import {connect} from 'react-redux';
import Sample from '../components/Sample';
import {getPost, getUsers} from '../modules/sample';

const {useEffect} = React;

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    // 클래스형 컴포넌트였다면 componentDidMount
    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]); // id 1번, getPost, getUsers 배열 바뀔 때.
    return (
        <Sample 
            post = {post} 
            users = {users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({sample}) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: sample.loading.GET_POST,
        loadingUsers: sample.loading.GET_USERS
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);
import React from 'react';

const Sample = ({loadingPost, loadingUsers, post, users}) => {
    return (
        <div>
            <section>
                <h1> 포스트 </h1>
                {loadingPost && '로딩 중...'} {/* 로딩중일 때 렌더링 */}
                {!loadingPost && post && ( // 로딩중이 아니고 post 있으면 렌더링: 데이터 유효성 검사
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr />
            <section>
                <h1> 사용자 목록 </h1>
                {loadingUsers && '로딩 중...'}
                {!loadingUsers && users && ( // 아래서 map 함수를 사용하기 때문에 유효성 검사 필요
                    <ul>
                        {users.map(user => ( // 데이터가 배열 형태로 들어올 것을 기대하고 map
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>            
        </div>
    );
};

export default Sample;
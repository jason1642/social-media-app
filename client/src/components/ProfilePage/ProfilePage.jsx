import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllUsersPosts } from '../../Services/api-helper';
import PostCard from '../PostCard/PostCard';
import ProfileHeader from './Header/ProfileHeader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  margin: 0 auto 30px;
  padding: 30px 20px 0;
  flex-grow: 1;
  width: calc(100% - 40px);
  max-width: 935px;
`;

const PostsSide = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 2% auto;
  width: 100%;
`;

const UsersPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  border-top: 1px solid rgba(var(--b38, 219, 219, 219), 1);
`;

const ProfilePage = props => {
  const [posts, setPosts] = useState();
  const [currentUser, setCurrentUser] = useState(props.currentUser);

  const getAllCurrentUsersPosts = async currentUser => {
    // change '2' to current user
    const HTMLPosts = await getAllUsersPosts(currentUser.id).then(ele =>
      ele.map(v => (
        // console.log(v)
        <PostCard {...props} postData={v} />
      ))
    );
    setPosts(HTMLPosts);
  };

  useEffect(() => {
    // Must have async function within useEffect, or else promise wont be resolved
    // Create async function so the promise can be used to pass data into the other function, then
    // call the entire function after

    getAllCurrentUsersPosts(currentUser);
  }, []);

  // console.log(posts)
  return (
    <Container>
      <ProfileHeader posts={posts} currentUser={currentUser} />

      <PostsSide>
        {posts && posts.length > 0 ? (
          <UsersPostsContainer>
            <h2 style={{ fontWeight: '300' }}>These are all your Posts!</h2>
            {posts}
          </UsersPostsContainer>
        ) : (
          <h2>You have no posts</h2>
        )}
      </PostsSide>
    </Container>
  );
};
export default ProfilePage;

import PlayerReducer from '../reducers/player_reducer';
import { createStore } from 'redux';

describe('PlayerReducer', () => {
  it('exports an function', () => {
    expect(typeof PlayerReducer).toEqual('function');
  });

  const defaultPlayer = Object.freeze({
    playing: false,
    loop: false,
    mute: false,
    volume: 1.0,
    currentSong: 0,
    queue: [{song: {title: '', album: ''}}]
  });

  it('should initialize with an empty player object as the default state', () => {
    expect(PlayerReducer(undefined, {})).toEqual(defaultPlayer);
  });

  it('should return the previous state if an action is not matched', () => {
    const oldState = { 1: 'oldState' };
    const newState = PostsReducer(oldState, { type: 'unmatchedtype' });
    expect(newState).toEqual(oldState);
  });

  // describe('handling the RECEIVE_ALL_POSTS action', () => {
  //   let action,
  //       testPosts;
  //
  //   beforeEach(() => {
  //     testPosts = { 1: 'testPost1', 2: 'testPost2' };
  //     action = {
  //       type: 'RECEIVE_ALL_POSTS',
  //       posts: testPosts
  //     };
  //   });
  //
  //   it('should replace the state with the action\'s posts', () => {
  //     const state = PostsReducer(undefined, action);
  //     expect(state).toEqual(testPosts);
  //   });
  //
  //   it('should not modify the old state', () => {
  //     let oldState = { 1: 'oldState' };
  //     PostsReducer(oldState, action);
  //     expect(oldState).toEqual({ 1: 'oldState' });
  //   });
  // });
  //
  // describe('handling the RECEIVE_POST action', () => {
  //   let action,
  //       testPost;
  //
  //   beforeEach(() => {
  //     testPost = { id: 1, title: 'testPost' };
  //     action = {
  //       type: 'RECEIVE_POST',
  //       post: testPost
  //     };
  //   });
  //
  //   it('should add the post to the state using the post id as a key', () => {
  //     let state = PostsReducer(undefined, action);
  //     expect(state[1]).toEqual(testPost);
  //   });
  //
  //   it('should not affect the other posts in the state', () => {
  //     let oldState = { 2: 'oldState' };
  //     let state = PostsReducer(oldState, action);
  //     expect(state[2]).toEqual('oldState');
  //   });
  // });
  //
  // describe('handling the REMOVE_POST action', () => {
  //   let action,
  //       testPost;
  //
  //   beforeEach(() => {
  //     testPost = { id: 1, title: 'testPost' };
  //     action = {
  //       type: 'REMOVE_POST',
  //       post: testPost
  //     };
  //   });
  //
  //   it('should remove the correct post from the state', () => {
  //     let state = PostsReducer({ 1: testPost }, action);
  //     expect(typeof state[1]).toEqual('undefined');
  //   });
  //
  //   it('should not affect the other posts in the state', () => {
  //     let oldState = { 1: testPost, 2: 'oldState' };
  //     let state = PostsReducer(oldState, action);
  //     expect(state[2]).toEqual('oldState');
  //   });
  });

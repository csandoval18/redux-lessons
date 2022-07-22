import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface PostState {
	id: number
	title: String
	content: String
}

const initialState: PostState[] = [
	{
		id: 1,
		title: 'Learning Redux Toolkit',
		content: "I've heard good things.",
	},
	{
		id: 2,
		title: 'Slices...',
		content: 'The more I say slice, the more I want pizza...',
	},
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
})

export const {} = postsSlice.actions
export const selectPosts = (state: RootState) => state.posts
export default postsSlice.reducer

import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectPosts } from './postsSlice'

const PostsList = () => {
	//fetches all posts stored in store posts array
	const posts = useAppSelector(selectPosts)

	return <div>PostsList</div>
}

export default PostsList

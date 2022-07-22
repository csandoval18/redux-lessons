import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const Cart = () => {
	const count = useSelector((state: RootState) => state.counter.count)
	return <div>cart count: {count}</div>
}

export default Cart

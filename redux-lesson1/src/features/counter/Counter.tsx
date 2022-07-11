import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import { decrement, increment, selectCount } from './counterSlice'

const Counter = () => {
	// const count = useSelector((state) => state.counter.count)
	const count = useAppSelector(selectCount)
	const dispatch = useDispatch()
	return (
		<section>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
		</section>
	)
}

export default Counter

// import React, { useState } from 'react'

// import { useAppSelector, useAppDispatch } from '../../app/hooks'
// import {
// 	decrement,
// 	increment,
// 	incrementByAmount,
// 	incrementAsync,
// 	incrementIfOdd,
// 	selectCount,
// } from './counterSlice'
// import styles from './Counter.module.css'

// export function Counter() {
// 	const count = useAppSelector(selectCount)
// 	const dispatch = useAppDispatch()
// 	const [incrementAmount, setIncrementAmount] = useState('2')

// 	const incrementValue = Number(incrementAmount) || 0

// 	return (
// 		<div>
// 			<div className={styles.row}>
// 				<button
// 					className={styles.button}
// 					aria-label='Decrement value'
// 					onClick={() => dispatch(decrement())}
// 				>
// 					-
// 				</button>
// 				<span className={styles.value}>{count}</span>
// 				<button
// 					className={styles.button}
// 					aria-label='Increment value'
// 					onClick={() => dispatch(increment())}
// 				>
// 					+
// 				</button>
// 			</div>
// 			<div className={styles.row}>
// 				<input
// 					className={styles.textbox}
// 					aria-label='Set increment amount'
// 					value={incrementAmount}
// 					onChange={(e) => setIncrementAmount(e.target.value)}
// 				/>
// 				<button
// 					className={styles.button}
// 					onClick={() => dispatch(incrementByAmount(incrementValue))}
// 				>
// 					Add Amount
// 				</button>
// 				<button
// 					className={styles.asyncButton}
// 					onClick={() => dispatch(incrementAsync(incrementValue))}
// 				>
// 					Add Async
// 				</button>
// 				<button
// 					className={styles.button}
// 					onClick={() => dispatch(incrementIfOdd(incrementValue))}
// 				>
// 					Add If Odd
// 				</button>
// 			</div>
// 		</div>
// 	)
// }

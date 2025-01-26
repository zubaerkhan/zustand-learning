'use client'
import { useCounterStore } from '@/store'
import { useEffect } from 'react'

// import { useState } from 'react'

// use state through function show in console.log get state
const logCount = () => {
  const count = useCounterStore.getState().count
  console.log('count:', count)
}
// set state through function
const setCountState =()=>{
  useCounterStore.setState({count:100})
}

export default function App() {
  //   const [count] = useState(0)
  const count = useCounterStore((state) => state.count)
  return (
    <div className='flex items-center justify-center h-screen text-5xl font-bold'>
      <OtherComponent count={count} />
    </div>
  )
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const AsyncIncrement = useCounterStore((state) => state.AsyncIncrement)

  useEffect(() => {
    logCount()
    setCountState()
  }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='size-40 border-4 text-8xl  border-gray-200 flex items-center justify-center rounded-md'>
        {count}
      </div>
      <div className='flex gap-4 mt-4'>
        <button onClick={AsyncIncrement} className='bg-blue-500 p-3 rounded-md'>
          AycnIncrement
        </button>
        <button onClick={increment} className='bg-green-400 p-3 rounded-md'>
          Increment
        </button>
        <button onClick={decrement} className='bg-red-500 p-3 rounded-md'>
          Decrement
        </button>
      </div>
    </div>
  )
}

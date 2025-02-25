import './Counter.scss'
import Button from '../Button/Button'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [string, setString] = useState("Don't click me.")
  return (
    <>
      <div className="Counter">
        <p>{count}</p>
        <Button
          icon={false}
          title="+1"
          handleClick={() => setCount(count + 1)}
        />
        <Button
          icon={false}
          title="-1"
          handleClick={() => setCount(count - 1)}
        />
        <Button
          icon={false}
          title="Reset"
          handleClick={() => {
            setCount(0);
            setString("Don't click me.");
          }}
        />
        <Button
          icon={true}
          title={string}
          handleClick={() => setString(string + 'Ouch... Please stop. ')}
        />
      </div>
    </>
  )
}

export default Counter
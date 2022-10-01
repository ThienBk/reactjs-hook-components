import {memo} from 'react'

 function UseCallBack({onIncrease}) {
  console.log('re-render');
  return (
    <div>useCallBack
      <button onClick={onIncrease}>Click</button>

    </div>
  )
}
export default memo(UseCallBack)

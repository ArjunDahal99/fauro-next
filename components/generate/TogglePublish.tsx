import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { usePulbishToggle } from '@/store/store'

const TogglePublish = () => {
  const publicToggleState = usePulbishToggle()
  return (
    <div className=" w-fit flex items-center justify-center gap-x-2  ">
      <Checkbox  onClick={()=>publicToggleState.switchToggle()}  checked={publicToggleState
      .showToggle} />
      <h1>Public</h1>
    </div>
  )
}

export default TogglePublish
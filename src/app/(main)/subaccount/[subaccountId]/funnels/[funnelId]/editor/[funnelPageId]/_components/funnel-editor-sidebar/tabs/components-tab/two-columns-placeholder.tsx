import { EditorBtns } from '@/lib/constants'
import { Columns2 } from 'lucide-react'
import React from 'react'

type Props = {}

const TwoColumnsPlaceholder = (props: Props) => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, '2Col')}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      {/* <Columns2
        size={40}
        className="text-muted-foreground"
      /> */}
      <div className='border-dashed border-[1px] h-full rounded-sm bg-muted border-muted-foreground/50 w-full'></div>
      <div className='border-dashed border-[1px] h-full rounded-sm bg-muted border-muted-foreground/50 w-full'></div>
    </div>
  )
}

export default TwoColumnsPlaceholder

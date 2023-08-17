import React from 'react'
import './Timeline.css'

interface Props {
  elementHeight: number;
  elTop: number;
}

export default function TimelineEl({ elementHeight, elTop }: Props) {
  return (
    <div id='timelineEl' style={{ height: elementHeight, top: elTop }}>
      <div>
        TimelineEl
      </div>
    </div>
  )
}
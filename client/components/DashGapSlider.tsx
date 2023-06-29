'use client'

import { useState } from 'react'

import { Slider } from '@/components/ui/Slider'
import { Label } from '@/components/ui/Label'

export default function DashGapSlider() {
  const [dashGap, setDashGap] = useState([0])

  return (
    <div>
      <div className='mb-4 flex items-center justify-between'>
        <Label htmlFor='strokeWidth'>Dash Gap</Label>

        <span className='px-2 py-0.5 text-sm text-muted-foreground'>{dashGap[0]}</span>
      </div>

      <Slider
        id='strokeWidth'
        min={1}
        max={50}
        step={1}
        value={dashGap}
        onValueChange={setDashGap}
        className='[&_[role=slider]]:h-4 [&_[role=slider]]:w-4'
        aria-label='Dash gap'
      />
    </div>
  )
}

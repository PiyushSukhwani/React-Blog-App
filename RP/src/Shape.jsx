import React, { useEffect, useMemo, useRef, useState } from 'react'

function Shape({data}) {
  const boxes = useMemo(() => data.flat(Infinity), [data])
  const countOfVisibleBoxes = useMemo(() => boxes.reduce((acc, box) => {
    if(box === 1) {
      acc += 1
    }
    return acc;
  }), [boxes])
  const [selected, setSelected] = useState(new Set())
  const [unloading, setUnloading]  = useState(false)
  const timerRef = useRef(null)

  const handleClick = (e) => {
    const {target} = e
    const status = target.getAttribute('data-status')
    const index = target.getAttribute('data-index')

    if(index == null || status == 'hidden' || unloading) {
      return
    }

    setSelected(prev => new Set(prev.add(index)))
  }

  const unload = () => {
    const keys = Array.from(selected.keys())

    const removeNextKeys = () => {
      if (keys.length) {
        const currentKey = keys.shift()
        setUnloading(true)
        setSelected(prev => {
          const updatedKeys = new Set(prev)
          updatedKeys.delete(currentKey)
          return updatedKeys
        })

        timerRef.current = setTimeout(removeNextKeys,500)
      } else {
        setUnloading(false)
        clearTimeout(timerRef.current)
      }
    }

    timerRef.current = setTimeout(removeNextKeys,100)
  }

  useEffect(() => {
    if(selected.size === countOfVisibleBoxes) {
      unload()
    }
  }, [selected])

  return (
    <div className='boxes' onClick={handleClick}>
      {
          boxes.map((box, index) => {
          const status = box === 1 ? 'visible' : 'hidden'
          const isSelected = selected.has(index.toString())

          return <div key={`${box}-${index}`}
          className={`box ${status} ${isSelected && 'selected'}`}
          data-index = {index}
          data-status = {status}
          />
        })
      }
    </div>
  )
}

export default Shape
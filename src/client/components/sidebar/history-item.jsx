import React, { useCallback, useEffect, useRef } from 'react'
import createTitle, { createTitleWithTag } from '../../common/create-title'
import { DeleteOutlined } from '@ant-design/icons'
import {auto} from "manate/react";

export default auto(function HistoryItem (props) {
  const { store } = window
  const {
    item,
    tab
  } = props
  const timeoutRef = useRef(null)

  const handleClick = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      store.onSelectHistory(item.tab)
      if (tab?.isHistoryTab)
        window.store.delTab(tab.id)
    }, 10)
  }, [item.tab])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  function handleDelete (e) {
    e.stopPropagation()
    const index = store.history.findIndex(d => {
      return d === item
    })
    if (index >= 0)
      store.history.splice(index, 1)
  }
  const title = createTitleWithTag(item.tab, item.count)
  const tt = createTitle(item.tab)
  return (
    <div
      className='item-list-unit'
      title={tt}
      onClick={handleClick}
    >
      <div className='elli pd1y pd2x'>
        {title}{/* - {item.id} - {item.tab.srcId}*/}
      </div>
      <DeleteOutlined
        className='list-item-edit'
        onClick={handleDelete}
      />
    </div>
  )
})

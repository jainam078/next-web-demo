import React from 'react'

export default function TrueIcon({ color }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2652 2.73483C10.4116 2.88128 10.4116 3.11872 10.2652 3.26517L4.76517 8.76516C4.61872 8.91161 4.38128 8.91161 4.23483 8.76516L1.73483 6.26517C1.58839 6.11872 1.58839 5.88128 1.73483 5.73483C1.88128 5.58839 2.11872 5.58839 2.26517 5.73483L4.5 7.96967L9.73483 2.73483C9.88128 2.58839 10.1187 2.58839 10.2652 2.73483Z" fill={color || "#8A8785"} />
    </svg>
  )
}

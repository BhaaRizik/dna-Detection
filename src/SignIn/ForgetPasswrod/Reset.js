import React from 'react'

function Reset () {
  return (
    <div>
      <button
        type='submit'
        onClick={() => {
          alert('You have new passwoord ')
        }}
      >
        Reset
      </button>
    </div>
  )
}
export default Reset

import React, { useState } from 'react'

function Togglebutton() {
    Const [toggle,setToggle]=useState('Dark')
    const togglechange=(e)=>{
console.log("Button is Clicked")
    }
  return (
    <div>
<button onClick={togglechange}>
</button>



    </div>
  )
}

export default Togglebutton
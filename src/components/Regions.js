import React from 'react'
import { useParams } from 'react-router-dom'
function Regions() {
    const regions = useParams().Regions
    console.log('regions',regions)
  return (
    <div><h3> Region :{regions}</h3></div>
  )
}

export default Regions
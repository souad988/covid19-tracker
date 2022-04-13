import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Regions() {
    const country = useParams().Regions
    const regions = useSelector(state=>state.regions)
    console.log('regions',regions)
  return (
    <div><h3> country :{country}</h3>
        <ul>
         {regions.map(region=>{
             return (
                <li key={region.id}>{region.id} : {region.today_confirmed}</li>
             )
            })}
        </ul>
    </div>
  )
}

export default Regions
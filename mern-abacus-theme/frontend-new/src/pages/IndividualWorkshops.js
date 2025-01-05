import React from 'react'
import { useParams } from 'react-router-dom'
import { workshops } from '../constants/workshops';

const IndividualWorkshops = () => {
    const id=useParams();
    const workshop= workshops.find((ws)=>ws.to===id);
  return (
    <div>
        <div className='p-5 sm:py-8 sm:px-10 flex gap-3 flex-col'>
      <h1 className="text-4xl md:text-4xl sm:text-3xl text-white">
        <span className="text-[#c53939]">/</span>
        <span className="text-white">{workshop.title}</span>
      </h1>
    </div>
    </div>
  )
}

export default IndividualWorkshops
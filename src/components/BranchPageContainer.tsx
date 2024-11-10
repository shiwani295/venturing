import React from 'react'
import FormContainer from './FormContainer'
import BranchCard from './BranchCard'

const BranchPageContainer = () => {
  return (
    <div className='grid grid-cols-2 px-10'>
        <div className="">

      <FormContainer/>
        </div>
        <div>
            <BranchCard/>
        </div>
    </div>
  )
}

export default BranchPageContainer

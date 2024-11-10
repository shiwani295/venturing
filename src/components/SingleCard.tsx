import React from 'react'

const SingleCard = () => {
  return (
        <div className="max-w-sm mx-auto mt-5 p-5 border bg-white rounded-lg shadow-lg">
      {/* <img src={branchLogo} alt={`${branchName} logo`} className="w-full h-40 object-cover rounded-lg mb-4" /> */}
      <h2 className="text-2xl font-bold mb-2">{"branchName"}</h2>
      <p className="text-gray-700 mb-4">{"branchLocation"}</p>
    </div>
  )
}

export default SingleCard

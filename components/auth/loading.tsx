import React from 'react'
import { DNA } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className=' flex flex-col items-center justify-center h-screen'>
      <DNA
        visible={true}
        height="65"
        width="65"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}

export default Loading;

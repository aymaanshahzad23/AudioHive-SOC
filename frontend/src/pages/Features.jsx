import React from 'react'
import "../styles/features.css"
const Features = () => {
  return (
    <div className='containerFeature'>
        {/* <p class="emoji">🚧</p> */}
        <img className='construction' src="construction.gif" alt="" />
            <h1 className='headingFeature'>Oops! This Page is Still Under Construction!</h1>
        <div className='bodyFeature'>
            <p>We're busy building an awesome experience for <span className='text'>AudioHive</span> users <br />
            Expect some ear-tickling surprises soon! <br />
            In the meantime, turn up the volume and enjoy the sound of anticipation.</p>
        </div>
    </div>
  )
}

export default Features
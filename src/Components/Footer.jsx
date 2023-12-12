import React from 'react'

function Footer() {
  return (
    <div>
      <div className='columns' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
      {/* 1st Column */}
      <div style={{ flex: '2' }}>
        {/* Content for the 1st Column */}
        {/* Add your content here */}
        <h3>Column 1</h3>
        {/* Add more content as needed */}
      </div>

      {/* 2nd Column */}
      <div style={{ flex: '1'}}>
        {/* Content for the 2nd Column */}
        {/* Add your content here */}
        <h3>Column 2</h3>
        {/* Add more content as needed */}
      </div>

      {/* 3rd Column */}
      <div style={{ flex: '1'}}>
        {/* Content for the 3rd Column */}
        {/* Add your content here */}
        <h3>Column 3</h3>
        {/* Add more content as needed */}
      </div>

      {/* 4th Column */}
      <div style={{ flex: '2' }}>
        {/* Content for the 4th Column */}
        {/* Add your content here */}
        <h3>Column 4</h3>
        {/* Add more content as needed */}
      </div>
      
    </div>
    <div className='footer-last'>      <p style={{  marginTop: 'auto', textAlign: 'center' }}>
        Copyright @2023 PlayPix Media Player. Built with React.
      </p>
</div>
    </div>
  )
}

export default Footer
import React from 'react'

export default React.memo(({ cb }) => {
  return <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
})


// import React from 'react'
// export default React.memo(({cb}) =>{
//     return <button classsName="button-refresh-colors" onClick={cb}>&#8634;</button>    
// })
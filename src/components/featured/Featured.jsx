import "./featured.css"

import React from 'react'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Munnar</h1>
                <h2>512 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Kochi</h1>
                <h2>710 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Vagamon</h1>
                <h2>131 properties</h2>
            </div>
        </div>
    </div>
    
  )
}

export default Featured
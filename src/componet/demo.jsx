import React from 'react'
import './demo.css'

const Demo = () => {
    return (
        <div className="demo-box">
            <div className="box1">
                <a href='#casual' className="box">
                    <img src="/61FCvPodc4L._UY1000_.jpg" alt="" />
                    <h1>Casual</h1>
                </a>
                <a href='#basketball' className="box">
                    <img src="/basketball.jpg" alt="" />
                    <h1>Basketball</h1>
                </a>
                <a href='#formal-chelsea'className="box">
                    <img src="/formal8.jpg" alt="" />
                    <h1>Chelsea</h1>
                </a>
                <a href='#gym' className="box">
                    <img src="/gym.jpg" alt=""/>
                    <h1>Gym</h1>
                </a>
            </div>
            <div className="box2">
                <h1>COSMOS STORES</h1>
                <p>MAKE THIS SEASON YOURS</p>
            </div>
        </div>
    )
}

export default Demo

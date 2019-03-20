import './Logo.css'
import kayn from '../../assets/images/images2.png'
import React from 'react'

export default props =>
    <aside className = "logo">
       <a href="/" className="logo">
            <img src={kayn} alt="kayn" />
       </a>
    </aside>
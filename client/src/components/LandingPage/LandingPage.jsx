import React from 'react'
import { Link } from 'react-router-dom'
import './landingpage.css'

export default function LandingPage () {

    return(
        <div className='landingpage'>
            <div className='divlanding'>
                <img src='https://c4.wallpaperflare.com/wallpaper/434/247/696/game-of-thrones-wallpaper-preview.jpg' className='imglanding'/>
                <Link to='/characters' className='linklanding'>
                    START
                </Link>
            </div>
        </div>
    )
}
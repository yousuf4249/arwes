import React, { useEffect, useState } from 'react'
// @ts-ignore: Unreachable code error

import { Arwes, ThemeProvider, Frame, Button, withSounds, List, Heading, Paragraph, createTheme, SoundsProvider, createSounds } from 'arwes';
import Link from 'next/link';
const Header = (props) => {
    const [hydrated, setHydrated] = useState(false);
    // let audio2 = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    const [audio2] = useState(typeof Audio !== "undefined" && new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));

    useEffect(() => {
        // Hydrate Arwes components on client-side
        setHydrated(true);
        audio2?.play();
    }, []);


    let audio = new Audio("/sounds/type.mp3")
    
    
    const start = () => {
        audio?.play()
      }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="logo.png" className='img-fluid' alt="" />
                    </a>
                    <Button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-lg-auto gap-lg-4  gap-3 align-items-lg-end">
                            <li className="nav-item">
                                <Link className={'nav-link' + " " + (props.activeClass === "0" ? 'active' : '')} aria-current="page" href="/">Swap </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={'nav-link dropdown-toggle' + " " + (props.activeClass === "1" ? 'active' : '')} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pool
                                </a>
                                <ul className="dropdown-menu bg-transparent animate slideIn" aria-labelledby="navbarDropdownMenuLink">
                                    <Frame animate={true}
                                           level={3}
                                           corners={4}
                                           layer='primary'>
                                    <li><Link className="dropdown-item" href="/Pool">Browse</Link></li>
                                    <li><Link className="dropdown-item" href="/Add">Add</Link></li>
                                    <li><Link className="dropdown-item" href="/Import">Import</Link></li>
                                    </Frame>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Stake</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Farm
                                </a>
                                <ul className="dropdown-menu bg-transparent animate slideIn" aria-labelledby="navbarDropdownMenuLink2">
                                <Frame animate={true}
                                           level={3}
                                           corners={4}
                                           layer='primary'>
                                    <li><a className="dropdown-item" href="/Pool">Your Farms</a></li>
                                    <li><a className="dropdown-item" href="#">All Farms</a></li>
                             
                                    </Frame>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mint</a>
                            </li>
                            <li className="nav-item  py-0">
                                <Button layer='success' onClick={start}>
                                    <select className=" bg-transparent p-0 border-0 text-white w-100 m-0 " 
                                          >
                                        
                                        <option value="" className=''>English</option>
                                        <option value="" className=''>English</option>
                                        <option value="" className=''>English</option>
                                    </select>
                                </Button>
                            </li>
                            <li className="nav-item ">
                        <Button onClick={start}>
                            Connect Wallet
                        </Button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
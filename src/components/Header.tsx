import React, { useEffect, useState } from 'react'
// @ts-ignore: Unreachable code error

import { Arwes, ThemeProvider, Frame, Button, withSounds, List, Heading, Paragraph, createTheme, SoundsProvider, createSounds } from 'arwes';
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
                                <a className={'nav-link' + " " + (props.activeClass === "0" ? 'active' : '')} aria-current="page" href="/">Swap </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={'nav-link dropdown-toggle' + " " + (props.activeClass === "1" ? 'active' : '')} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pool
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/Pool">Pool</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Stake</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Farm
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mint</a>
                            </li>
                            <li className="nav-item  py-0">
                                <Button layer='success'>
                                    <select className=" bg-transparent p-0 border-0 text-white w-100 m-0" >
                                        <option value="" className='text-dark'>English</option>
                                        <option value="" className='text-dark'>English</option>
                                        <option value="" className='text-dark'>English</option>
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
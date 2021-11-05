import React from 'react';
import { LeftIcon, RightIcon } from '../icons';
import './navbar.css';
import '../calendar.css';

interface AppProps {
    month: string,
    year: string,
}

export const NavBar = (appProps: AppProps) => {
    return <div className="navbar">
                <span className="item">
                    <RightIcon/>
                </span>
                <div className="item font">
                    <span className="item">
                        {appProps.month}
                    </span>
                    <span className="item">
                        {appProps.year}
                    </span>
                </div>
                <span className="item">
                    <LeftIcon/>
                </span>
            </div>
}
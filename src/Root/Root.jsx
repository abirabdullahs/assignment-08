import React, { useState, useEffect } from 'react';
import Navbar from './../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './../components/Navbar/Footer';

const Root = () => {
    const [selectedApps, setSelectedApps] = useState(() => {
        try {
            const raw = localStorage.getItem('selectedApps');
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem('selectedApps', JSON.stringify(selectedApps));
        } catch {
            // 
        }
    }, [selectedApps]);
    
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet context={{ selectedApps, setSelectedApps , disabled, setDisabled }}></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;
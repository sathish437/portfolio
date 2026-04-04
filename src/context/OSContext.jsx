import React, { createContext, useContext, useState, useEffect } from 'react';

const OSContext = createContext();

export const OSProvider = ({ children }) => {
    const [openWindows, setOpenWindows] = useState([]);
    const [activeWindow, setActiveWindow] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [weather, setWeather] = useState({ temp: 27, city: 'Chennai' });
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const openWindow = (id) => {
        if (!openWindows.find(w => w.id === id)) {
            setOpenWindows([...openWindows, { id, minimized: false, fullscreen: false }]);
        } else {
            setOpenWindows(openWindows.map(w => w.id === id ? { ...w, minimized: false } : w));
        }
        setActiveWindow(id);
    };

    const closeWindow = (id) => {
        setOpenWindows(openWindows.filter(w => w.id !== id));
        if (activeWindow === id) setActiveWindow(null);
    };

    const toggleMinimize = (id) => {
        setOpenWindows(openWindows.map(w => w.id === id ? { ...w, minimized: !w.minimized } : w));
        if (activeWindow === id && openWindows.find(w => w.id === id && !w.minimized)) setActiveWindow(null);
    };

    const toggleFullscreen = (id) => {
        setOpenWindows(openWindows.map(w => w.id === id ? { ...w, fullscreen: !w.fullscreen } : w));
        setActiveWindow(id);
    };

    return (
        <OSContext.Provider value={{
            openWindows,
            activeWindow,
            setActiveWindow,
            openWindow,
            closeWindow,
            toggleMinimize,
            toggleFullscreen,
            searchQuery,
            setSearchQuery,
            weather,
            time
        }}>
            {children}
        </OSContext.Provider>
    );
};

export const useOS = () => useContext(OSContext);

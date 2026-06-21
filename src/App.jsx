import React from 'react';
import { OSProvider } from './context/OSContext';
import Desktop from './layouts/Desktop';
import MobileLayout from './layouts/MobileLayout'; // We'll adapt the existing one
import SocialFooter from './components/shared/SocialFooter';
import { useMediaQuery } from './hooks/useMediaQuery';
import CustomCursor from './components/shared/CustomCursor';

function App() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <OSProvider>
            <CustomCursor />
            {isDesktop ? <Desktop /> : <MobileLayout />}
        </OSProvider>
    );
}

export default App;

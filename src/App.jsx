import React from 'react';
import { OSProvider } from './context/OSContext';
import Desktop from './layouts/Desktop';
import MobileLayout from './layouts/MobileLayout'; // We'll adapt the existing one
import SocialFooter from './components/shared/SocialFooter';
import { useMediaQuery } from './hooks/useMediaQuery';

function App() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <OSProvider>
            {isDesktop ? <Desktop /> : <MobileLayout />}
        </OSProvider>
    );
}

export default App;

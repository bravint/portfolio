import { useEffect, useState } from 'react';

import '../styles/home.css';

export const ScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const toggleVisibility = () =>
            window.pageYOffset > 5 ? setIsVisible(false) : setIsVisible(true);

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && <p className="scroll">SCROLL TO SEE MORE</p>}
        </>
    );
};

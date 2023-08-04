// hooks/useAuthorization.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useAuthorization = () => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthorized(true);
        }
        else {
            router.push('/');
        }

        // Make a request to the auth API with the token in the headers
        // fetch('/api/auth', {
        //     headers: {
        //         Authorization: token,
        //     },
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             setIsAuthorized(true);
        //         } else {
        //             setIsAuthorized(false);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //         setIsAuthorized(false);
        //     });
    }, []);

    return isAuthorized;
};

export default useAuthorization;

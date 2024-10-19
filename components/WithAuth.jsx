'use client';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (Component) => {
  return function AuthenticatedComponent(props) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/welcome');
      }
    }, [user, router]);

    // Render the original component if user is authenticated
    return user ? <Component {...props} /> : null; // or return a loading indicator
  };
};

export default withAuth; // Ensure you're using default export

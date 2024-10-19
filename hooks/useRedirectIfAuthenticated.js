// hooks/useRedirectIfAuthenticated.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext'; // Adjust the path as necessary

const useRedirectIfAuthenticated = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/'); // Redirect to home if the user is authenticated
    }
  }, [user, router]);
};

export default useRedirectIfAuthenticated;

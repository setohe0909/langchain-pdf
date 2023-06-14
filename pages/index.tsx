// pages/index.tsx

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/chat');
  }, []);

  return null;
};

export default Home;

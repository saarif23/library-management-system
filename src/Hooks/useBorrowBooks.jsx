import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useBorrowBooks = () => {
  const { user } = useAuth()
  const { data, isPending, refetch, } = useQuery({
    queryKey: ['borrowBooks'],
    queryFn: async () => {
      const data = await fetch(`https://library-management-system-server-ivory.vercel.app/borrowBooks/?email=${user.email}`, { credentials: 'include' });
      return await data.json();

    }

  });

  return [data, isPending, refetch]

};

export default useBorrowBooks;
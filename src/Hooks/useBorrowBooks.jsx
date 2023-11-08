import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useBorrowBooks = () => {
  const { user } = useAuth()
  const { data, isPending, refetch, } = useQuery({
    queryKey: ['borrowBooks'],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/borrowBooks/?email=${user.email}`);
      return await data.json();

    }

  });

  return [data, isPending, refetch]

};

export default useBorrowBooks;
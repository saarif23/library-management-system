import { useQuery } from '@tanstack/react-query';

const useBorrowBooks = () => {
  const { isPending, isFetching, refetch, data } = useQuery({
    queryKey: ['borrowBooks'],
    queryFn: async () => {
      const data = await fetch('http://localhost:5000/borrowBooks');
      return await data.json();

    }

  });

  return { isPending, isFetching, data, refetch }
};

export default useBorrowBooks;
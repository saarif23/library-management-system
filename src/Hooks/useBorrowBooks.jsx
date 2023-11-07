import { useQuery } from '@tanstack/react-query';

const useBorrowBooks = () => {
  const { data, isPending, refetch, } = useQuery({
    queryKey: ['borrowBooks'],
    queryFn: async () => {
      const data = await fetch('http://localhost:5000/borrowBooks');
      return await data.json();

    }

  });

  return [data, isPending, refetch]

};

export default useBorrowBooks;
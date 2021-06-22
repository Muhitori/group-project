import { useParams } from 'react-router-dom';

export const BookDetailView = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

import { useParams } from "react-router";

export function BookView() {
  const params = useParams();
  const bookId = params.id;
  return <p>{bookId}</p>;
}

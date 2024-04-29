import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ItemDetails;

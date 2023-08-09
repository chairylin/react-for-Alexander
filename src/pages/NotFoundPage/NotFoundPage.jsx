import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/")}>To Home page</Button>;
};

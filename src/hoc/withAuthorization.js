import { useSelector } from "react-redux";
import { selectIsUserAuthorized } from "../store/authorization/selectors";

export const withAuthorization = ({
  AuthorizedComponent,
  UnauthorizedComponent,
}) => {
  return (props) => {
    const isAuthorized = useSelector(selectIsUserAuthorized);

    return isAuthorized ? (
      <AuthorizedComponent {...props} />
    ) : (
      <UnauthorizedComponent {...props} />
    );
  };
};

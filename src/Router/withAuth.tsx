import { PropsWithChildren, ReactElement } from "react";
import { useAppSelector } from "../store/hooks";
import { Navigate } from "react-router-dom";

function withAuth<P>(
  Component: React.ComponentType<PropsWithChildren<P>>
): React.ComponentType<PropsWithChildren<P>> {
  return function ProtectedRoute(
    props: PropsWithChildren<P>
  ): ReactElement | null {
    const token = useAppSelector((state) => state.login.token);

    if (!token) {
      return <Navigate to="/notfound" replace />;
    }

    return <Component {...props} />;
  };
}

export default withAuth;

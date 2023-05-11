
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

type PrivateRouteProps = {
    emptyCart: boolean;
} & RouteProps;

export const PrivateRoute = ({ emptyCart, children }: PrivateRouteProps) => {
    return !emptyCart ? <Outlet /> : <Navigate to="/carrinho" replace />;
}

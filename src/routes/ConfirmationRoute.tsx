
import { Navigate, Outlet } from 'react-router-dom';

export const ConfirmationRoute = (): JSX.Element => {
    const id = new URLSearchParams(window?.location.search).get('id');;
    const orderId = localStorage.getItem('order-number');

    if (!orderId || !id) {
        return <Navigate to="/carrinho" />;
    }

    return <Outlet />;
}


import { Navigate, Outlet } from 'react-router-dom';
import { localStorageService } from '../services/local-storage.service';

export const ConfirmationRoute = (): JSX.Element => {
    const id = new URLSearchParams(window?.location.search).get('id');;
    const orderId = localStorageService.get('order-number');

    if (!orderId || !id) {
        return <Navigate to="/carrinho" />;
    }

    return <Outlet />;
}

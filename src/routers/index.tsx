import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../features/auth/pages/login";
import RegisterPage from "../features/auth/pages/register";
import AuthPage from "../features/auth/router/router";
import BasePage from "../features/base/router/base";
import Product from "../features/base/pages/product";
import DetailProduct from "../features/base/components/items/detail-product";
import Profile from "../features/base/pages/profile";
import ListCategory from "../features/base/pages/list-category";
import ListProduct from "../features/base/pages/list-product";
import Complain from "../features/base/pages/complain";
import Dashboard from "../features/base/router/dashboard";
import Checkout from "../features/base/pages/checkout";
import OrderList from "../features/base/pages/order-list";
import TableCart from "../features/base/pages/table-cart";

export function AppRouter() {
    const router = createBrowserRouter([
        {
            element: <AuthPage />,
            children: [
                {
                    path: "login",
                    element: <LoginPage />,
                },
                {
                    path: "register",
                    element: <RegisterPage />,
                }
            ]
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
            children: [
                {
                    index: true,
                    element: <TableCart />,
                },
                {
                    path: 'list-order',
                    element: <OrderList />,
                },
                {
                    path: 'list-category',
                    element: <ListCategory />,
                },
                {
                    path: 'list-product',
                    element: <ListProduct />,
                }
            ]
        },
        {
            path: "/",
            element: <BasePage />,
            children: [
                {
                    index: true,
                    element: <Product />,
                },
                {
                    path: 'profile/:username',
                    element: <Profile />,
                },
                {
                    path: 'detail/:productName',
                    element: <DetailProduct />,
                },
                {
                    path: 'complain',
                    element: <Complain />,
                },
                {
                    path: 'checkout',
                    element: <Checkout />,
                },
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}
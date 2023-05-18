import MainRoot from "../Pages/Client/MainRoot"
import Home from "../Pages/Client/Home"
import About from "../Pages/Client/About"
import Products from "../Pages/Client/Products"
import AdminRoot from "../Pages/Admin/AdminRoot"
import Dashboard from "../Pages/Admin/Dashboard"
import AddProducts from "../Pages/Admin/AddProducts"
// import ProductsTable from "../Pages/Admin/ProductsTable"

export const ROUTES = [
    {
        path: "",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Products />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/add-product",
                element: <AddProducts />
            },
            
        ]
    }

]

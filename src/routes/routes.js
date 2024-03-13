import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import Products from "../pages/Admin/Products";
import AddProduct from "../pages/Admin/AddProduct";
import About from "../pages/Main/About";
import Contact from "../pages/Main/Contact";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";
import ProductDetail from "../pages/Admin/ProductDetail";
import EditProducts from "../pages/Admin/EditProducts";

export const ROUTES = [
    // MainRoot
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
    // AdminRoot
    {
        path: '/admin',
        element: <AdminRoot />,
        children: [
            {
                path: 'products',
                element: <Products />
            },
            {
                path: '',
                element: <Dashboard />

            },
            {
                path: 'add',
                element: <AddProduct />
            },
            {
                path:'products/:id',
                element:<ProductDetail/>
            },
            {
                path:'products/edit/:id',
                element:<EditProducts/>
            }
        ]
    }
]


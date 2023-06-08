import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dijkstra",
        element: <div>Its dijkstra</div>
    },
    {
        path: "/heap",
        element: <div>Its heap</div>
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;

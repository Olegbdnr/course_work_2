import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Heap from "./Pages/Heap"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/dijkstra",
        element: <div>Its dijkstra</div>
    },
    {
        path: "/heap",
        element: <Heap/>
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;

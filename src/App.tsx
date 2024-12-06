import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from './router/router';
const router = createBrowserRouter([
    ...ROUTES,
])

function App () {
    
    return(
        <div>
           <RouterProvider router={router}>
             </RouterProvider>

             {/* <Layout/> */}

        </div>
    );
}

export default App;
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter} from "react-router-dom";


const Body = () => {
// Here we create a routing over here.
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
  },
  {
    path:"/browse",
    element:<Browse/>,
  },
]);

  return (
  <div>
   <RouterProvider router={appRouter}/>
  </div>
  );
};
export default Body;
import { RouterProvider } from "react-router-dom";
import { router } from "./Providers/routes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster expand={false} duration={2000} position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import DailySales from "./pages/dailySales/DailySales"
import Employees from "./pages/employees/Employees"
import Home from "./pages/home/Home"
import SelectSubsidiarie from "./pages/selectSubsidiarie/SelectSubsidiarie"

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/select-subsidiarie",
    element: <SelectSubsidiarie />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/daily-sales",
    element: <DailySales />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
])

export default Routes

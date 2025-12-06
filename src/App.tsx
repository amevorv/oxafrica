import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import CattleGoat from './pages/CattleGoat'
import { Home } from './pages/Home'
import Livestock from './pages/Livestock'
import Piggery from './pages/Piggery'
import Poultry from './pages/Poultry'
import { Steelstructures } from './pages/SteelStructures'
import { Irrigation } from './pages/Irrigation'
import { Oxchangingafrica } from './pages/OxChangingAfrica'
import { Upgrade } from './pages/Upgrade'
import { ComingSoon } from './pages/ComingSoon'
import { Tractor } from './pages/Tractor'
import { CombineHarvestors } from './pages/CombineHarvestors'
import AboutUs from './pages/AboutUs'
import InvestorRelations from './pages/InvestorRelations'
import Careers from './pages/Careers'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "liveStock",
    //     element: <LiveStock />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/livestock",
    element: <Livestock/>
  },
  {
    path: "/cattleandgoat",
    element: <CattleGoat/>
  },
  {
    path: "/piggery",
    element: <Piggery/>
  },
  {
    path: "/poultry",
    element: <Poultry/>
  },
  {
    path: "/steelstructures",
    element: <Steelstructures/>
  },
  {
    path: "/irrigation",
    element: <Irrigation/>
  },
  {
    path: "/oxischangingafrica",
    element: <Oxchangingafrica/>
  },
  {
    path: "/upgrade",
    element: <Upgrade/>
  },
  {
    path: "/comingsoon",
    element: <ComingSoon/>
  },
  {
    path: "/tractor",
    element: <Tractor/>
  },
  {
    path: "/combine",
    element: <CombineHarvestors/>
  },
  {
    path: "/about-us",
    element: <AboutUs/>
  },
  {
    path: "/investor-relations",
    element: <InvestorRelations/>
  },
  {
    path: "/careers",
    element: <Careers/>
  }
], { basename: '/'});


export default router

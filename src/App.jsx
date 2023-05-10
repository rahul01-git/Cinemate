import { AllRoutes } from "./routes/AllRoutes"
import { Header , Footer } from "./components"
export default function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

import { QuotingProvider } from "./context/QuotingProvider"
import AppSecure from "./components/AppSecure"

function App() {

  return (
    <QuotingProvider>
      <AppSecure />
    </QuotingProvider>
  )
}

export default App

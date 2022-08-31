import { useContext } from "react"
import QuotingContext from "../context/QuotingProvider"

const useQuoting = () => {
    return useContext(QuotingContext)
}

export default useQuoting
import { useState, createContext } from "react"
import { getDifferenceYear, calculateMarca, calculatePlan, formattMoney } from '../helpers'

const QuotingContext = createContext()

const QuotingProvider = ({children}) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [charging, setCharging] = useState(false)

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const quoteInsurance = () => {
        // base
        let result = 2000

        // obtener dierencia de años
        const difference = getDifferenceYear(data.year)

        // restar 3% por cada año
        result -= ((difference * 3) * result) / 100

        // Europeo 30%
        // Americano 15%
        // Asiatico 5%
        result *= calculateMarca(data.marca)

        // Basico 20%
        // Completo 50%
        result *= calculatePlan(data.plan)

        // Formatear dinero
        result = formattMoney(result)

        setCharging(true)
        setTimeout(() => {
            setResult(result)
            setCharging(false)
        }, 3000)
    }

    return(
        <QuotingContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                quoteInsurance,
                result,
                setResult,
                charging
            }}
        >
            {children}
        </QuotingContext.Provider>
    )
}

export {
    QuotingProvider
}

export default QuotingContext
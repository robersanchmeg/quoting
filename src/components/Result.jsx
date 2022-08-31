import { useCallback, useMemo, useRef } from "react"
import useQuoting from "../hooks/useQuoting"
import { MARCAS, PLANS } from "../constants"

const Result = () => {

    const { result, data } = useQuoting()
    const { marca, plan, year } = data

    if(result === 0) return null

    const [marcaResult] = useCallback(
        MARCAS.filter(m => m.id === Number(marca)), 
        [result]
    )
    const [planResult] = useMemo(() =>
        PLANS.filter(p => p.id === Number(plan)),
        [result]
    )
    const yearResult = useRef(year)

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {marcaResult.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {planResult.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año del Auto: </span>
                {yearResult.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotización: </span>
                {result}
            </p>
        </div>
    )
}

export default Result
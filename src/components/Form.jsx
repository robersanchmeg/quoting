import { Fragment } from "react"
import { MARCAS, YEARS, PLANS } from "../constants"
import useQuoting from "../hooks/useQuoting"
import Error from "./Error"

const Form = () => {

    const { data, handleChangeData, error, setError, quoteInsurance, setResult } = useQuoting()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(data).includes('')) {
            setError('Todos los campos son obligatorios')
            setResult(0)
            return
        }

        setError('')
        quoteInsurance()
    }

    return (
        <>
            {error && <Error />}
            <form
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeData(e)}
                        value={data.marca}
                    >
                        <option value="">-- Seleccione Marca --</option>
                        {MARCAS.map(marca => (
                            <option 
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select
                        name="year"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeData(e)}
                        value={data.year}
                    >
                        <option value="">-- Seleccione Año --</option>
                        {YEARS.map(year => (
                            <option 
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un Plan
                    </label>
                    <div className="flex gap-3 items-center">
                        {PLANS.map(plan => (
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.nombre}
                                </label>
                                <input 
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => handleChangeData(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input 
                    type="submit"
                    className="w-full bg-emerald-400 hover:bg-emerald-500 transition-colors 
                    text-white cursor-pointer p-3 uppercase font-bold"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Form
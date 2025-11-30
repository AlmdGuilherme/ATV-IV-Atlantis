import { useParams } from "react-router-dom"
import FormularioEdicao from "../components/FormularioEdicao/FormularioEdicao"

export default function EditarCliente() {
  const { userDoc } = useParams()
  return (
    <>
      <div className="flex items-center justify-center min-h-[100dvh] w-full text-white gap-10">
        <h2 className="absolute top-14 left-10 text-2xl font-bold">Update de clientes</h2>
        <FormularioEdicao />
      </div>
    </>
  )
}
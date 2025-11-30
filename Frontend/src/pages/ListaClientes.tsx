import ClientCard from "../components/ClientCard/ClientCard";

export default function ListaClientes() {
  const listaClientes = ["Eduardo Nunchaku", "Maria Joana", "Carlos Silva", "Thiago sem T", "Julio Balestrin", "Renato Cariani", "Ana Paula", "Bruno Mendes", "Carla Souza", "Daniel Oliveira"];
  return (
    <>
      <div className="flex items-center justify-center min-h-[100dvh] w-full text-white gap-10">
        <h2 className="absolute top-14 left-10 text-2xl font-bold">Clientes</h2>
        <div className=" p-4 flex items-center justify-center gap-2 w-[99%] h-[70dvh] flex-wrap overflow-auto customize-scroll">
          <ClientCard clientName="José Augusto" clientType="Titular" clientDocument="123.456.789-11" clientAddress="Rua das Flores, 123 - Rio de Janeiro" clientDependents={listaClientes}/>
          <ClientCard clientName="Maria Joana" clientType="Dependente" clientDocument="231.456.789-11" clientAddress="Rua dos limoeiros, 457 - São Paulo"/>
          <ClientCard clientName="Maria Joana" clientType="Dependente" clientDocument="231.456.789-11" clientAddress="Rua dos limoeiros, 457 - São Paulo"/>
        </div>
      </div>
    </>
  )
}
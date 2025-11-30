import HospedagemCard from "../components/HospedagemCard/HospedagemCard";

export default function ListaAcomodacoes() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] w-full text-white gap-10">
      <h2 className="absolute top-14 left-10 text-2xl font-bold">Acomodações</h2>
      <div className=" p-4 flex items-center gap-4 w-[90%] h-[70dvh] flex-wrap overflow-auto customize-scroll">
        <HospedagemCard
          roomId={1}
          roomName="Solteiro Simples"
          climatization="Sim"
          suites="1"
          singleBeds="1"
          doubleBeds="0"
          garage="0"
        />
        <HospedagemCard
          roomId={2}
          roomName="Solteiro Mais"
          climatization="Sim"
          suites="1"
          singleBeds="0"
          doubleBeds="1"
          garage="1"
        />
        <HospedagemCard
          roomId={3}
          roomName="Casal Simples"  
          climatization="Sim"
          suites="1"
          singleBeds="0"
          doubleBeds="1"
          garage="1"
        />
        <HospedagemCard
          roomId={4}
         roomName="Família Simples"
          climatization="Sim"
          suites="1"
          singleBeds="2"
          doubleBeds="1"
          garage="1"
        />
        <HospedagemCard
          roomId={5}
          roomName="Família Mais" 
          climatization="Sim"
          suites="2"
          singleBeds="5"
          doubleBeds="1"
          garage="2"
        />
        <HospedagemCard
          roomId={6}
          roomName="Família Super" 
          climatization="Sim"
          suites="3"
          singleBeds="6"
          doubleBeds="2"
          garage="2"
        />
      </div>
    </div>
  )
}
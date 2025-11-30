import HospedagemCardList from "../components/HospedagemCardList/HospedagemCardList";

export default function ListaHospedagens() {
  return (
    <>
      <div className="flex items-center justify-center min-h-[100dvh] w-full text-white gap-10">
        <h2 className="absolute top-14 left-10 text-2xl font-bold">Hospedagens</h2>
        <div className=" p-4 flex items-center justify-center gap-2 w-[99%] h-[70dvh] flex-wrap overflow-auto customize-scroll">
          <HospedagemCardList clientName="José Augusto" roomName="Família Super" dataCheckIn="2024-06-01" dataCheckOut="2024-06-10"/>
          <HospedagemCardList clientName="Maria Joana" roomName="Casal Simples" dataCheckIn="2024-07-05" dataCheckOut="2024-07-12"/>
          <HospedagemCardList clientName="Carlos Silva" roomName="Solteiro Mais" dataCheckIn="2024-08-15" dataCheckOut="2024-08-20"/>
          <HospedagemCardList clientName="Ana Paula" roomName="Família Simples" dataCheckIn="2024-09-10" dataCheckOut="2024-09-15"/>
          <HospedagemCardList clientName="Bruno Mendes" roomName="Solteiro Simples" dataCheckIn="2024-10-01" dataCheckOut="2024-10-05"/>
          <HospedagemCardList clientName="Carla Souza" roomName="Família Mais" dataCheckIn="2024-11-20" dataCheckOut="2024-11-25"/>
          <HospedagemCardList clientName="Daniel Oliveira" roomName="Casal Simples" dataCheckIn="2024-12-15" dataCheckOut="2024-12-20"/>
          <HospedagemCardList clientName="José Augusto" roomName="Família Super" dataCheckIn="2024-06-01" dataCheckOut="2024-06-10"/>
          <HospedagemCardList clientName="José Augusto" roomName="Família Super" dataCheckIn="2024-06-01" dataCheckOut="2024-06-10"/>
          <HospedagemCardList clientName="Maria Joana" roomName="Casal Simples" dataCheckIn="2024-07-05" dataCheckOut="2024-07-12"/>
          <HospedagemCardList clientName="Carlos Silva" roomName="Solteiro Mais" dataCheckIn="2024-08-15" dataCheckOut="2024-08-20"/>
          <HospedagemCardList clientName="Ana Paula" roomName="Família Simples" dataCheckIn="2024-09-10" dataCheckOut="2024-09-15"/>
          <HospedagemCardList clientName="Bruno Mendes" roomName="Solteiro Simples" dataCheckIn="2024-10-01" dataCheckOut="2024-10-05"/>
          <HospedagemCardList clientName="Carla Souza" roomName="Família Mais" dataCheckIn="2024-11-20" dataCheckOut="2024-11-25"/>
          <HospedagemCardList clientName="Daniel Oliveira" roomName="Casal Simples" dataCheckIn="2024-12-15" dataCheckOut="2024-12-20"/>

        </div>
      </div>
    </>
  )
}
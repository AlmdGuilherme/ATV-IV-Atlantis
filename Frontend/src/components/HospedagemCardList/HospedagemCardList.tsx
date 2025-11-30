import './HospedagemCardList.css'

interface HospedagemCardListProps {
  clientName: string,
  roomName: "Solteiro Simples" | "Solteiro Mais" | "Casal Simples" | "Família Simples" | "Família Mais" | "Família Super";
  dataCheckIn: string;
  dataCheckOut: string;
}

export default function HospedagemCardList(props: HospedagemCardListProps) {
  return (
    <div className="hospedagem-card-list">
      <div className='hospedagem-client-infos'>
        <h1>Cliente: {props.clientName}</h1>
        <p>Acomodação: {props.roomName}</p>
      </div>
      <div className='hospedagem-date'>
        <p>Check-in: {props.dataCheckIn}</p>
        <p>Check-out: {props.dataCheckOut}</p>
      </div>
    </div>
  )
}
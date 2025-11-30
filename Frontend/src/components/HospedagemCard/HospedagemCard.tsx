import './HospedagemCard.css'

interface HospedagemCardProps {
  roomName: String,
  climatization: string,
  suites: string,
  singleBeds: string,
  doubleBeds: string,
  garage: string,
  roomId: Number
}

export default function HospedagemCard(props: HospedagemCardProps) {
  return (
    <div className="hospedagem-card" id={props.roomId.toString()}>
      <h1 className='hospedagem-name'>{props.roomName}</h1>
      <div className='room-infos'>
        <p>Climatização: {props.climatization}</p>
        <p>Suítes: {props.suites}</p>
        <p>Cama Solteiro: {props.singleBeds}</p>
        <p>Cama Casal: {props.doubleBeds}</p>
        <p>Garagem: {props.garage}</p>
      </div>
    </div>
  )
}
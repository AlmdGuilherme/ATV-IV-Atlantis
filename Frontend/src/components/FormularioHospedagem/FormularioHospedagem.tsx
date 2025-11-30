import './FormularioHospedagem.css'

export default function FormularioHospedagem() {
  return (
    <>
      <form className='formulario-estadia'>
        <h2>Registrar Estadia</h2>
        <div className='formulario-estadia-body'>
          <div className='estadia-input'>
            <label htmlFor="nome-hospede">Nome do Hóspede:</label>
            <input type="text" id="nome-hospede" name="nome-hospede" placeholder='José Augusto' required />
          </div>
          <div className='estadia-input'>
            <label htmlFor="client-cpf">CPF do Cliente:</label>
            <input type="text" id="client-cpf" name="client-cpf" placeholder='123.456.789-00' required />
          </div>
          <div className='estadia-infos'>
            <div className='estadia-select'>
              <label htmlFor="room-type">Acomodação:</label>
              <select id="room-type" name="room-type" required>
                <option value="">Selecione o tipo de acomodação</option>
                <option value="solteiro-simples">Solteiro Simples</option>
                <option value="solteiro-mais">Solteiro Mais</option>
                <option value="casal-simples">Casal Simples</option>
                <option value="familia-simples">Família Simples</option>
                <option value="familia-mais">Família Mais</option>
                <option value="familia-super">Família Super</option>
              </select>
            </div>
            <div className='estadia-input'>
              <label htmlFor="data-checkin">Data de Check-in:</label>
              <input type="date" id="data-checkin" name="data-checkin" required />
            </div>
            <div className='estadia-input'>
              <label htmlFor="data-checkout">Data de Check-out:</label>
              <input type="date" id="data-checkout" name="data-checkout" required />
            </div>
          </div>
        </div>
        <button className='estadia-button'>
          Enviar
        </button>
      </form>
    </>
  )
}
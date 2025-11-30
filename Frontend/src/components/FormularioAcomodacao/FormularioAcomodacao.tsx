import './FormularioAcomodacao.css'

export default function FormularioAcomodacao() {
  return (
    <>
      <form className='formulario-acomodacao'>
        <h2>Registrar Acomodação</h2>
        <div className='formulario-acomodacao-body'>
          <div className='acomodacao-input'>
            <label htmlFor="tipo-acomodacao">Tipo de Acomodação:</label>
            <input type="text" id="tipo-acomodacao" name="tipo-acomodacao" placeholder='Solteiro Simples' required />
          </div>
          <div className='acomodacao-input'>
            <label htmlFor="suites">Suítes: </label>
            <input type="number" id="suites" name="suites" placeholder='2' min={1} required />
          </div>
          <div className='acomodacao-input'>
            <label htmlFor="singleBed">Camas de Solteiro:</label>
            <input type="number" id="singleBed" name="singleBed" placeholder='4' min={0} required />
          </div>
          <div className='acomodacao-input'>
            <label htmlFor="doubleBed">Camas de Casal:</label>
            <input type="number" id="doubleBed" name="doubleBed" placeholder='1' min={0} required />
          </div>
          <div className='acomodacao-input'>
            <label htmlFor="garage">Garagem:</label>
            <input type="number" id="garage" name="garage" placeholder='1' min={0} required />
          </div>
          <div className='acomodacao-input'>
              <label htmlFor="climatizacao">Climatização: </label>
              <select name="climatizacao" id="climatizacao">
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select> 
          </div>
        </div>
        <button className='acomodacao-button'>
          Enviar
        </button>
      </form>
    </>
  )
}
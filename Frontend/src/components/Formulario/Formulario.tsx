import './Formulario.css'

export default function Formulario() {
  return (
    <>
      <form className='formulario-cliente'>
        <div className='form-body'>
          <div className='formulario-personal-infos'>
            <div className='formulario-input'>
              <label htmlFor="username">Nome: </label>
              <input type="text" id='username' placeholder='Pedro Alvares Cabral' required/>
            </div>
            <div className='formulario-input'>
              <label htmlFor="socialname">Nome Social: </label>
              <input type="text" id='socianame' placeholder='Pedrinho Cabral' required/>
            </div>
            <div className='formulario-input'>
              <label htmlFor="birthdate">Data de Nascimento: </label>
              <input type="date" id='birthdate' required/>
            </div>
            <div className='client-type'>
              <label htmlFor="clienttype">Tipo de cliente: </label>
              <div className='formulario-radios'>
                <div>
                  <input type="radio" name="selected-client" />
                  <label htmlFor="clienttype" >Titular</label>
                </div>
                <div>
                  <input type="radio" name="selected-client" />
                  <label htmlFor="clienttype" >Dependente</label>
                </div>
              </div>
            </div>
          </div>
          <div className='formulario-document-infos'>
            <label htmlFor="documentType">Tipo de documento:</label>
            <div className='client-document'>
              <div>
                <input type="radio" name="selected-document" />
                <label htmlFor="documentType" >CPF</label>
              </div>
              <div>
                <input type="radio" name="selected-document" />
                <label htmlFor="documentType" >RG</label>
              </div>
              <div>
                <input type="radio" name="selected-document" />
                <label htmlFor="documentType" >Passaporte</label>
              </div>
            </div>
              <div className='formulario-input'>
                <label htmlFor="document">Documento: </label>
                <input type="text" id='document' placeholder='CPF: 123.456.789-11' />
              </div>
            <div className='formulario-input'>
              <label htmlFor="expeditiondate">Data de Expedição: </label>
              <input type="date" id='expeditiondate' />
            </div>
          </div>
        </div>
        <button  className='form-button'>
          Enviar
        </button>
      </form>
    </>
  )
}
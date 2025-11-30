import './FormularioEdicao.css'

export default function FormularioEdicao() {
  return (
    <>
      <form className='formulario-edicao'>
        <h2>Atualizar Cliente</h2>
        <div className='formulario-edicao-body'>
          <div className='edicao-input'>
            <label>Nome:</label>
            <input type='text' placeholder='Pedro Alvares Cabaral' required/>
          </div>
          <div className='edicao-input'>
            <label>Nome Social:</label>
            <input type='text' placeholder='Pedrinho Cabaral' required/>
          </div>
          <div className='edicao-input'>
            <label>Data de Nascimento:</label>
            <input type='date' required/>
          </div>
          <div className='edicao-input'>
            <label>Tipo de Cliente:</label>
            <select required>
              <option value='titular'>Titular</option>
              <option value='dependente'>Dependente</option>
            </select>
          </div>
          <div className='edicao-input'>
            <label htmlFor="document-type">Tipo de Documento:</label>
            <select id="document-type" required>
              <option value="cpf">CPF</option>
              <option value="rg">RG</option>
              <option value="passaporte">Passaporte</option>
            </select>
          </div>
          <div className='edicao-input'>
            <label>Número do Documento:</label>
            <input type='text' placeholder='123.456.789-00' required/>
          </div>
          <div className='edicao-input-dependent'>
            <label htmlFor="dependent-name">Nome do dependente:</label>
            <div className='edicao-add-dependent'>
              <input id="dependent-name" type='text' placeholder='Nome do dependente'/>
              <button>
                Adicionar
              </button>
            </div>
            <div className='edicao-dependents-list'>
        
            </div>
          </div>
        </div>
        <button className='edicao-button'>
          Enviar
        </button>
      </form>
    </>
  )
}
import './ListaSuspensa.css'

export default function ListaSuspensa (props) {
    return(
        <div className='lista-suspensa'>
            <label> {props.label} </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} valor={props.valor}>
                <option value=""></option>
                {props.itens.map( (item) => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}
/*
key é o "id" de um determinado item precisa ter para que o react saiba 
quando ele precisa renderizar ou não, ou seja é o identificador de um item 
que o react precisa saber seu id para que sempre que o item seja atualizado o
react saiba que prcisa renderiza-lo novamente
*/

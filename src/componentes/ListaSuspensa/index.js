import './ListaSuspensa.css'

export default function ListaSuspensa (props) {
    console.log(props.itens)
    return(
        <div>
            <label> {props.label} </label>
            <select>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}
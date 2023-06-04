import './Botao.css'

export default function Botao(props) {
    return(
        <div>
            <button className='botao'>
                {props.children}
            </button>
        </div>
    )
}
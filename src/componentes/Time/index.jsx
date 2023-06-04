import Colaborador from '../Colaborador'
import './time.css'

export default function Time(props) {
    return (
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corPrimaria}}> {/*PARA SE FAZER UMA RENDERIZAÇÃO CONDICIONAL DEVEMOS ADICIONAR A CONDIÇÃO A ESQUERDA E O REACT RENDERIZAR OQ VIER A DIREITA*/}
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador 
                        key={colaborador.nome}
                        corDeFundo={props.corSecundaria}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
        </section>
    )
}
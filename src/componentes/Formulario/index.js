import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSustpensa from "../ListaSuspensa"

function Formulario() {
    const times = [
        
    ]
    return (
        <section className="formulario">
            <form >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome"  placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" />
                <ListaSustpensa />
            </form>
        </section>
    )
}

export default Formulario
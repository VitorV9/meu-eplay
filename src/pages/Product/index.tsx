import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Galery from '../../components/Galery'

const Product = () => {
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora: </b>Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment
        </p>
      </Section>
      <Galery />
    </>
  )
}

export default Product

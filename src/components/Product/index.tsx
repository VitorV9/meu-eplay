import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" alt="Placeholder" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      aperiam ut suscipit accusantium, praesentium veniam nam aut ipsam
      quibusdam incidunt hic, excepturi, possimus repellendus fugiat
      consequuntur odit amet ea? Ab?
    </Descricao>
  </Card>
)

export default Product

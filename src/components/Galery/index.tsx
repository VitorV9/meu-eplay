import Section from '../Section'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import fechar from '../../assets/images/fechar.png'
import spideramn from '../../assets/images/banner-homem-aranha.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/y5eEicFyPlg?si=qEBVOBOQew3JHxF2'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Galery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Icone de fechar" />
          </header>
          <img src={spideramn} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Galery

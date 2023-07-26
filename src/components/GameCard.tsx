import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from '../components/PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card  >
        {/* <Image src={getCroppedImageUrl(game.background_image)} /> */}
        {/* <video controls="true">
          <source src="www.youtube.com/watch?v=IEDEtZ4UVtI" type="video/mp4">
        </video> */}
        {/* <iframe width="230" height="130" src="https://www.youtube.com/embed/brp1usbA4_4" frameBorder="0" allowFullScreen></iframe> */}
        <iframe
        width="230" // 视频宽度
        height="130" // 视频高度
        src={`https://www.youtube.com/embed/brp1usbA4_4`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
                {/* <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} /> */}
                <CriticScore score={game.rate} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard
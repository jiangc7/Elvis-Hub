import React, { useState } from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import useData from '../hooks/useData';
import { Button, HStack, Image, List, ListItem, Spinner, Text, withDefaultVariant } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectedGenre: (genre: Genre) =>void;
}

const GenreList = ({onSelectedGenre}: Props) => {
    const {data, isLoading,error } = useGenres();

  console.log("*****", data)

    if(error) return null

    if(isLoading) return <Spinner />

  return (
    <List>
        {
        data.map(genres => (
          
            <ListItem key={genres.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genres.image_background) } />
                    <Button onClick={() => onSelectedGenre(genres)} fontSize='lg' variant='link'>{genres.name}</Button>
                </HStack>
            </ListItem>
            ))}
    </List>
  )
}

export default GenreList
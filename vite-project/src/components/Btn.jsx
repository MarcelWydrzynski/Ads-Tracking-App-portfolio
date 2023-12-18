import React, { Children } from 'react';
import { Button } from '@chakra-ui/react'

const Btn = ({onClick,  id, children}) => {
  return (
    <Button size="xs" fontSize={16}  onClick={() => onClick(id)}>
    {children}
  </Button>
  )
}

export default Btn
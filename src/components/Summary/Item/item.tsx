import { Flex, Text } from '@chakra-ui/react'

type ItemProps = {
  text: string,
  value: number,
  fontWeight?: number,
  color?: string,
  discount?: boolean,
  size?: string
}

export default function Item({
  text,
  value,
  fontWeight,
  color,
  discount,
  size = '14px'
}: ItemProps) {
  return (
    <Flex
      justifyContent={'space-between'}
      w="100%"
      h='22px'
      fontFamily={'Helvetica'}
      fontWeight={fontWeight}
      fontSize={size}
      lineHeight={'16px'}
      fontStyle={'normal'}
      letterSpacing="0.269231px"
    >
      <Text>{text}</Text>
      <Text color={discount && color} fontWeight={discount && 700}>
        {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)}
      </Text>
    </Flex>
  )
}

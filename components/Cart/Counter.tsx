import { Box, BoxProps } from 'components/Box'
import { FC, KeyboardEvent, useEffect, useState } from 'react'
import { noop } from 'utils'
import { InputStyled, UnaryOperatorStyled } from './styled'

interface CounterProps extends Omit<BoxProps, 'onChange'> {
  count: number
  min?: number
  max?: number
  onChange?(num: number): void
}

export const Counter: FC<CounterProps> = ({
  count = 1,
  min = 1,
  max,
  onChange = noop,
  width = 90,
  height = 34,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<number | ''>(count)

  useEffect(() => {
    setInputValue(count)
  }, [count])

  const onInputChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setInputValue('')
      return
    }
    const value = Number(e.target.value)
    if (value >= min) {
      if (!max) {
        onChange(value)
      } else if (value <= max) {
        onChange(value)
      }
    }
  }

  const onInputBlur = () => {
    if (inputValue === '') {
      setInputValue(count)
    }
  }

  return (
    <Box
      borderRadius="regular"
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.300"
      width={width}
      height={height}
      {...props}
      display="flex"
      overflow="hidden"
    >
      <UnaryOperatorStyled
        className="no-user-select"
        onClick={onChange.bind(null, count - 1)}
        disabled={count === min}
      >
        -
      </UnaryOperatorStyled>
      <Box
        flex="1 1 auto"
        height="100%"
        bg="white"
        borderColor="gray.300"
        borderLeftWidth={1}
        borderLeftStyle="solid"
        borderRightWidth={1}
        borderRightStyle="solid"
      >
        <InputStyled
          type="number"
          onChange={onInputChange}
          onBlur={onInputBlur}
          value={inputValue}
        />
      </Box>
      <UnaryOperatorStyled
        className="no-user-select"
        onClick={onChange.bind(null, count + 1)}
        disabled={!!max && count === max}
      >
        +
      </UnaryOperatorStyled>
    </Box>
  )
}

import Box from 'components/Box'
import Input from 'components/Form/Input'
import Icon from 'components/Icon'
import { FC } from 'react'

type SearchbarProps = { onFocus?(): void }

const Searchbar: FC<SearchbarProps> = ({ onFocus }) => {
  return (
    <Box width={{ default: 1, sm: 1 / 2 }} mx={16}>
      <Input
        type="text"
        icon={<Icon name="search" size={30} />}
        placeholder="Type the gender, category or both, men+t-shirt etc..."
        onFocus={onFocus}
        isIconBg
      />
    </Box>
  )
}

export default Searchbar

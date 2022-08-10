import Box from 'components/Box'
import Input from 'components/Form/Input'
import Icon from 'components/Icon'

const SearchInput = () => {
  return (
    <Box width={{ default: 1, sm: 1 / 2 }} mx={24}>
      <Input
        type="text"
        icon={<Icon name="search" size={30} />}
        placeholder="Type the gender, category or both, men+t-shirt etc..."
      />
    </Box>
  )
}

export default SearchInput

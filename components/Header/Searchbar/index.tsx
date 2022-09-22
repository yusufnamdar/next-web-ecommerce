import { Box } from 'components/Box'
import { Input } from 'components/Form/Input'
import { Icon } from 'components/Icon'
import { Overlay } from 'components/Overlay'
import { Text } from 'components/Text'
import {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { SuggestionMenuStyled, SuggestionStyled } from './styled'
import { useRouter } from 'next/router'

const Searchbar = () => {
  const [inputFocus, setInputFocus] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [suggestionFocus, setSuggestionFocus] = useState(0)
  const previousSuggestions = useRef<string[]>([])
  const router = useRouter()

  const arrangedSuggestions = useMemo(() => {
    if (suggestionFocus) return previousSuggestions.current

    let arr = suggestions.filter((item) => item.startsWith(inputSearch))
    if (inputSearch) {
      arr = arr.sort()
    }
    previousSuggestions.current = arr
    return arr
  }, [inputSearch, suggestions, inputFocus])

  useEffect(() => {
    const suggestion = localStorage.getItem('namstoreSuggestions')
    if (suggestion) {
      setSuggestions(JSON.parse(suggestion))
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleMenuClose)
    return () => document.removeEventListener('click', handleMenuClose)
  }, [])

  const handleMenuClose = (e: any) => {
    const searchbar = document.querySelector('#searchbar') as HTMLDivElement
    if (searchbar && !searchbar.contains(e.target)) {
      setInputFocus(false)
    }
  }

  const searchProducts = (search: string) => {
    setInputFocus(false)
    setSuggestionFocus(0)
    document.querySelector<HTMLInputElement>('#search-input')?.blur()
    router.push(`/products?s=${encodeURIComponent(search)}`)

    const isSearchExist = suggestions.find((item) => item === search)
    if (isSearchExist) return

    setSuggestions((suggestions) => {
      if (suggestions.length < 10) {
        suggestions = [search, ...suggestions]
      } else {
        suggestions = [search, ...suggestions.slice(0, -1)]
      }
      localStorage.setItem('namstoreSuggestions', JSON.stringify(suggestions))
      return suggestions
    })
  }

  const handleKeyDownSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    const search = inputSearch.replace(/\s/g, '')
    if (e.key === 'Enter' && search) {
      searchProducts(search)
    }
  }

  const handleClickSearch = () => {
    const search = inputSearch.replace(/\s/g, '')
    if (search) {
      searchProducts(search)
    }
  }

  const handleSelectSuggestion = (sgt: string) => {
    setInputSearch(sgt)
    setInputFocus(false)
    setSuggestionFocus(0)
    document.querySelector<HTMLInputElement>('#search-input')?.blur()
    router.push(`/products?s=${encodeURIComponent(sgt)}`)
  }

  const handleDeleteSuggestion = (sgt: string) => (e: MouseEvent) => {
    e.stopPropagation()
    document.querySelector<HTMLInputElement>('#search-input')?.focus()
    setSuggestions((suggestions) => {
      suggestions = suggestions.filter((item) => item !== sgt)
      previousSuggestions.current = previousSuggestions.current.filter(
        (item) => item !== sgt
      )
      localStorage.setItem('namstoreSuggestions', JSON.stringify(suggestions))
      return suggestions
    })
  }

  const handleMenuOpen = () => {
    setInputFocus(true)
  }

  const handleSuggestionFocus = (e: KeyboardEvent<HTMLDivElement>) => {
    const max = arrangedSuggestions.length
    if (e.key === 'ArrowUp') {
      setSuggestionFocus((prev) => {
        if (prev === 1) {
          prev = max
        } else {
          prev--
        }
        setInputSearch(arrangedSuggestions[prev - 1])
        return prev
      })
    } else if (e.key === 'ArrowDown') {
      setSuggestionFocus((prev) => {
        if (prev < max) {
          prev++
        } else {
          prev = 1
        }
        setInputSearch(arrangedSuggestions[prev - 1])
        return prev
      })
    }
  }

  return (
    <>
      <Box
        id="searchbar"
        position="relative"
        onKeyDown={handleSuggestionFocus}
        width={{ default: 1, sm: 1 / 2 }}
        mx={16}
      >
        <Input
          type="search"
          id="search-input"
          icon={<Icon name="search" size={30} />}
          placeholder="Type the gender, category or both, men+t-shirt etc..."
          onChange={(e) => {
            setSuggestionFocus(0)
            setInputSearch(e.target.value)
          }}
          value={inputSearch}
          onKeyDown={handleKeyDownSearch}
          onClickIcon={handleClickSearch}
          onFocus={handleMenuOpen}
          hasFocus={inputFocus}
          isIconBg
        />
        <SuggestionMenuStyled
          expanded={!!arrangedSuggestions.length && inputFocus}
        >
          {arrangedSuggestions.map((suggestion, index) => {
            return (
              <SuggestionStyled
                key={suggestion}
                hasFocus={suggestionFocus === index + 1}
                onClick={handleSelectSuggestion.bind(null, suggestion)}
              >
                <Box display="flex" alignItems="center" gap={10}>
                  <Icon name="restart_alt" color="gray.400" />
                  <Text fontWeight="semi-bold" color="rose.400">
                    {suggestion}
                  </Text>
                </Box>
                <Icon
                  className="hover-rose-color"
                  onClick={handleDeleteSuggestion(suggestion)}
                  name="close"
                  cursor="pointer"
                  size={18}
                  color="gray.400"
                />
              </SuggestionStyled>
            )
          })}
        </SuggestionMenuStyled>
      </Box>
      <Overlay isExpanded={inputFocus} top={64} />
    </>
  )
}

export default Searchbar

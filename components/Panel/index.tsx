import { BoxProps } from 'components/Box'
import { FC } from 'react'
import { PanelStyled } from './styled'

const Panel: FC<BoxProps> = (props) => {
  return <PanelStyled {...props} />
}

export { Panel }

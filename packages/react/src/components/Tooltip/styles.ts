import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  padding: '0.75rem 1rem',
  background: '#121214',
  color: '#E1E1E6',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '0.875rem',
  borderRadius: '4px',
  fontWeight: '500',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
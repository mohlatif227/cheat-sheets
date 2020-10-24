import {
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/core'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeTogglebutton() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(FiSun, FiMoon)

  return (
    <IconButton
      icon={<ToggleIcon />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleMode}
    />
  )
}

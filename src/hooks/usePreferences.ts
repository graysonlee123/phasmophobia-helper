import { useContext } from 'react'
import { PreferencesContext } from 'src/context/preferences'

export default function usePreferences() {
  return useContext(PreferencesContext)
}

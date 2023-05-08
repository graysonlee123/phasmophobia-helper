import useLocalStorage from '@hooks/useLocalStorage'
import { ReactNode, createContext } from 'react'

type PreferencesContextValue = {
  preferences: Preferences
  setPreferences: (value: Preferences) => void
}

const defaultPreferences: Preferences = { confetti: true, limitedEvidence: false }
export const PreferencesContext = createContext<PreferencesContextValue>({
  preferences: defaultPreferences,
  setPreferences: () => {},
})

type PreferencesContextProviderProps = {
  children: ReactNode
}

export default function PreferencesContextProvider({ children }: PreferencesContextProviderProps) {
  const [preferences, setPreferences] = useLocalStorage<Preferences>(
    'preferences',
    defaultPreferences
  )

  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  )
}

import Logo from '@components/brand/Logo'
import { SnackbarProvider } from 'notistack'

export default function AlertProvider() {
  return (
    <SnackbarProvider
      iconVariant={{
        default: <Logo width={24} height={24} gutterRight />,
        success: <Logo width={24} height={24} gutterRight />,
      }}
      disableWindowBlurListener={true}
    />
  )
}

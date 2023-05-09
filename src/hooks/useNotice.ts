import { enqueueSnackbar } from 'notistack'

export default function useNotice() {
  return { notice: enqueueSnackbar }
}

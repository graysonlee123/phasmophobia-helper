import useWinner from '@hooks/useWinner'
import { useShowConfetti } from '@store/index'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function Confetti() {
  const showConfetti = useShowConfetti()
  const winner = useWinner()
  const { width, height } = useWindowSize()

  if (!winner || !showConfetti) return null

  return (
    <ReactConfetti
      width={width}
      height={height}
      numberOfPieces={400}
      gravity={0.2}
      recycle={false}
    />
  )
}

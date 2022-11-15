import useWinner from '@hooks/useWinner'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function Confetti() {
  const winner = useWinner()
  const { width, height } = useWindowSize()

  return (
    winner && (
      <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={400}
        gravity={0.2}
        recycle={false}
      />
    )
  )
}

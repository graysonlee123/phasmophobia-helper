import { ComponentPropsWithoutRef } from 'react'
import styles from './Logo.module.css'
import cn from 'classnames'

type LogoProps = {
  gutterRight?: boolean
} & ComponentPropsWithoutRef<'svg'>

export default function Logo({
  gutterRight,
  className,
  width = 36,
  height = 36,
  ...props
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      viewBox={`0 0 36 36`}
      preserveAspectRatio="none"
      className={cn([className, gutterRight && styles.gutterRight])}
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Zm.039-29c-4.498 0-5.315 3.23-5.315 4.846 0 .665 0 1.946-.286 3.759-2.01 1.153-2.712.217-3.297-.563-.306-.408-.58-.773-.992-.773-1.226 0-1.635 1.616-.408 2.827.251.249.474.478.68.69.972 1.002 1.56 1.61 3.03 1.977-.606 1.929-1.498 4.15-2.816 6.622.682-.27 2.208-.647 2.862 0 .22.216.38.432.528.633.407.55.728.982 1.925.982.545 0 .898-.14 1.31-.303.578-.23 1.274-.505 2.779-.505 1.45 0 2.153.272 2.744.5.427.166.795.308 1.344.308 1.197 0 1.518-.433 1.925-.982.149-.2.309-.417.528-.633.654-.647 2.18-.27 2.862 0-1.322-2.48-2.216-4.707-2.821-6.64 1.417-.37 2.002-.973 2.959-1.96.205-.21.428-.44.68-.689 1.226-1.211.817-2.827-.41-2.827-.412 0-.685.365-.991.773-.576.769-1.267 1.69-3.213.61-.293-1.837-.293-3.135-.293-3.806 0-1.615-.817-4.846-5.314-4.846Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

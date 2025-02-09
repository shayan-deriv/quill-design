import { ReactNode } from 'react'
import HeroHeading from './hero'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import H4 from './h4'
import H5 from './h5'
import H6 from './h6'
import H7 from './h7'

type HeadingVariants = {
  Hero: typeof HeroHeading
  H1: typeof H1
  H2: typeof H2
  H3: typeof H3
  H4: typeof H4
  H5: typeof H5
  H6: typeof H6
  H7: typeof H7
}

export const Heading: HeadingVariants = ({
  children,
}: {
  children: ReactNode
}) => {
  return <>{children}</>
}

Heading.Hero = HeroHeading
Heading.H1 = H1
Heading.H2 = H2
Heading.H3 = H3
Heading.H4 = H4
Heading.H5 = H5
Heading.H6 = H6
Heading.H7 = H7

export default Heading

import {FC} from 'react'
import {useTitle} from 'ahooks'
const About: FC = () => {
  useTitle('About Page')
  return (
    <div>About</div>
  )
}

export default About
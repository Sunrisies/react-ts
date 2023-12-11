import { FC } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'
const About: FC = () => {
  const nav = useNavigate()
  useTitle('about page')
  const goTo = () => {
    nav('/')
  }
  return (
    <>
      <p>关于</p>
      <Button type="primary" onClick={goTo}>
        首页
      </Button>
    </>
  )
}
export default About

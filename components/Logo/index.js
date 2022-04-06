import styled from "@emotion/styled"
import { Img } from "@chakra-ui/react"

const LogoBox = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  padding: 20px;
`

const Logo = () => {
  return (
    <LogoBox>
      <Img
        src="https://creativeclickmedia.com/wp-content/uploads/2018/04/wireframe-box-270x203.jpg"
        alt="logo"
        height="100px"
        width="120px"
      />
    </LogoBox>
  )
}

export default Logo

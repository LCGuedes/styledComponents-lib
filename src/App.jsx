  /* import BoxComponent from "./components/Box"
 */import Container from "./components/Container"


function App() {
  

  return (
    <>
   
{/*      <BoxComponent backgroundColor="red" borderRadius="24px" fontSize="12px" fontWeight="700" Height="100vh"/>
 */}
    <Container
      width="500px"
      height="500px"
      background="red"
      radius="20px"
      color="#fff"
      fontSize="46px"
    >
      {<h1>
        testes</h1>}
     </Container>
    </>
     
  )
}

export default App

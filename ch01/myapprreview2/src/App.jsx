import Introduction1 from "./Introduction1"
import Introduction2 from "./Introduction2"
import Introduction3 from "./Introduction3"


function App() {
  return (
    <>
      <Introduction1 />
      <Introduction2 age= '25'
      major= '인공지능응용학과' />
      <Introduction3 futureJob = 'Full stack개발자'
      certificate='정보처리기사, SQLD' />
        </>
      

  )
}

export default App

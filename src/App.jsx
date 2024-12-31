import Student from "./Student"

function App() {

  return (
    <>
      <Student name="Nick" age={15} isStudent={true} />
      <Student name="Dan" age={13} isStudent={true} />
      <Student />
    </>
  )
}

export default App

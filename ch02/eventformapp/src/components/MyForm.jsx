export default  function MyForm() {
  //
  const handleSubmit = event => {
    event.preventDefault();   //기본 작동 방지
    // 폼 제출 방지하는 메서드
    alert(`폼이 제출되었습니다.`);}

  return(
    <>
      <form onSubmit= {handleSubmit}>
      <input type="submit" value="제출" />
      </form>
      <br />
    </>
    
  );
}
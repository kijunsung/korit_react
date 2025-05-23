export default function Mycomponent() {

  const handleClick = () => alert(`버튼이 클릭됨`)


  return (
    <>
    <button onClick={handleClick}>
    Click!</button>
    </>

);

}
export default function StudentsList() {

  const students = [
    '김일','김이', '김삼','김사','김오',
    '김육','김칠','김팔','김구','김십'];

    return (
      <>
      <ul>
      {
        students.map((element, y) => 
          <li key = {y}> {y+1}. {element}</li>
        )
        }
      </ul>
      </>
    );
}
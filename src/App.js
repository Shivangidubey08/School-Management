import { Button } from '@mui/material';
import * as React from 'react';
import StudentTable from './Components/StudentTable/StudentTableComponent';
import { useDispatch, connect } from 'react-redux';
import { editStudentList } from './actions/studentAction';

function App(studentList) {

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(studentList);
  }, [studentList])
  function filterList() {
    console.log(typeof (studentList), studentList);
    const filteredList = studentList.filter((student) => student.name.startsWith("Fro"));
    dispatch(editStudentList(filteredList));
  }
  return (
    <div>
      <Button onClick={filterList}>Test Redux</Button>
      <StudentTable />
    </div>
  );
}
const mapStateToProps = (state) => ({
  studentList: state.studentList
});
export default connect(mapStateToProps)(App);

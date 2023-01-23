function createClassRoom(numbers0fStudents){
	function studentSeat(seat){
		return function(){
			alert(seat)
		}
	}
	var students = [];
	for (var i = 0; i < numbers0fStudents; i++){
		students.push(studentSeat(i + 1));
	}
	return students;
}
var classRoom = createClassRoom(10);
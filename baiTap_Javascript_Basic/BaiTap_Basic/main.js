// includes method
//  Dùng includes để đi tìm giá trị của một chuỗi 

var title ="Responsive web design";
console.log(title.includes('Responsive'));
// Sử dụng Array
 var courses=['javascipt','PHP','Dart'];
 console.log(courses.includes('javascript',-3));

//  Math object
 
console.log(Math.PI);
// dùng để làm tròn số

console.log(Math.round(1.3));
// Trả về giá trị tuyệt đối
//console.log(Math(-4));
/*
   Math Object
   -Math.PI
   -Math.round()
   -Math.abs()- giá trị tuyệt đối
   -Math.cell()-- làm tròn trên 4.2222=>5
   -Math.floor()-- làm tròn dưới 
   -Math.random()
   -Math.min();

*/
/*
-----------------------------CALLBACK---------------
Callback? là hàm( function) được truyền qua đối số
// Khi gọi hàm khác


1.Hàm
2. Được truyền qua đối số
3. Được gọi lại
*/
function myFunction(param){
    param('Học lập trình');
}
function myCallback(){
    console.log('Value:', value);
}
myFunction(myCallback);


var courses=[
    'javascript',
    'PHP',
    'Ruby'

];
// courses.map(function(course){
//     console.log(course);
// });
// var htmls= courses.map(function(course){
//     return '<h2>${course}</h2>';
// })
// console.log(htmls.join(''));
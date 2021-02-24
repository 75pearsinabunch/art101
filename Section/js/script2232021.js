// for(var index = 0; index < 10; index++){
//   //create 10 divs inside the Container div with class name = "box"
//   var boxEl = document.createElement("div");
//   boxEl.className="box";
//   //add is to each box that looks like bax_id_0, box_id_1,...
//   boxEl.id="box_id_"+(index+1);
//   //boxEl.id="box_id_"+(index+=1);
//   document.getElementById('Container').appendChild(boxEl);
//   console.log(index);
// }
/*
var counter = 0
while (counter < 10){
console.log(counter);
}
*/
//in jquery
for(var i =0; i<10; i++){
  if (i%2==0){
    $('#Container').append("<div id='box_id_ "+i+"' class='box_even'></div>");
    console.log("hi");
  }else{
    $('#Container').append("<div id='box_id_ "+i+"' class='box_odd'></div>");
    console.log("hello");
  }
}

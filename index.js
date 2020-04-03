//
// function takeANumber(katzDeliLine,name){
//   var i=0
//
//   katzDeliLine.push(name)
//
//     return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
//

// }
function nowServing(katzDeliLine){
  var i=0
  if(katzDeliLine.length<0){
  return "There is nobody waiting to be served!"}
  else {
    for(i=0;i<katzDeliLine.length;i++){

      katzDeliLine.shift()
  return katzDeliLine[0]
  }
}}

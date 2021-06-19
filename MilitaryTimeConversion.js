
function addTime(time) {
    function D(J){ return (J<10? '0':'') + J;};
    var piece = time.split(':');
    var mins = piece[0]*60 + +piece[1] + +"45" ;
    var secs = mins*60+ +piece[2] + +"45" 
    return D(mins%(24*60)/60 | 0) + ':' + D(mins%(60)) +':' + D(secs%60);  
  } 

const doChangeTime = time12h => {
    const time = time12h.slice(0,8);
    const modifier= time12h.slice(8);
    let [hours, minutes,seconds] = time.split(":");
   
    if (hours === "12") {
      hours = "00";
    }
   
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    var convertedTime=`${hours}:${minutes}:${seconds}`
    var res=addTime(convertedTime)
    console.log(res)
    return res;
  };

//   doChangeTime("12:51:15AM")
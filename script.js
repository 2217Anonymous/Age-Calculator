let datePicker = document.getElementById("datePicker")
let chooseDate = document.getElementById("choseDate")

let ageYear = document.getElementById("ageYear")
let ageMonth = document.getElementById("ageMonth")
let ageDay = document.getElementById("ageDays")
let ageHours = document.getElementById("ageHours")
let ageSeconds = document.getElementById("ageSeconds")
let ageMs = document.getElementById("ageMiliSeconds")

datePicker.addEventListener('change',function(){
    const options = {
        year    : 'numeric',
        month   : 'long',
        day     : 'numeric',
    } 

    let selectedDate = new Date(this.value);
    // console.log(selectedDate);
    let DoB = selectedDate.toLocaleDateString('en-us',options)
    // console.log(DoB);
    chooseDate.innerHTML = `DoB : ${DoB}`

    let miliSeconds_Btw_DOB = Date.parse(DoB)
    
    let miliSeconds_Btw_Now = Date.now()
    // console.log(miliSeconds_Btw_Now);

    let age_in_milliseconds = miliSeconds_Btw_Now - miliSeconds_Btw_DOB;
    // console.log(age_in_milliseconds);

    let miliseconds = age_in_milliseconds;
    let second      = 1000;
    let minute      = second*60;
    // console.log("Min    : ",minute);
    let hour        = minute*60;
    // console.log("Hour   : ",hour);
    let day         = hour*24;
    // console.log("Day    : ",day);
    let month       = day*30;
    // console.log("Month  : ",month);
    let year        = day*365;
    // console.log("Year   : ",year);

    // Now Start the Calculation

    let years   = Math.round(miliSeconds/year);
	let months  = years*12;
	let days    = years*365;
	let hours   = Math.round(miliSeconds/hour);
	let seconds = Math.round(miliSeconds/second);

    ageYear.innerHTML   = years
	ageMonth.innerHTML  = months
	ageDays.innerHTML   = days
	ageHours.innerHTML  = hours
	ageSeconds.innerHTML= seconds
	ageMs.innerHTML     = miliseconds;
})
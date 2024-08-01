const input = document.getElementById("input")
const button = document.getElementById("submit")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const result3 = document.getElementById("result3")
const text = document.getElementById("resultText")

function timeFormat(hour , minute){
    let hours = hour;
    let minutes = minute;
    let time = hours > 12 ? "PM" : "AM";
    if(minutes === 60){
        minutes = 0;
        hours += 1;
    }
    let formatedHours = hours % 12
    formatedHours = formatedHours === 0 ? 12 :formatedHours;

    return(`${String(formatedHours).padStart(2 , "0")}:${String(minutes).padStart(2 , "0")} ${time}`)
}


button.addEventListener("click" , () => {
    let time = input.value;
    let [hours , minutes] = time.split(":").map(Number)

    let hours1 = hours - 7;
    let minutes1 = minutes - 30;
    if(hours1 <= 0){
        hours1 += 24
    }
    if(minutes1 <= 0){
        minutes1 += 60;
        hours1 -= 1;
    }
    
    result1.textContent = timeFormat(hours1 , minutes1)

    console.log(hours1 , minutes1)
    
    
    let hours2 = hours - 6;
    let minutes2 = minutes;
    if(hours2 <= 0){
        hours2 += 24
    }


    result2.textContent = timeFormat(hours2 , minutes2)

    console.log(hours2 , minutes2)
    

    let hours3 = hours - 4;
    let minutes3 = minutes - 30;
    if(hours3 <= 0){
        hours3 += 24
    }
    if(minutes3 <= 0){
        minutes3 += 60;
        hours3 -= 1;
    }
    
    result3.textContent = timeFormat(hours3 , minutes3)

    console.log(hours3 , minutes3)


    result1.style.display = "block"
    result2.style.display = "block"
    result3.style.display = "block"
    text.style.display = "block"
    
})

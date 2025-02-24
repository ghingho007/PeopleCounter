let countNmb = document.getElementById("counter-nmb")
let passSv = document.getElementById("pass-save")
let count = 0


function conta(){
    count += 1
    countNmb.innerText = count
}

function save(){
    let saves = " " + count + " " + " - "
    passSv.innerText += saves
    countNmb.innerText = 0
    count = 0
}

function reset(){
    passSv.innerText = "PREVIOUS NUMBER: "
}

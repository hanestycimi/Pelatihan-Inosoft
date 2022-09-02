function getPreviousValue(){
	return document.getElementById("screen-previous-value").innerText;
}
function printPreviousValue(num){
	document.getElementById("screen-previous-value").innerText = num;
}
function getCurrentValue(){
	return document.getElementById("screen-current-value").innerText;
}
function printCurrentValue(num){
	if(num == ""){
		document.getElementById("screen-current-value").innerText = num;
	}
	else{
		document.getElementById("screen-current-value").innerText = getFormattedNumber(num);
	}	
}

function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}

    // let lastIndexOfDecimal = num.toString().lastIndexOf(".");
    // let decimal = lastIndexOfDecimal == false? false:lastIndexOfDecimal == num.length-1? true:false;

    const stringNumber = num.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }

	// var n = Number(num);
	// var value = n.toLocaleString("en");
	// // if (decimal) {
    // //     return value + ".";
    // // }
    // // else {
    //     return value;
    //     alert("salah luu");
    // }
    // return value;
}

function reverseNumberFormat(num){
	return (num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener('click',function(){
		if(this.id == "clearAll"){
			printPreviousValue("");
			printCurrentValue("");
		}
		else if(this.id == "clear"){
			printCurrentValue("");
		}
		else{
			var currentValue = getCurrentValue();
			var previousValue = getPreviousValue();
			if(currentValue == "" && previousValue != "") {
				if(isNaN(previousValue[previousValue.length-1])){
					previousValue= previousValue.substr(0,previousValue.length-1);
				}
			}
			if(currentValue != "" || previousValue != ""){
				currentValue = currentValue == ""?
                currentValue:reverseNumberFormat(currentValue);
				previousValue = previousValue + currentValue;
				if(this.id == "="){
					var result = eval(previousValue);
					printCurrentValue(result);
					printPreviousValue("");
				}
				else if (this.id == "%") {
                    currentValue = currentValue/100;
                    printCurrentValue(currentValue);
                }
                else if (this.id == "plusmin") {
                    currentValue = currentValue*(-1);
                    printCurrentValue(currentValue);
                }
                else {
					previousValue = previousValue + this.id;
					printPreviousValue(previousValue);
					printCurrentValue("");
				}
			}
		}
		
	});
}



var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
	number[i].addEventListener('click',function(){
		var currentValue = reverseNumberFormat(getCurrentValue());
        // var currentValue = getCurrentValue();
		if(currentValue != NaN){ //if output is a number
			currentValue = currentValue + this.id;
            // let matchCount = currentValue.match(/\./g) ;
            // if( matchCount && matchCount.length > 1 ) {
            //     return ;
            // }
			printCurrentValue(currentValue);
		}
	});
}

// var decimal = document.getElementsByClassName("decimal");
// decimal.addEventListener("click", () => {
//     var currentValue = reverseNumberFormat(getCurrentValue())
//     if (!currentValue.includes(".")) {
//         currentValue += ".";
//         printCurrentValue(currentValue);
//       }
// });



// function input(input) {
//     let nilai = document.getElementById("screenInput").innerHTML;
//     nilai = nilai + input;
//     let history = document.getElementById("screen").innerHTML;
//     history = nilai;
//     if (input == "+" || input == "-" || input == "/" || input == "*" || input == "%") {
//         nilai = "";
//         nilai = nilai + input;
        
//     }
    
//     document.getElementById("screenInput").innerHTML = nilai;
//     document.getElementById("screen").innerHTML = nilai
// }

// function previousInput() {
//     // let operator = document.getElementsByClassName("operator").innerHTML;
//     let nilai = document.getElementById("screenInput").innerHTML;
//     document.getElementById("screen").innerHTML = nilai;
// }

// function input(input) {
//     let nilai = document.getElementById("screen").innerHTML;
//     nilai = nilai + input;
//     document.getElementById("screen").innerHTML = nilai;
// }


// function hasil() {
//     let nilai = document.getElementById("screenInput").innerHTML;
//     document.getElementById("screenInput").innerHTML = eval(nilai)
// }

var button= document.getElementById("enter");
var input= document.getElementById("userInput");
var ul= document.querySelector("ul");

// function inputLength(){
// 	return input.value.length;
// }

// function createListElement(){
// 	var li= document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value="";
//  input.focus();
// }

// function addListAfterClick(){
// 	if(inputLength()>0){
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event){
// 	if(inputLength()>0  && event.keyCode===13){
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

// this section belongs to without methods
//
button.addEventListener("click", function(){
		if(input.value.length>0){
			var li= document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value="";
			input.focus();
	}
})

input.addEventListener("keypress", function(event){
	if(input.value.length>0 && event.keyCode===13){
		var li= document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
	}
})



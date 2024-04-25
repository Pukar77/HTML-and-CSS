
let a = document.querySelector('.name1');
let b = document.querySelector('.name2');
let c = document.querySelector('.btn');
let x;
let d = document.querySelector('.display');
let e = document.querySelector('.haha');
let f = document.querySelector('.final');



c.addEventListener("click", clickfunction);

function clickfunction(){

    if (a.value === "" || b.value === "") {
        alert("Please enter both your name and your loved one's name.");
        return; // Exit the function if the names are not entered
    }
    
    
    x=Math.floor(Math.random()*100);
    console.log(x);
    f.innerHTML = a.value + " Love " + x + "% to " + b.value  ;
    d.innerHTML='';
    

    if (x <= 20) {
        // Create an <img> element
        let imgElement = document.createElement('img');
        // Set the src attribute of the image
        imgElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFn27Pb36xmiQ4ImscJxvG0MJDOw8oqaDUS1vpN4xSUg&s'; // Change 'path_to_your_image.jpg' to the actual path of your image
        // Append the image to the display area
        d.appendChild(imgElement);
    }

    else if(x>20 && x<=60){
          // Create an <img> element
          let imgElement = document.createElement('img');
          // Set the src attribute of the image
          imgElement.src = 'https://media.makeameme.org/created/hehe-not-bad.jpg'; // Change 'path_to_your_image.jpg' to the actual path of your image
          // Append the image to the display area
          imgElement.style.height = '200px';
          d.appendChild(imgElement);
    }

    else{
        let imgElement = document.createElement('img');
        // Set the src attribute of the image
        imgElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5_wHSvC3T4SYlBR8yBV76ujrcMIQEW_8l0bd4GVGSA&s'; // Change 'path_to_your_image.jpg' to the actual path of your image
        // Append the image to the display area
        d.appendChild(imgElement);

    }

 
}








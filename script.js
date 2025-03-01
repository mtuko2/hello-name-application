const btnElement = document.querySelector('button');
const spanElement = document.getElementById('Updatecontent');
btnElement.onclick =function(){

    const YourName = prompt("Please enter your Name");
    spanElement.textContent = YourName;
}
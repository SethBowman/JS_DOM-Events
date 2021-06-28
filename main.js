/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(`node1`) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2")
node2[0].textContent = "I used the getElementsByClassName(\"node2\") method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3 = document.getElementsByTagName("h3")

for (element of h3) 
{
    element.textContent = "I used the getElementByTagName(\"h3\") method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
let newElement = document.createElement("p");
newElement.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.getElementsByClassName("exercise2");
parent[0].appendChild(newElement);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
let newElement2 = document.createElement("a");
newElement2.textContent = "Google Search";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent[0].insertBefore(newElement2, newElement);

// BONUS: Add a link href to the <a>
newElement2.href = "https://www.google.com";

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let oldChild = document.getElementById("N1");

let ex3 = document.getElementById("exercise3");

let newElement3 = document.createElement("p");

newElement3.textContent = "New Child Node";



ex3.replaceChild(newElement3, oldChild);
// TODO: Remove the "New Child Node"
setTimeout(function () 
{
    ex3.removeChild(newElement3);    
}, 3000);

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
let box = document.getElementById("box");
let conatainer = document.getElementById("container");
let posX = 0;

function moveBox() 
{   
    if(posX <= conatainer.offsetWidth - box.offsetWidth)
    {
        box.style.left = posX + "px";
        posX++;
    }
    else
    {
        clearInterval()
    }   
}

setInterval(moveBox, 100);
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
function show() 
{
    let modal = document.createElement("div");    
    let modalP = document.createElement("p");
    let modalButton = document.createElement("button");

    modalP.textContent = 
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
    modal.appendChild(modalP);
    document.body.appendChild(modal);  
}

let btn = document.getElementById("btn");
btn.addEventListener("click", show);
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

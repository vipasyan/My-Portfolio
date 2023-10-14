
// var username= prompt("Your name");
// document.write("Hello "+ username);

var myname = "Vipasyan Telaprolu";
document.write("Made by "+ myname);

let emailElement = document.querySelector('#email');
let messageElement= document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) 
{
	e.preventDefault();
	
	let emailValue = emailElement.value;
	let messageValue = messageElement.value;
	
	console.log('Email: ', emailValue);
	console.log('message: ', messageValue);
	
	if(emailValue.includes('@')) {
		alert('Thanks for your message');
	} else {
		alert('invalid email address');
	}
		
	
})

function addMyFavoriteBook(nameofBook) {
	// 
	if (!nameofBook.includes("win")){
		favoriteBooks.push(nameofBook);
		
	}
	
  }
  
  function printFavoriteBooks(){
	  console.log(`Favorite Books: ${favoriteBooks.length}`);
	  for (let nameofBook of favoriteBooks) {
		  console.log(nameofBook);
	  }
	  
  }
 var favoriteBooks = [];

addMyFavoriteBook("Winners will never quit and quitters will never win");
addMyFavoriteBook("You can win");
addMyFavoriteBook("5 habits of winners");
addMyFavoriteBook("Secret");
addMyFavoriteBook("Power of your thought");
addMyFavoriteBook("An autobiography of a yogi");

printFavoriteBooks();
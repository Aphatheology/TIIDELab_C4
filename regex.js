const emailVerifier = () => {
    // Get input from user
	let userEmail = prompt("Enter your email ");
	
    // If input does not match
 	if(userEmail.match(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/) === null) {
		console.log("Invalid Email, try again!")
        emailVerifier();
	} 
    
    // If input match
	else if ((userEmail.match(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/)).length === 1) {
        // Replace every alpha-numeric with *
		console.log(userEmail.replaceAll(/[a-zA-Z0-9]/g, "*"))

        //Replace everyting before @ with *
		console.log(userEmail.replaceAll(/[a-zA-Z0-9]*@/g, "*"))
    } 
};

emailVerifier();
const un = 'ssrawoorkar'; //Define user name as string
const pw = 'PhXjsytXvp8DGgfc'; //Define your password here as string
module.exports = {
	mongo: {
		connectionString: `mongodb+srv://${un}:${pw}@fullstackwebdev.xex1bio.mongodb.net/?retryWrites=true&w=majority&appName=fullstackwebdev`,
		port:3000
	}
};


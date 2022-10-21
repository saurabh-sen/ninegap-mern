const mongoose = require('mongoose');

main()
.then(() => console.log('Connected to MongoDB...'))
.catch((error) => console.log('Could not connect to MongoDB...', error));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}
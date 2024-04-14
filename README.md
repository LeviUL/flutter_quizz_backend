# Setup instructions

After you clone the repository, to run the app, follow these steps:

1. Create a `.env` file in the root directory with the following environment variables:
   - `HOST='localhost'`
   - `PORT='3306'`
   - `USER='YOUR_MYSQL_USER'`
   - `PASSWORD='YOUR_MYSQL_PASSWORD'`
   - `DATABASE_NAME='YOUR_DATABASE_NAME'`

2. Run `npm install`.

3. Start the application using `npm start`.

# Adding data to the app

To add data to the app, follow these steps using Postman:

1. **Create categories:**
   - `curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"Movie\"}" http://localhost:4000/categories`
   - `curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"Silly\"}" http://localhost:4000/categories`

   ⚠️ **Warning:** Remember to copy the category IDs from the response of the curl commands for later use at the next curl commands where you add it to 'categoryId' field.

2. **Create questions:**
   - `curl -X POST -H "Content-Type: application/json" -d "{\"question\":\"Who is the human's best friend?\",\"wrongAnswers\":[\"Cat\",\"Spider\"],\"goodAnswer\":\"Dog\",\"categoryId\":\"ID_OF_SILLY\"}" http://localhost:4000/questions`
   - `curl -X POST -H "Content-Type: application/json" -d "{\"question\":\"Which was the first Star Wars movie made by George Lucas?\",\"wrongAnswers\":[\"Attack of The Clones\",\"Return of the Jedi\"],\"goodAnswer\":\"A New Hope\",\"categoryId\":\"ID_OF_MOVIE\"}" http://localhost:4000/questions`

## Spaarks Backend Developer Assignment
<p>This repository contains the backend code for the Spaarks application.</p>


## Getting Started
### Prerequisites
<ul>
        <li><strong>Node.js</strong> (latest)</li>
        <li><strong>npm</strong> (v6.x or later)</li>
        <li><strong>MongoDB</strong> (MongoDB Atlas)</li>
</ul>
# Clone the Repository
<p>To start, clone the repository to your local machine:</p>

```bash
git clone https://github.com/Tanujch03/Spaarks-Backend-Developer-Assignment.git
cd Spaarks-Backend-Developer-Assignment bash


### Set Up Environment Variables
Create a .env file in the root directory of the project and set up the following environment variables:

bash
Copy code
PORT=3000
MONGO_URL=""  # Your MongoDB connection string
JWT_SECRET="" # Your JWT secret key
Install Dependencies
Install the required dependencies by running:

bash
Copy code
npm install
Run the Development Server
Start the server in development mode using the following command:

bash
Copy code
npm run dev
The server should now be running. You can access it at http://localhost:3000/.

Using Docker
If you prefer using Docker, you can pull and run the pre-built Docker image.

Pull the Docker Image
bash
Copy code
docker pull tanuj03/spaarks:latest
Run the Docker Container
Start the container with the following command:

bash
Copy code
docker run -d -p 3000:3000 tanuj03/spaarks:latest
The server will be accessible at http://localhost:3000/.

## Spaarks Backend Developer Assignment
<p>This repository contains the backend code for the Spaarks application.</p>


## Getting Started
### Prerequisites
<ul>
        <li><strong>Node.js</strong> (latest)</li>
        <li><strong>npm</strong> (v6.x or later)</li>
        <li><strong>MongoDB</strong> (MongoDB Atlas)</li>
</ul>

### Clone the Repository
<p>To start, clone the repository to your local machine:</p>

```
git clone https://github.com/Tanujch03/Spaarks-Backend-Developer-Assignment.git
cd Spaarks-Backend-Developer-Assignment
```


### Set Up Environment Variables
<p>Create a .env file in the root directory of the project and set up the following environment variables:</p>

```
PORT=3000
MONGO_URL=""  # Your MongoDB connection string
JWT_SECRET="" # Your JWT secret key
```

### Install Dependencies
<p>Install the required dependencies by running:</p>

```npm install```

### Run the Development Server
<p>Start the server in development mode using the following command:</p>

```npm run dev```

<p>The server should now be running. You can access it at <a href="http://localhost:3000">http://localhost:3000</a></p>

###  Endpoints
#### Authorization Endpoints
<ul>
        <li>/api/auth/signup</li>
        <li>/api/auth/signin</li>
        <li>/api/auth/logout</li>
</ul>

#### Handling restaurants Endpoints
<ul>
        <li>/api/restaurants/nearby</li>
        <li>/api/auth/nearbyrange</li>
       
</ul>

### Using Docker
<p>If you prefer using Docker, you can pull and run the pre-built Docker image.</p>

### Pull the Docker Image

```docker pull tanuj03/spaarks:latest```

### Run the Docker Container
<p>Start the container with the following command:</p>

```docker run -d -p 3000:3000 tanuj03/spaarks:latest```

<p>The server will be accessible at <a href="http://localhost:3000">http://localhost:3000</a></p>

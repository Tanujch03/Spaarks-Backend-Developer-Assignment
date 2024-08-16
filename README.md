<body>
    <h1>Spaarks Backend Developer Assignment</h1>
    <p>This repository contains the backend code for the Spaarks application. The project is built with Node.js and MongoDB, providing a RESTful API for various functionalities.</p>

    <h2>Getting Started</h2>

    <h3>Prerequisites</h3>
    <ul>
        <li><strong>Node.js</strong> (v14.x or later)</li>
        <li><strong>npm</strong> (v6.x or later)</li>
        <li><strong>MongoDB</strong> (local instance or MongoDB Atlas)</li>
    </ul>

    <h3>Clone the Repository</h3>
    <p>To start, clone the repository to your local machine:</p>
    <pre><code>git clone https://github.com/Tanujch03/Spaarks-Backend-Developer-Assignment.git
cd Spaarks-Backend-Developer-Assignment
    </code></pre>

    <h3>Set Up Environment Variables</h3>
    <p>Create a <code>.env</code> file in the root directory of the project and set up the following environment variables:</p>
    <pre><code>PORT=3000
MONGO_URL=""  # Your MongoDB connection string
JWT_SECRET="" # Your JWT secret key
    </code></pre>

    <h3>Install Dependencies</h3>
    <p>Install the required dependencies by running:</p>
    <pre><code>npm install</code></pre>

    <h3>Run the Development Server</h3>
    <p>Start the server in development mode using the following command:</p>
    <pre><code>npm run dev</code></pre>
    <p>The server should now be running. You can access it at <a href="http://localhost:3000/">http://localhost:3000/</a>.</p>

    <h3>Using Docker</h3>
    <p>If you prefer using Docker, you can pull and run the pre-built Docker image.</p>

    <h4>Pull the Docker Image</h4>
    <pre><code>docker pull tanuj03/spaarks:latest</code></pre>

    <h4>Run the Docker Container</h4>
    <p>Start the container with the following command:</p>
    <pre><code>docker run -d -p 3000:3000 tanuj03/spaarks:latest</code></pre>
    <p>The server will be accessible at <a href="http://localhost:3000/">http://localhost:3000/</a>.</p>

    <h2>API Documentation</h2>
    <p>For detailed API documentation, refer to the documentation provided in the project or test the endpoints using tools like Postman.</p>

    <h2>Contributing</h2>
    <p>If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>

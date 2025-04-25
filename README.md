<div align="center">
  <img height="200" src="https://i.ibb.co.com/kWvBRXH/Screenshot-2025-04-25-220746.png" />
</div>

<!-- Library Management System -->

<h1>📚 Library Management System</h1>

<p>
  The Library Management System is designed to manage book information for a well-renowned school. 
  It allows users to browse, categorize, and borrow books with ease. The system provides a user-friendly 
  interface, secure data handling, and efficient book tracking, enhancing the library experience for students and staff.
</p>

<h2>🔗 Live URL</h2>
<p>
  <a href="https://library-management-syste-81bcf.web.app/" target="_blank">
    <strong>Library Management System</strong>
  </a>
</p>

<hr>

<h2>🚀 Key Features</h2>

<ul>
  <li><strong>Responsive Design</strong>: Fully responsive, ensuring a seamless experience across various devices.</li>
  <li><strong>Navbar</strong>: Contains options like 'Home,' 'AllBooks,' 'AddBook,' 'BorrowedBooks,' 'Login,' and 'Register.'
      The 'Login' and 'Register' buttons are conditionally displayed based on user authentication status.</li>
  <li><strong>Home Page</strong>: Features a banner/slider with at least 3 informative slides, Book Categories Section, 
      and 2 additional sections to engage users.</li>
  <li><strong>AllBooks Page</strong>: Displays a list of all available books with a 'Details' button for each book.</li>
  <li><strong>Details Page</strong>: Provides comprehensive information about each book and includes a 'Borrow' button, 
      which opens a modal with a form for borrowing the book.</li>
  <li><strong>Borrowed Books</strong>: Tracks the books that users have borrowed, along with return dates.</li>
  <li><strong>Book Management</strong>: Allows adding, categorizing, and updating book information.</li>
  <li><strong>Protected Routes</strong>: Ensures that certain routes are accessible only to authenticated users.</li>
  <li><strong>Firebase & MongoDB Security</strong>: Ensures secure handling of Firebase and MongoDB credentials.</li>
</ul>

<hr>

<h2>🛠️ Technologies Used</h2>

<h3>Frontend</h3>
<ul>
  <li>⚛️ React</li>
  <li>🌍 React Router</li>
  <li>🎨 Tailwind CSS</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>⚡ Express.js</li>
  <li>🛢️ MongoDB</li>
  <li>🟢 Node.js</li>
</ul>

<h3>Authentication & Hosting</h3>
<ul>
  <li>🔐 Firebase Authentication</li>
  <li>☁️ Firebase Hosting</li>
</ul>

<h3>Development & Deployment</h3>
<ul>
  <li>📦 dotenv - For managing environment variables</li>
  <li>🔗 Axios - For making HTTP requests</li>
  <li>🐙 GitHub - Version control and collaboration</li>
  <li>🚀 Vercel / Netlify - Alternative hosting platforms</li>
</ul>

<hr>

<h2>📦 NPM Packages Used</h2>

<ul>
  <li>⚛️ <strong>React</strong>: A JavaScript library for building user interfaces.</li>
  <li>🌍 <strong>React Router</strong>: For handling routing within the application.</li>
  <li>🔗 <strong>Axios</strong>: For making HTTP requests to the backend API.</li>
  <li>🔐 <strong>Firebase</strong>: For authentication and hosting.</li>
  <li>🛢️ <strong>MongoDB</strong>: As the database to store book information.</li>
  <li>⚡ <strong>Express.js</strong>: A web application framework for Node.js.</li>
  <li>🟢 <strong>Node.js</strong>: For backend development.</li>
  <li>🛠️ <strong>dotenv</strong>: For managing environment variables.</li>
</ul>

<hr>

<h2>🚀 Running the Project Locally</h2>

<p>To run the Library Management System project locally, follow these steps:</p>

<ol>
  <li><strong>Clone the Repository:</strong>
    <pre><code>git clone https://github.com/gr99murad/Library-Management-System.git</code></pre>
  </li>
  
  <li><strong>Install Dependencies:</strong> 
    Navigate to the project folder and install the necessary dependencies by running:
    <pre><code>npm i</code></pre>
  </li>
  
  <li><strong>Create a Firebase Project:</strong>
    - Go to the <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a>
    - Create a new project and obtain the Firebase configuration keys for Authentication.
  </li>
  
  <li><strong>Run the backend Server:</strong> 
    Start the development server by running:
    <pre><code>nodemon index.js</code></pre>
    The app will be accessible at <code>http://localhost:5000</code>.
  </li>

  <li><strong>Connect to Backend:</strong> 
    Ensure the Express backend server is running. Update API URLs in the frontend if required.
  </li>
  
  <li><strong>Enjoy!</strong> local instance of the Library Management System should now be up and running.
  </li>
</ol>

<hr>

<p>📌 <strong>Feel free to contribute, explore, and enhance the Library Management System!</strong> 🎉</p>


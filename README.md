# JARURAT CARE ASSIGNMENT
### Objective :
  Creating a simple API using Node.js and Express to manage a list of healthcare services.

## Getting Started

### Requirements
- Node and npm installed.
- Make sure you have a git account and git installed on your machine.
- Mongodb compass installed on your local machine or any monogdb cluster's account.

### Technolgies and tools 
- NodeJS
- ExpressJS
- MongoDB
- mongoose
- joi(validation)

### Assignment setup

1. Clone the repository in your local machine.
   
   ```
   git clone https://github.com/Navaneeth-21/Jarurat-Care-Assignment.git 
   ```
2. Install all the dependencies in `package.json` with the below command.

    ```
    npm install
    ```
  
3. Create a `.env` file which is similar to `sample.env` and replace the `PORT` value and `MONGO_URL` with your valid details.
4. Run the application

    ```
    npm run start
    ```

5. Then you'll see the output in the console as :
   
   ` Database connected.
      Server is running on : http://localhost:PORT `

6. Testing the all APIS
   - Go to the any of the APIS platform like `POSTMAN` or `thunderClient` extension in VScode.
7. Run the endpoints acoording to the API documentation
    - [API DOCUMENTATION Reference](https://www.postman.com/altimetry-physicist-57425162/jarurat-care)
    - In the collection you can find the following endpoints :
      - Add Services (POST)
      - Get Services (GET)
      - Update Services (PATCH)
      - Delete Service (DELETE)  
   

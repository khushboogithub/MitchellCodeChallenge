There are two components in this project : one is the React component and the other WebAPI 
How to Run : 
  1. MitchellCodeChallenge_WebAPI :
      - In the "appsettings.json" file -> setup your own local computer MYSQL server name. 
          "localhost" : "Server = <YOUR-OWN-SERVER-NAME>;Database=VehicleDB;Trusted_Connection=True;MultipleActiveResultSets=True;"
      - In the "Startup.cs" file -> Line number 41 : Change the port number 
          app.UseCors(options => options.WithOrigins("http://localhost:<YOUR REACT PORT NUMBER>")
      - Start Debugging
      
  2. mitchellcodechallenge_ui :
      - In the "src>actions>api.js" file : change the port number according to >.NET
          const baseUrl ="http://localhost:<YOUR LOCALHOST .NET PORT NUMBER>/api/"
      - npm update (to install all the libraries)
      - npm start 

  

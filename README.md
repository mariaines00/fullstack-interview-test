## For the ustwo technical challenge:
### A system that allows a store’s employees to view and book shifts
------

### solution
Small app that allows to see all registered shifts(defined by employee name, start date and duration): __/display-shifts__;

And to add new ones __/create-shifts__;

#### front-end
Using angular to build the static app files;

Then using nginx as a webserver to host those files and to redirect api calls to the backend container endpoint;

### back-end
Using node alongisde express for the backend webserver, following the structure used by the mozilla tutorial @ [mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs);

With mongo for the database and mongoose to comunicate with it;

### considerations
- Theres no testing (unit nor e2e);
- There's no user handling
- Very basic error handling and input sanitation/validation `happy day scenarios only :)`
- Only two routes/operations were implemented, for displaying all shifts and adding new ones;
  - All the other operations were stubbed but due to time constraints not fully implemented;


### to run locally
1. clone the repositor in your local machine
2. navigate to the directory containing the docker-compose.yml file
3. run docker-compose up -d --build

### see it live
The app is deployed on google cloud, please go to /url/
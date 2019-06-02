## For the ustwo technical challenge:
### - A system that allows a store’s employees to view and book shifts

### solution
Small app that allows to see all registered shifts(defined by employee name, start date and duration);
And to add new ones;

####front-end
Using angular and nginx;

###back-end
Using node, express and mongo for the database;

###considerations
- Theres no testing (unit nor e2e);
- There's no user handling


### to run locally
clone the repositor in your local machine
navigate to the directory containing the docker-compose.yml file
run docker-compose up -d --build

### see it live
The app is deployed on google cloud, please go to /url/
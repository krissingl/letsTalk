# Let's Talk

Self-help app that encourages users to practice speaking. For those with social anxiety or trouble speaking in public. Currently a work-in-progress and not ready for commercial use.

## Installation

### Step 1: GET THE REPO
  Fork this repo and clone it down to your local machine.
### Step 2: SETUP THE DATABASE: COUCHDB
  * The user's "thoughts" are recorded and saved on CouchDB. Spin up CouchDB on your local machine.
  * Then, create a 'database' folder in the root of this directory.
  * Within the database folder create an index.js file for your credentials and connection to CouchDB.
     The file path should look like this : ../letsTalk/database/index.js
  * You will then input the connection information. The contents of this file must look like this:

```
const db = require('nano')('http://admin:{YOUR_ADMIN_NAME}@localhost:5984/lets_talk_thoughts');
module.exports.db = db;
```

  * So long as you follow these directions the .gitignore file should automatically hide your credentials, but be sure before pushing!
  ### Step 3: SPIN HER UP
    * In the root directory's terminal run the command: npm run react-dev
    * In a seperate terminal run the command: npm start
    * This should spin up the app to run on your localhost. Go to the browser and search the URL localhost:3012 and Let'sTalk should be waiting for you!
  ### Conclusion
    This app is a work-in-progress so please be patient with its flaws. Every day we work towards the ideal and LetsTalk is too!
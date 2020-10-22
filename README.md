# API Documentation

#### 1️⃣ Backend delpoyed at [Heroku](https://tiffany-simionescu-portfolio.herokuapp.com/) <br>
 

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework

-    PostgreSQL is much larger in size compared to Sqlite
-    PostgreSQL supports almost every data type
-    PostgreSQL has a larger storage capacity compared to Sqlite
-    PostgreSQL can handle multiple users at once
-    PostgreSQL was used for production and development
-    Sqlite3 was used for testing

## 2️⃣ Endpoints

#### Parent Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/parents` | all users      | Returns all the parents and their information. |
| GET    | `/api/parents/:id` | all users         | Returns the information for a single parent            |
| PUT    | `/api/parents/:id`   | owner | Update existing parent information    |

#### Children Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/children/parent/:id` | owner      | Returns all children for selected parent          |
| POST   | `/api/children` | owner        | Add a new child                    |
| PUT    | `/api/children/:id` | owner        | Updates a specific child  |
| DELETE | `/api/children/:id` | owner        | Removes a specific child  |

#### Contractor Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/contractors` | all users      | Returns all contractors. |
| GET    | `/api/contractors/:id` | all users      | Returns a single contractor           |
| PUT    | `/api/contractors/:id` | contractor        | Updates a specific contractor  |

#### Auth Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| POST    | `/api/auth/register/parent` | all parent users      | Register a new parent (does not provide token) |
| POST    | `/api/auth/register/contractor` | all contractor users      | Register a new contractor (does not provide token)          |
| POST   | `/api/auth/login/parent` | parent        | Login as a parent                   |
| POST    | `/api/auth/login/contractor` | contractor        | Login as a contractor  |

#### Request Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/requests/parent/:id` | owner      | Returns a specific request from parent. |
| POST   | `/api/requests` | parent        | Adds a new request from parent                    |
| PUT    | `/api/requests/:id` | parent        | Updates a request from parent  |
| DELETE | `/api/requests/:id` | parent        | Removes a request from parent  |

#### Request Comment Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/reqcomments/request/:id` | all users      | Returns all request comments from contractors. |
| POST   | `/api/reqcomments` | contractor        | Add a new request comment from a contractor                  |
| PUT    | `/api/reqcomments/:id` | contractor        | Updates a request comment from a contractor  |
| DELETE | `/api/reqcomments/:id` | contractor        | Removes a specific request comment from a contractor  |

#### Offers Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/offers/contractor/:id` | all users      | Returns all offers from a specific contractor. |
| POST   | `/api/offers` | contractor        | Add an offer from a contractor                   |
| PUT    | `/api/offers/:id` | contractor        | Updates an offer from a contractor  |
| DELETE | `/api/offers/:id` | contractor        | Removes an offer from a contractor  |

#### Offer Comment Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/offercomments/offer/:id` | all users      | Returns all offer comments from a specific parent. |
| POST   | `/api/offercomments` | parent        | Add an offer comment from a parent                   |
| PUT    | `/api/offercomments/:id` | parent        | Updates an offer comment from a parent  |
| DELETE | `/api/offercomments/:id` | parent        | Removes an offer comment from a parent  |

#### Parent Question Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/questions/parent/:id` | all users      | Returns all questions from a specific parent. |
| GET    | `/api/questions/` | all users      | Returns all questions. |
| POST   | `/api/questions` | parent        | Add a question from a parent                   |
| PUT    | `/api/questions/:id` | parent        | Updates a question from a parent  |
| DELETE | `/api/questions/:id` | parent        | Removes a question from a parent  |

#### Contractor Answer Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/ api/answers/question/:id` | all users      | Returns all answers from a specific question. |
| POST   | `/api/answers` | contractor        | Add an answer from a contractor                   |
| PUT    | `/api/answers/:id` | contractor        | Updates an answer from a contractor  |
| DELETE | `/api/answers/:id` | contractor        | Removes an answer from a contractor  |

## Data Model

#### Parents

---

```
{
  parent_id: UUID
  username: STRING
  password: STRING
  first_name: STRING
  last_name: STRING
  email: STRING
  dob: DATE, YYYYMMDD
  phone_number: INTEGER
  cpr_cert: BOOLEAN
}
```

#### Children
---

```
{
  child_id: UUID
  first_name: STRING
  last_name: STRING
  dob: DATE
  allergies: STRING
  medical_conditions: STRING
  special_instructions: STRING
  parent_id: INTEGER
}
```

#### Contractors
---

```
{
  contractor_id: UUID
  username: STRING
  password: STRING
  first_name: STRING
  last_name: STRING
  email: STRING
  dob: DATE
  phone_number: INTEGER
  cpr_cert: BOOLEAN
  price: FLOAT
}
```

#### Requests
---

```
{
  request_id: UUID
  username: STRING
  first_name: STRING
  last_name: STRING
  request: STRING
  child_count: INTEGER
  location: STRING
  time: STRING
  stroller: BOOLEAN
  ride: STRING
  parent_id: INTEGER
}
```

#### Request Comments
---

```
{
  request_comment_id: UUID
  username: STRING
  first_name: STRING
  last_name: STRING
  request_comment: STRING
  request_id: INTEGER
  contractor_id: INTEGER
  parent_id: INTEGER
}
```

#### Offers
---

```
{
  offer_id: UUID
  username: STRING
  first_name: STRING
  last_name: STRING
  offer: STRING
  max_child_count: INTEGER
  location: STRING
  time: STRING
  contractor_id: INTEGER
}
```

#### Offer Comments
---

```
{
  offer_comment_id: UUID
  username: STRING
  first_name: STRING
  last_name: STRING
  offer_comment: STRING
  offer_id: INTEGER
  parent_id: INTEGER
}
```

#### Questions
---

```
{
  question_id: UUID
  username: STRING
  first_name: STRING
  last_name: STRING
  question: STRING
  parent_id: INTEGER
}
```

#### Answers
---

```
{
  answer_id: UUID
  username: STRING
  first_name: STRING
  last_name: STRING
  answer: STRING
  question_id: INTEGER
  contractor_id: INTEGER
}
```


## Actions (Models)

#### Auth

`findParents()` -> Returns all parents

`findContractors()` -> Returns all contractors

`findByParentFilter(filter)` -> Returns a specific parent by filter

`findByContractorFilter(filter)` -> Returns a specific contractor by filter

`findParentById(parent_id)` -> Returns a specific parent by ID

`findContractorById(contractor_id)` -> Returns a specific contractor by ID

`addParent(parent)` -> Adds a new parent

`addContractor(contractor)` -> Adds a new contractor



#### Parents

`find()` -> Returns all parent

`findById(parent_id)` -> Returns a single parent by ID

`update(parent_id, changes)` -> Updates a specific parent's data



#### Children

`findById(child_id)` -> Returns a single child by ID

`findParent(parent_id)` -> Returns a single parent by ID

`add(child)` -> Adds a new child

`update(child_id, changes)` -> Updates a specific child

`remove(child_id)` -> Removes a specific child from the database



#### Contractors

`find()` -> Returns all contractors

`findById(contractor_id)` -> Returns a single contractor by ID

`update(contractor_id, changes)` -> Updates a specific contractor



#### Requests

`findById()` -> Returns a single request by ID

`findParent(parent_id)` -> Returns a single parent by ID

`add(request)` -> Adds a new request

`update(request_id, changes)` -> Updates a specific request

`remove(request_id)` -> Removes a specific request from the database



#### Request Comments

`findById(request_comment_id)` -> Returns a single request comment by ID

`findRequest(request_id)` -> Returns a single request by ID

`add(request_comment)` -> Adds a new request comment

`update(request_comment_id, changes)` -> Updates a specific request comment

`remove(request_comment_id)` -> Removes a specific request comment from the database



#### Offers

`findById(offer_id)` -> Returns a single offer by ID

`findContractor(contractor_id)` -> Returns a single contractor by ID

`add(offer)` -> Adds a new offer

`update(offer_id, changes)` -> Updates a specific offer

`remove(offer_id)` -> Removes a specific offer from the database


#### Offer Comments

`findById(offer_comment_id)` -> Returns a single offer comment by ID

`findOffer(offer_id)` -> Returns a single offer by ID

`add(offer_comment)` -> Adds a new offer comment

`update(offer_comment_id, changes)` -> Updates a specific offer comment

`remove(offer_comment_id)` -> Removes a specific offer comment from the database



#### Questions

`find()` -> Returns all questions

`findById(question_id)` -> Returns a single question by ID

`findParent(parent_id)` -> Returns a single parent by ID

`add(question)` -> Adds a new question

`update(question_id, changes)` -> Updates a specific question

`remove(question_id)` -> Removes a specific question from the database


#### Answers

`findById(answer_id)` -> Returns a single answer by ID

`findQuestion(question_id)` -> Returns a single question by ID

`add(answer)` -> Adds a new answer

`update(answer_id, changes)` -> Updates a specific answer

`remove(answer_id)` -> Removes a specific answer from the database


### Additional Notes
- Login with username and password
- Contractors can Answer Questions, respond to requests, make an offer. Cannot make requests or ask questions
- Parents can Ask Quesions, make or answer requests. Cannot make offers or answer questions
- Children can only be added to Parents

### Tech Used
- SQLite3
- Express
- Knex


## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:
    
    *  JWT_SECRET=you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  DATABASE_URL=This is generated by Heroku PostgreSQL. In the CLI, type the following: heroku addons:create heroku-postgresql:hobby-dev. Copy the database name you receive and then enter the following: heroku pg:credentials:url <database_name>.
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

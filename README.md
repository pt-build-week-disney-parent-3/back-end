# Endpoints needed for Disney Project

# Parents / Children
- GET - /api/parents
- GET - /api/parents/:id
- PUT - /api/parents/:id 
- GET - /api/children/parent/:id (All children for parent) 
- POST - /api/children 
- PUT - /api/children/:id
- DELETE - /api/children/:id

# Contractors
- GET - /api/contractors
- GET - /api/contractors/:id 
- PUT - /api/contractors/:id

# Auth
- POST - /api/auth/register 
- POST - /api/auth/login

# Requests / ReqComments
- GET - /api/requests/parent/:id (Get all parent requests)
- GET - /api/reqcomments/request/:id (Get all comments for a request)
- POST - /api/requess
- POST - /api/reqcomments
- PUT - /api/requests/:id
- PUT - /api/reqcomments/:id 
- DELETE - /api/requests/:id 
- DELETE - /api/reqcomments/:id 

# Offers / OfferComments
- GET - /api/offers/user/:id (Get all user offers) 
- GET - /api/offercomments/offer/:id (Get all offer comments for an offer)
- POST - /api/offers 
- POST - /api/offercomments 
- PUT - /api/offers/:id 
- PUT - /api/offercomments/:id
- DELETE - /api/offers/:id 
- DELETE - /api/offercomments/:id


# Questions / Answers
- GET - / api/answers/question/:id (Get all answers to a question)
- GET - /api/questions
- GET - /api/questions/user/:id (Get all questions from a user) 
- PUT - /api/anwers/:id 
- PUT - /api/questions/:id 
- POST - /api/answers 
- POST - /api/questions 
- DELETE - /api/answers/:id 
- DELETE - /api/questions/:id 


// Contractors can Ask and Answer Questions, respond to requests, make an offer. Cannot make requests

// Parents can Ask and Answer Quesions, make and respond to requests, make an offer

// Children can only be added to Parents

# Database Information

Users
- username
- password
- first_name
- last_name
- email
- dob
- phone_number
- cpr_cert (defaultTo false)
- type

Parents
- user_id

Children
- first_name
- last_name
- DOB
- allergies
- medical_conditions
- special_instructions
- parent_id

Contractors
- price
- user_id

Requests
- username
- first_name
- last_name
- request
- location
- time
- parent_id
- stroller (default is false)
- ride

Request_Comments
- username
- first_name
- last_name
- request_comment
- request_id
- user_id

Offers
- username
- first_name
- last_name
- offer
- location
- time
- user_id

Offer_Comments
- username
- first_name
- last_name
- offer_comment
- offer_id
- user_id

Questions
- username
- first_name
- last_name
- question
- user_id

Answers
- username
- first_name
- last_name
- answer
- question_id
- user_id

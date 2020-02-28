# Endpoints needed for Disney Project

# Parents
- GET - /api/parents
- GET - /api/parents/:id
- PUT - /api/parents/:id

# Children
- GET - /api/children/parent/:id (All children for selected parent)
- POST - /api/children
- PUT - /api/children/:id
- DELETE - /api/children/:id

# Contractors
- GET - /api/contractors
- GET - /api/contractors/:id 
- PUT - /api/contractors/:id

# Auth
- POST - /api/auth/register/parent (automatically logs in, provides token)
- POST - /api/auth/register/contractor (automatically logs in, provides token)
- POST - /api/auth/login/parent (username, password)
- POST - /api/auth/login/contractor (username, password)

# Requests
- GET - /api/requests/parent/:id (Only parents can make a request, get all request from parent)
- POST /api/requests
- PUT - /api/requests/:id
- DELETE - /api/requests/:id

# Request Comments
- GET - /api/reqcomments/request/:id (Get all request comments for a request)
- POST - /api/reqcomments
- PUT - /api/reqcomments/:id
- DELETE - /api/reqcomments/:id

# Offers
- GET - /api/offers/contractor/:id (Only contractors can make an offer. Get all offers from contractor)
- POST - /api/offers
- PUT - /api/offers/:id
- DELETE - /api/offers/:id

# Offer Comments
- GET - /api/offercomments/offer/:id - (Get all offer comments for an offer)
- POST - /api/offercomments
- PUT - /api/offercomments/:id
- DELETE - /api/offercomments/:id

# Parent Questions 
- GET - /api/questions/parent/:id (Get all questions from a user) 
- GET - /api/questions
- POST - /api/questions 
- PUT - /api/questions/:id 
- DELETE - /api/questions/:id 

# Contractor Answers
- GET - / api/answers/question/:id (Get all answers to a question)
- POST - /api/answers 
- PUT - /api/anwers/:id 
- DELETE - /api/answers/:id 

// Contractors can Ask and Answer Questions, respond to requests, make an offer. Cannot make requests

// Parents can Ask and Answer Quesions, make and respond to requests. Cannot make offers

// Children can only be added to Parents

# Database Information

Parents
- username
- password
- first_name
- last_name
- email
- dob
- phone_number
- cpr_cert (defaultTo false)

Children
- first_name
- last_name
- DOB
- allergies
- medical_conditions
- special_instructions
- parent_id

Contractors
- username
- password
- first_name
- last_name
- email
- dob
- phone_number
- cpr_cert (defaultTo false)
- price

Requests
- username
- first_name
- last_name
- request
- child_count
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
- contractor_id

Offers
- username
- first_name
- last_name
- offer
- max_child_count
- location
- time
- contractor_id

Offer_Comments
- username
- first_name
- last_name
- offer_comment
- offer_id
- parent_id

Questions
- username
- first_name
- last_name
- question
- parent_id

Answers
- username
- first_name
- last_name
- answer
- question_id
- contractor_id

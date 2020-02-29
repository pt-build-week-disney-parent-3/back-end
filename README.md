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
- GET - /api/offercomments/offer/:id - (Only parents cam post offer comments. Get all offer comments for an offer)
- POST - /api/offercomments
- PUT - /api/offercomments/:id
- DELETE - /api/offercomments/:id

# Parent Questions 
- GET - /api/questions/parent/:id (Only parents can ask questions. Get all questions from a user) 
- GET - /api/questions
- POST - /api/questions 
- PUT - /api/questions/:id 
- DELETE - /api/questions/:id 

# Contractor Answers
- GET - / api/answers/question/:id (Only contractors can answer questions. Get all answers to a question)
- POST - /api/answers 
- PUT - /api/anwers/:id 
- DELETE - /api/answers/:id 

// Login with username and password

// Contractors can Answer Questions, respond to requests, make an offer. Cannot make requests or ask questions

// Parents can Ask Quesions, make or answer requests. Cannot make offers or answer questions

// Children can only be added to Parents

# Database Information

Parents
- username - string, required, max characters 128
- password - string, required, max characters 128
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- email - string, required, max characters 128
- dob - string, required, max characters 128
- phone_number - string, required, max characters 10
- cpr_cert - default = false, string, required, max characters 5

Children
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- DOB - string, required, max characters 128
- allergies - string, not required, max characters 500
- medical_conditions - string, not required, max characters 500
- special_instructions - string, not required, max characters 500
- parent_id - integer, required

Contractors
- username - string, required, max characters 128
- password - string, required, max characters 128
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- email - string, required, max characters 128
- dob - string, required, max characters 128
- phone_number - string, required, max characters 10
- cpr_cert - default = false, string, required, max characters 5
- price - string, required, max characters 128

Requests
- username - string, required, max characters 128
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- request - string, required, max characters 500
- child_count - string, required, max characters 128
- location - string, required, max characters 128
- time - string, required, max characters 128
- stroller - default = false, string, required, max characters 5
- ride - string, required, max characters 128
- parent_id - integer, required

Request_Comments
- username - string, required, max characters 128
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- request_comment - string, required, max characters 500
- request_id - integer, required
- contractor_id - integer, not required (please choose either parent or contractor)
- parent_id - integer, not required (please choose either parent or contractor)

Offers
- username - string, required, max characters 128
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- offer - string, required, max characters 500
- max_child_count - string, required, max characters 128
- location - string, required, max characters 128
- time - string, required, max characters 128
- contractor_id - integer, required

Offer_Comments
- username - string, required, max characters 128
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- offer_comment - string, required, max characters 500
- offer_id - integer, required
- parent_id - integer, required

Questions
- username - string, required, max characters 128
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- question - string, required, max characters 500
- parent_id - integer, required

Answers
- username - string, required, max characters 128
- first_name - string, required, max characters 128
- last_name - string, required, max characters 128
- answer - string, required, max characters 500
- question_id - integer, required
- contractor_id - integer, required

# Running Backend
Make sure you are in folder where manage.py is

> ./loan_aid

Make sure you have pip installed
Run command <br>
`py -m pipenv`

After virtual shell is loaded run command

    py -m pipenv install -r requirements.txt

Then to start backend server we need to start pipenv shell
Then we need to make backend migrations
After that we can run our backend server

    py -m pipenv shell
    
    python manage.py migrate
    
    python manage.py makemigrations
    
    python manage.py runserver

Server should be running at

> http://127.0.0.1:8000/graphql/

    
# Running Frontend

Go to folder 

> ./loan_aid/loan_aid_react

Run code <br>
`npm install`

And then <br>
`npm start`

App should be running at

> http://localhost:3000/

Add data <br>
> http://127.0.0.1:8000/graphql/ <br>

Add offers <br>
`mutation {
  createOffer(
    loanAmount:400000
    downPayment:10000
    loanTerm:240
  )
  {
    id
    loanAmount
    downPayment
    loanTerm
  }
}`
<br>Add rates (tax) <br>
`mutation{
  createRate(rate: "1.6"){
    id
		rate
  }
}`

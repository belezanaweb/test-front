# Frontend Engineer Challenge #

### The Demo: https://shop-bela.herokuapp.com/

 
### ## - challenges overcome ###

  - Used Reactjs as javascript lib
  - Used Redux as pattern o padrão mv * se possível
  - Used Less as CSS preprocessor
  - Used grund to automatize tasks an organize my code

### ## - Instructions ### 

### 1) Mounting the ambient of development ###
Assuming that you have nodejs and npm installed.

1 - Clone the repository
```
$ git clone git@gitlab.com:leolima_str/iliked.git
``` 
2 - go to project folder 

```
$ cd Project_folder
```
3 - Install dependences
	
```
$ yarn
```

At this momment you can try local
```
$ npm start
```

http://localhost:3000/

### 2) how to Deploy the application ###

create heroku project 

[https://dashboard.heroku.com/new-app](https://dashboard.heroku.com/new-app)
	
get the remote git address from heroku and set it on project 
```
$ heroku git:remote -a project-name
```	
send it to heroku cloud
```
$ git push heroku master
```	
Done. teste executing: 
```
$ heroku open
```

--------------

### 3) Testing ###
to write tests, you can create any file with `.test.js` extension and it will be recognized as test file.
to run the tests execute:
```
$ yarn test
```
ps.: Be sure the dependences are installed

### 4) Tasks
I used Grunt to automate some tasks like: Concatenate and minify files. To optimize images. To compile `less` files, to watch changes. 
to execute grunt tasks just run on terminal
```
$ grunt 
```
ps.: Be sure the dependences are installed

### About the code
tried to finish before 4 hours, maybe in the next time. =)

Thanks for the challenge.
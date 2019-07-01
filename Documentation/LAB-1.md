# CSEE5590/490: Web/Mobile Programming (Summer 2019)
LAB ASSIGNMENT    
TEAM ID: 5   
Team members:   
Sravan Kumar Pagadala, Class ID: 12   
Sindhusha Tiyyagura, Class ID: 17   
Nagarjuna Kolla, Class ID: 6   
Sushmanth Makkena, Class ID: 9   

# TASK-1  ::: Massive open online course (MOOC) web application

## i. Introduction
Creating MOOC web application using HTML, CSS and JS. Should create multi-page responsive design website.
MOOC is Massive open online course web application. Where users/students can log in to the application, can search for the courses and can register to the course online. It also shows the current and previous enrollments done by the students.

## ii. Objectives
The main objective of the web application    
1) is to display the user/guest details and register new users   
2) is to display user profiles, current course enrollments   
3) is to display individual pages for different type of degrees and departments.   
4) is to display list of courses in particular department and allowing students to enroll to the courses.   
5) make the page responsive web design page application   

## iii. Approaches/Methods
1) Added meta viewport tag for each HTML page to make the pages responsive for all the window sizes.  
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/responsive%20web%20design.PNG)
 
2) Written login html page with the login form along with the login, register and guest user buttons.   
When user clicks on the login -> then user will be redirected to the home page if the credentials are correct.   
If the credentials are wrong -> it shows the warning messages.   
The code is written in the Javascript function inside the script tags.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/login%20form.PNG)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/login%20function.PNG)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/signup%20function.PNG)

3) signup function where it checks if the username already exists with the same name or not and then store the details appropriately.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/actual%20signup%20function.PNG) 

4) Showing the home page with the username who logged In and also showing the logout button and along with the side navigation with the profile details, courses, enrollment details.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/home%20html.PNG)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/nav%20bar%20switch%20case.PNG)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/display%20profile%20based%20on%20username.PNG)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/cse%20page%20description.PNG)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/recent%20enrollments.PNG)

## iv. Workflow
1) Initially Login page of the MOOC web application will be displayed.   
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/login%20page.png)

with validations:   
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/Login%20validations%20page.png)

with wrong credentials:   
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/login%20invalid%20cre%20page.png)

2) If the user already had an account then user can directly log In to the application using the credentials.   
3) If the user does not have an account and would like to enroll for the courses - then user have to be redirected to the registration page.   
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/register%20page.png)

4) If the user does not have the necessity to enroll to the courses - then user can just enter into the website without any credentials to view the details.   
5) After logging In - User can view the home page displaying side navigation with the profile page, current enrollments and the course details.   
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/profile%20home%20page.png)

6) Profile page shows the profile pic, email-ID, phone number and the description/designation.  
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/profile%20page.png)
 
7) current enrollments page shows the recent enrollments and all enrollments done the user. Shows each course with the image, title, professor, credits, review just like UMKC Canvas.   
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/current%20enrollments%20page.png)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/Enrollements%20page.png)

8)  courses page shows for different courses for user selected department. For example:- Computer Science or Electrical Engineering.   
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/courses%20nav%20page.png)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/courses%20page%20(2).png)

9) making the page responsive for all browser window sizes.   
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-1%20MOOC/Documentation/RWD%20page.png)

## v. Datasets and Parameters
We have provided few user credentials where one can log in using the following details and can enroll into the courses.   
Guest user can directly enter into the website and view the courses.   
User credentials details :-   
                {username:'SravanKumar',password:'12345@SK'},   
                {username:'Nagarjuna',password:'12345@NG'},   
                {username:'Sushmanth',password:'12345@SM'},   
                {username:'Sindhusha', password:'12345@SS'}   

# vii. Evaluation & Discussion
We have created javascript logic within the same HTML pages. Signup users can log in to the application if the javascript logic is separated out and used by the both login and signup pages.   
Logged In users can enroll for the courses mentioned in the web application for particular degree and department.   
Guest users can only check the courses but cannot enroll for the courses.   

## viii. Conclusion
We have learnt different CSS styles and got familiarized with JavaScript code.

## ix. Links:
### Source code: 
https://github.com/sindhusha-t/web-mobile-programming/tree/master/LAB-1/Task-1%20MOOC/SourceCode
### Documentation: 
https://github.com/sindhusha-t/web-mobile-programming/tree/master/LAB-1/Task-1%20MOOC/Documentation


# TASK-2 ::: Snake Game Using Angular

## i. Introduction:
Creating a basic Snake game using Angular. where user can select type of game mode and then start the game. Score of the user will be tracked along with the overall best scores.   

## ii. Objectives:
The main objective of the web application is to get familiarized with Angular by creating basic Snake game.   
1) The player/user uses the arrow button keys(left, right, up and down) for moving the snake around the maze or the provided square box.   
2) Player is given 3 levels where classic, nowall and obstacles.   
3) Classic means that player can use the arrow keys but should not touch the walls - where the game will be over if the player touches the walls.   
4) Nowall means that player can go over the walls which is the first easy level out of all modes. There is no obstacle to get the game over in this case. The only time when the game will be over is that when the snake touches itself.   
5) Obstacles is the hardest level. snake cannot touch the walls or the obstacles or itself. Classic is the moderate level game mode.  

## iii. Approaches/Methods
1) Written snake html code where it contains all the div elements. Based on the boolean values that are set in the typescript file -> the display of div elements is decided.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/snake%20html%20code.PNG)

2) Initially only the home page will be displayed with the start button the best scores in the previous played rounds.
3) next on start button click - the game modes div will be displayed based on the boolean set values. Player can select the level of the game mode.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/key%20events%20code.PNG)

4) Player finds the fruit button and when the snake hits the fruit button the score is incremented. 
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/nowalls%20code.PNG)

5) the fruit button is selected based on the random number generation
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/Handling%20options%20based%20on%20the%20user%20selection.PNG)

6) When the game is over like when the user hits the obstacle or the wall or the snake itself then the game is over and below is the code for the game over function.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/gameover%20code.PNG)

7) If the current score is more than the best score then the best score is updated with the current score.
8) The best score is stored in the localStorage -> where a service is created in the angular -> where other all components can use the same service.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/score%20storage%20service.PNG)

## iv. Workflow:
1) User interface of the Snake game.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/snake%20start%20page.png)

2) On click of the start button it displays the game modes.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/options%20pag%20e.png)

3) On selection of mode -> the game is started with the display of a grid box with the fruit button and the snake body.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/snake%20game.png)

4) The score will be updated based on the number of fruit collection by the snake.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/Score%20crad.png)

5) If the game is over then the screen is completely changed into red color grid box.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-2%20Snake%20Game/Documentation/snake%20game%20after%20game%20over%20score.png)

6) The best score is updated by the current score if the score is more than the best score.
7) the page is redirected back to the start page where user can again select the level of game and start playing.

## v. Datasets and Parameters:
We have declared constant variables with the ascii codes of the arrow keys.   
The best score is stores in the local storage in angular 7.

## vii. Evaluation & Discussion
Future update: updating the colored fruit button with different types of fruits. 
making the page responsive by adding the meta viewport tag.

## viii. Conclusion
We got familiarized with AngularJS functionality and how to create a snake game functionality.   

## ix. Links:
Source code: https://github.com/sindhusha-t/web-mobile-programming/tree/master/LAB-1/Task-2%20Snake%20Game/Source%20code/snakeGame   
Documentation: https://github.com/sindhusha-t/web-mobile-programming/tree/master/LAB-1/Task-2%20Snake%20Game/Documentation   


# TASK_3 ::: Web Application using Google Knowledge Search API

## i. Introduction
Developing a web application where user can search for an entity and then it displays the values based on the response from the Google knowledge graph search API.

## ii. Objectives:
The main objective is to create a web application using Angular 7 which contains:
1) a search form.
2) On click of the search button it gives the response about the search term. 

## iii. Approaches/Methods:
1) Created a title header with the Name of the web application.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-3%20Google%20KS%20API/Documentation/execution.PNG)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-3%20Google%20KS%20API/Documentation/search%20form%20code.PNG)

2) Created search form with the input field and the search button. 
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-3%20Google%20KS%20API/Documentation/max%202%20lists.png)

3) Created card divs where the http response from the search term is displayed in the form of rows in the main div element.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-3%20Google%20KS%20API/Documentation/binding%20data%20to%20page.PNG)
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-3%20Google%20KS%20API/Documentation/card%20display%20of%20output.PNG)

## iv. Workflow:
1) User Enters the search item and then clicks the search button.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-3%20Google%20KS%20API/Documentation/home%20page.png)
2) The information related to the search item is displayed on the page.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-3%20Google%20KS%20API/Documentation/home%20page%20(2).png)
3) By default -> the taylor swift is kept as the basic search item to give some information/exmaple to the user.
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/LAB-1/Task-3%20Google%20KS%20API/Documentation/search%20for%20thing.png)

## v. Datasets:
## vi. Parameters:
## vii. Evaluation & Discussion:

## viii. Conclusion
We got familiarized with Angular7 and how to do http request and parsing the output/response.   

## ix. Links:
Source code: https://github.com/sindhusha-t/web-mobile-programming/tree/master/LAB-1/Task-3%20Google%20KS%20API/Source%20code/Search-knowledge-App      
Documentation: https://github.com/sindhusha-t/web-mobile-programming/tree/master/LAB-1/Task-3%20Google%20KS%20API/Documentation   

# Massive open online course (MOOC) web application

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
### Video Link: 
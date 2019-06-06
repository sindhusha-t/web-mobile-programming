# ICP 1

### HTML Task
1) Show that you have WebStorm installed on your machine
# Web storm
## About Web storm : 
Web storm is a modern Java Script IDE with coding assistance. 
* Its features include refractoring, auto code completion, and error detection for different languages like HTML, CSS, Node.js, and JS. 
* WebStorm can automatically add imports from the symbols defined in the project and as well as its dependencies.

1. Downloaded Web storm from https://www.jetbrains.com/webstorm/
![](https://github.com/pradeepika1997/ASE_LAB1/raw/master/Screenshots/Webstorm1.png)
2. After completion of installation following window will be opened
![](https://github.com/pradeepika1997/ASE_LAB1/raw/master/Screenshots/Webstorm6.png) 


2) Create GitHub Account. Create a repository in remote GitHub. Clone it to local machine. Create 2 (Source and Documentation) directories in local GitHub

# GitHub
## About GitHub : 
GitHub is a **distributed** Version control system ( also known as Source code management) used for tracking changes to the file(s).
* GitHub provides a platform for multiple developers to work simultaneously.
* GitHub adds flexibility to developers to keep track of file changes locally during offline and can later push changes to server when required.
* GitHub is heavily used for open source projects.

### Version Control System(VCS) :
There are 2 types of VCS 1) Centralized VCS and 2) Distributed VCS
1) Centralized VCS : It works on a client-server mechanism. Client will be downloading only a single set of files from a remote repository to a local repository.

Examples: Concurrent VCS(CVS), SubVersion(SVN)

2) Distributed VCS : Each client acts as a separate VCS. Client will get the full history of files in the repository downloaded in the system.
It is time efficient compared to Centralized VCS. Only push and pop requests are handled by the server. Other all git commands are handled by the local repository allowing user to track files in offline mode.

Examples: GitHub, Mercurial, Bazaar

### Operations done on GitHub:
* Create a repository on GitHub and copy the clone link.
* Get the local copy of the remote repository on the client machine.

`git clone remote_repository_clone_link`

* Steps for adding new file to the remote repository 

`git add file_name` ( --> Adds the new file to the staging area )

`git commit` ( --> Checks for files in staging area, and modified files. If present commit the files to the local repository) 

`git push` ( --> All files in the commit history are pushed to the remote repository on the server )

* Steps for creating a branch

clone the repository to the local system from server and execute

`git branch` ( --> to get list of all branches for the cloned repository )  

`git branch branch_name` ( --> to create a new branch and also changes the current local repository to the branch)

(or) `git checkout -b branch_name`

* Steps for creating a tag

clone the repository to the local system from server and execute

`git tag tag_name`

* Steps to update the local repository

`git pull`

1. Downloaded GitHub desktop application from https://desktop.github.com/
![](https://github.com/pradeepika1997/ASE_LAB1/raw/master/Screenshots/GitHub1.png)

2. Created online GitHub account and configured Desktop GitHub after installation
![](https://github.com/pradeepika1997/ASE_LAB1/raw/master/Screenshots/GitHub2.png)

# GitShell
## About GitShell : 
Git Bash is comprised of two parts i.e, Git and Bash. Git is a version control system and Bash is a unix shell command line interface for windows.

1. Downloaded GitShell from https://git-scm.com/downloads
![](https://github.com/pradeepika1997/ASE_LAB1/raw/master/Screenshots/Screenshot%20(36).png)

2. Uploaded new files to github repository using GitShell 
![](https://github.com/pradeepika1997/ASE_LAB1/raw/master/Screenshots/Screenshot%20(37).png)

1. Cloning a repository
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/ICP-1/documentation/Screenshots/clone.png)

3) Take screenshots of a repository creation and put them in the documentation folder in the local repository and sync it to remote repository.

Document - https://github.com/sindhusha-t/web-mobile-programming/blob/master/ICP-1/documentation/GitHub%20Installation.docx

4) Create an html document named “index.html” and place it in the source folder. Inside the html document write a report explaining what you did during the creation of the Git repository with screenshots included as images. The page should contain paragraphs, headings, unordered list, an ordered list, at least two div & span elements, at least four block and inline elements.  The screenshots stored in documentation should be displayed as images at appropriate locations in the html file and should be clickable i.e. when you click the image, it should redirect you to the location of the image in the documentation in a new tab. The page should also include a relevant YouTube video.

HTML source code - https://github.com/sindhusha-t/web-mobile-programming/blob/master/ICP-1/source/index.html

Steps:
1) Using paragraphs when any text need to showed in the html page.
2) Using headings for highlighting the text and to brief about the paragraph.
3) Using un-ordered list for displaying the bulletin points about the GitHub
4) Using ordered list for explaining the steps for GitHub Installation.
5) Using two divs for dividing two different sections.
6) Using spans for adding styles for inline elements
7) Adding the screenshots inline and also adding links to the image to display in the new tab with only the image.
8) For adding a video link in the static html page 
- Select any video from the youtube   
- right click on the video    
- copy the embed code
- add the embed code to the html page.

<iframe width="853" height="480" src="https://www.youtube.com/embed/MFtsLRphqDM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


9) Running the html page in the Google Chrome.

5) Sync both local repository with the source and documentation folders with the remote repository.   
Executing the following commands to push the new/modified files in the local repository to the remote repository.   
git add .   
git commit -m "Message"   
git push   

### CSS Task:
1) Adding notification icon, account icon at the right top corner of the google search home page.
It is added as a list element along with the Gmail, Images, Sign-In button
using the li tag.   
`<li><img src="umkc.jpg" width="30px" height="30px" alt='My Profile'></li>`

2) Adding Recently opened tabs below the google search bar.   
Using the division element for displaying the block level.   
I have added the same image for all the recently added tabs.   

**Output Screenshots:**
### HTML Task:
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/ICP-1/documentation/Screenshots/icp-1-t1.gif)

### CSS Task:
![](https://github.com/sindhusha-t/web-mobile-programming/raw/master/ICP-1/documentation/Screenshots/task-2.png)

### Summary:
I have learnt basic static HTML pages and CSS.

Sindhusha Tiyyagura & Class ID: 17
# Snake Game Using Angular

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
Video Link:
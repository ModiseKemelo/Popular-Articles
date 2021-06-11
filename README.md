# Popular-Articles-
An app to view the most popular articles on New York Times
This sample app consumes APIs from New York Times, 

It was Developed for both android and ios, IONIC FRAMEWORK is used to develop the app.

To clone and run the app, follow the folling instractions:
# DOWNLOAD AND INSTALL 
#### 1. Node.js for interacting with the Ionic ecosystem. Get it here  https://nodejs.org/en/

#### 2. A code editor for... writing code! I recommend Visual Studio Code, get it here https://code.visualstudio.com/
#### 3. Command-line interface/terminal (CLI)
            - Windows users: for the best Ionic experience, I recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode.
            - Mac/Linux users, virtually any terminal will work.

#### 4. Android Studio version 4.2 and upwards get it here https://developer.android.com/studio

Clone the project by running the following command:
 ##### git clone https://github.com/ModiseKemelo/Popular-Articles
 
 Then cd into Popular-Articles and run the following commands on the terminal to run the project:
 ##### 1. npm install 
               (this will install all project dependencies and required packages) when its donw, proceed to 2 below
 ##### 2. ionic capacitor build 
      (this command will build for android, once its done, android studio will popup and it should take over. Build apk or run directly into a device, alternatively run using an immulator)

Alternative way to step 2 would be to pluck your android device that has developer mode enabled and run the following command

##### ionic capacitor run
 upon running the above command, you will be prompted to choose device(the plucked in device should appear on the list, use arrows to select the device)
 
 Another way would be by previewing the app in browser and the following command should be run:
 ##### ionic serve
 
 ##### FOR UNIT TESTS AND CODE COVERAGE REPORTS RUN THE FOLLOWING COMMAND
 ng test --no-watch --code-coverage
 

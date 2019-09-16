# Simplified Social Media

This project is served as my exam for my job application. I built this using Laravel, VueJs and Ant Design Vue for my frontend framework.
SSM is a basic (twitter like) social media where you can only register and login account, add and delete posts.

## Installation
Once you download this folder you will need to prepare a few things before you are ready to start. Follow these steps to get the project to a workable state.

1. Clone this repository (or download and extract the .zip)
2. Run `composer install` from inside the project directory to download PHP dependencies
3. Run `npm install` or `yarn` to download JS dependencies
4. Run `cp .env.example .env` to create your projects' `.env` file
5. Run `php artisan key:generate` to create a new encryption key
6. Open the project and edit the .env file to add database settings to your project. Take note of the database name, password, and username to make sure they match your system's settings. Change any other environment settings you desire.
7. Back in the terminal, run `php artisan migrate` to migrate your database
8. Run `php artisan passport:install` to install and generate passport keys

Congratulations! You should now be ready to try Simplified Social Media.


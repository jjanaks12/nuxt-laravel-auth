## Firstly on server

# go inside server folder
Copy .env.example and rename to .env
fill DB_DATABASE, DB_USERNAME, DB_PASSWORD

# install dependancy
composer install

# run migration
php artisan migrate

# create jwt secret
php artisan jwt:secret

# run server
php artisan serve

# to add a user
go to http://localhost:8000/api/user-create

## Secondly

# go inside client folder

# install dependancy
npm install

# run project
npm run dev
# VanaByteWebsite
- Live Site: [vanabyte.com](http://vanabyte.com/)

## **DEPLOYMENT:**
 1. clone the repo to local machine anywhere
 2. I did it to the following
 3. `/home/sevenkits/WebHosting/VanaByteWebsite/frontend/build`

## **FRONT END:**
1. `cd frontend`
2. `npm install` (since node_modules are not in repo need to download them according to package.json)

**FRONT END DEVELOPMENT:**
 1. `npm start` (for development)

**FRONT END PRODUCTION:**
 1. `npm run build` (for production)
 2. `sudo nano /etc/apache2/sites-available/000-default.conf` (set apache to run your build folder now see below)
6. 

    <VirtualHost *:80>
        ServerName vanabyte.com
        DocumentRoot /home/sevenkits/WebHosting/VanaByteWebsite/frontend/build
    
        <Directory /home/sevenkits/WebHosting/VanaByteWebsite/frontend/build>
            Options Indexes FollowSymLinks
            AllowOverride All
            Require all granted
        </Directory>
    
        Alias /phpmyadmin /usr/share/phpmyadmin
        <Directory /usr/share/phpmyadmin>
            Options Indexes FollowSymLinks
            DirectoryIndex index.php
            AllowOverride All
            Require all granted
        </Directory>
    
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>

## **BACK END:**
1. `cd backend`
2. create file ".env" in ./VanaByWebsite/backend for db info. Place following info
>     DB_HOST=localhost
>     DB_USER=your_username
>     DB_PORT=3306
>     DB_PASSWORD=your_password
>     DB_DATABASE=your_database
3. `npm install` (since node_modules are not in repo need to download them according to package.json)
4. use npx for the following commands since nodemon and pm2 werent installed globally

**BACK END DEVELOPMENT:** 
1. `npx nodemon index.js` (for development)

**BACK END PRODUCTION:** 
1. `npx pm2 start index.js` (for production running)
2. `npx pm2 list` (view backends running)
3. `npx pm2 logs 0` (view logs for specific backend id, use CTRL-C to exit logs)
4. `npx pm2 stop 0` (stop running specific backend id)
5. `npx pm2 start/restart 0` (start running specific backend id)
6. `npx pm2 delete 0` (delete specific backend id)

## **ALL DEPENDENCIES INSTALLED (dont need to do these just listing, npm install should pull them from package.json):**
(alternatively just use `npm list`)
**FRONTEND:**
> 1. none

**BACKEND:**
> 1. npm install dotenv (used for db info)
> 2. npm install express
> 3. npm install mysql2
> 4. npm install cors
> 5. npm install pm2
> 6. npm install node
> 6. npm install nodemon

----------------------------------------------------------------------------------------
**FrontEnd (Vite)**
0. https://tailwindcss.com/docs/guides/vite (Vite)
1. npm create vite@latest frontend -- --template react
2. cd frontend
3. npm install
4. npm install -D tailwindcss postcss autoprefixer
5. npx tailwindcss init -p
6. do other stuff in linked tutorial
dev: npm run dev

**FrontEnd (React)**
0. https://tailwindcss.com/docs/guides/create-react-app (React)
1. npx create-react-app .
2. npm install -D tailwindcss
3. npx tailwindcss init
6. do other stuff in linked tutorial
dev: npm start

7. //npm install -D prettier prettier-plugin-tailwindcss
----------------------------------------------------------------------------------------

Thank you for looking!
Cade Heinberg
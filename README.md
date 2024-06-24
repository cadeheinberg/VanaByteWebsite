# VanaByteWebsite
vanabyte.com

LAUNCHING: 
1. clone the repo to local machine anywhere
2. i did it to /home/sevenkits/WebHosting/VanaByteWebsite/frontend/build

FRONT END:
1. cd frontend
2. npm install (since node_modules are not in repo need to download them according to package.json)
4. npm start (for development)
3. npm run build (for production)
5. sudo nano /etc/apache2/sites-available/000-default.conf (set apache to run your build folder now)
6. <VirtualHost *:80>
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

BACKEND:
1. cd backend
2. create file ".env" in ./VanaByWebsite/backend for db info. Place following info
3. DB_HOST=localhost
DB_USER=your_username
DB_PORT=3306
DB_PASSWORD=your_password
DB_DATABASE=your_database
4. npm install (since node_modules are not in repo need to download them according to package.json)
5. use npx for the following commands since nodemon and pm2 werent installed globally
6. npx nodemon index.js (for development)
7. npx pm2 start index.js (for production running)
8. npx pm2 list (view backends running)
9. npx pm2 logs 0 (view logs for specific backend id, use CTRL-C to exit logs)
10. npx pm2 stop 0 (stop running specific backend id)
11. npx pm2 start/restart 0 (start running specific backend id)
12. npx pm2 delete 0 (delete specific backend id)

ALL DEPENDENCIES INSTALLS
(alternatively just use npm list)

FRONTEND:
1. none

BACKEND:
1. npm install dotenv (used for db info)
2. npm install express
3. npm install mysql2
4. npm install cors
5. npm install pm2
6. npm install node
6. npm install nodemon
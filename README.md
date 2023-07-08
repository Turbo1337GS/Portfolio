# Portfolio
demo https://main.gigasoft.com.pl/Port

**Turbo1337 Portfolio OpenSource**
![Turbo1337 Portfolio OpenSource](https://main.gigasoft.com.pl/Images/portfolio.png)

# Instruction Ubuntu #

 1. ``git clone https://github.com/Turbo1337GS/Portfolio``
 2. ``cd Portfolio ``
 3. ``npm run build``
 4. ``npm run start ``
 5. U can now check this in localhost:3000
  # If you want, public this
 
 
 1. ``npm install -g pm2``
 2. ``sudo apt install snapd && sudo snap install serve ``
 3. ``pm2 start serve --name Portfolio -- serve -s build``
 4. Enter your server's IP and see if it works for example, 128.32.363.25:3000
 


# If so, we're flying with the NGINX setup now

go to ``/etc/nginx/conf.d``

 1. ``nano Port_config``
 ```
 location / {
    rewrite ^/Port(.*) $1 break;
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    alias /var/www/html/port;
    try_files $uri /index.html;
}

location /bundle.js {
    root /var/www/html/port;
    try_files $uri =404;
}

location /manifest.json {
    root /var/www/html/port;
    try_files $uri =404;
}

location /static {
    try_files $uri =404;
}

location /static/js/ {
    alias /var/www/html/port/build/static/js/;
    try_files $uri =404;
}

location /static/css/ {
    alias /var/www/html/port/build/static/css/;
    try_files $uri =404;
}
```

 2. Where ``/var/www/html/port/`` is path to your downloaded repo
 * Include this config to main NGINX server cfg
 3. Go to ``/etc/nginx/sites-available`` and open file ``default``
 4. Add the following code to the second ``server`` section
 ``include /etc/nginx/conf.d/Port_config; # Include the Port_config file``
 5. Go to terminal and type command ``sudo systemctl restart nginx``
 6. Now enter the command ``pm2 restart Portfolio``
 7. You can enter your domain! For example, ``your_domain.com/Portfolio``

   # if You want this as module
 1. ``npm i turbo-portfolio``
 2. ``cd node_modules/turbo-portfolio``
 3. ``npm i``
 4. ``npm start``

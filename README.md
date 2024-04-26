# Backend Task - NestJS + RabbitMQ + MongoDB

## Author

Name: Vladislav Vasilev

🔗 https://www.linkedin.com/in/vladislav-vasilev-dev/

## Contents:

    1. Mission

    2. Running Script

    3. Data Panel
---

## 1. Mission

Create a simple REST application from scratch. Using NestJS (TypeScript), MongoDB, RabbitMQ.
The application should implement a nodeJS server API communicating with ReqresAPI: https://reqres.in/

The application should consist of:

- `POST` /api/users

  On the request store the user entry in db. After the creation, send an email and rabbit event. Both can be dummy sending (no consumer needed).

- `GET` /api/user/{userId}

  Retrieves data from https://reqres.in/api/users/{userId} and returns a user in JSON representation.

- `GET` /api/user/{userId}/avatar

  Retrieves image by 'avatar' URL.

  On the first request it should save the image as a plain file, stored as a mongodb entry with userId and hash. Return its base64-encoded representation.

On following requests should return the previously saved file in base64-encoded. representation (retrieve from db).
- `DELETE` /api/user/{userId}/avatar

  Removes the file from the FileSystem storage.

  Removes the stored entry from db.
  
## 2. Running Script

### Pre-Requirement: **Docker** environment

- `run.sh`: Build images and install all dependencies and start all containers
- `stop.sh` Stop running containers
- `attach.sh`: Attach to a terminal inside NestJS container
- `build.sh`: Rebuilds the images in case you changed something in the Dockerfiles
- `drop-db.sh`: Drops all the data from the MongoDB container.

## 3. Data Panel

- **MongoDB** Database Manager http://localhost:8081/
  - User: `root`
  - Password: `example`
- **RabbitMQ** Admin Panel http://localhost:15672/
  - User: `user`
  - Password: `pass`
- **Swagger** API endpoint management for NestJS. http://localhost:3000/api-docs

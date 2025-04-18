# Exercising Introductory Containerization

##### Container & Image
- Image: an immutable file that contains everything to create a specific container
- Container: a running instance of an Image

##### Commands
- `docker container run image_name`: create & run a new Docker container from an Image
  - if the image is not available locally, it will automatically search online in `hub.docker.com`
  - short version: `docker run image_name`
  - options:
    - `-i`: run in interactive mode
    - `-t`: allocates TTY, to mimic real terminal
    - `-p`: inform Docker that a port from Host Machine should be opened & directed to a port in the container
      - usage: `-p host_port:container_port`
    - `-v`: binding file/directory in local machine to container
      - usage: `-v host_file:container_file`
    - `-d`: detached mode. run container in the background
- `docker start image_name`: re-start Docker container without creating a new one
  - options:
    - `-i`: run in interactive mode
- `docker cp image_name:file_location target_location`: copy file from container to local machine
- `docker ps`: list active containers
  - options:
    - `-a`: list all containers
- `docker image ls`: list all local Docker images
- `docker commit image_name image_target_name`: create new Image from a modified image
- `docker build dockerfile_location`: create new Image based on a Dockerfile
  - options:
    - `-t`: specify Image name
    - `-f`: specify Dockerfile name
- `docker kill container_id`: kill a container by id
  - note: can use just the first 2 numbers of the id
- `docker compose up`: build & run container by Docker Compose
  - options:
    - `--build`: rebuild images
    - `-d`: detached mode. run container in the background
    - `-f`: specify Docker Compose file
- `docker compose down`: close container initiated by Docker Compose
  - options:
    - `--volumes`: delete created volumes in the container
- `docker exec image_name`: run command inside a container. Can be used when it's running
  - options:
    - `-i`: run in interactive mode
    - `-t`: allocates TTY, to mimic real terminal
 
##### Image Name Format
- `registry/organization/image:tag`
  - example: `index.docker.io/library/hello-world:latest`

##### Dockerfile
- Dockerfile: a text file that contains all of the instructions to create an Image

##### Dockerfile Syntax
- `FROM image_name`: select base image
  - `AS build_stage_name`: set stage name of this build process
- `WORKDIR some_dir`: set working directory inside the container
- `COPY host_location container_location`: copy file from host machine to container's working directory
  - options:
    - `--chown=some_user:some_group`: sets file ownership to the defined User & Group
      - example: `COPY --chown=node:node` to set ownership to the predefined User & Group of the `node` Image
    - `--from=build_stage_name`: set where the build stage location of the file to copy
- `RUN some_command`: execute command during the Image build
- `CMD some_command`: execute command when the container starts
- `ENV some_env_variable`: sets an environment variable
- `USER some_user`: run container as the specified user

##### Docker Compose
- Docker Compose: a tool to help define and run multi-container Docker applications using YAML files

##### Docker Compose Syntax
- `services`: list of services
  - `first_branch`: name of the service
    - `image`: declares which image to use
    - `build`: location of the Dockerfile if the declared image is not found online
      - `dockerfile`: specify the name of the dockerfile
      - `context`: specify the directory to send to the build proces (useful if the Dockerfile is elsewhere)
    - `ports`: declares list of ports to publish
    - `volumes`: declares list of file/directory bindings in local machine to container
    - `depends_on`: list of other service that this service depends on
- `volumes`: list of Named Volumes (format example: `mongo_data:`, with `:`)

###### Bind Mounts vs. Named Volume:
- Bind Mounts: declaring location in filesystem (file / directory)
- Named Volume: Let Docker decide where to store data (commonly in `/var/lib/docker/volumes/`)

##### Helpful Console Command
- `netstat -ano | findstr :some_port` (powershell): check if port is used in the host machine

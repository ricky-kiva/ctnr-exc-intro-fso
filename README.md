# Exercising Introductory Containerization

##### Container & Image
- Image: an immutable file that contains everything to create a specific container
- Container: a running instance of an Image

##### Commands
- `docker container run image_name`: run an image
  - if the image is not available locally, it will automatically search online in `hub.docker.com`
  - options:
    - `-i`: run in interactive mode
    - `-t`: allocates TTY, to mimic real terminal
- `docker start image_name`: run local Docker Image by name
  - options:
    - `-i`: run in interactive mode
- `docker cp image_name:file_location target_location`: copy file from container to local machine
- `docker ps`: list active containers
  - options:
    - `-a`: list all containers
- `docker image ls`: list all local Docker images 
- `docker commit image_name image_target_name`: create new image from a modified image
 
##### Image Name Format
- `registry/organization/image:tag`
  - example: `index.docker.io/library/hello-world:latest`

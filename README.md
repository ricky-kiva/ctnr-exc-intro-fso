# Exercising Introductory Containerization

##### Container & Image
- Image: an immutable file that contains everything to create a specific container
- Container: a running instance of an Image

##### Commands
- `docker container run image_name`: run an image
  - if the image is not available locally, it will automatically search online in `hub.docker.com`
- `docker start image_name`: run docker Image by name
  - options:
    - `-i`: run in interactive mode
- `docker cp image_name:file_location target_location`: copy file from container to local machine
 
##### Image Name Format
- `registry/organization/image:tag`
  - example: `index.docker.io/library/hello-world:latest`

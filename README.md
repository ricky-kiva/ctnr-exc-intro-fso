# Exercising Introductory Containerization

##### Container & Image
- Image: An immutable file that contains everything to create a specific container
- Container: A running instance of an Image

##### Commands
- `docker container run`: Run an image
  - Example: `docker container run hello-world`
  - If the image is not available locally, it will automatically search online in `hub.docker.com`
 
##### Image Name Format
- `registry/organization/image:tag`
  - Example: `index.docker.io/library/hello-world:latest`

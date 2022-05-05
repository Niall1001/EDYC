To build the project run:

in root directory

```docker-compose up ```

To remove containers and rebuild run:

```docker rmi $(docker images -a -q)```
```docker system prune --force```
# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### OR

Start the project with docker-compose:

```
docker build --build-arg GIT_REVISION=$(git rev-parse HEAD) -t my-fresh-app .
```


```
docker-compose up
```

# Firebase

## Build

```
docker build . hcst/react-firebase-demo:latest
```

## Run

```
docker run -it --rm -v "$Env:USERPROFILE\Repo\github.com\react-firebase-demo:/root" hcst/react-firebase-demo /bin/sh
```

## Connect to stopped container

```
docker start <container name>
docker exec -it <container name> /bin/bash
```

## Login

```
firebase login
```
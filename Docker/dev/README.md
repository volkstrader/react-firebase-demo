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

## Initialize react app

```
create-react-app app
```

### Initialize firebase within react app

```
cd app
firebase init
```

choose build as public directory for deployment
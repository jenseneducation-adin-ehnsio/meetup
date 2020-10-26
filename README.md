# meetup

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### GCLOUD INIT
gcloud config configurations create cloud-run
gcloud auth login # and follow the steps
gcloud config set project YOUR_PROJECT_NAME

### PUSH DOCKERIMAGE TO GCLOUD
1. gcloud builds submit --tag gcr.io/LINK_TO_GCLOUD_PROJECT/
2. gcloud run deploy --image gcr.io/LINK_TO_GCLOUD_PROJECT/NAME_OF_IMAGE --platform managed




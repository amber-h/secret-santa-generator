# Secret Santa Generator

Secret Santa Generator will generate pairs for a secret santa gift exchange. Participants of the gift exchange will receive an e-mail notifying them of who they should purchase a gift for.

## Setup

* Make sure you have the [docker toolbox](https://www.docker.com/docker-toolbox) installed
* Once installed, create a docker machine: `docker-machine create --driver virtualbox dev`
* Export the docker-machines environment variables: `eval $(docker-machine env dev)`

* You will need to get a [Mandrill Api key](https://mandrillapp.com)
* Create a ***.env*** file in the ***server*** directory and add the following line:
`MANDRILL_API_KEY='your_api_key'`

## Running Application

* run `docker-compose up` and navigate to the ip of your docker-machine (`docker-machine ip dev`)

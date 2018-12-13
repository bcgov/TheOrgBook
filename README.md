[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

SonarQube Results:

[![Bugs](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook&metric=bugs&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook) [![Vulnerabilities](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook&metric=vulnerabilities&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook) [![Code smells](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook&metric=code_smells&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook) [![Coverage](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook&metric=coverage&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook) [![Duplication](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook&metric=duplicated_lines_density&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook) [![Lines of code](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook&metric=lines&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook) 

Zap Results:

[![Bugs](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook-Zap&metric=bugs&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook-Zap) [![Vulnerabilities](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook-Zap&metric=vulnerabilities&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook-Zap) [![Code smells](https://sonarqube.orgbook.gov.bc.ca/api/badges/measure?key=TheOrgBook-Zap&metric=code_smells&template=FLAT)](https://sonarqube.orgbook.gov.bc.ca/dashboard?id=TheOrgBook-Zap)

# TheOrgBook

A public repository of verifiable claims about organizations. Verifiable claims are issued by trusted public services such as corporate registries, permitting services, licencing services, procurement services and the like.

The Verifiable Organizations Network envisions the possibility of a number of public repositories of Verifiable Claims as a way of bootstrapping a trusted digital ecosystem.

See https://bcgov.github.io/TheOrgBook for more information about this project.

See https://github.com/bcgov/von for more information about the concept of a Verifiable Organizations Network.

## Getting Started

The best way to get started is with a working application.  The [Quick Start Guide](./docker/README.md#running-a-complete-provisional-von-network) for **Running a Complete Provisional VON Network** will get you started with a complete set of applications running on your local machine in Docker.

## Running on OpenShift

To deploy TheOrgBook on a local instance of OpenShift, refer to [Running TheOrgBook Locally on OpenShift](./RunningLocal.md).  These instructions, apart from the steps that are specific to setting up your local environment, can be used to get the project deployed to a production OpenShift environment.

## Running on Docker

The project can also be run locally using Docker and Docker Compose.  Refer to [Running TheOrgBook with Docker Compose](./docker/README.md) for instructions.

## Resetting the Ledger

For information on the process of resetting the ledger and wallets refer to the [Resetting the Ledger and Wallets](./ResettingTheLedger.md) documentation.
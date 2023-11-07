---
title: Get Started Using Local AWS .NET
publish_date: 2023-11-07
---

# Get Started Using Local AWS .NET

I was tasked to switching storage API to AWS S3 and that project is still running on .NET Core 2.1, took me a while to get it able to run in container somehow. Because of my pursuit of ideal and lack of practicallity, I refused to use the _actual_ AWS S3, instead I was using [Localstack](https://localstack.cloud/) to run AWS S3 on my local. 

LocalStack is a cloud service emulator that runs in a single container. Sounds incredible right? but of course it has it downsides, [not all services fully implemented](https://docs.localstack.cloud/user-guide/aws/feature-coverage/) and the community version of Localstack lacking [persistance feature]([Persistence | Docs](https://docs.localstack.cloud/references/persistence-mechanism/)), to put it simply once you terminate localstack container your changes is gone, including saved files.

Anyway, here is the requirements. I am using .NET 6, you have to make adjustment if you are using earlier version of .NET.

- [AWS CLI]([Command Line Interface - AWS CLI - AWS](https://aws.amazon.com/cli/))

- Podman or Docker

- .NET or .NET Core

Let's pull and run Localstack image. I am using Podman in this example, if you are using docker just replace `podman` with `docker`.

```bash
$ podman pull docker.io/localstack/localstack
$ podman run run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
```

Configure AWS CLI. For this example I just  put dummy values for credentials. After that create S3 Bucket. Creating bucket is an optional step.

```bash
$ aws configure
AWS Access Key ID [None]: keyidUwU
AWS Secret Access Key [None]: swecretOwO
Default region name [None]: ap-southeast-3
Default output format [None]: 
$ aws s3 mb s3://cat-pictures --endpoint-url=http://localhost:4566
```

Setup an example project.

```bash
$ mkdir cat-pictures-api
$ cd cat-pictures-api
$ dotnet new webapi -f net6.0 # I'm specifically using .NET 6
$ dotnet add package AWSSDK.Extensions.NETCore.Setup --version 3.7.7
$ dotnet add package AWSSDK.S3 --version 3.7.205.22
```

Put AWS configuration in `appsettings.json`.

```json
  "LocalAWS": {
    "Region": "ap-southeast-3",
    "BucketName": "cat-pictures",
    "ServiceURL": "http://s3.localhost.localstack.cloud:4566"
  }
```

Add AWS S3 as service.

```csharp
ConfigurationManager awsOption = configuration.GetAWSOptions("LocalAWS");
builder.Services.AddAWSService<IAmazonS3>(awsOption);
```

Create a controller `CatController`.
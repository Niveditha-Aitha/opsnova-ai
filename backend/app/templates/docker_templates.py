PYTHON_FASTAPI = """
FROM python:3.12-slim

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE {port}

CMD ["uvicorn","main:app","--host","0.0.0.0","--port","{port}"]
"""


PYTHON_FLASK = """
FROM python:3.12-slim

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE {port}

CMD ["python","app.py"]
"""


PYTHON_DJANGO = """
FROM python:3.12-slim

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE {port}

CMD ["python","manage.py","runserver","0.0.0.0:{port}"]
"""


NODE_EXPRESS = """
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE {port}

CMD ["npm","start"]
"""


NODE_NEST = """
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE {port}

CMD ["node","dist/main.js"]
"""

JAVA_SPRING_BOOT = """
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN ./mvnw clean package

EXPOSE {port}

CMD ["java", "-jar", "target/app.jar"]
"""

REACT_VITE = """
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE {port}

CMD ["npm", "run", "dev"]
"""

REACT_CRA = """
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE {port}

CMD ["npm", "start"]
"""

ANGULAR = """
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE {port}

CMD ["npm", "start"]
"""

VUE = """
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE {port}

CMD ["npm", "run", "dev"]
"""

DOTNET_ASPNET = """
FROM mcr.microsoft.com/dotnet/sdk:8.0

WORKDIR /src

COPY . .

RUN dotnet restore

RUN dotnet publish -c Release -o /app/publish

EXPOSE {port}

ENTRYPOINT ["dotnet", "YourApp.dll"]
"""

GO_GIN = """
FROM golang:1.24

WORKDIR /app

COPY . .

RUN go mod download

RUN go build -o main .

EXPOSE {port}

CMD ["./main"]
"""

PHP_LARAVEL = """
FROM php:8.3-cli

WORKDIR /app

COPY . .

RUN docker-php-ext-install pdo pdo_mysql

EXPOSE {port}

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port={port}"]
"""

RUST_ACTIX = """
FROM rust:latest

WORKDIR /app

COPY . .

RUN cargo build --release

EXPOSE {port}

CMD ["./target/release/app"]
"""

RUBY_RAILS = """
FROM ruby:3.3

WORKDIR /app

COPY . .

RUN bundle install

EXPOSE {port}

CMD ["rails", "server", "-b", "0.0.0.0", "-p", "{port}"]
"""
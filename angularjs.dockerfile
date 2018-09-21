# comentários.
FROM ubuntu:16.04

# comentários.
MAINTAINER Pedro <pehhagah.1607@gmail.com>

# comentários.
RUN apt-get update -y
RUN apt-get install -y apache2

# comentários.
EXPOSE 3000
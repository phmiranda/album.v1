# comentários.
FROM ubuntu:16.04

# comentários.
MAINTAINER Pedro <pehhagah.1607@gmail.com>

# comentários.
RUN apt-get install -y apache2
RUN apt-get install -y nodejs
RUN apt-get install -y npm

# comentários.
EXPOSE 3000
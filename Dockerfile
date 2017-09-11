FROM crystallang/crystal

ADD . .

ENTRYPOINT crystal server.cr

EXPOSE 8080
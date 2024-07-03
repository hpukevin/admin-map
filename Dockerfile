FROM registry.cn-hangzhou.aliyuncs.com/hpukevin/hzqdockerhub:v1

MAINTAINER "test"

ADD ./index.html index.html

# EXPOSE 8080

CMD ["/bin/sh", "-c", "echo 123"]
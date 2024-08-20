FROM kong
USER 0
RUN mkdir -p /kong/declarative/
COPY gateway/kong/declarative/kong.yml /kong/declarative/
RUN cp /etc/kong/kong.conf.default /etc/kong/kong.conf
USER kong


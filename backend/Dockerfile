# https://hub.docker.com/r/hayd/deno/tags
FROM hayd/deno:alpine-1.4.1

# Now need a container for our application
# This is just like 'cd' command
WORKDIR /app

# Copy source from local machine to working dir of container
# /backend to /app
# When we run the container we see our Deno app compile to:
# Check file:///app/src/app/server.ts???????
COPY . .

# Set a user to run our app
# This base image already has a "deno" user
# Don't want to run as root admin user
USER deno

# Execute our Deno program by passing set of commands
# CMD replaces 'deno' command essentially because in the base image
# it set ENTRYPOINT ["deno"]. So we're passing any CMD to our ENTRYPOINT
CMD ["run", "--allow-net", "--allow-read", "--lock=lock.json", "src/app/server.ts"]

# Export port 8000 so our NASA API is accessible outside of our container
EXPOSE 8000 

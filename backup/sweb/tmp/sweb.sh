docker build -t sweb .
docker run -p 8765:8765 -v $(pwd)/doc:/doc -ti sweb


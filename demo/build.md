

```sh



# demo.exe
sudo docker run --rm -it -v $(pwd):/w mono:6.12.0.122 bash -c 'cd /w&&csc -out:demo.exe demo.cs webPart.cs SimpleHttpServer/*.cs SimpleHttpServer/Models/*.cs SimpleHttpServer/RouteHandlers/*.cs /target:winexe'



# debug.exe
sudo docker run --rm -it -v $(pwd):/w mono:6.12.0.122 bash -c 'cd /w&&csc -out:debug.exe demo.cs webPart.cs SimpleHttpServer/*.cs SimpleHttpServer/Models/*.cs SimpleHttpServer/RouteHandlers/*.cs'








```



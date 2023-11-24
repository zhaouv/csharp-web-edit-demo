using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Microsoft.Win32;
using System.Diagnostics;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;
using SimpleHttpServer;
using SimpleHttpServer.Models;
using SimpleHttpServer.RouteHandlers;


namespace _webPart
{
    class webPart
    {
        public static string BasePath = ".";
        public static string webContent = "abc/1/2";
        public static string url = "http://127.0.0.1:1055/";
        public static string page = "index.html";
        public static Action getAction = () => Console.WriteLine("toedit",webContent);
        public static Action setAction = () => Console.WriteLine("edit",webContent);

        public static void startPage()
        {
            string edgePath = @"msedge.exe";

            string arguments = "--app="+url+page;

            ProcessStartInfo startInfo = new ProcessStartInfo
            {
                FileName = edgePath,
                Arguments = arguments
            };

            Process.Start(startInfo);
        }

        public static int startServer()
        {
            int port = 1055;
            while (portInUse(port)) port++;
            url = "http://127.0.0.1:" + port + "/";

            HttpServer httpServer = new HttpServer(port, new List<Route>()
            {
                new Route()
                {
                    Callable = new FileSystemRouteHandler() {BasePath = BasePath, ShowDirectories = true}.Handle,
                    UrlRegex = "^/(.*)$",
                    Method = "GET"
                },
                new Route()
                {
                    Callable = route,
                    UrlRegex = "^/(.*)$",
                    Method = "POST"
                },
            });
            Thread thread = new Thread(new ThreadStart(httpServer.Listen));
            thread.Start();

            Console.WriteLine("url: "+url);
            Console.WriteLine("dir: "+Path.GetFileName(Directory.GetCurrentDirectory()));
            return port;
        }

        private static bool portInUse(int port)
        {
            IPGlobalProperties ipGlobalProperties = IPGlobalProperties.GetIPGlobalProperties();
            IPEndPoint[] ipEndPoints = ipGlobalProperties.GetActiveTcpListeners();
            foreach (IPEndPoint ipEndPoint in ipEndPoints)
            {
                if (ipEndPoint.Port == port) return true;
            }
            return false;
        }

        public static HttpResponse route(HttpRequest request)
        {
            // Console.WriteLine(request.Content);

            if (request.Path.StartsWith("get"))
            {
                getAction();
                return new HttpResponse()
                {
                    ContentAsUTF8 = webContent,
                    StatusCode = "200",
                    ReasonPhrase = "OK",
                };
            }
            if (request.Path.StartsWith("set"))
            {
                webContent = request.Content;
                setAction();
                return new HttpResponse()
                {
                    ContentAsUTF8 = "done",
                    StatusCode = "200",
                    ReasonPhrase = "OK",
                };
            }
            return new HttpResponse()
            {
                ContentAsUTF8 = "Request Not found.",
                ReasonPhrase = "Not Found",
                StatusCode = "404",
            };
            
        }

    }
}

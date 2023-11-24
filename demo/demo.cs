using System;
using System.Drawing;
using System.Threading;
using System.Windows.Forms;

using _webPart;

class Program
{
    [STAThread]
    static void Main()
    {
        Form form1 = new Form();
        form1.Text = "web edit demo";
        form1.Size = new Size(400, 300);

        Button buttonA = new Button();
        Label textBox1 = new Label();
        TextBox textBox2 = new TextBox();

        buttonA.Text = "edit";
        form1.Controls.Add(buttonA);

        textBox1.Size = new Size(100, 20);
        textBox1.Text = "content:";
        form1.Controls.Add(textBox1);

        textBox2.Size = new Size(100, 20);
        textBox2.Text = "abc/1/2";
        form1.Controls.Add(textBox2);

        buttonA.Location = new Point(50, 50);
        textBox1.Location = new Point(50, 100);
        textBox2.Location = new Point(50, 150);

        form1.FormClosed += new System.Windows.Forms.FormClosedEventHandler((sender, e) => Environment.Exit(System.Environment.ExitCode));

        buttonA.Click += (sender, e) => webPart.startPage();;
        
        webPart.BasePath = "../webview";
        // webPart.page = "index.html";
        webPart.page = "webview.html";
        webPart.getAction = () => webPart.webContent=textBox2.Text;
        webPart.setAction = () => textBox2.Text=webPart.webContent;

        webPart.startServer();

        Application.Run(form1);
    }
}

package org.miu.Lab10;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/helloServlet")
public class HelloServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		sendResponse(response);
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		sendResponse(response);
	}
	
	private void sendResponse(HttpServletResponse response) throws IOException {
		response.setContentType("text/html");
		response.getWriter().write("Hello Java Servlet 4.0");
		
		String html = "<!DOCTYPE html>\r\n" + 
				"<!-- saved from url=(0057)https://getbootstrap.com/docs/4.0/examples/navbar-static/ -->\r\n" + 
				"<html lang=\"en\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n" + 
				"    \r\n" + 
				"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n" + 
				"    <meta name=\"description\" content=\"\">\r\n" + 
				"    <meta name=\"author\" content=\"\">\r\n" + 
				"    <link rel=\"icon\" href=\"https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico\">\r\n" + 
				"\r\n" + 
				"    <title>Top navbar example for Bootstrap</title>\r\n" + 
				"\r\n" + 
				"    <link rel=\"canonical\" href=\"https://getbootstrap.com/docs/4.0/examples/navbar-static/\">\r\n" + 
				"\r\n" + 
				"    <!-- Bootstrap core CSS -->\r\n" + 
				"    <link href=\"./css/bootstrap.min.css\" rel=\"stylesheet\">\r\n" + 
				"\r\n" + 
				"    <!-- Custom styles for this template -->\r\n" + 
				"    <link href=\"./css/navbar-top.css\" rel=\"stylesheet\">\r\n" + 
				"  </head>\r\n" + 
				"\r\n" + 
				"  <body cz-shortcut-listen=\"true\">\r\n" + 
				"\r\n" + 
				"    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\r\n" + 
				"      <a class=\"navbar-brand\" href=\"https://getbootstrap.com/docs/4.0/examples/navbar-static/#\">Top navbar</a>\r\n" + 
				"      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n" + 
				"        <span class=\"navbar-toggler-icon\"></span>\r\n" + 
				"      </button>\r\n" + 
				"      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n" + 
				"        <ul class=\"navbar-nav mr-auto\">\r\n" + 
				"          <li class=\"nav-item active\">\r\n" + 
				"            <a class=\"nav-link\" href=\"https://getbootstrap.com/docs/4.0/examples/navbar-static/#\">Home <span class=\"sr-only\">(current)</span></a>\r\n" + 
				"          </li>\r\n" + 
				"          <li class=\"nav-item\">\r\n" + 
				"            <a class=\"nav-link\" href=\"https://getbootstrap.com/docs/4.0/examples/navbar-static/#\">Link</a>\r\n" + 
				"          </li>\r\n" + 
				"          <li class=\"nav-item\">\r\n" + 
				"            <a class=\"nav-link disabled\" href=\"https://getbootstrap.com/docs/4.0/examples/navbar-static/#\">Disabled</a>\r\n" + 
				"          </li>\r\n" + 
				"        </ul>\r\n" + 
				"        <form class=\"form-inline mt-2 mt-md-0\">\r\n" + 
				"          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n" + 
				"          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n" + 
				"        </form>\r\n" + 
				"      </div>\r\n" + 
				"    </nav>\r\n" + 
				"\r\n" + 
				"    <main role=\"main\" class=\"container\">\r\n" + 
				"      <div class=\"jumbotron\">\r\n" + 
				"        <h1>Navbar example</h1>\r\n" + 
				"        <p class=\"lead\">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>\r\n" + 
				"        <a class=\"btn btn-lg btn-primary\" href=\"https://getbootstrap.com/docs/4.0/components/navbar/\" role=\"button\">View navbar docs »</a>\r\n" + 
				"      </div>\r\n" + 
				"    </main>\r\n" + 
				"\r\n" + 
				"    <!-- Bootstrap core JavaScript\r\n" + 
				"    ================================================== -->\r\n" + 
				"    <!-- Placed at the end of the document so the pages load faster -->\r\n" + 
				"    <script src=\"./css/jquery-3.2.1.slim.min.js.download\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n" + 
				"    <script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script>\r\n" + 
				"    <script src=\"./css/popper.min.js.download\"></script>\r\n" + 
				"    <script src=\"./css/bootstrap.min.js.download\"></script>\r\n" + 
				"  \r\n" + 
				"\r\n" + 
				"</body></html>";
	}
}
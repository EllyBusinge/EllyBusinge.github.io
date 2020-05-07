<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" isELIgnored ="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
 <%@ page import="java.time.LocalDate" %>
<!DOCTYPE html>
<html lang="en">
<jsp:include page="includes/header.jsp"/>

<body cz-shortcut-listen="true">
	<jsp:include page="includes/nav.jsp" flush="true" />

	<main role="main" class="container">
  		<div class="jumbotron">
  			<h1>Hello, world of HttpServlet 4.0!</h1>
			<h4>Welcome to Lab 13</h4>
    		<p class="lead">This is a simple hero unit, a simple jumbtron-style component for calling extra attention to featured content or information.</p>
			<hr/>
			<p>It uses utility classes for typography and spacing to space content out within the target container</p>
    		<a class="btn btn-lg btn-primary" href="#" role="button">Learn More</a>
  		</div>
	</main>
	<jsp:include page="includes/footer.jsp" flush="true"/>
</body>
</html>
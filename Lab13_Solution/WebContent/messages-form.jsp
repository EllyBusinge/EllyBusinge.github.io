<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<jsp:include page="includes/header.jsp"/>
<body cz-shortcut-listen="true">
	<jsp:include page="includes/nav.jsp" flush="true" />
	<main role="main" class="container">
  		<div style="padding-top: 1em;" class="container">
            <h3>List Of Contact Messages</h3>
            
            <div class="table-responsive">
            	<table class="table table-striped table-sm">
              		<thead>
                		<tr>
                  			<th>#</th>
                  			<th>Customer Name</th>
                  			<th>Gender</th>
                  			<th>Category</th>
                  			<th>Message</th>
                		</tr>
              		</thead>
              		<tbody>
                		<c:forEach var="myMessage" items="${messages}" varStatus="iteration">
                    		<tr>
                        		<th scope="row"><c:out value="${iteration.index+1}"></c:out>.</th>
                        		<td><c:out value="${myMessage.fullName}"></c:out></td>
                        		<td><c:out value="${myMessage.gender}"></c:out></td>
                        		<td><c:out value="${myMessage.category}"></c:out></td>
                        		<td><c:out value="${myMessage.message}"></c:out></td>
                    		</tr>
                		</c:forEach>
              		</tbody>
            	</table>
          	</div>
        </div>
	</main>
	<jsp:include page="includes/footer.jsp" flush="true"/>
</body>
</html>
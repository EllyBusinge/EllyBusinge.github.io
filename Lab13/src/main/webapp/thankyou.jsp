<!DOCTYPE html>
<html lang="en">
<jsp:include page="includes/header.jsp"/>

<body cz-shortcut-listen="true">
	<jsp:include page="includes/nav.jsp" flush="true" />

	<main role="main" class="container">
  		<p class="date_style">${dateToday}</p>
		<div class="card card_style">
			<div class="card-header">
				<h4>Thank you! Your message has been received as follows:</h4>
			</div>
			<div class="card-body">
				<h6>Name: ${fullName}</h6>
				<p>Gender: ${gender}</p>
				<p>Category: ${category}</p>
				<p class="card-text">Message: ${message}</p>
				<p class="card-text">Please feel free to <a href="contactUs">Contact us</a> again</p>
			</div>
		</div>
		<jsp:include page="includes/pageCounter.jsp" flush="true"/>
	</main>
	<jsp:include page="includes/footer.jsp" flush="true"/>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<jsp:include page="includes/header.jsp"/>
<body cz-shortcut-listen="true">
	<jsp:include page="includes/nav.jsp" flush="true" />
	<main role="main" class="container">
  		<div style="padding-top: 1em;" class="container">
            <h5>Customer Contact Form</h5>
			<div class="col-md-12">${errorMessage}</div>
            <form id="contactUsForm" method="post" action="processData">
                <fieldset>
                    <legend></legend>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="fullName">*Name:</label>
                                <input class="form-control" type="text" name="fullName" id="fullName" placeholder="Full Name" autofocus>
                                <small class="form-text text-muted">Enter your fullname</small>
                            </div>
                        </div>
                    </div>
					
					<div class="row">
                        <div class="col-md-12">
							<label>*Gender:</label><br>
                            <div class="form-group">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" name="radioGender" id="radioradioGenderMale" class="custom-control-input" value="Male">
                                    <label for="radioradioGenderMale" class="custom-control-label">Male</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" name="radioGender" id="radioradioGenderFemale" class="custom-control-input" value="Female">
                                    <label for="radioradioGenderFemale" class="custom-control-label">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
					
					<div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="ddlCategory">*Category:</label>
                                <select class="form-control" id="category" name="category">
                                    <option value="Feedback">Feedback</option>
                                    <option value="Inquiry">Inquiry</option>
                                    <option value="Complaint">Complaint</option>
                                </select>
                            </div>
                        </div>
                    </div>
					
                    <div class="row">
                        <div class="col-md-12">
							<div class="form-group">
								<label for="message">*Message:</label>
								<textarea class="form-control" id="message" name="message" rows="2"></textarea>
							</div>
                        </div>
                    </div>
                    
                    <div class="row">
						<div class="col-md-12">
							<div style="text-align: right;" class="form-group">
								<button style="padding: .5em 4em;" id="btnSubmit" type="submit" class="btn btn-primary btn-inline submit_btn form-control">Submit</button>
							</div>
						</div>
                    </div>
					
					<div class="row">
						<div class="col-md-6">
							<span>Hit count for the page:</span><span>${hitCount}</span>
						</div>
						<div class="col-md-6">
							<span class="span_style">${totalHitCount}</span><span class="span_style">Total Hit count for the entire WebApp:</span>
						</div>
					</div>
                </fieldset>
            </form>           
        </div>
	</main>
	<jsp:include page="includes/footer.jsp" flush="true"/>
</body>
</html>
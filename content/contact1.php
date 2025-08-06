<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
            <form class="form-horizontal" method="POST" ng-controller="dbcontroller" >
                    <legend>Contact Me<i class="fa fa-pencil pull-right"></i></legend>
					<div  class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                         	<div class="form-top">
                        		<div class="form-top-left">
                        			<h3>Don't hesitate to contact me</h3>
                        		</div>
								<div class="description">
	                            	<h4 class="bg-secondary">
									We would like to hear your valuable suggestions in form of Feedback.</h4>
								</div>
                        		<br><br>
                            </div>
                            <div class="form-bottom">
							    <div class="form-group">
								YOUR EMAIL-ID: <input type="text" name="email" value="" ng-model="email" placeholder="abc@example.com" class="form-username form-control" id="form-username" autocomplete="email" >
								</div>
								<br>
								<div class="form-group">
								SUBJECT<input type="text" name="subject"  value="" ng-model="subject" placeholder=" Enter the subject..." class="form-username form-control" id="form-username">
								</div>
								<br>
								<div class="form-group">
								MESSAGE<textarea name="message" value="" ng-model="message" rows="5" placeholder=" Enter the message..." class="form-username form-control" id="form-username" ></textarea>
								</div>
								<br>
								<div class="form-group">
									<button type="reset" class="btn btn-warning">
										Reset</button> &nbsp;&nbsp;
									<button type="Submit" class="btn btn-primary" ng-click="sendEmail()" value="Submit">
										Send Email</button>
								</div>
							</div>
					</div>
			</form>
			 <script>  
			
			 </script> 
			
</body>
</html>
	  
import React from '../../../node_modules/react';
import './Footer.css';
const ContactPg = () => {
   
    return (
    <React.Fragment>
        <div clasaName="form">
            <section class="mb-4">
<h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
<p class="text-center w-responsive mx-auto mb-5">If you have any questions about our soups and or the ingredients we use, feel free to send us a message!</p>
<div class="row">
    <div class="col-md-9 mb-md-0 mb-5 form">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            
            <div class="row">
                <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="name" class="">Enter Name</label>
                        <input type="text" id="name" name="name" class="form-control" placeholder="Full Name"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="email" class="">Enter Email</label>
                        <input type="text" id="email" name="email" class="form-control" placeholder="Email"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control subject" placeholder="Subject"/>
                    </div>
                </div>
            </div>

            <div class="row">
 
                <div class="col-md-12">

                    <div class="md-form">
                    <label for="message">Your message to us</label>
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message"></textarea>
                    </div>

                </div>
            </div>     
        </form>

        <div class="text-center text-md-left filtersection">
            <a class="btn btn-primary send" href= "" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>

</div>

</section>
</div>
     </React.Fragment>
)}

export default ContactPg;
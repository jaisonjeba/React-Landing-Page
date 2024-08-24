import React, { useState } from 'react';

const HeroSection = () => {
  const [text, setText] = useState(''); const handleChange = (event) => { setText(event.target.value); };
  return (
    <header class="masthead">
      <div class="container position-relative">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div class="text-center">
              <h1 class="mb-5">Generate more leads with a professional landing page!</h1>
              <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">

                <div class="row">
                  <div class="col">
                  <input type="text" value={text} onChange={handleChange} placeholder="Email address" />
                      <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                      <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                  </div>
                  <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                </div>

                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>

                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

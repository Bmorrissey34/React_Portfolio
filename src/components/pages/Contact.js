
import React from 'react';

export default function Contact() {
  return (
    <div className='contactForm h-100'>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          <h1>Contact Me</h1>
          <form>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault01">First name</label>
                <input type="text" className="form-control" id="validationDefault01" placeholder="First name" required />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault02">Last name</label>
                <input type="text" className="form-control" id="validationDefault02" placeholder="Last Name" required />
              </div>
              <div className="col-md-4 mb-3">
                <div className="form-group">
                  <label htmlFor="verify-email">Email Address</label>
                  <div className="input-group" data-verify="email">
                    <input id="verify-email" className="form-control" name="email" type="email" placeholder="Email" required />
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit form</button>
          </form>
        </div>
      </div>
    </div>
  );
}

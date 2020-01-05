import React, { Fragment } from 'react';

const ContactMe = () => {
  return (
    <Fragment>
        <section className='contact' id='contactMe'>
          <div className='section-title-container'>
            <h1>Contact</h1>
          </div>
          <div className='section-content'>
              <div className='section-text'>
                <p>Thank you for visiting!</p>
                <p>Both my <strong>Invento</strong> and <strong>Ascend Yoga</strong> projects have an admin tool. You may email me if you want to check them out.</p>
                <p>You may reach me at <a href="mailto:novalaurente@gmail.com">novalaurente@gmail.com.</a></p>
              </div>
          </div>
        </section>
    </Fragment>
  );
};

export default ContactMe;

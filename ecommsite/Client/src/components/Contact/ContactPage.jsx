import React from 'react';
import './ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faThumbsDown, faGitHub, faLinkendin } from "@fortawesome/free-solid-svg-icons";



const Contact = () => {
    return (
        <footer id="footer">
            <div className="inner">
                <h2>Sign Up</h2>
              <form action = '#' method="POST">
                  <div className="field half name">
                      <label htmlFor="name">Name</label>
                      <input name="name" id="name" type="text" placeholder="Name" required />
                  </div>
                  <div className = "field half">
                      <label htmlFor="email">Email</label>
                      <input name="name" id="email" type="email" placeholder="Email" required/>
                  </div>
                  <div className="field">
                      <label htmlFor="message">Comments</label>
                      <textarea name="message" id="message" rows="4" placeholder="Message" required></textarea>
                  </div>  

                  <button><a id="form_button">Submit</a></button>
              </form>
              

              <div className = "main-links">
                  <span className="link_item"><a href="mailto:kendallkee430@gmail.com"><FontAwesomeIcon icon={faEnvelope }/></a></span><br/>
                  <span className="link_item"><a href="https://github.com/kee43093"><FontAwesomeIcon icon={ faGithub }/></a></span><br/>
                  <span className="link_item"><a href="https://www.linkedin.com/in/kendall-kee-805620180"><FontAwesomeIcon icon={ faEnvelope }/></a></span>
              </div>

            </div>

    </footer>
    )

}

export default Contact;
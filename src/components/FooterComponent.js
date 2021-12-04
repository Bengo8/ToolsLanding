import React from 'react'
import '../assets/styles.css';

export const FooterComponent = () => {
  return (
    <footer className="mt-auto text-white-50">
      <div className="divFooter" onClick={() => window.open("https://www.linkedin.com/in/aitor-bengoetxea-135345116", '_blank')}>
        <img className="linkedin-footer" src="https://img.icons8.com/external-justicon-flat-justicon/50/000000/external-linkedin-social-media-justicon-flat-justicon.png" />
        <p href="https://www.linkedin.com/in/aitor-bengoetxea-135345116">  Aitor Bengoetxea  </p>
        <img className="linkedin-footer" src="https://img.icons8.com/external-justicon-flat-justicon/50/000000/external-linkedin-social-media-justicon-flat-justicon.png" />
      </div>
    </footer>
  )
}

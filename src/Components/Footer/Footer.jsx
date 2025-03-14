import './Footer.css'; // Assuming you have a CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.instagram.com/careercompass848">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      {/* <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="#">About</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
      </ul> */}
      <p className='text-2xl'>&copy; 2024 careerCompass | All Rights Reserved</p>
      {/* External scripts should be included in the public/index.html */}
    </footer>
  );
}

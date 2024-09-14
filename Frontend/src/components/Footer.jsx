import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 ">
      <nav className="grid grid-flow-col gap-x-2  ">
        <a className="link link-hover">About Us </a>
        <a className="link link-hover">Contact Us</a>
        {/* <a className="link link-hover">History</a> */}
        {/* <a className="link link-hover">Services</a> */}
        <a className="link link-hover" href="https://portfolio-98vcqh35o-hemraj-khatris-projects.vercel.app/#" target="_blank">Portfolio</a>
        <a className="link link-hover">Blog</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Hemraj-Khatri" target="_blank"  className="cursor-pointer hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577v-2.234c-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.306-5.467-1.333-5.467-5.931 0-1.31.467-2.381 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.505 11.505 0 013.004-.404c1.02.005 2.045.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.654 1.653.241 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.623-5.476 5.92.43.37.815 1.102.815 2.222v3.293c0 .318.192.694.8.576C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z"></path>
            </svg>

          </a>
          <a href="https://www.youtube.com/@hamroprayash04/videos" target="_blank"  className="cursor-pointer hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/hemraj.khatri404" target="_blank" className="cursor-pointer hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Car
          Market Place
        </p>
      </aside>
    </footer>
  );
}

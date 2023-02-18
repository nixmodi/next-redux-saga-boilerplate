import React from 'react';
import { Button, Form } from 'src/components/shared';
import images from 'src/config/images';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = props => {
  const router = useRouter();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Image src={images.app.logo} alt="Logo" width={36} height={36} />
          <a className="navbar-brand ml-2">React</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Demo</a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <Button icon="plus" size="xs" variant="primary">
                Hey There
              </Button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

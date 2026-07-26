import { useEffect, useRef, useState } from 'react';
import { firm, navigationLinks } from '../../data/siteContent';
import Icon from '../shared/Icon';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;
    const isKnownSection = navigationLinks.some((link) => link.href === hash);

    if (!isKnownSection) {
      return undefined;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({
        block: 'start',
        inline: 'nearest',
      });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const header = document.querySelector('.custom-navbar');
    const sections = navigationLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    const visibleSections = new Set();
    let observer;

    const observeSections = () => {
      observer?.disconnect();
      visibleSections.clear();

      const headerHeight = Math.ceil(header?.getBoundingClientRect().height ?? 0);
      const activeLineHeight = 2;
      const bottomMargin = Math.max(
        window.innerHeight - headerHeight - activeLineHeight,
        0,
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.add(entry.target.id);
            } else {
              visibleSections.delete(entry.target.id);
            }
          });

          const activeLine = headerHeight + activeLineHeight;
          const currentSection =
            sections.find((section) => {
              if (!visibleSections.has(section.id)) {
                return false;
              }

              const bounds = section.getBoundingClientRect();
              return bounds.top <= activeLine && bounds.bottom > activeLine;
            }) ??
            sections.find((section) => visibleSections.has(section.id));

          if (currentSection) {
            setActiveSection(`#${currentSection.id}`);
          }
        },
        {
          rootMargin: `-${headerHeight}px 0px -${bottomMargin}px 0px`,
          threshold: 0,
        },
      );

      sections.forEach((section) => observer.observe(section));
    };

    observeSections();

    const headerResizeObserver = new ResizeObserver(observeSections);
    if (header) {
      headerResizeObserver.observe(header);
    }
    window.addEventListener('resize', observeSections);

    return () => {
      observer?.disconnect();
      headerResizeObserver.disconnect();
      window.removeEventListener('resize', observeSections);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const closeOutsideMenu = (event) => {
      if (
        !menuRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutsideMenu);

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutsideMenu);
    };
  }, [isMenuOpen]);

  const handleNavigation = (href) => {
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="custom-navbar">
      <div className="site-shell navbar-inner">
        <a
          className="navbar-brand"
          href="#home"
          aria-label={`${firm.name} home`}
          onClick={() => handleNavigation('#home')}
        >
          <img
            src={firm.brandLogo}
            alt={firm.name}
            className="brand-logo"
            width="749"
            height="365"
          />
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          ref={menuRef}
          id="primary-navigation"
          className={`navbar-panel${isMenuOpen ? ' is-open' : ''}`}
        >
          <nav className="navbar-links" aria-label="Primary navigation">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                className={`navbar-link${activeSection === link.href ? ' is-active' : ''}`}
                href={link.href}
                aria-current={activeSection === link.href ? 'location' : undefined}
                onClick={() => handleNavigation(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <a
              className="number-button"
              href={firm.phoneHref}
              aria-label={`Call ${firm.attorneyName} at ${firm.phone}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon name="phone" size={18} />
              <span>{firm.phone}</span>
            </a>
            <span className="texas-indicator" aria-label="Serving Texas">
              <img
                src="/images/texas-flag.png"
                alt=""
                className="flag-icon"
                width="300"
                height="200"
              />
              <span>Texas</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;

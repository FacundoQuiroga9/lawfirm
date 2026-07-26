import './SectionHeader.css';

const SectionHeader = ({ id, eyebrow, title, subtitle, variant = 'default' }) => (
  <div className={`section-header section-header--${variant}`}>
    {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
    <h2 id={id}>{title}</h2>
    {subtitle ? <p className="section-header__subtitle">{subtitle}</p> : null}
  </div>
);

export default SectionHeader;

import './SectionHeader.css';

const SectionHeader = ({ id, title, subtitle, variant = 'default' }) => (
  <div className={`section-header section-header--${variant}`}>
    <h2 id={id}>{title}</h2>
    {subtitle ? <p>{subtitle}</p> : null}
  </div>
);

export default SectionHeader;

export function BrandLogoMark({ logoSrc, title = 'RV TESTING MACHINES PRIVATE LIMITED', subtitle }) {
  return (
    <div className="brand-logo-mark">
      <div className="brand-logo-mark__frame">
        <img src={logoSrc} alt={title} />
      </div>
      <div className="brand-logo-mark__title">{title}</div>
      {subtitle ? <p className="brand-logo-mark__subtitle">{subtitle}</p> : null}
    </div>
  );
}

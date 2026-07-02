export function HomeBrandLogo({ logoSrc, title = 'RV TESTING MACHINES PRIVATE LIMITED', subtitle }) {
  return (
    <div className="home-brand-logo">
      <div className="home-brand-logo__frame">
        <img src={logoSrc} alt={title} width={200} height={200} />
      </div>
      <h2 className="home-brand-logo__title">{title}</h2>
      {subtitle ? <p className="home-brand-logo__tagline">{subtitle}</p> : null}
    </div>
  );
}

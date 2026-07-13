export default function Button({ href, type = 'button', onClick, children, className = '', style }) {
  const classes = `btn-orange ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

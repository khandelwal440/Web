import useInView from '../../hooks/useInView.js';

/** Fades and lifts its content into place the first time it scrolls into view. */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-visible={inView}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

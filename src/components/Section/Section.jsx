const Section = ({ title, children, style }) => (
  <section style={style}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;

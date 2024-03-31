// title은 h1 요소의 textContent, textColor는 글자색이 되는 props
const Title = ({ title, textColor }: { title: string; textColor: string }) => (
  <h1 style={{ color: textColor }}>{title}</h1>
);

export default Title;

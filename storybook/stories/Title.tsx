// title은 h1 요소의 textContent, textColor는 글자색이 되는 props
const Title = ({ title, textColor }: { title: string; textColor: string }) => {
  return <h1 style={{ textColor: textColor }}>{title}</h1>;
};

export default Title;

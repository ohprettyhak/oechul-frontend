interface ButtonProps {
  label: string;
  backgroundColor?: string;
}

function StyledButton({ label, backgroundColor }: ButtonProps) {
  return (
    <button type="button" style={{ backgroundColor: `${backgroundColor}` }}>
      {label}
    </button>
  );
}

StyledButton.defaultProps = {
  backgroundColor: '#fff',
};

export default StyledButton;

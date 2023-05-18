interface Props {
  buttonType:  'priamry' | 'secondary' | 'success' | 'danger';
  label: string;
  onClick: ()=>void;
}

const Button = ({ buttonType, label, onClick}: Props) => {
  return ButtonJSX(buttonType, label, onClick);
};

const ButtonJSX = (buttonType: string, label: string, onClick: ()=>void) => {
  return (
    <>
      <button type="button" className={"btn btn-" + buttonType } onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;

import "./Button.styles";
import { ButtonIcon, ButtonWrapper } from "./Button.styles";
import { PuffLoader } from "react-spinners";

type AppButtonProps = {
  label?: string;
  iconSrc?: string;
  loading?: boolean;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
function AppButton({ label, iconSrc, loading, clickHandler }: AppButtonProps) {
  console.log(iconSrc);
  return !loading ? (
    <ButtonWrapper onClick={clickHandler}>
      {iconSrc && <ButtonIcon src={iconSrc} alt="btn icon" />} {label}
    </ButtonWrapper>
  ) : (
    <PuffLoader color="white" />
  );
}

export default AppButton;

import { Button, styled } from "@mui/material";
import theme from "../../../../theme";

interface PrimaryButtonProps {
  children: JSX.Element | string;
  size?: "small" | "medium" | "large";
  color?: "gradient";
}

const PrimaryButton = ({ children, size = "large", color }: PrimaryButtonProps) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    "&.MuiButton-root": {
      "& svg": {
        width: "18px",
        height: "18px",
      },
    },
  }));
  //
  return (
    <CustomButton sx={{ background: color && theme.palette?.primaryGradient?.[color] }} size={size}>
      {children}
    </CustomButton>
  );
};

export default PrimaryButton;

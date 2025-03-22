import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export function BackButton() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Button onClick={goBack} variant="ghost">
      👈🏽 Back
    </Button>
  );
}

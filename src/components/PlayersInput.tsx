import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store";
import { Input } from "./ui/input";

const PlayersInput = () => {
  const { i18n, stringToParse, setStringToParse } = useStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{i18n.t("instructionsTitle")}</CardTitle>
        <CardDescription>
          {i18n.t("instructionsStep1")}
          <br />
          {i18n.t("instructionsStep2")}
          <br />
          {i18n.t("instructionsStep3")}
          <br />
          {i18n.t("instructionsStep4")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input
          autoFocus
          className="resize-none"
          placeholder={i18n.t("placeholder")}
          value={stringToParse}
          spellCheck={false}
          onChange={(e) => setStringToParse(e.currentTarget.value)}
        />
      </CardContent>
    </Card>
  );
};

export default PlayersInput;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store";

const PlayersInput = () => {
  const { i18n, isInputInvalid, stringToParse, setStringToParse } = useStore();

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
        <Field>
          <Input
            autoFocus
            aria-invalid={isInputInvalid}
            className="resize-none"
            placeholder={i18n.t("placeholder")}
            value={stringToParse}
            spellCheck={false}
            onChange={(e) => setStringToParse(e.currentTarget.value)}
          />
          {isInputInvalid && <FieldDescription>{i18n.t("atLeastOne")}</FieldDescription>}
        </Field>
      </CardContent>
    </Card>
  );
};

export default PlayersInput;

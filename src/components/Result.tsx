import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store";

const Result = () => {
  const { i18n, isResultCopied, resultString, copyResult } = useStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{i18n.t("result")}</CardTitle>
        <CardDescription>{i18n.t("resultDesc")}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between gap-2">
        <Field>
          <Input readOnly className="resize-none" value={resultString} spellCheck={false} />
          {isResultCopied && <FieldDescription>{i18n.t("copied")}</FieldDescription>}
        </Field>
        <Button variant="outline" onClick={copyResult}>
          {`${i18n.t("copy")} (Enter)`}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Result;

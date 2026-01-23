import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store";

const Result = () => {
  const { i18n, resultString, copyResult } = useStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{i18n.t("result")}</CardTitle>
        <CardDescription>{i18n.t("resultDesc")}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between gap-2">
        <Input readOnly className="resize-none" value={resultString} spellCheck={false} />
        <Button variant="outline" onClick={() => copyResult()}>
          {`${i18n.t("copy")} (Enter)`}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Result;

import i18next from "i18next";
import { motion } from "motion/react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store";
import { Input } from "./ui/input";

const PlayersInput = () => {
  const { stringToParse, setStringToParse } = useStore();

  const placeholder = i18next.t("placeholder");

  return (
    <motion.div
      initial={{ x: "5%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-5%", opacity: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{i18next.t("instructionsTitle")}</CardTitle>
          <CardDescription>
            {i18next.t("instructionsStep1")}
            <br />
            {i18next.t("instructionsStep2")}
            <br />
            {i18next.t("instructionsStep3")}
            <br />
            {i18next.t("instructionsStep4")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input
            autoFocus
            className="resize-none"
            placeholder={placeholder}
            value={stringToParse}
            spellCheck={false}
            onChange={(e) => setStringToParse(e.currentTarget.value)}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PlayersInput;

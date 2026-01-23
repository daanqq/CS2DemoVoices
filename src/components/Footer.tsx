import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useStore } from "@/store";

const Footer = () => {
  const { i18n } = useStore();

  return (
    <Card className="flex text-sm px-3 py-2 border border-b-0 rounded-xl rounded-b-none">
      <CardContent className="flex p-0 gap-16">
        <div className="items-center">
          <p className="inline">{i18n.t("madeBy")}</p>
          <Button variant="link" className="p-1">
            <a href="https://github.com/daanqq" target="_blank" rel="noopener noreferrer">
              @daanqq
            </a>
          </Button>
        </div>
        <Button variant="link" className="p-1">
          <a
            href="https://github.com/daanqq/CS2DemoVoices"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i18n.t("sourceCode")}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Footer;

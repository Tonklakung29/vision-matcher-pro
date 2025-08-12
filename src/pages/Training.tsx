import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Training() {
  return (
    <section>
      <Seo title="Training | Vision Matcher Pro" description="ตั้งค่า Train/Fine-tune YOLO และดู Loss/Accuracy/mAP แบบเรียลไทม์" />
      <h1 className="text-2xl font-bold mb-4">Training</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle>ตั้งค่า Training</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm text-muted-foreground">เลือก Dataset / Model / Hyperparams (placeholder)</div>
            <Button>เริ่มเทรน</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Metrics (Real-time)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 rounded-md bg-muted" />
            <div className="mt-2 text-xs text-muted-foreground">กราฟ Loss/Accuracy/mAP (placeholder)</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

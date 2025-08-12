import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Alerts() {
  return (
    <section>
      <Seo title="Alerts | Vision Matcher Pro" description="การแจ้งเตือนเมื่อพบวัตถุที่สนใจจากการตรวจจับ YOLO" />
      <h1 className="text-2xl font-bold mb-4">Alerts</h1>
      <Card>
        <CardHeader>
          <CardTitle>ประวัติการแจ้งเตือน</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">ยังไม่มีการแจ้งเตือน (placeholder)</div>
        </CardContent>
      </Card>
    </section>
  );
}

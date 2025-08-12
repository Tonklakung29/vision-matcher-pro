import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Models() {
  return (
    <section>
      <Seo title="Models | Vision Matcher Pro" description="จัดการเวอร์ชันโมเดล YOLO เลือกใช้งานและดู performance" />
      <h1 className="text-2xl font-bold mb-4">Models</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle>อัปโหลดโมเดล</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <input type="file" className="block text-sm" />
            <Button>อัปโหลด</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Model Registry</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">ยังไม่มีโมเดล (placeholder)</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

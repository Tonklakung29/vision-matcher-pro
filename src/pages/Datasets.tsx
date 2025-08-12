import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Datasets() {
  return (
    <section>
      <Seo title="Datasets | Vision Matcher Pro" description="อัปโหลด/จัดการ Dataset และ Annotation สำหรับเทรน YOLO" />
      <h1 className="text-2xl font-bold mb-4">Datasets</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle>อัปโหลด Dataset</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input type="file" />
            <Button>อัปโหลด</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>รายการ Dataset</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">ยังไม่มีรายการ (placeholder)</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

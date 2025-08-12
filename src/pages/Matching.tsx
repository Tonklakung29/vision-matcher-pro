import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Matching() {
  return (
    <section>
      <Seo title="Matching | Vision Matcher Pro" description="รัน YOLO detection & matching แบบเรียลไทม์หรือแบตช์ และดูผลลัพธ์" />
      <h1 className="text-2xl font-bold mb-4">Matching</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full rounded-md bg-muted" />
            <div className="mt-3 flex gap-2">
              <Button>Start</Button>
              <Button variant="secondary">Pause</Button>
              <Button variant="outline">Stop</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ผลลัพธ์ล่าสุด</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>Bounding Box, Class, Confidence, Timestamp</div>
            <div className="text-muted-foreground">ยังไม่มีข้อมูล (placeholder)</div>
            <div className="flex gap-2">
              <Button size="sm">Export JSON</Button>
              <Button size="sm" variant="secondary">Export CSV</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

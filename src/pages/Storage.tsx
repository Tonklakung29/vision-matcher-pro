import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Storage() {
  return (
    <section>
      <Seo title="Storage | Vision Matcher Pro" description="จัดเก็บผลลัพธ์ รูปภาพ และไฟล์ใน S3/MinIO พร้อม Metadata" />
      <h1 className="text-2xl font-bold mb-4">Storage</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Buckets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">ยังไม่มีข้อมูล (placeholder)</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Metadata</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">ยังไม่มีข้อมูล (placeholder)</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

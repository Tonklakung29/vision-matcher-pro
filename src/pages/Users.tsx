import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Users() {
  return (
    <section>
      <Seo title="Users | Vision Matcher Pro" description="จัดการผู้ใช้และสิทธิ์การเข้าถึงระบบ YOLO Matching" />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Card>
        <CardHeader>
          <CardTitle>รายการผู้ใช้</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">ยังไม่มีผู้ใช้ (placeholder)</div>
        </CardContent>
      </Card>
    </section>
  );
}

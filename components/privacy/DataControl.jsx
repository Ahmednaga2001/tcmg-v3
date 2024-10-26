import BulletListComponent from "./bulletListComponent/BulletListComponent"

const dataControlData = {
    title : " تحكم البيانات",
    options : [
        "وحدة التحكم في البيانات والادارة لهذا الموقع الإلكتروني هي المجموعة التجارية والبحرية",
        "ومقرها الرئيسي ٥ أ امتداد رمسيس أبراج الملتقى برج د العباسية القاهرة .مصر"
    ]
}
export default function DataControl() {
  return (
    <BulletListComponent {...dataControlData} />
  )
}

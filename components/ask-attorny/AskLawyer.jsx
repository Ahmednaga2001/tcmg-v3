import styles from "@/components/ask-attorny/ask-attrony.module.css";
import Image from "next/image";
const data = [
  {
    title:
      "1-بداية قم بزيارة موقع المجموعة البحرية والتجارية للمحاماة على الإنترنت",
      desc : "ستجد صفحة مخصصة لأي استفسار قانوني تحت مسمى (اسأل محامي), قم بفتح هذه الصفحة.",
    path: "/assets/images/askattorny/internet.png",
    w: 199,
    h: 228,
    alt : "موقع TCMG للمحاماة والإستشارات."
  },
  {
       title : "2- ستجد فورم بعنوان اسأل محامي",
       desc : "يمكنك ملؤها لطرح أي استفسار قانوني. قم بتعبئة النموذج بدقة واكتب سؤالك بشكل واضح ومفصل.",
       path: "/assets/images/askattorny/form.png",
       w: 300,
       h: 300,
       alt : "اسأل محامي من مكتبنا"
  },
  {
    title: "2- تقديم كافة التفاصيل المتعلقة بالقضية",
    desc : "عند طلبك لخدمة اسال محامي, حاول تقديم كافة التفاصيل المتعلقة بالقضية. ضع في اعتبارك تقديم تواريخ, وأطراف القضية, والظروف المحيطة بالمشكلة القانونية.",
    path: "/assets/images/askattorny/form.png",
    w: 300,
    h: 300,
    alt : "اسأل محامي من مكتبنا"
  },
  {
    title: "3- تقديم كافة التفاصيل المتعلقة بالقضية",
    desc : "عند طلبك لخدمة اسال محامي, حاول تقديم كافة التفاصيل المتعلقة بالقضية. ضع في اعتبارك تقديم تواريخ, وأطراف القضية, والظروف المحيطة بالمشكلة القانونية.",
    path: "/assets/images/askattorny/Simplification.svg",
    w: 126,
    h: 126,
    alt : "اسأل محامي من مكتبنا"
  },
  {
    title: "4- توضيح أهدافك وما تتوقعه من الاستشارة القانونية",
    desc : "عند كتابة استفسارك القانوني, يمكنك توضيح أهدافك وما تتوقعه من الاستشارة القانونية مع خدمة اسأل محامي مصري، سواء كان ذلك استفسار قانوني بسيط لإرشادك على الاتجاه الصحيح أو غيره من الإستفسارات. ",
    path: "/assets/images/askattorny/g10.svg",
    w: 126,
    h: 126,
    alt : "اسأل محامي من مكتبنا"
  },
  {
    title: '5- ضغط على زر "إرسال',
    desc : "لكن لا تنسى وضع العلامة لموافقتك على سياسة الخصوصية (يمكنك الاطلاع على بنود سياسة خصوصية الموقع من خلال النقر على كلمة إظهار).",
    path: "/assets/images/askattorny/send.svg",
    w: 126,
    h: 156,
    alt : "راسل محامي مصري"
  },
];
const AskLawyer = () => {
  return (
    <section className={styles.ask}>
      <div className={styles.heading}>
       <h2>كيف أسأل محامي من المجموعة البحرية والتجارية للمحاماة؟</h2>
        <Image
          src="/assets/images/askattorny/crown.png"
          width={60}
          height={25}
          alt="crown image"
        />
        <p>
        في مكتب TCMG للمحاماة, الإرشاد القانوني أمر بالغ الأهمية؛ لذا قدمنا لك خدمة اسأل محامي مصري لنساعدك في الإجابة عن جميع استفساراتك القانونية بالتواصل مع محامينا المختصين في كافة مجالات القانون. إليك الآن الخطوات اللازم اتباعها لترك استفسارك:
        </p>
      </div>
      <div className={styles.askParent}>
        {data.map((el, index) => (
          <div className={styles.parent} key={index}>
            <div className={styles.content}>
              <h3>{el.title}</h3>
              <p>{el.desc}</p>
            </div>
            <div className={styles.line}>
              <Image
                src="/assets/symbols/about/circle.svg"
                className={styles.circleImg}
                alt="circle image"
                width={30}
                height={30}
              />
            </div>
            <div className={styles.Img}>
              <Image quality={100} src={el.path} width={el.w} height={el.h} alt={el.alt}  />
            </div>
          </div>
        ))}
       
      </div>
    </section>
  );
};

export default AskLawyer;

import styles from "@/components/ask-attorny/ask-attrony.module.css";
import Image from "next/image";
const data = [
  {
    title:
      "1-بداية قم بزيارة موقع المجموعة البحرية والتجارية للمحاماة على الإنترنت",
    desc: "ستجد صفحة مخصصة لأي استفسار قانوني تحت مسمى (اسأل محامي), قم بفتح هذه الصفحة.",
    path: "/assets/images/askattorny/internet.png",
    w: 199,
    h: 228,
    alt : "موقع TCMG للمحاماة والإستشارات."
  },
  {
    title: "2- ستجد فورم بعنوان اسأل محامي",
    desc: "يمكنك ملؤها لطرح أي استفسار قانوني. قم بتعبئة النموذج بدقة واكتب سؤالك بشكل واضح ومفصل.",
    path: "/assets/images/askattorny/form.png",
    w: 300,
    h: 300,
    alt : "اسأل محامي من مكتبنا"
  },
  {
    title: "3- تقديم كافة التفاصيل المتعلقة بالقضية",
    desc: "عند طلبك لخدمة اسال محامي, حاول تقديم كافة التفاصيل المتعلقة بالقضية. ضع في اعتبارك تقديم تواريخ, وأطراف القضية, والظروف المحيطة بالمشكلة القانونية.",
    path: "/assets/images/askattorny/Form-Data.png",
    w: 95,
    h: 126,
    alt : "تقديم كافة التفاصيل المتعلقة بالقضية"
  },
  {
    title: "4- توضيح أهدافك وما تتوقعه من الاستشارة القانونية",
    desc: "عند كتابة استفسارك القانوني, يمكنك توضيح أهدافك وما تتوقعه من الاستشارة القانونية، سواء كان ذلك استفسار قانوني بسيط لتوجيهك في الاتجاه الصحيح,أو تقديم استشارة قانونية شاملة بشأن الخطوات التالية التي يجب اتخاذها.",
    path: "/assets/images/askattorny/g10.png",
    w: 102,
    h: 126,
    alt : "املئ فورم اسال محامي"
  },
  {
    title: '5- اضغط على زر "إرسال"',
    desc: "لكن لا تنسى وضع العلامة لموافقتك على سياسة الخصوصية (يمكنك الاطلاع على بنود سياسة خصوصية الموقع من خلال النقر على كلمة إظهار).",
    path: "/assets/images/askattorny/Send.png",
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
          في مكتب TCMG للمحاماة, الإرشاد القانوني أمر بالغ الأهمية. لذلك قدمنا
          فورم اسال محامي لتساعدك في طرح جميع استفساراتك القانونية لمحامينا
          المتخصص, حيث سنوفر لك الإجابات القانونية التي تحتاجها لفهم القوانين
          والتشريعات، وحل المشاكل بثقة تامّة. إليك الآن الخطوات اللازم اتباعها
          لطلب
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
              <Image quality={100} src={el.path} width={el.w} height={el.h} alt={el.alt} />
            </div>
          </div>
        ))}
        {/* 
        <div className={styles.parent}>
          <div className={styles.Img}>
            <Image
              src={data[1].path}
              width={data[1].w}
              height={data[1].h}
              alt={data[1].path}
            />
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.content}>
            <h3>{data[1].title}</h3>
            <p>{data[1].desc}</p>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[2].title}</h3>
            <p>{data[2].desc}</p>
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/legalconsultations/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.Img}>
            <label htmlFor="kind">نوع الاستشارة</label>
            <select name="" id="kind">
              <option value="النوع" disabled selected>
                النوع
              </option>
            </select>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.Img}>
          <div className={styles.card}>
            <Image
              src={data[3].path}
              width={data[3].w}
              height={data[3].h}
              alt={data[3].path}
            />
            <Image
              src={data[3].path2}
              width={data[3].w2}
              height={data[3].h2}
              alt={data[3].path2}
              className={styles.img2}

            />
            </div>
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.content}>
            <h3>{data[3].title}</h3>
            <p>{data[3].desc}</p>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[4].title}</h3>
            <p>{data[4].desc}</p>
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.Img}>
            <Image
              src={data[4].path}
              width={data[4].w}
              height={data[4].h}
              alt={data[4].path}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AskLawyer;

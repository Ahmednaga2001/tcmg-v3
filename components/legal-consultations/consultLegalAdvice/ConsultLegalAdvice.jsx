import Image from "next/image";
import styles from "./page.module.css";
const consultationsData = [
  {
    title: "استشارة هاتفية",
    description: "اطلب الآن استشاره قانونيه هاتفية؛ فهي الحل الأمثل والأسرع في حالة كان لديك مشاكل قانونية وترغب في الحصول على حلول فورية أو لديك عائق من الذهاب لزيارة أحد مكاتبنا شخصيًا. نرحب بكم في TCMG باتصالاتكم للإجابة على جميع استفساراتكم. اطلب رقم محامي؛ وسيتواصل معك أحد خبرائنا ليشاركك بالمعرفة والخبرة القانونية التي تحتاجها واللازمة لقضيتك.",
    image: {
      src: "/assets/icons/legalconsultations/استشارة هاتفية.svg",
      width: 127,
      height: 129,
      alt: "الاستشارة القانونية الهاتفية",
    },
  },
  {
    title: "اجتماع اونلاين",
    description: `أتاح تطبيق الواتس أب سهولة التواصل بين الأفراد، و بأخص الحديث عن 
      المستشارين القانونيين في توفير امكانية التواصل مع الموكلين وطلب استشارات 
      قانونية واتس أب. والذي يتيح التواصل عبر الرسائل النصية أو الصوتية وأيضا 
      المجموعات الاستشارية، مع الحفاظ على سرية الاستشارة من رسائل العميل إلى 
      تفاصيل قضيته المُستشار فيها. كل ما عليك هو مراسلة المجموعة التجارية 
      والبحرية للمحاماة عبر حساب الواتس اب الرسمي لها، ثم توضيح موضوع استشارتك 
      ليقوم بالرد عليك مستشار قانوني متخصص مستعد لدعمك.`,
    image: {
      src: "/assets/icons/legalconsultations/whatsup.svg",
      width: 134,
      height: 135,
      alt: "اجتماع اونلاين",
    },
  },
  {
    title: "استشارة مكتبية",
    description: "تعد أفضل الطرق للحصول على استشارة محامي هي بحجز زيارة في أحد مكاتب TCMG الاستشارية، حيث أن طرح التساؤلات في قضية ما وجهًا لوجه بين المستشار والموكل يعد طريقة فعالة تتضمن الفهم العميق لجميع نواحي المسائل والإجراءات اللازمة لتجنب مخالفة القانون. كل ما عليك فعله هو حجز موعد مع أحد خبرائنا، وسنكون بانتظارك لإمدادك بكافة السبل الممكنة للنصر في قضيتك وتحقيق هدفك القانوني.",
    image: {
      src: "/assets/icons/legalconsultations/استشارة مكتبية.svg",
      width: 142,
      height: 139,
      alt: "الاستشارة القانونية الهاتفيةاستشارة قانونية مكتبية",
    },
  },
    {
      title: "استشارة شركات",
      description: "احصل على استشارات قانونية فورية في قانون الأعمال، حيث أنه باستشارة محامي شركات يساعدك على تجنب المخاطر القانونية واتخاذ القرارات السليمة وتعزيز مكانة شركتك في السوق. تخضع الشركات لعدد كبير من القوانين واللوائح التي تتغير باستمرار، ولذلك فإن استشارة أعمال الشركات والشؤون القانونية تضعك على المسار الصحيح. حيث يمكن للمستشار القانوني مساعدة شركتك على فهم هذه القوانين والامتثال لها؛ مما يجنِّبُك التعرض للغرامات والعقوبات القانونية.",
      image: {
        src: "/assets/icons/legalconsultations/استشارة شركات  .svg",
        width: 142,
        height: 137,
        alt: "استشارة محامي شركات",
      },
    },
   
   
  ];
const ConsultLegalAdvice = () => {
  return (
    <section className={styles.legalAdvice}>
      <div className={styles.heading}>
       <h2>حلول قانونية احترافية تلبي احتياجات الأفراد والشركات</h2>
        <p>
        يقدم أفضل مكتب استشارات قانونية في مصر المشورة القانونية للأفراد والشركات في كافة التخصصات القانونية. خبراؤنا مستعدون لتلبية احتياجاتك عبر استشارات قانونية فورية لحل أي مسألة قانونية مهما كانت معقدة. نوفر استشارات إلكترونية اون لاين أو الهاتف، بالإضافة إلى الاستشارات المكتبية في مكاتبنا بالقاهرة الكبرى. ونتميز بتقديم استشارات خاصة في تأسيس الشركات والشؤون القانونية، مع دعم كامل لتطبيق القوانين بشكل صحيح.        </p>
      </div>

      <div className={styles.cards}>
      {consultationsData.map(({ image: { src, width, height, alt }, title, description }, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.top}>
              <Image
                src={src}         
                width={width}     
                height={height}   
                alt={alt}    
                quality={100}     
              />
              <span>{title}</span>
            </div>
            <div className={styles.left}>
              <span>{title}</span>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultLegalAdvice;
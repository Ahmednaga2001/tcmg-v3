"use client";

import AccordionCard from "@/components/shared/client/accordionCard/AccordionCard";

const data = [
  {
    title:
      "ما الخدمات القانونية التي تقدمها المجموعة التجارية والبحرية للشركات؟",
    desc: `
    <p>يعد مكتب TCMG أفضل شريك استراتيجي للشركات، بفضل خبرتنا الواسعة و فريقنا المتخصص في تقديم الدعم القانوني للشركات بكل أمان. 
حيث أننا نقدم مجموعة خدمات قانونية قوية لتلبية احتياجات الشركات على مختلف أنواعها وأحجامها، من خلال: 
</p>
<ol>
    <li>
        <strong>تأسيس الشركات:</strong> نحن في TCMG نقدم خدمات تأسيس الشركات بمستوى عالمي، بدءًا من اختيار نوع الشركة المناسب من بين (فردية - ذات مسؤولية محدودة - مساهمة)، إعداد عقود التأسيس واللوائح الداخلية، وأيضًا تقديم الدعم القانوني في جميع مراحل التأسيس. نسعى لضمان تأسيس شركة قوية ومتينة تلبي كافة المتطلبات القانونية وتحقق أهدافك التجارية بكفاءة وفاعلية.
    </li>
    <li>
        <strong>استشارات قانونية للشركات:</strong> نقدم استشارات وخدمات قانونية يتم فيها اطلاع رجل الأعمال والمستثمر على حقوق الشركة والأوراق المطلوبة لتأسيس الشركة بشكل قانوني، مع العديد من الإجراءات التي يقدم المحامي الدعم الشامل في إعدادها.
    </li>
    <li>
        <strong>تسجيل العلامة التجارية:</strong> من السياسات المهمة وتعد أحد الأسس القوية، حيث تُعتبر عملية تسجيل العلامة التجارية أحد عناصر الجذب والتواصل مع العملاء وإنشاء علاقة قوية مع المستهلكين. هذا الشيء هو ما يشرف على إعداده محامي تأسيس شركات.
    </li>
    <li>
        <strong>خدمة تقارير الضرائب:</strong> يتم تقديم خدمات قانونية لحل المشاكل الضريبية للشركات، من خلال تخصيص محامي للتعامل مع الملفات الضريبية لشركتك الناشئة والحرص على متابعة المسائل والشؤون المالية لشركتك.
    </li>
</ol>
<p> نحن نلتزم بتقديم أعلى مستويات الاحترافية والنزاهة في الخدمات القانونية لضمان نجاحك في السوق المحلي وأيضًا الدولي.</p>

        `,
  },
  {
    title: "ما سعر الخدمات القانونية التي تقدمها المجموعة التجارية والبحرية؟",
    desc: `
    <p>ليس هناك سعر ثابت للحصول على خدمات قانونية التي نقدمها في TCMG، لكن هناك عدة معايير بناءاً عليها يتم تحديد باقة الخدمات القانونية، منها:</p>
    <ul>
    <li>
        <strong>توقيت طلب الخدمة:</strong> يجب مراعاة التوقيت الذي يتم خلاله طلب الخدمة، سواء كانت خدمة استشارة قانونية أو توكيل محامي. في كلتا الحالتين، كلما زاد الوقت الذي استمر خلاله تقديم الخدمة، زاد السعر.
    </li>
    <li>
        <strong>مستوى تعقيد القضية:</strong> كلما زاد تعقيد القضية أو موضوع الاستشارة، زاد تسعير الخدمة، لأن ذلك يعني أن القضية تحتاج إلى إجراءات وخدمات قانونية خاصة والتنقل في أماكن متعددة للبحث عن أدلة وشهود تدعم موقف الموكل.
    </li>
    <li>
        <strong>الخبرة القانونية:</strong> إن كان المحامي الذي تتقدم لتوكيله يملك قضايا ناجحة سابقة وماضٍ حافل بالإنجازات، فهو مؤشر جيد على سمعة المحامي وخبرته الواسعة، حيث قد تم الاستعانة به في العديد من القضايا لموكلين مختلفين.
    </li>
    <li>
        <strong>استراتيجية التسعير الاختياري:</strong> تعد إحدى الطرق التي تجذب العملاء، حيث يتم فيها عرض المحامي تقديم خدمات قانونية بسعر منخفض، ثم يتم تحديد التسعير على أساس تعقيد القضية أو الوقت الذي استمرت خلاله الخدمة.
    </li>
    <li>
        <strong>كفاءة المحامي والمستشار:</strong> يقوم العديد، خاصة في القضايا الشائكة، باختيار محامين ذوي كفاءات وخبرات عالية ليضمنوا نصرهم في القضية. ولتلك الخبرة والكفاءة، يتوجب على العميل الدفع مقابلها، فكما يدفع المستهلك لشهرة العلامة التجارية، يجب أن يدفع العميل لشهرة وخبرة المحامي أو المستشار.
    </li>
</ul>

        `,
  },
  {
    title : "هل متاح خدمات قانونية إلكترونية؟ وكيف يمكن حجز خدمة؟",
    desc : `
    <p>نعم، توفر المجموعة التجارية والبحرية للمحاماة في مصر خدمات قانونية إلكترونية. منها على سبيل المثال متجر خدمات مكتب المحاماة مقدم من خلال موقع المجموعة لتقديم ممارسات تخدم الأفراد والشركات، بالإضافة إلى قطاعات تخدم الشركات والمؤسسات لدعم أصحاب الأعمال والتجار والمستثمرين.
 كما تقدم المجموعة باقة الخدمات القانونية منها خدمة تأسيس الشركات في قطاع أعمال الشركات وتسجيل العلامات التجارية وصياغة العقود وتقارير الضرائب وغيرها من الخدمات فيما يخص تأسيس الشركات. هذه الخدمات كما تتوفر في مصر؛ فيمكن للعملاء من المملكة العربية السعودية والإمارات العربية المتحدة (دبي) الحصول على خدماتنا القانونية وتسجيل حجز لأحد خدمات الممارسات والقطاعات، من خلال:
</p>
<ol>
    <li>
        <strong>توجه إلى قسم الممارسات أو القطاعات:</strong> من أقسام الخدمات القانونية لـ TCMG وقم بملء بياناتك للحصول على خدمات قانونية إلكترونية.
    </li>
 <ul>
    <li>
        <strong>الممارسات:</strong> تخدم الأفراد والشركات في مجالات القانون المختلفة.
    </li>
    <li>
        <strong>القطاعات:</strong> تخدم الشركات والمؤسسات فقط في تخصصات قانونية مختلفة.
    </li>
    </ul>
</ol>

    `
  }
];


function Accordion(){
  return (
  
    <section className="accordionQuestions">
      <h2>الأسئلة الشائعة حول الخدمات القانونية</h2>
      {data.map((el,index) => (
        <AccordionCard title={el.title} desc={el.desc} key={index} />
      ))}
    </section>
  
  );
};

export default Accordion;

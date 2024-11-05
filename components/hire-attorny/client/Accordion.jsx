"use client";

import AccordionCard from "@/components/shared/client/accordionCard/AccordionCard";

const data = [
{
  title : "ما أهمية عمل توكيل للمحامي المتخصص؟",
  desc : `
  <p>تتجلى عملية توكيل محامي في أهميتها؛ فعند التعرض لتجاوزات أو مخالفات للقانون، فإن الحل الأمثل هو الاستناد إلى مختص و متمرس في القضايا القانونية التي يرتكز فيها تخصصه.</p>
  <p> يقوم المحامي بالتصرف نيابةََ عن موكله في القضية التي أقدم عليها معتمداً على معلوماته وخبرته القانونية؛ لحماية حقوقه والدفاع عن قضيته سواء تمثلت في ممتلكات أو أي مسائل قانونية أخرى، في مقابل أجر مادي يجب عليه سداده ويتم تحديده بناء على بعض المعايير أهمها قياس المتاعب التي نتجت عن عمل توكيل للمحامي. </p>
  <p>في ظل التعمق في إدراك أهمية توكيل محامي، هناك كثير من الأسباب تدفعك لتجنب تولي شئونك القانونية بمفردك أو بدون التقدم على طلب استشارة قانونية، وهي:
</p>
  <ol>
    <li>
        <strong>الاحترافية:</strong> عند اختيارك لمحامي يجب عليك التركيز على صفة رئيسية ألا وهي الاحتراف. في حالة اختيارك لمحامي خبير لا بد من عمل توكيل عام قضايا لمحامي محترف ذو خبرة كافية في النصوص القانونية والأحكام وذلك تسهيلاً لمسار القضية، وإيجاد حل قانوني فعّال لشأنك القانوني.
    </li>
    <li>
        <strong>الخبرات القانونية:</strong> عليك اختيار محامي يتولى حل مسائلك القانونية ويجب عليك تجنب الوقوع مع محامين يواجهون صعوبات في النظر للمشاكل القانونية وإيجاد الثغرات التي تمثل الحل الأمثل لقضيتك. لذلك يجب عليك توكيل محامي مع خبراء في المجال كمحامينا في مجموعة مكاتب TCMG الخبراء في تقديم الحلول القانونية مع خبرة تفوق ال 30 عاماً.
    </li>
    <li>
        <strong>مقاومة العواطف والتأثيرات الخارجية:</strong>  يتصف الإنسان بكون طبيعته عاطفية، فمن المحتمل تعرض المحامي لتعاطفات سلوكية من طرف الخصم لاستماتة المحامي وكسبه إلى جانبة. لذلك يجب عليك توكيل المحامي المتمكن والدارس لقواعد السلوك داخل المحكمة فهو غير قابل لاستقبال أي تأثيرات خارجية.
    </li>
    <li>
        <strong>تشابك العلاقات بين القوانين:</strong> بنود القوانين ومواده تتسم بالتعقيدة لأنها مليئة بالتفاصيل الكثيرة والمهمة  والتي تحتاج لخبرة عميقة ف"كلما زاد عمق المعرفة أصبحت ذات أثر كبير". يتميز محامونا بشبكة كبيرة من العلاقات والمصادر الأساسية لتحصيل المعلومات وتعميق معرفتهم عن القوانين؛ لفهم أي تفاصيل أو مصطلحات معقدة، وهو ما يصعب توفيره مع محامي مبتدئ.
    </li>
</ol>

  `
},
{
  title : "كم تكلفة عمل توكيل للمحامي ؟",
  desc : `
  <p>إن تكلفة عمل توكيل للمحامي من أجل لنظر في قضية أو إثبات أحقية الممتلكات خاصة في القضايا العقارية أو أيًا كانت الخدمة المطلوبة؛ فمن المتعارف عليه أن عمل توكيل محامي عملية مكلفة وذلك يرجع إلى الخبرات والاحترافية التي يتسم بها المحامي وبناءً على المجهود والمدة التي استهلكها في حل القضية يتم تحديد الكلفة وقدرها، كما يتم تحديد رسوم التوكيل حسب نوع وسبب هذا التوكيل ولأي جهة سيتم إرساله.</p>
  <ul>
    <li><strong>سعر توكيل المحامي في الشهر العقاري:</strong> إن سعر التوكيل بمصلحة الشهر العقاري تُقدَّر برسوم معينة ويتم تحديد هذه الرسوم من مصلحة الشهر العقاري فقط.</li>
    <li><strong>سعر توكيل عام وخاص قضايا 2024:</strong> يتم تسعير التوكيل العام للقضية الواحدة بناء على عدد الأفراد ومختلف المهن حيث:</li>
    <ul>
     <li><strong>الحالة الأولى:</strong> إذا كان فردًا واحدًا فسعر التوكيل 31 جنيهًا.</li>
<li><strong>الحالة الثانية:</strong> إذا كان الطرف الآخر مختلف المهن فسعر توكيل محامي العام هو 46 جنيهًا.</li>
<li><strong>الحالة الثالثة:</strong> إذا كان التوكيل لفردين فيكون السعر 56 جنيهًا.</li>
<li><strong>الحالة الرابعة:</strong> إذا كان التوكيل لثلاثة أفراد فيكون سعر عمل توكيل المحامي العام 61 جنيهًا.</li>
<li><strong>الحالة الخامسة:</strong> إذا كان الطرف الآخر مختلف المهن فسعر التوكيل العام هو 81 جنيه.</li>

        </ul>
        <li>إذًا يمكن الإقرار أن متوسط سعر توكيل عام قضايا يتراوح بين 30 : 100 جنيهًا.</li>
</ul>
<p>تسهيلاً على عملائنا الكرام يمكنك الدخول علي الموقع الرسمي لوزارة العدل لمعرفة رسوم توكيل محامي وأخر التحديثات للرسوم الحقيقة والإجراءات اللازمة لعمل توكيل في الشهر العقاري.</p>

  `
},
{
  title : "ما الفرق بين التوكيل العام و التوكيل الخاص؟",
  desc : `
  <ul>
    <li><strong>توكيل عام قضايا للمحامي:</strong> يسمح هذا التوكيل للمحامي بتقديم دعوى الرفع للقضية نيابةً عن الموكل للدفاع عنه في القضايا التي تُرفع ضده، وممارسة الأعمال المتعلقة بالقضية كالإقرار بالتصالح أو استلام الأوراق وكل ما يخص القضايا المرفوعة من الموكل أو عليه.
<ul>
    <li><strong>عمل توكيل عام قضايا للمحامي أون لاين:</strong> يمكنك من خلال زيارة الموقع الرسمي لـ TCMG، عمل توكيل محامي عام أون لاين من خلال هذه الصفحة وحجز توكيل عام قضايا، كذلك الحصول على استشارة قانونية بكافة الطرق المتاحة من استشارة هاتفية أو واتس أب عبر الأرقام المتوفرة في صفحة الاستشارات القانونية.</li>

</ul>
</li>
    <li><strong>التوكيل الخاص للقضايا:</strong> يقتصر هذا على عمل توكيل للمحامي والسماح له بالحضور والدفاع والمرافعة أو التصالح في قضية معينة، وغير مسموح له بحرية التصرف في إجراءات القضية.</li>
</ul>

  `
},
{
  title : "ما هي الطرق المختلفة لعمل توكيل عام أو خاص لمحامي؟ (4 طرق مختلفة وفعالة)",
  desc : `
  <p>هناك أكثر من طريقة لعمل توكيل لمحامي متخصص، سنعرض أفضل الطرق التي ستمكنك من إجراء توكيل أو الحجز لإنهاء إجراءات توكيل محامي بنجاح: 
</p>
  <ul>
    <li>عبر الهاتف المحمول دون الاضطرار إلى الانتظار في صفوف الطوابير الطويلة أمام مكاتب التوكيل في الشهر العقاري عن طريق استخدام تطبيق أرغب في عمل توكيل لحجز موعد لك في مكتب الشهر العقاري وعمل توكيل خاص للمحامي بك دون انتظار دورك ف المكتب (في حالة اذا كان مكتب الشهر العقاري الخاص بمحافظتك مميكناً).</li>
    <li>عمل التوكيل عن طريق بوابة مصر الرقمية فمن خلالها يمكنك عمل توكيل للمحامي بطريقة سهلة وبسيطة وغير مكلفة من خلال عمل مجموعة من الإجراءات البسيطة.</li>
    <li>لكن إذا كان المكتب غير مميكن فيجب عليك الذهاب الي مكتب الشهر العقاري وعمل توكيل محامي لدينا يدوي مع الموظف المختص هناك. (سواء كنت من داخل او خارج مصر).</li>
    <li>الطريقة الأخيرة ألا وهي عن طريق فروع توثيق جديدة تم إطلاقها حديثا تعمل فترة مسائية من الساعة ٥ مساءاً وحتى الساعة التاسعة مساءاً تيسيراً على السادة المواطنين المتعاملين مع قطاع الشهر العقاري والتوثيق عن طريق سيارات متنقلة خاصة بمصلحة الشهر العقاري لتقديم الخدمات للمواطنين ويتم الحجز بتلك الفروع من خلال تطبيق أرغب في عمل توكيل أو بوابة مصر الرقمية. بعد عمل التوكيل، من المهم المتابعة مع المكتب لمعرفة كل جديد وآلية سير القضية الخاصة بك.</li>
</ul>

  `
},
{
  title : "كيفية عمل توكيل لمحامي من المجموعة التجارية والبحرية للمحاماة؟",
  desc : `
  <p>حتى تتمكن في عمل توكيل للمحامي المتخصص من خبراء مكتبنا نرجو اتباع الخطوات البسيطة التالية:
</p>
  <ol>
    <li>ملء الاستمارة المجانية الخاصة بتوكيل محامي من المكتب لكي نتعرف على تخصص المحامي المطلوب ونسعى لتلبية طلبك ودعمك بمتخصص يتولى قضيتك أو التواصل معنا عبر حساب واتس أب الخاص بمكتبنا لمعرفة تفاصيل طلبك ودعمك بالحلول القانونية السريعة.</li>
    <li>عمل توكيل عام أو خاص للمجموعة التجارية والبحرية للمحاماة بخصوص الموضوع المراد منك إيجاد حل قانوني له وتوثيق هذا التوكيل في مصلحة الشهر العقاري في بلدك حتى يتمكن المحامي من العمل على القضية الخاصة بك.</li>
    <li>إرسال النسخة الأصلية من التوكيل إلى المكتب لدينا وأخذ صورة من التوكيل معك حتى تتمكن بعد ذلك من إلغاء هذا التوكيل إن أردت بعد انتهاء المحامي من حل القضية أو الأمر المراد إيجاد له حل.</li>
</ol>

  `
},
{
  title : "هل يجوز عمل توكيل لأكثر من محامي؟",
  desc : "نعم، يمكن لأي شخص عمل توكيل لأكثر من محامي في قضية واحدة، ولا يوجد ما يمنع ذلك أو قانون ينص على إلزام الموكل بعمل توكيل محامي واحد، لكن من الأفضل مراعاة توكيل المحامين من مكتب محاماة واحد حتى يتم التوافق بينهم وليس من مكاتب محاماة منافسة أخرى؛ لأن ذلك سيمثل تهديدًا لإقامة روح الفريق وقد يسعى كل محامي منفردًا بخبرته للفوز في القضية مما يسبب ذلك تشتتًا في مسار القضية مما قد يعد احتمالاً لعدم تحقيق النصر فيها."
}
];

const Accordion = () => {
  return (
    <section className='accordionQuestions'>
      <h2>الأسئلة الشائعة حول توكيل محامى</h2>
      {data.map((el,index) => (
        <AccordionCard title={el.title} desc={el.desc} key={index} />
      ))}
    </section>
  );
};

export default Accordion;

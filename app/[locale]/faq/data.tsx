import { ReactNode } from "react";

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

const faqItemsEn: FAQItem[] = [
  {
    question: "What is GoPay Service?",
    answer:
      "It is an electronic payment gateway provided by Inclusive Financial Solutions Company, offering invoicing and payment collection services through the SADAD payment system.",
  },
  {
    question: "Is GoPay licensed by the Saudi Central Bank?",
    answer:
      "Yes, GoPay is one of the services provided by nclusive Financial Solutions Company, authorized by the Saudi Central Bank (SAMA) to offer it to the targeted segments in the Saudi market.",
  },
  {
    question: "Who is the target audience of GoPay?",
    answer:
      "GoPay targets all businesses of various sizes and sectors in the Saudi market.",
  },
  {
    question: "What is the difference between the Biller and the Customer?",
    answer: `Biller: The business, merchant, or service provider who issues invoices and financial claims and collects payments from customers through the available electronic payment methods in the Saudi market.  

Customer: The end-user who receives the (service or product) from the biller and settles the invoices and financial claims through the available electronic payment channels in the Saudi market.`,
  },
  {
    question: 'What is the "SADAD" payment system?',
    answer: (
      <>
        It is a centralized system for presenting and paying bills through the
        local banking network. The system&apos;s infrastructure was developed by
        the Saudi Central Bank to enable businesses to issue invoices and
        financial claims and link them with banking systems, allowing customers
        to pay and settle their outstanding amounts.
        <br />
        <a
          href="https://gopay.sa/sadad/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block"
        >
          for more help, please click
        </a>
      </>
    ),
  },
  {
    question:
      "Is GoPay limited to providing payment services through the “SADAD” system, or does it also support other electronic payment services?",
    answer:
      "GoPay is specialized in offering payment services through the “SADAD” system. However, it can also provide other electronic payment services upon a separate request, in which the business specifies the types of payment services required in order to integrate additional payment options into the system.",
  },
  {
    question: "What are the features of the GoPay service?",
    answer: (
      <>
        You can find information about the service features through the link
        <br />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block"
        >
          click here
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I use the GoPay service?",
    answer: (
      <>
        You can use GoPay by opening a payments account and subscribing to the
        service.
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          For more details on how to join, Click here.
        </a>
      </>
    ),
  },
  {
    question:
      "What documents are required from the business to obtain the GoPay service?",
    answer: (
      <ol className="space-y-0!">
        <li>
          A copy of the authorization letter – for assistance and more details,{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Click here.
          </a>
        </li>
        <li>A copy of the authorized person&apos;s ID.</li>
        <li>
          A copy of the company&apos;s registration document. For assistance and
          more details,{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Click here.
          </a>
        </li>
        <li>
          A copy of the national address – for assistance and more details,{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Click here.
          </a>
        </li>
        <li>
          A copy of the bank certificate – for assistance and more details,
          <a href="#" target="_blank" rel="noopener noreferrer">
            Click here.
          </a>
        </li>
      </ol>
    ),
  },
  {
    question:
      "Does the GoPay service require any setup or software installation on the company's servers?",
    answer:
      "You can use GoPay by opening a payments account and subscribing to the service.",
  },
  {
    question: "How can I carry out transactions through GoPay?",
    answer: (
      <div className="space-y-2">
        <p>
          You can execute transactions through GoPay using one of the following
          options:
        </p>
        <p>
          - Via the service&apos;s website (Web Portal) using your username and
          password to access the system.
        </p>
        <p>
          - Through electronic integration (APIs) between the GoPay system and
          your company&apos;s system.
        </p>
      </div>
    ),
  },
  {
    question: "How does GoPay work in bill payments and financial claims?",
    answer: (
      <>
        You can find information about the bill payment process through this
        link <br />
        <a href="#" className="mt-2 inline-block">
          Click here.
        </a>
      </>
    ),
  },
  {
    question: "What is the pricing mechanism for GoPay?",
    answer: (
      <>
        You can find information about the pricing mechanism through this link{" "}
        <br />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block"
        >
          Click here.
        </a>
      </>
    ),
  },
  {
    question:
      "Can GoPay be directly integrated with the company's internal system?",
    answer:
      "Yes, GoPay allows electronic integration (APIs) between the GoPay system and your company's system.",
  },
  {
    question: "What languages does the GoPay service support?",
    answer: "The GoPay system supports both Arabic and English.",
  },
  {
    question: "Does GoPay operate throughout the week?",
    answer:
      "Yes, GoPay operates throughout the week. However, settlement and transfer of collected amounts are processed during official working days and hours (Sunday to Thursday).",
  },
  {
    question:
      "Is a commercial registration or freelance license required to obtain the service?",
    answer:
      "Yes, to open a payments account and register for GoPay, you need to provide your business identification documents (Commercial Registration, License, Ministerial Resolution, Freelance License, etc.).",
  },
  {
    question:
      "Will the customer be notified of the invoice or financial claim via SMS?",
    answer:
      "Yes, customers are notified of invoices and financial claims through the SMS notification service.",
  },
  {
    question: "Is there a testing environment for trying GoPay services?",
    answer:
      "Yes, GoPay provides businesses that wish to open an account with a testing environment for electronic integration (APIs). This allows them to perform integration, test transactions, and ensure that all selected features are activated.",
  },
  {
    question: "Does GoPay offer the ability to issue recurring invoices?",
    answer:
      "Yes, GoPay enables businesses to issue recurring invoices to their customers in a unique and innovative way, helping them manage billing and collections efficiently.",
  },
  {
    question:
      "What is the difference between issuing a one-time invoice and a recurring invoice?",
    answer: `One-time invoice:
These are invoices or payment claims issued with a variable SADAD number that can be used only once. The SADAD number expires once the customer settles the invoice.
(Examples: invoices for “purchases of goods” such as cars, construction materials, furniture, etc.)

Recurring invoice:
These are invoices or payment claims issued with a fixed SADAD number assigned by the biller to the customer. This allows the customer to register the SADAD number in their bank account to regularly view and settle outstanding amounts.
(Examples: invoices for “services and subscriptions” such as electricity, water, telecommunications, etc.)`,
  },
  {
    question:
      "If a customer pays only part of the invoice, will the remaining amount be added to the next invoice?",
    answer: `For one-time invoices:
The unpaid amount will remain under the same SADAD number until the invoice or payment claim is fully settled.

For recurring invoices:
The outstanding amount will accumulate under the customer's SADAD number, either as a debit or credit balance, depending on the due invoices and amounts already paid.`,
  },
  {
    question:
      "How long does it take for settlements and collected payments to be transferred to the company's bank account?",
    answer:
      "GoPay settles and transfers amounts collected from customers into the company's bank account one business day after receiving the payment from the SADAD system. (Settlement duration may vary depending on the nature of the business and contractual arrangements with the company.)",
  },
  {
    question: "Does GoPay allow partial payments for customers?",
    answer:
      "Yes. GoPay provides the option for partial payments of invoices and claims. Businesses can enable this feature and set the minimum amount allowed for settling the issued invoice or claim.",
  },
  {
    question:
      "How can the end-customer know the remaining balance if payments are made partially?",
    answer:
      "The customer can access the invoice or payment link sent by the business to view details of all outstanding and settled invoices. They can also download the GoPay mobile app to get all related account information.",
  },
  {
    question:
      "Will the company's name appear in the customer's bank account when searching with the SADAD number?",
    answer:
      "No. The company's name appears only in the SMS and email notifications sent to the customer. Customers can match the invoice or claim amount with the figure shown in their bank account when searching by the SADAD number provided.",
  },
  {
    question:
      "How can the company view details of the amounts deposited into its bank account?",
    answer:
      "The company is provided with daily settlement reports that include full details of deposited amounts, fees, and deducted taxes.",
  },
  {
    question: "Why is GoPay considered secure?",
    answer:
      "GoPay processes payments and collections through secure, authorized banking channels supervised by the Saudi Central Bank. The SADAD system collects the payments into a central account, and GoPay then transfers these amounts directly into the companies' bank accounts.",
  },
  {
    question:
      "What amounts are deducted from the collected payments of the business?",
    answer: `GoPay deducts the service fee along with the Value Added Tax (VAT) for each transaction executed, in addition to a SARIE transfer fee if the business's bank account is outside Riyad Bank. 
(All executed transactions are consolidated at the end of each day and transferred in one batch to the business's bank account.)`,
  },
  {
    question: "Is there a technical guide for integrating with GoPay?",
    answer:
      "Yes, GoPay provides businesses with a comprehensive integration guide for direct electronic integration with the service.",
  },
  {
    question:
      "What are the required steps for direct electronic integration with GoPay?",
    answer: `Open a payments account and subscribe to the service.

Select the services and features required for direct integration.

Pay the electronic integration service fee.

Receive access credentials for the testing environment to begin integration.

Provide a dedicated link from the business’s software platform to receive payment notifications.

Apply security standards for receiving payment notifications (Digital Signature).

Conduct testing to verify that payments are processed correctly.

Connect to the live production environment to receive payments from the SADAD system.`,
  },
  {
    question: "Does GoPay provide a graphical interface for billers?",
    answer:
      "Yes, GoPay provides a graphical user interface (GUI) that allows billers to create and manage payment claims, as well as access detailed reports on payments and claims.",
  },
  {
    question:
      "Can GoPay split collected amounts and transfer them into multiple bank accounts for the business?",
    answer:
      "Yes, GoPay offers a feature that allows businesses to add multiple bank accounts so that collected amounts can be transferred and deposited according to the setup defined during service registration.",
  },
  {
    question:
      "Can the business raise invoices and collect payments through SADAD, while also using other SADAD services, without direct electronic integration?",
    answer:
      "Yes, once a payments account is opened with GoPay, the business can issue invoices and collect payments through the SADAD system and benefit from all other services and features, without the need for direct electronic integration with SADAD.",
  },
  {
    question: "Does GoPay provide a tax invoice for transaction fees?",
    answer:
      "Yes, GoPay issues and sends tax invoices to businesses on a bi-monthly basis.",
  },
  {
    question:
      "Does GoPay schedule payments for the customer, so that the system automatically issues the invoice or payment claim on the due date?",
    answer:
      "Yes, GoPay provides the technology to automatically issue invoices and payment claims once they become due.",
  },
  {
    question:
      "Can the SADAD number be changed to match the company's contract numbers?",
    answer:
      "No, the SADAD number cannot be changed. However, GoPay can provide alternative solutions that allow the company to link the SADAD number with its contract number, making it easier to track and search for all transactions generated by the system.",
  },
  {
    question:
      "If the customer registers their SADAD number in their bank account, will it appear across other banks?",
    answer:
      "If the company issues the invoice or payment claim and attaches the customer's identity information, the number may be recognized in some banks that support this feature.",
  },
  {
    question:
      "If GoPay is electronically integrated with the company’s system, will all data entered in the company’s system (such as customer or invoice information) be automatically reflected in GoPay without the need for re-entry?",
    answer:
      "Yes, GoPay automatically reflects and updates all transactions entered from the company’s system, synchronizing its database with the information and commands received.",
  },
  {
    question:
      "Can a company’s customer pay invoices and claims without registering in GoPay?",
    answer: (
      <>
        Yes, the customer can pay invoices and claims without registering for
        the service. The company simply issues the invoice or claim, and GoPay
        sends the invoice details and SADAD number to the customer’s mobile
        number or email for settlement.
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          For more details, click here.
        </a>
      </>
    ),
  },
  {
    question: "How to file a complaint?",
    answer: (
      <>
        Customers can submit their complaints through one of the following
        channels:
        <br />
        <br />
        - Toll-free phone number
        <br />- Website
        <br />- Email
        <br />- Mobile applications
        <br />
        <br />
        Steps for filing a complaint:
        <br />
        <br />
        Via Toll-Free Phone:
        <br />- The customer informs the agent of their wish to file a
        complaint.
        <br />- The customer provides the required identification data for
        verification.
        <br />- The customer explains their complaint in detail.
        <br />- If supporting documents are available, the agent provides the
        dedicated email for complaints so the documents can be sent.
        <br />- The agent confirms the accuracy of the registered communication
        channels with the customer. If the customer wishes to use new channels,
        they are recorded and verified.
        <br />
        <br />
        Via Website:
        <br />- The customer selects the “Support &amp; Assistance” option.
        <br />- The customer fills in all required fields and mandatory
        information.
        <br />- The customer explains their complaint in detail in the
        designated field.
        <br />- The customer clicks “Submit” to send the complaint.
        <br />
        <br />
        Via Email:
        <br />- The customer provides all required identification data in the
        email.
        <br />- The customer explains their complaint in detail.
        <br />- The customer attaches all supporting documents with the email.
        <br />
        <br />
        Via Mobile Applications:
        <br />- The customer selects the “Contact Us” option.
        <br />- The customer fills in all required fields and mandatory
        information.
        <br />- The customer explains their complaint in detail in the
        designated field.
        <br />- The customer clicks “Submit” to send the complaint.
        <br />
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          For more details, click here.
        </a>
      </>
    ),
  },
];

const faqItemsAr: FAQItem[] = [
  {
    question: "ما هي خدمة جو باي؟",
    answer:
      "هي بوابة دفع إلكترونية مقدمة من شركة الحلول المالية المتكاملة، وتوفر خدمات إصدار الفواتير والتحصيل عبر نظام سداد للدفع.",
  },
  {
    question: "هل جو باي مرخصة من البنك المركزي السعودي؟",
    answer:
      "نعم، جو باي إحدى الخدمات المقدمة من شركة الحلول المالية المتكاملة، والمرخصة من البنك المركزي السعودي (ساما) لتقديمها للفئات المستهدفة في السوق السعودي.",
  },
  {
    question: "من هو الجمهور المستهدف لجو باي؟",
    answer:
      "تستهدف جو باي جميع الأعمال بمختلف أحجامها وقطاعاتها داخل السوق السعودي.",
  },
  {
    question: "ما الفرق بين المفوتر والعميل؟",
    answer: `المفوتر: هو المنشأة أو التاجر أو مقدم الخدمة الذي يصدر الفواتير والمطالبات المالية ويجمع المدفوعات من العملاء عبر قنوات الدفع الإلكترونية المتاحة في السوق السعودي.  

العميل: هو المستخدم النهائي الذي يتلقى الخدمة أو المنتج من المفوتر، ويسدد الفواتير والمطالبات المالية من خلال قنوات الدفع الإلكترونية المتاحة في السوق السعودي.`,
  },
  {
    question: 'ما هو نظام الدفع "سداد"؟',
    answer: (
      <>
        هو نظام مركزي لعرض الفواتير وتسديدها عبر الشبكة المصرفية المحلية. قام
        البنك المركزي السعودي بتطوير بنيته التحتية لتمكين المنشآت من إصدار
        الفواتير والمطالبات المالية وربطها بالأنظمة البنكية، مما يتيح للعملاء
        دفع وتسوية المستحقات.
        <br />
        <a
          href="https://gopay.sa/sadad/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block"
        >
          للمزيد من المساعدة، اضغط هنا
        </a>
      </>
    ),
  },
  {
    question:
      "هل تقتصر خدمة جو باي على الدفع عبر نظام سداد فقط، أم تدعم قنوات دفع إلكترونية أخرى؟",
    answer:
      "تتخصص جو باي في تقديم خدمات الدفع عبر نظام سداد، ومع ذلك يمكنها توفير قنوات دفع إلكترونية أخرى عند تقديم طلب منفصل يحدد فيه العميل أنواع خدمات الدفع المطلوبة لدمجها مع النظام.",
  },
  {
    question: "ما هي مميزات خدمة جو باي؟",
    answer: (
      <>
        يمكنك الاطلاع على مميزات الخدمة عبر الرابط
        <br />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block"
        >
          اضغط هنا
        </a>
        .
      </>
    ),
  },
  {
    question: "كيف يمكنني استخدام خدمة جو باي؟",
    answer: (
      <>
        يمكنك استخدام جو باي بفتح حساب مدفوعات والاشتراك في الخدمة.
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          لمعرفة المزيد حول كيفية الانضمام، اضغط هنا.
        </a>
      </>
    ),
  },
  {
    question: "ما المستندات المطلوبة للحصول على خدمة جو باي؟",
    answer: (
      <ol className="space-y-0!">
        <li>
          نسخة من خطاب التفويض – للمساعدة والمزيد من التفاصيل،{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            اضغط هنا.
          </a>
        </li>
        <li>نسخة من هوية الشخص المخول.</li>
        <li>
          نسخة من السجل التجاري للمنشأة – للمساعدة والمزيد من التفاصيل،{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            اضغط هنا.
          </a>
        </li>
        <li>
          نسخة من العنوان الوطني – للمساعدة والمزيد من التفاصيل،{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            اضغط هنا.
          </a>
        </li>
        <li>
          نسخة من شهادة البنك – للمساعدة والمزيد من التفاصيل،
          <a href="#" target="_blank" rel="noopener noreferrer">
            اضغط هنا.
          </a>
        </li>
      </ol>
    ),
  },
  {
    question: "هل تتطلب خدمة جو باي أي إعداد أو تركيب برمجي على خوادم الشركة؟",
    answer:
      "لا تحتاج سوى إلى فتح حساب مدفوعات والاشتراك في الخدمة لاستخدام جو باي.",
  },
  {
    question: "كيف يمكن إجراء المعاملات عبر جو باي؟",
    answer: (
      <div className="space-y-2">
        <p>يمكن تنفيذ المعاملات عبر جو باي من خلال إحدى الطريقتين التاليتين:</p>
        <p>- عبر بوابة الخدمة (الموقع الإلكتروني) باستخدام بيانات الدخول.</p>
        <p>
          - من خلال التكامل الإلكتروني (واجهات برمجة التطبيقات) بين نظام جو باي
          ونظام الشركة.
        </p>
      </div>
    ),
  },
  {
    question: "كيف تعمل جو باي في تحصيل المدفوعات والمطالبات المالية؟",
    answer: (
      <>
        يمكنك التعرف على آلية تحصيل المدفوعات عبر الرابط
        <br />
        <a href="#" className="mt-2 inline-block">
          اضغط هنا.
        </a>
      </>
    ),
  },
  {
    question: "ما آلية تسعير خدمة جو باي؟",
    answer: (
      <>
        يمكنك التعرف على آلية التسعير عبر الرابط
        <br />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block"
        >
          اضغط هنا.
        </a>
      </>
    ),
  },
  {
    question: "هل يمكن تكامل جو باي مباشرة مع نظام الشركة الداخلي؟",
    answer:
      "نعم، توفر جو باي تكاملًا إلكترونيًا (واجهات برمجة التطبيقات) بين نظام جو باي ونظام الشركة.",
  },
  {
    question: "ما اللغات التي يدعمها نظام جو باي؟",
    answer: "يدعم نظام جو باي اللغتين العربية والإنجليزية.",
  },
  {
    question: "هل تعمل جو باي على مدار الأسبوع؟",
    answer:
      "نعم، تعمل جو باي طوال الأسبوع، لكن تتم تسوية وتحويل المبالغ خلال أيام وساعات العمل الرسمية (من الأحد إلى الخميس).",
  },
  {
    question: "هل يشترط وجود سجل تجاري أو رخصة عمل حر للحصول على الخدمة؟",
    answer:
      "نعم، يلزم تقديم مستندات تعريف المنشأة (السجل التجاري، الترخيص، القرار الوزاري، رخصة العمل الحر، وغيرها) لفتح حساب جو باي.",
  },
  {
    question:
      "هل يتم إشعار العملاء بالفواتير أو المطالبات المالية عبر الرسائل النصية؟",
    answer:
      "نعم، يتم إخطار العملاء بالفواتير والمطالبات المالية عبر خدمة الرسائل النصية القصيرة.",
  },
  {
    question: "هل تتوفر بيئة تجريبية لاختبار خدمات جو باي؟",
    answer:
      "نعم، توفر جو باي بيئة تجريبية للتكامل الإلكتروني (واجهات برمجة التطبيقات) للمنشآت الراغبة، مما يسمح بإجراء التكامل واختبار العمليات قبل تفعيلها فعليًا.",
  },
  {
    question: "هل توفر جو باي إمكانية إصدار فواتير متكررة؟",
    answer:
      "نعم، تتيح جو باي للمنشآت إصدار فواتير متكررة لعملائها بطريقة مبتكرة تساعد على إدارة الفوترة والتحصيل بكفاءة.",
  },
  {
    question: "ما الفرق بين الفواتير لمرة واحدة والفواتير المتكررة؟",
    answer: `فاتورة لمرة واحدة:
هي فواتير أو مطالبات مالية تصدر برقم سداد متغير يستخدم مرة واحدة فقط، وينتهي صلاحية الرقم بعد سداد الفاتورة. (أمثلة: فواتير “شراء السلع” مثل السيارات ومواد البناء والأثاث وغيرها.)

فاتورة متكررة:
هي فواتير أو مطالبات مالية تصدر برقم سداد ثابت يخصصه المفوتر للعميل، مما يتيح للعميل تسجيل الرقم في حسابه البنكي للاطلاع المنتظم وتسوية المبالغ المستحقة. (أمثلة: فواتير “الخدمات والاشتراكات” مثل الكهرباء والمياه والاتصالات وغيرها.)`,
  },
  {
    question:
      "إذا سدد العميل جزءًا من الفاتورة، هل يُرحَّل المبلغ المتبقي إلى الفاتورة التالية؟",
    answer: `في الفواتير لمرة واحدة:
يبقى المبلغ غير المسدد تحت نفس رقم سداد حتى تُسدد الفاتورة بالكامل.

في الفواتير المتكررة:
يتراكم المبلغ المتبقي تحت رقم سداد الخاص بالعميل كرصيد مدين أو دائن بناءً على الفواتير المستحقة والمبالغ المدفوعة.`,
  },
  {
    question: "كم يستغرق تحويل المبالغ المحصلة إلى حساب الشركة البنكي؟",
    answer:
      "تقوم جو باي بتسوية وتحويل المبالغ المحصلة إلى حساب الشركة البنكي خلال يوم عمل واحد بعد استلام الدفع من نظام سداد (قد تختلف مدة التسوية حسب طبيعة النشاط والترتيبات التعاقدية مع الشركة).",
  },
  {
    question: "هل تسمح جو باي بالسداد الجزئي للعملاء؟",
    answer:
      "نعم، توفر جو باي خيار السداد الجزئي للفواتير والمطالبات، ويمكن للمنشأة تحديد الحد الأدنى للمبلغ المسموح بسداده.",
  },
  {
    question: "كيف يمكن للعميل معرفة الرصيد المتبقي عند السداد الجزئي؟",
    answer:
      "يمكن للعميل مراجعة الفاتورة أو رابط السداد المرسل من المنشأة للاطلاع على جميع الفواتير المستحقة والمدفوعة، كما يمكنه تحميل تطبيق جو باي للاطلاع على معلومات الحساب.",
  },
  {
    question: "هل يظهر اسم الشركة في حساب العميل البنكي عند البحث برقم سداد؟",
    answer:
      "لا، يظهر اسم الشركة فقط في الرسائل النصية والبريد الإلكتروني المرسل للعميل. ويمكن للعميل مطابقة مبلغ الفاتورة مع المبلغ الظاهر في حسابه عند البحث برقم سداد.",
  },
  {
    question:
      "كيف يمكن للشركة الاطلاع على تفاصيل المبالغ المودعة في حسابها البنكي؟",
    answer:
      "تزود جو باي الشركة بتقارير تسوية يومية تتضمن تفاصيل المبالغ المودعة والرسوم والضرائب المقتطعة.",
  },
  {
    question: "لماذا تعتبر جو باي خدمة آمنة؟",
    answer:
      "تدير جو باي المدفوعات والتحصيلات من خلال قنوات مصرفية آمنة وتحت إشراف البنك المركزي السعودي. يجمع نظام سداد المدفوعات في حساب مركزي، ثم تحول جو باي المبالغ مباشرة إلى حسابات الشركات البنكية.",
  },
  {
    question: "ما المبالغ التي تُستقطع من المدفوعات التي تجمعها المنشأة؟",
    answer: `تستقطع جو باي رسوم الخدمة مع ضريبة القيمة المضافة لكل معاملة يتم تنفيذها، بالإضافة إلى رسوم التحويل عبر نظام سريع إذا كان حساب الشركة البنكي خارج بنك الرياض. 
(يتم تجميع جميع المعاملات المنفذة في نهاية كل يوم وتحويلها دفعة واحدة إلى حساب الشركة.)`,
  },
  {
    question: "هل يوجد دليل تقني للتكامل مع جو باي؟",
    answer:
      "نعم، توفر جو باي دليلًا تقنيًا متكاملًا للتكامل الإلكتروني المباشر مع الخدمة.",
  },
  {
    question: "ما الخطوات المطلوبة للتكامل الإلكتروني المباشر مع جو باي؟",
    answer: `فتح حساب مدفوعات والاشتراك في الخدمة.

اختيار الخدمات والميزات المطلوبة للتكامل المباشر.

سداد رسوم خدمة التكامل الإلكتروني.

الحصول على بيانات الدخول إلى بيئة الاختبار لبدء التكامل.

توفير رابط مخصص من منصة المنشأة لاستقبال إشعارات الدفع.

تطبيق معايير الأمان لاستقبال إشعارات الدفع (التوقيع الرقمي).

إجراء الاختبارات للتأكد من معالجة المدفوعات بشكل صحيح.

الانتقال إلى بيئة الإنتاج الفعلية لاستقبال المدفوعات من نظام سداد.`,
  },
  {
    question: "هل توفر جو باي واجهة رسومية للمفوترين؟",
    answer:
      "نعم، توفر جو باي واجهة مستخدم رسومية تمكّن المفوترين من إنشاء المطالبات وإدارتها، بالإضافة إلى الوصول إلى تقارير مفصلة عن المدفوعات والمطالبات.",
  },
  {
    question:
      "هل يمكن لجو باي تقسيم المبالغ المحصلة وتحويلها إلى عدة حسابات بنكية؟",
    answer:
      "نعم، تتيح جو باي للمنشآت إضافة عدة حسابات بنكية بحيث يتم تحويل المبالغ المجمعة وإيداعها وفق الإعدادات المحددة عند تسجيل الخدمة.",
  },
  {
    question:
      "هل يمكن للمنشأة إصدار الفواتير وتحصيل المدفوعات عبر سداد، مع استخدام خدمات سداد الأخرى دون تكامل إلكتروني مباشر؟",
    answer:
      "نعم، بمجرد فتح حساب مدفوعات مع جو باي، يمكن للمنشأة إصدار الفواتير وتحصيل المدفوعات عبر نظام سداد والاستفادة من باقي الخدمات دون الحاجة إلى التكامل الإلكتروني المباشر مع سداد.",
  },
  {
    question: "هل توفر جو باي فاتورة ضريبية لرسوم المعاملات؟",
    answer: "نعم، تصدر جو باي فواتير ضريبية للرسوم وترسلها للمنشآت كل شهرين.",
  },
  {
    question:
      "هل يمكن لجو باي جدولة المدفوعات بحيث يُصدِر النظام الفاتورة أو المطالبة تلقائيًا عند الاستحقاق؟",
    answer:
      "نعم، توفر جو باي تقنية لإصدار الفواتير والمطالبات تلقائيًا عند حلول تاريخ الاستحقاق.",
  },
  {
    question: "هل يمكن تغيير رقم سداد ليتطابق مع أرقام عقود الشركة؟",
    answer:
      "لا، لا يمكن تغيير رقم سداد. ومع ذلك توفر جو باي حلولًا بديلة تمكّن الشركة من ربط رقم سداد برقم العقد لتسهيل تتبع جميع العمليات التي يولدها النظام.",
  },
  {
    question: "إذا سجل العميل رقم سداد في حسابه البنكي، هل سيظهر في بنوك أخرى؟",
    answer:
      "إذا أصدرت الشركة الفاتورة أو المطالبة وأرفقت بيانات هوية العميل، فقد تتعرف بعض البنوك التي تدعم هذه الميزة على الرقم.",
  },
  {
    question:
      "إذا تم التكامل الإلكتروني بين جو باي ونظام الشركة، هل ستنعكس جميع البيانات المدخلة في نظام الشركة تلقائيًا في جو باي؟",
    answer:
      "نعم، تعكس جو باي وتحدّث جميع العمليات المرسلة من نظام الشركة تلقائيًا، مع مزامنة قاعدة بياناتها مع المعلومات والأوامر المستلمة.",
  },
  {
    question:
      "هل يستطيع عميل الشركة سداد الفواتير والمطالبات دون التسجيل في جو باي؟",
    answer: (
      <>
        نعم، يمكن للعميل سداد الفواتير والمطالبات دون التسجيل في الخدمة. تصدر
        الشركة الفاتورة أو المطالبة، وتقوم جو باي بإرسال تفاصيل الفاتورة ورقم
        سداد إلى رقم جوال العميل أو بريده الإلكتروني للتسوية.
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          للمزيد من التفاصيل، اضغط هنا.
        </a>
      </>
    ),
  },
  {
    question: "كيف يتم تقديم شكوى؟",
    answer: (
      <>
        يمكن للعملاء تقديم شكاواهم عبر إحدى القنوات التالية:
        <br />
        <br />
        - الرقم المجاني
        <br />- الموقع الإلكتروني
        <br />- البريد الإلكتروني
        <br />- تطبيقات الجوال
        <br />
        <br />
        خطوات تقديم الشكوى:
        <br />
        <br />
        عبر الهاتف المجاني:
        <br />- إبلاغ الموظف بالرغبة في تقديم شكوى.
        <br />- تزويد الموظف ببيانات التعريف المطلوبة للتحقق.
        <br />- شرح تفاصيل الشكوى.
        <br />- في حال وجود مستندات داعمة، يزوّد الموظف العميل بالبريد المخصص
        للشكوى.
        <br />- التأكد من صحة قنوات الاتصال المسجلة وتحديثها عند الحاجة.
        <br />
        <br />
        عبر الموقع الإلكتروني:
        <br />- اختيار خيار &quot;الدعم والمساعدة&quot;.
        <br />- تعبئة الحقول اللازمة والالتزام بالبيانات المطلوبة.
        <br />- شرح تفاصيل الشكوى في الحقل المخصص.
        <br />- الضغط على &quot;إرسال&quot; لإكمال الطلب.
        <br />
        <br />
        عبر البريد الإلكتروني:
        <br />- إدراج بيانات التعريف اللازمة في البريد.
        <br />- توضيح تفاصيل الشكوى.
        <br />- إرفاق جميع المستندات الداعمة.
        <br />
        <br />
        عبر تطبيقات الجوال:
        <br />- اختيار خيار &quot;اتصل بنا&quot;.
        <br />- تعبئة الحقول المطلوبة.
        <br />- شرح الشكوى في الحقل المخصص.
        <br />- الضغط على &quot;إرسال&quot; لتقديم الشكوى.
        <br />
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          للمزيد من التفاصيل، اضغط هنا.
        </a>
      </>
    ),
  },
];

export function buildFaqItems(locale: string): FAQItem[] {
  return locale === "ar" ? faqItemsAr : faqItemsEn;
}

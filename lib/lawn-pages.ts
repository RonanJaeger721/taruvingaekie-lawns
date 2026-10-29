export type LawnPage = {
  title: string; description: string; eyebrow: string; heading: string; accent: string;
  intro: string; image: string; imageAlt: string; imageLabel: string;
  facts: string[]; lawn?: "durban" | "kikuyu"; price?: number;
  sections: { title: string; paragraphs: string[]; list?: string[] }[];
  questions: { question: string; answer: string }[];
};

export const lawnPages: Record<string, LawnPage> = {
  "durban-lawn": {
    title: "Durban Lawn for Sale in Harare — US$4/m²",
    description: "Buy dense, lush Durban instant lawn from Ekie Gardens in Harare at US$4/m². Delivery and installation included nationwide. Get a quote for your space.",
    eyebrow: "Durban instant lawn · Harare, Zimbabwe", heading: "A fuller lawn.", accent: "A fresh outlook.",
    intro: "Durban lawn is our dense, lush option for a full green finish. We supply it from Ekie Gardens at Plot 10 Amalinda Farm, Harare, for home gardens and larger grounds across Zimbabwe.",
    image: "durban-field-upscaled.webp", imageAlt: "Durban instant lawn growing at Ekie Gardens in Harare", imageLabel: "Durban lawn / from our field", lawn: "durban", price: 4,
    facts: ["US$4 per m²", "Nationwide delivery & installation included", "Farm collection in Harare"],
    sections: [
      { title: "Where Durban fits", paragraphs: ["Choose Durban when a dense, lush appearance is a priority. We offer it for premium home gardens, hospital and institutional landscapes, football pitches and other grounds.", "The right choice depends on the actual space, its use and your budget. Tell our team about your project before ordering so we can discuss whether Durban or Kikuyu is the better fit. Lawn supply is not a sports-ground design or performance certification."] },
      { title: "How much does Durban lawn cost?", paragraphs: ["The published price is US$4 per square metre, including nationwide delivery and installation. A 100 m² area gives a planning estimate of US$400; 250 m² gives US$1,000.", "Use the lawn calculator to enter your area, or multiply length by width for a rectangular space. Estimates are a starting point: our team confirms the measurements, availability and final quote."], list: ["Measure the actual area you want covered, not the whole property.", "Share your town and delivery location.", "Tell us whether this is a home garden, institutional landscape or larger ground."] },
      { title: "From Amalinda Farm to your project", paragraphs: ["We supply Durban lawn with delivery and installation across Zimbabwe. Collection is also available at Plot 10 Amalinda Farm, Harare; call ahead for availability and entrance directions.", "For a large order, send the total square metres and project location. We will discuss supply arrangements and scheduling directly. Do not rely on a website estimate as an order confirmation."] },
    ],
    questions: [
      { question: "Is Durban lawn US$4 per roll or per square metre?", answer: "The published price is US$4 per square metre (m²), not per roll. Delivery and installation are included nationwide." },
      { question: "Can I buy Durban lawn outside Harare?", answer: "Yes. Ekie Gardens offers nationwide delivery and installation in Zimbabwe. Send your location and required area to confirm the arrangements." },
      { question: "Can I compare Durban with a cheaper lawn?", answer: "Yes. Kikuyu costs US$2/m² and is our hard-wearing, fast-growing option. Compare the two prices in the calculator and ask our team about your space." },
    ],
  },
  "kikuyu-lawn": {
    title: "Kikuyu Lawn for Sale in Harare — US$2/m²",
    description: "Kikuyu instant lawn at US$2/m² from Ekie Gardens, Harare. Hard-wearing, fast-growing lawn for home gardens, with nationwide delivery and installation included.",
    eyebrow: "Kikuyu instant lawn · Harare, Zimbabwe", heading: "Room to play.", accent: "Room to grow.",
    intro: "Kikuyu is our hard-wearing, fast-growing lawn for everyday home gardens and busy yards. At US$2/m², it is a budget-friendly way to bring more green into your outdoor space.",
    image: "kikuyu-field-upscaled.webp", imageAlt: "Kikuyu lawn field at Ekie Gardens, Harare", imageLabel: "Kikuyu lawn / growing at the farm", lawn: "kikuyu", price: 2,
    facts: ["US$2 per m²", "Hard-wearing & fast-growing", "Delivery & installation included nationwide"],
    sections: [
      { title: "A practical choice for family yards", paragraphs: ["Consider Kikuyu for a home garden or outdoor space that gets plenty of use. It is the lower-priced of our two varieties, while Durban is the dense, lush option at US$4/m².", "Price alone is not the whole decision. Describe how you intend to use your garden and ask about your site conditions before choosing. Our team can discuss your requirements without assuming every lawn suits every property."] },
      { title: "Plan your Kikuyu lawn budget", paragraphs: ["Kikuyu lawn costs US$2 per square metre, with delivery and installation included nationwide. For example, 100 m² gives a planning estimate of US$200, while 250 m² gives US$500.", "For a rectangular garden, multiply its length in metres by its width in metres. For an irregular space, measure smaller rectangles and add them together. Leave out areas you do not want lawned."], list: ["Use square metres (m²), not metres along a boundary.", "Enter your area in the website calculator to compare lawn options.", "Send your location and measurements to receive a confirmed quote."] },
      { title: "Order, delivery or collection", paragraphs: ["Ekie Gardens is based at Plot 10 Amalinda Farm, Harare, and supplies Kikuyu lawn across Zimbabwe. Home gardens and bulk orders are both welcome.", "Call or WhatsApp before collecting at the farm. For delivery, share the project location and required area so we can confirm availability, access and scheduling. Your final arrangements are agreed with our team."] },
    ],
    questions: [
      { question: "What is the price of Kikuyu lawn in Zimbabwe?", answer: "Ekie Gardens supplies Kikuyu lawn at US$2/m², including delivery and installation nationwide. Send your location and area for a confirmed quote." },
      { question: "Is Kikuyu available for bulk orders?", answer: "Yes. We supply Kikuyu for home gardens as well as larger projects and bulk orders. Share your total area and location with our team." },
      { question: "Does the US$2/m² price include installation?", answer: "Yes. Nationwide delivery and installation are included in the supplied price. Please discuss your site's requirements when requesting your quote." },
    ],
  },
  "bulk-lawn-supply": {
    title: "Bulk Lawn Supply in Zimbabwe — Durban & Kikuyu",
    description: "Bulk Durban and Kikuyu lawn supply for large grounds, institutions and developments across Zimbabwe. Harare farm collection; nationwide delivery and installation.",
    eyebrow: "Major lawn supply · Across Zimbabwe", heading: "Big plans.", accent: "More green.",
    intro: "From a larger landscape to an institutional ground, Ekie Gardens supplies Durban and Kikuyu lawn for projects that go beyond the garden gate. Start with your total area and location; we will discuss the supply around your project.",
    image: "bulk-delivery-upscaled.webp", imageAlt: "A large truck loaded with lawn for bulk supply from the farm", imageLabel: "Lawn supply / projects of scale",
    facts: ["Durban US$4/m² · Kikuyu US$2/m²", "Large grounds & developments", "Nationwide delivery & installation"],
    sections: [
      { title: "Supply for larger landscapes", paragraphs: ["We welcome enquiries for hospital and institutional grounds, commercial landscapes, developments and other large lawn projects. Durban and Kikuyu give you two different price points to discuss with your project team.", "Durban is the dense, lush option at US$4/m². Kikuyu is hard-wearing and fast-growing at US$2/m². The published prices include nationwide delivery and installation; a bulk enquiry does not imply an additional discount or a guaranteed volume in stock."] },
      { title: "Prepare a useful bulk enquiry", paragraphs: ["Clear measurements help us understand the scale of your order. Separate the lawned areas from roads, buildings, paved spaces and planting beds. If the project has several areas, send each measurement as well as the total."], list: ["Total square metres required and preferred lawn variety.", "Town, project location and delivery access details.", "How the grounds will be used.", "Your preferred timing, for our team to discuss and confirm."] },
      { title: "Agree the plan before work starts", paragraphs: ["Our team confirms lawn availability, measurements, supply arrangements and the final quotation directly. Send photographs of the area if they help explain the project, and discuss any site-preparation requirements before agreeing the work.", "Collection is available at Plot 10 Amalinda Farm, Harare. Call ahead for availability and directions, especially when arranging transport for a larger order. Delivery scheduling is confirmed with the team, not automatically booked by the calculator."] },
    ],
    questions: [
      { question: "Do you supply lawn outside Harare?", answer: "Yes. Our service includes nationwide delivery and installation in Zimbabwe. Share the project location and total required area to discuss your order." },
      { question: "Is there a minimum bulk order or a wholesale discount?", answer: "No minimum quantity or additional bulk discount has been published on this site. Ask our team about your required area and request a confirmed quote." },
      { question: "How do I estimate a large lawn order?", answer: "Measure the areas to be covered in square metres, add the separate sections, then use US$4/m² for Durban or US$2/m² for Kikuyu as a planning estimate. Our team confirms the final measurements and quote." },
    ],
  },
  "lawn-delivery-installation-zimbabwe": {
    title: "Lawn Delivery & Installation in Zimbabwe",
    description: "Arrange nationwide instant lawn delivery and installation with Ekie Gardens. Durban US$4/m², Kikuyu US$2/m². Collection at Plot 10 Amalinda Farm, Harare.",
    eyebrow: "Farm to your space · Zimbabwe", heading: "Your new lawn.", accent: "A clear next step.",
    intro: "Ekie Gardens supplies instant lawn from Harare with delivery and installation included nationwide. Choose Durban or Kikuyu, share your measurements and location, and agree the details with our team before your order goes ahead.",
    image: "ekie-truck.jpeg", imageAlt: "Ekie Gardens branded lawn supply truck at the farm", imageLabel: "Ekie Gardens / from our farm to your space",
    facts: ["Delivery & installation included", "Durban US$4/m² · Kikuyu US$2/m²", "Collection at Amalinda Farm, Harare"],
    sections: [
      { title: "What the published price includes", paragraphs: ["Our supplied prices are US$4/m² for Durban lawn and US$2/m² for Kikuyu lawn. Delivery and installation are included nationwide in Zimbabwe.", "Tell us about the actual site, its access and the area to be covered. Discuss the ground condition and any preparation needed with our team; do not assume additional earthworks, irrigation or ongoing maintenance are included. The final scope and quotation are confirmed directly."] },
      { title: "Measure your space before requesting a quote", paragraphs: ["For a rectangle, measure the length and width in metres and multiply them together. A 10 m by 8 m garden is 80 m²: a planning estimate of US$320 for Durban or US$160 for Kikuyu.", "For an irregular garden, divide it into smaller rectangles, add their areas, and leave out paths and other spaces you do not want covered. If you are unsure, send what you have measured and ask the team for guidance."], list: ["Choose Durban or Kikuyu, or ask us to help you compare.", "Send your location and measurements in m².", "Discuss site requirements, availability and timing.", "Confirm the final quotation and arrangements with our team."] },
      { title: "Prefer to collect at the farm?", paragraphs: ["Collection is available at Plot 10 Amalinda Farm, Harare. Please call or WhatsApp before travelling so we can confirm availability and explain how to reach the collection point.", "The map on our contact page searches the supplied address. The exact farm entrance has not been pinned on this website, so confirm entrance directions with the team rather than relying on the search marker alone."] },
    ],
    questions: [
      { question: "How soon can my lawn be delivered?", answer: "Contact our team with your location, lawn choice and required area to discuss availability and scheduling. This website does not promise a fixed delivery time." },
      { question: "Is ground preparation included?", answer: "Delivery and installation are included in the published lawn prices. Ground preparation, site conditions and any additional work must be discussed and confirmed with the team." },
      { question: "How can I contact Ekie Gardens?", answer: "Call or WhatsApp 077 271 1588 or 071 971 1588. Include your town, the area in square metres and your preferred lawn variety for a useful quote enquiry." },
    ],
  },
};

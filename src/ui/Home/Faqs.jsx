import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useGetFaqs } from "../../hooks/useGetFaqs";
import SectionHeader from "./SectionHeader";

export default function Faqs() {
  const { t } = useTranslation();
  const { faqs } = useGetFaqs();

  return (
    <section className="faqs_section">
      <div className="container">
        <div className="row">
          <SectionHeader title={t("faqTitle")} subTitle={t("faqSubTitle")} />
          <div className="col-lg-6 col-12 p-2">
            <Accordion defaultActiveKey={0} data-aos="fade-up">
              {faqs?.map((faqItem, index) => (
                <Accordion.Item eventKey={index} key={faqItem?.id}>
                  <Accordion.Header as={"h2"}>
                    {faqItem?.question}
                  </Accordion.Header>
                  <Accordion.Body>{faqItem?.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div className="col-lg-6 col-12 p-2">
            <div className="faq_side_content text-center">
              <img
                src="/images/faq.svg"
                alt="الأسئلة الشائعة"
                data-aos="zoom-in"
              />
              <h4 data-aos="fade-up">{t("haveAnotherQuestion")}</h4>
              <p data-aos="fade-up">{t("haveAnotherQuestionSub")}</p>
              <div data-aos="fade-up">
                <Link to="/contact">{t("contact")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

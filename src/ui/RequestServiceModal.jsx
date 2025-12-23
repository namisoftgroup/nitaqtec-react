import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useGetWhatYouNeed } from "../hooks/useGetWhatYouNeed";
import { useGetIdeaDetails } from "../hooks/UseGetIdeaDetails";
import { toast } from "sonner";
import { InputField } from "./InputField";
import axiosInstance from "../utils/axios";

export default function RequestServiceModal({ show, setShow }) {
  const { t } = useTranslation();
  const { whatYouNeed } = useGetWhatYouNeed();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);

  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    date_time: "",
    type: "",
    status: "yes",
    why: "",
    contact: "",
    what_you_need_idea_id: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const { ideas } = useGetIdeaDetails(formData.what_you_need_idea_id);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIdeaSelect = (ideaId) => {
    setFormData((prev) => ({ ...prev, what_you_need_idea_id: ideaId }));
    setSelectedIdea(ideas.find((idea) => idea.id === +ideaId));
  };

  const contactMethods = {
    phone: () => (
      <InputField
        label="phoneNumber"
        type="tel"
        name="phone"
        value={formData.phone}
        placeholder="enterPhoneNumber"
        onChange={handleChange}
        required
      />
    ),
    whats: () => (
      <InputField
        label="whatsNumber"
        type="tel"
        name="phone"
        value={formData.phone}
        placeholder="enterWhatsNumber"
        onChange={handleChange}
        required
      />
    ),
    booking: () => (
      <>
        <InputField
          label="phoneNumber"
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="enterPhoneNumber"
          onChange={handleChange}
          required
        />
        <InputField
          label="meetingTime"
          type="datetime-local"
          name="date_time"
          value={formData.date_time}
          onChange={handleChange}
          required
        />
      </>
    ),
    meet: () => (
      <>
        <InputField
          label="email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="enterEmail"
          onChange={handleChange}
          required
        />
        <InputField
          label="meetingTime"
          type="datetime-local"
          name="date_time"
          value={formData.date_time}
          onChange={handleChange}
          required
        />
      </>
    ),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("create_order", formData);
      if (res.data.code === 200) {
        toast.success(t("sucessMessage"));
        setShow(false);
        setFormData(initialFormData);
      }
    } catch (error) {
      console.log(error);

      toast.error(t("errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  const handleValidateAndNext = () => {
    if (formData.type && formData.what_you_need_idea_id && selectedIdea) {
      setStep(2);
    } else {
      toast.warning(t("fillAllFields"));
    }
  };

  return (
    <Modal
      centered
      show={show}
      backdrop="static"
      size="lg"
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {step !== 1 && (
            <button className="back-button" onClick={() => setStep(1)}>
              <i className="fa-regular fa-angle-left fs-6" />
            </button>
          )}
          {t("whatDoYouWant")}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <InputField
                label="chooseProjectType"
                type="select"
                name="type"
                value={formData.type}
                onChange={handleChange}
                options={[
                  { value: "public", label: t("public") },
                  { value: "private", label: t("private") },
                ]}
                required
              />

              <h6>{t("whatDoYouNeed")}</h6>
              <div className="ideas">
                {whatYouNeed?.map((idea) => (
                  <label key={idea.id} className="idea">
                    <input
                      type="radio"
                      name="what_you_need_idea_id"
                      value={idea.id}
                      checked={formData.what_you_need_idea_id === idea.id}
                      onChange={() => handleIdeaSelect(idea.id)}
                    />
                    <span>{idea.title}</span>
                  </label>
                ))}
              </div>

              <InputField
                label="chooseProjectidea"
                type="select"
                name="idea"
                value={selectedIdea?.id || ""}
                onChange={(e) =>
                  setSelectedIdea(
                    ideas.find((idea) => idea.id === +e.target.value)
                  )
                }
                options={ideas?.map((idea) => ({
                  value: idea.id,
                  label: idea.name,
                }))}
              />

              <button
                type="button"
                className="btn"
                onClick={handleValidateAndNext}
              >
                {t("next")}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              {selectedIdea && (
                <div className="price-info">
                  <h4>
                    {t("priceDesc")} {selectedIdea.name}:{" "}
                    <span>
                      {formData.type === "public"
                        ? selectedIdea.public_price
                        : selectedIdea.private_price}{" "}
                      {t("sar")}
                    </span>
                  </h4>
                  <p>
                    {formData.type === "public"
                      ? selectedIdea.public_info
                      : selectedIdea.private_info}
                  </p>
                </div>
              )}

              <div className="price-suitability">
                <h6>{t("isPriceSuitable")}</h6>
                <div className="d-flex gap-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="idea">
                      <input
                        type="radio"
                        name="status"
                        value={option}
                        checked={formData.status === option}
                        onChange={handleChange}
                      />
                      <span>
                        {t(option === "yes" ? "suitable" : "unSuitable")}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.status === "no" ? (
                <>
                  <InputField
                    label="fullName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="phoneNumber"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="why"
                    type="textarea"
                    name="why"
                    value={formData.why}
                    onChange={handleChange}
                    required
                  />
                </>
              ) : (
                <>
                  <InputField
                    label="fullName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="contactType"
                    type="select"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    options={[
                      { value: "phone", label: t("phone") },
                      { value: "whats", label: t("whats") },
                      { value: "booking", label: t("booking") },
                      { value: "meet", label: t("meet") },
                    ]}
                    required
                  />
                  {formData.contact && contactMethods[formData.contact]()}
                </>
              )}

              <button type="submit" disabled={loading}>
                {t("send")}
                {loading && (
                  <i className="fa-duotone fa-regular fa-circle-notch fa-spin ml-2" />
                )}
              </button>
            </>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
}

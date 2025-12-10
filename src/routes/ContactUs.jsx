import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useGetServices } from "../hooks/services/useGetServices";
import { useGetSettings } from "./../hooks/useGetSettings";
import axiosInstance from "../utils/axios";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const { services } = useGetServices();
  const { settings } = useGetSettings();
  const [loading, setLoading] = useState();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contact_type: "",
    service_id: "",
  });
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("contacts", formData);
      if (res.data.code === 200) {
        toast.success(t("sucessMessage"));
      }
    } catch (error) {
      console.log(error);
      toast.error("Some Thing Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <div className="contact_info">
                <span>{t("keepInTouch")}</span>
                <h2>{t("contactTitle")}</h2>
                <div className="blocks">
                  <div className="block">
                    <h6>{t("callCenter")}</h6>
                    <a href={`tel:${settings?.phone}`}>{settings?.phone}</a>
                  </div>
                  <div className="block">
                    <h6>{t("ourLocation")}</h6>
                    <a
                      href="https://www.google.com/maps/place/King+Abdullah+Park/@24.6474709,46.7602933,12387m/data=!3m1!1e3!4m6!3m5!1s0x3e2f043b45575437:0xa2bebdcec14359bd!8m2!3d24.6663657!4d46.7371594!16s%2Fg%2F11c76mxsyk?entry=ttu&amp;g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      {settings?.address}
                    </a>
                  </div>
                  <div className="block">
                    <h6>{t("email")}</h6>
                    <a href={`mailto:${settings?.email}`}>{settings?.email}</a>
                  </div>
                  <div className="block">
                    <h6>{t("socialMedia")}</h6>
                    <div className="socials">
                      <Link
                        to={settings?.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        to={settings?.insta}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link
                        to={settings?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        to={settings?.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-2">
              <form onSubmit={handleSubmit}>
                <div className="input_field">
                  <label htmlFor="name">{t("fullName")}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    placeholder={t("enterFullName")}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="input_field">
                  <label htmlFor="phone">{t("phoneNumber")}</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    placeholder="9665555555"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="input_field">
                  <label htmlFor="type">{t("contactType")}</label>
                  <select
                    name="contact_type"
                    id="contact_type"
                    value={formData.contact_type}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contact_type: e.target.value,
                      }))
                    }
                  >
                    <option value="">{t("select")}</option>
                    <option value="phone">{t("phone")}</option>
                    <option value="whats">{t("whats")}</option>
                  </select>
                </div>

                <div className="input_field">
                  <label htmlFor="service_id">{t("service")}</label>
                  <select
                    name="service_id"
                    id="service_id"
                    value={formData.service_id}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        service_id: e.target.value,
                      }))
                    }
                  >
                    <option value="">{t("select")}</option>
                    {services?.map((opt) => (
                      <option value={opt?.id} key={opt?.id}>
                        {opt?.title}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  style={{ opacity: loading ? 0.7 : 1 }}
                  disabled={loading}
                >
                  {t("send")}{" "}
                  {loading ? (
                    <i className="fa-duotone fa-regular fa-circle-notch fa-spin"></i>
                  ) : null}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7535113.984671908!2d53.54736328124999!3d22.755920681486405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e25a515bcc5f541%3A0x3b01b7acbb324df8!2z2YbYrNiv!5e0!3m2!1sar!2seg!4v1738241118992!5m2!1sar!2seg"
          height="350"
          width="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

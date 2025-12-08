import { useTranslation } from "react-i18next";

export const InputField = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  required,
  options,
}) => {
  const { t } = useTranslation();

  return (
    <div className="input_field">
      <label htmlFor={name}>{t(label)}</label>
      {type === "select" ? (
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="" disabled>
            {t("select")}
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {t(option.label)}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={t(placeholder)}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

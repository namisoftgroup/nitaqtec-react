
import { useTranslation } from 'react-i18next';
import OurPartners from '../OurPartners';

export default function Partners() {
      const { t } = useTranslation();
    
  return (
    <>
    <div className="partners_section">
       <h2>{t("partnersTitle")}</h2>
            <p>{t("partnersTitleSubTitle")}</p>
       
      <OurPartners/>  

    </div>
    </>
  )
}

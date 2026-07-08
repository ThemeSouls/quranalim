import { common } from "./modules/common";
import { quran } from "./modules/quran";
import { dashboard } from "./modules/dashboard";
import { settings } from "./modules/settings";
import { aboutUs } from "./abouts/AboutUs";
import { contactUs } from "./abouts/ContactUs";
import { disclaimer } from "./abouts/Disclaimer";
import { termsAndConditions } from "./abouts/TermsAndConditions";
import { privacyPolicy } from "./abouts/PrivacyPolicy";
import { termsOfService } from "./abouts/TermsOfService";
import { mainPage } from "./abouts/mainPage";
import { home } from "./home";

export const content = {
  ...common,
  ...quran,
  ...dashboard,
  ...settings,
  home,
  abouts: {
    mainPage,
    aboutUs,
    contactUs,
    disclaimer,
    termsAndConditions,
    privacyPolicy,
    termsOfService,
  },
};

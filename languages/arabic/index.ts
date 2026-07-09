import { common } from "./common";
import { quran } from "./quran";
import { dashboard } from "./dashboard";
import { settings } from "./settings";
import { components } from "./components";
import { aboutUs, contactUs, disclaimer, termsAndConditions, privacyPolicy, termsOfService, mainPage } from "./abouts";
import { home } from "./home";

export const content = {
  ...common,
  ...quran,
  ...dashboard,
  ...settings,
  components,
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

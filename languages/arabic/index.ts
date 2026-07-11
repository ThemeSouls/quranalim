import { common } from "./common";
import { quran } from "./quran";
import { dashboard } from "./dashboard";
import { settings } from "./settings";
import { components } from "./components";
import { aboutUs, contactUs, disclaimer, termsAndConditions, privacyPolicy, termsOfService, mainPage, donate } from "./abouts";
import { home } from "./home";
import { apps } from "./apps";

export const content = {
  ...common,
  ...quran,
  ...dashboard,
  ...settings,
  components,
  home,
  apps,
  abouts: {
    mainPage,
    aboutUs,
    contactUs,
    disclaimer,
    termsAndConditions,
    privacyPolicy,
    termsOfService,
    donate,
  },
};

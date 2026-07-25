import { common } from "./common";
import { quran } from "./quran";
import { dashboard } from "./dashboard";
import { settings } from "./settings";
import { components } from "./components";
import { aboutUs, contactUs, disclaimer, termsAndConditions, privacyPolicy, termsOfService, mainPage, donate } from "./abouts";
import { userRolesData } from "./abouts-userRoles";
import { home } from "./home";
import { apps } from "./apps";
import { resources } from "./resources";
import { quranReadHome } from "./quran-read";

export const content = {
  ...common,
  ...quran,
  ...dashboard,
  ...settings,
  components,
  home,
  apps,
  resources,
  quranReadHome,
  abouts: {
    mainPage,
    aboutUs,
    contactUs,
    disclaimer,
    termsAndConditions,
    privacyPolicy,
    termsOfService,
    donate,
    userRoles: userRolesData,
  },
};

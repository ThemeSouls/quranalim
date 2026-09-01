import { common, components } from "./commons";
import { quran } from "./quran";
import { dashboard } from "./dashboard";
import { settings } from "./settings";
import { aboutUs, contactUs, disclaimer, termsAndConditions, privacyPolicy, termsOfService, mainPage, donate, userRolesData } from "./abouts";
import { home } from "./home";
import { apps } from "./apps";
import { resources } from "./resources";
import { quranReadHome } from "./quran-read";
import { apiManager } from "./api-manager";
import { authorizer } from "./authorizer";
import { maktaba } from "./maktaba";
import { driveApp } from "./drive";

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
  apiManager,
  ...apiManager,
  authorizer,
  ...authorizer,
  maktaba,
  ...maktaba,
  driveApp,
  ...driveApp,
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

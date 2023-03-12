import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VTooltip } from "vuetify/lib/components/VTooltip";

import { VContainer, VIcon } from "vuetify/lib/components";
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default createVuetify({
  // Your Vuetify options here
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components: {
    ...components,
    VTooltip,
    VIcon,
    VContainer,
  },
  directives,
});

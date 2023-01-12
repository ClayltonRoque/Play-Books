<template>
  <section class="container" style="top: 86px">
    <div class="py-5">
      <p class="has-text-base-text">Favoritos</p>
    </div>
  </section>
</template>

<script>
const customIconConfig = {
  customIconPacks: {
    fas: {
      sizes: {
        default: "",
        "is-small": "fa-xs",
        "is-medium": "fa-lg",
        "is-large": "fa-2x",
      },
    },
    ionicons: {
      sizes: {
        default: "is-size-5",
        "is-small": "",
        "is-medium": "is-size-3",
        "is-large": "is-size-1",
      },
      iconPrefix: "ion-md-",
      internalIcons: {
        check: "checkmark",
        information: "information",
        "check-circle": "checkmark-circle-outline",
        alert: "alert",
        "alert-circle": "alert",
        "arrow-up": "arrow-up",
        "chevron-right": "arrow-forward",
        "chevron-left": "arrow-back",
        "chevron-down": "arrow-down",
        eye: "eye",
        "eye-off": "eye-off",
        "menu-down": "arrow-dropdown",
        "menu-up": "arrow-dropup",
        "close-circle": "close-circle-outline",
      },
    },
    uil: {
      sizes: {
        default: "is-size-5",
        "is-small": "",
        "is-medium": "is-size-3",
        "is-large": "is-size-1",
      },
      iconPrefix: "uil-",
      internalIcons: {
        check: "check",
        information: "information",
        "check-circle": "checkmark-circle",
        alert: "exclamation",
        "alert-circle": "exclamation-circle",
        "arrow-up": "arrow-up",
        "chevron-right": "angle-right",
        "chevron-left": "angle-left",
        "chevron-down": "arrow-down",
        eye: "eye",
        "eye-off": "eye-slash",
        "menu-down": "angle-down",
        "menu-up": "angle-up",
        "close-circle": "times-circle",
      },
    },
  },
};
export default {
  created() {
    this.$buefy.config.setOptions(customIconConfig);
  },
};
</script>

<style scoped>
@import "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css";
@import "https://unicons.iconscout.com/release/v2.1.11/css/unicons.css";
</style>

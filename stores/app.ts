import { defineStore } from "pinia";
import store from "store2";

export const useStore = defineStore("app", () => {
  const isDrawerOpen = ref(false);

  const openDrawer = () => {
    isDrawerOpen.value = true;
  };
  const closeDrawer = () => {
    isDrawerOpen.value = false;
  };

  const isRightDrawerOpen = ref(false);

  const openRightDrawer = () => {
    isRightDrawerOpen.value = true;
  };
  const closeRightDrawer = () => {
    isRightDrawerOpen.value = false;
  };

  const colorMode = ref("light");

  const changeColorMode = (mode) => {
    colorMode.value = mode;
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    store("colorMode", mode);
  };

  const lang = ref("en");

  const changeLang = (language, reload = true) => {
    lang.value = language;

    if (language === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }

    store("lang", language);

    if (reload) location.reload();
  };

  type NotifyType = "success" | "error" | "alert";

  interface NotifyInterface {
    message: string;
    type: NotifyType;
  }

  const notify = ref<NotifyInterface | null>();
  const isWaitForNotify = ref(false);

  const setIsWaitForNotify = (wait: boolean) => {
    isWaitForNotify.value = wait;

    if (!wait) {
      setTimeout(() => {
        notify.value = null;
      }, 1000);
    }
  };

  const setNotify = (notification: NotifyInterface) => {
    notify.value = notification;

    if (!isWaitForNotify.value) {
      setTimeout(() => {
        notify.value = null;
      }, 2000);
    }
  };

  return {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    colorMode,
    changeColorMode,
    isRightDrawerOpen,
    openRightDrawer,
    closeRightDrawer,
    lang,
    changeLang,
    notify,
    setNotify,
    setIsWaitForNotify,
  };
});

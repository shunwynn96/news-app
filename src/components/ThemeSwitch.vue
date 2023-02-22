<template>
  <div class="switch-container">
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span><i class="fas fa-moon dark-icon"></i></span>
      <span><i class="fas fa-sun light-icon"></i></span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>

<style>

.light-icon {
  color: white;
  padding-right: 0.2rem;
}

.dark-icon {
  padding-left: 0.2rem;
}

.switch-container {
  display: flex;
  justify-content: flex-end;
  margin: 0 1rem 1rem 0;
}

.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--text-primary);
  border: var(--toggle-size) solid var(--accent-color);
  border-radius: var(--toggle-size);
  cursor: pointer;
  display: flex;
  height: calc(var(--toggle-size) * 0.55);
  position: relative;
  padding: calc(var(--toggle-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--toggle-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--bg-1);
  border-radius: 50%;
  top: calc(var(--toggle-size) * 0.07);
  left: calc(var(--toggle-size) * 0.07);
  height: calc(var(--toggle-size) * 0.4);
  width: calc(var(--toggle-size) * 0.4);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--toggle-size) * 0.47));
}

</style>
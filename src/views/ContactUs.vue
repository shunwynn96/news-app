<template>
  <div class="contact-bg">
    <div class="contact-container">
        <h2 class="contact-title">CONTACT<span> US</span></h2>
        <i class="fas fa-phone contact-icon"></i>
        <i class="fab fa-whatsapp contact-icon"></i>
        <div class="phone-container">
          <p class="phone-num">(+1) 0123456789</p>
          <p class="phone-num">(+1) 2354132512</p>
        </div>
          <p class="credits">Made By <span>Shun Wynn Kok</span></p>
          <a class="social-icon" href="https://github.com/shunwynn96" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a class="social-icon" href="https://www.linkedin.com/in/shunwynnkok/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  setup() {

  }
}
</script>

<style>

/* max view width color */
.contact-bg {
  background-color: var(--bg-1);
}

.contact-container {
  background-color: var(--bg-1);
  padding: 3rem;
  margin: auto;
  text-align: center;
  max-width: 1920px;
  min-height: calc(100vh - 100px);
}

.contact-title {
  color: var(--text-primary);
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--color-2);
}

.contact-title span {
  color: var(--color-2);
}

.contact-icon {
  color: var(--text-primary);
  font-size: 20px;
  margin: 0.5rem;
}

.phone-num {
  color: var(--text-primary);
  margin: 0;
}

.credits {
  margin-top: 1rem;
  font-weight: 600;
  color: var(--color-2);
}

.credits span {
  color: var(--text-primary);
}

.social-icon {
  color: var(--text-primary);
  font-size: 25px;
  margin: 0 1rem 1rem 1rem;
}

.social-icon:hover {
  color: var(--color-2);
}

</style>
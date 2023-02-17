<template>
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
</template>

<script>
export default {
  name: 'ContactUs',
  setup() {

  }
}
</script>

<style>

.contact-container {
  padding: 3rem;
  text-align: center;
  max-width: 1920px;
  min-height: calc(100vh - 100px);
}

.contact-title {
  padding-bottom: 1rem;
  border-bottom: 3px solid #dc3545;
}

.contact-title span {
  color: #dc3545;
}

.contact-icon {
  font-size: 20px;
  margin: 0.5rem;
}

.phone-num {
  margin: 0;
}

.credits {
  margin-top: 1rem;
  font-weight: 600;
  color: #dc3545;
}

.credits span {
  color: black;
}

.social-icon {
  color: black;
  font-size: 25px;
  margin: 0 1rem 1rem 1rem;
}

.social-icon:hover {
  color: #dc3545;
}

</style>
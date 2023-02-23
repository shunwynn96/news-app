<template>
  <div id="sidemenu" v-click-away="closeNav">
    <button class="sidemenu-btn" @click="toggleNav" :class="showNav ? 'active' : null">
				<span class="top"></span>
				<span class="mid"></span>
				<span class="bottom"></span>
			</button>
    <transition name="translateX">
      <nav v-show="showNav">
        <div class="sidemenu-wrapper">
          <ul class="sidemenu-list">
						<li class="sidemenu-item" @click="toggleNav">
							<router-link :to="{ name: 'Home' }" >Home</router-link>
						</li>
						<Dropdown />
						<li class="sidemenu-item" @click="toggleNav">
							<router-link :to="{ name: 'ContactUs' }">Contact Us</router-link>
						</li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
	
</template>

<script>
import { ref } from 'vue'
import Dropdown from './Dropdown.vue'

export default {
  name: "NavHamburger",
	components: { Dropdown },
  setup() {
    let showNav = ref(false)

		// from vue3-click-away plugin.
		// Closes hamburger menu when clicking outside
		const closeNav = () => {
			showNav.value = false
		}

    const toggleNav = () => {
      showNav.value = !showNav.value
    }

    return { showNav, toggleNav, closeNav }
  }
}
</script>

<style>

#sidemenu {
	display: none;
}

@media screen and (max-width: 540px) {
	#sidemenu {
		display: block;
	}
}

#sidemenu nav {
		text-align: center;
		width: 200px;
		background-color: var(--color-1);
		position: fixed;
		top: 0;
		right: 0;
		z-index: 99;
}

	#sidemenu .sidemenu-btn {
		margin-right: 1rem;
		width: 50px;
		height: 50px;
		background-color: var(--color-1);
		border: none;
		position: relative;
		z-index: 100;
		cursor: pointer;
	}

	/* Hamburger Icon */
	#sidemenu .sidemenu-btn span {
		width: 20px;
		height: 2px;
		margin: auto;
		border-radius: 9999px;
		background-color: white;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		transition: all 0.4s ease;
	}

	/* Hamburger Icon top stroke */
	#sidemenu .sidemenu-btn span.top {
		transform: translateY(-8px);
	}

	/* Hamburger Icon bottom stroke */
	#sidemenu .sidemenu-btn span.bottom {
		transform: translateY(8px);
	}

	#sidemenu .sidemenu-btn.active .top {
		transform: rotate(-45deg);
	}

	/* Rotates middle stroke 360, leftward and slowly fades away */
	#sidemenu .sidemenu-btn.active .mid {
		transform: translateX(-50px) rotate(360deg);
		opacity: 0;
	}

	#sidemenu .sidemenu-btn.active .bottom {
		transform: rotate(45deg);
	}

	#sidemenu .sidemenu-wrapper {
		padding-top: 50px;
	}

	#sidemenu .sidemenu-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
 #sidemenu .sidemenu-item a {
		text-decoration: none;
		font-size: 20px;
		padding: 0.5rem;
		display: block;
		color: white;
		transition: 0.4s ease;
}
 #sidemenu .sidemenu-item a:hover {
	 background: lightgrey;
	 color: dimgrey;
}
 .translateX-enter {
	 transform: translateX(-200px);
	 opacity: 0;
}
 .translateX-enter-active, .translateX-leave-active {
	 transform-origin: top left 0;
	 transition: 0.2s ease;
}
 .translateX-leave-to {
	 transform: translateX(200px);
	 opacity: 0;
}
 

</style>
<script setup>

</script>
<template>
<div>

   <!-- component -->
   <div class="flex justify-center items-center w-full">
        <form method='POST' action='#'>
            <div class=" z-20 relative mb-20 bg-zinc-800 px-10 py-8 rounded-xl w-screen shadow-cyan-500/60 shadow-xl max-w-sm">
                <div class="space-y-4">
                    <svg
          class="cursor-pointer opacity-30 rotate-180 hover:opacity-100 transition hover:-translate-x-1" 
          width="16"
          height="14" 
          viewBox="0 0 16 14" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
                    <!-- <h1 class="text-center text-2xl font-semibold text-gray-600">Login</h1> -->
                <h1 class="fancy-wipe">
	       <span class="text">
		Login	
	       </span>
	       <span class="wipe-in">
		Login	
	       </span>
	       <span class="blur-in">
		Login	
	       </span>
               </h1>
                    <hr>
                <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input class="pl-2 outline-none border-none w-full" type="email" name="email" value="" placeholder="Email" required/>

                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input class="pl-2 outline-none border-none w-full" type="password" name="password" id="" placeholder="Password" required/>
                    
                </div>
                </div>
                <!-- Remember Me checkbox -->
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <input type="checkbox" id="rememberMeCheckbox" name="rememberMe" class="mr-2">
                        <span class="text-xs font-semibold">Запомнить меня ?</span>
                    </p>
                </div>

                <button type="submit" value="login" id="login" class="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
                <hr>
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <span class="ml-2">У вас еще нет аккаунта?<router-link to="/signup" class="text-xs ml-2 text-blue-500 font-semibold">Регистрация на сайте &rarr;</router-link>
                        </span>
                    </p>
                </div>
            </div>
            <div class="pt-6 text-base font-semibold leading-7">
                <p class="font-sans text-red-500 text-md hover:text-red-800">
                <a href="/" class="absolute">&larr; Назад</a>
                </p>
            </div>
        </form>
    </div>
</div>
</template>
<style scoped>

.fancy-wipe {
	margin: 0;
	font-weight: 900;
	font-size: 5rem;
	position: relative;
	--duration: 2.5s;
	--easing: cubic-bezier(0.45, 0, 0.55, 1);
	--colors: linear-gradient(
		90deg,
		#fff89a,
		#cdf2ca,
		#a2cdcd,
		#d1e8e4,
		#cab8ff,
		#ff7878,
		#ffc898
	);
}

.text {
	display: block;
	padding: 2rem;
	color: white;
	animation: wipe-in var(--duration) infinite var(--easing);
	mask: linear-gradient(to right, white, white 45%, black, 55%, black);
  	mask-composite: exclude;
	mask-mode: luminance;
	mask-size: 300% 100%;
	mask-position: 100% 0px;
}

.wipe-in {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	padding: 2rem;
	background-image: var(--colors);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: wipe-in var(--duration) infinite var(--easing);
	mask: linear-gradient(to right, black, black 45%, white 50%, black 52.5%, black);
  	mask-composite: exclude;
	mask-mode: luminance;
	mask-size: 300% 100%;
	mask-position: 100% 0px;
}

.blur-in {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	padding: 2rem;
	background-image: var(--colors);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: wipe-in var(--duration) infinite var(--easing);
	mask: linear-gradient(to right, black, black 45%, white 52.5%, black 55%, black);
  	mask-composite: exclude;
	mask-mode: luminance;
	mask-size: 300% 100%;
	mask-position: 100% 0px;
	filter: blur(10px);
}

@keyframes wipe-in {
	100% {
		mask-position: 0px 0px;
	}
}

</style>
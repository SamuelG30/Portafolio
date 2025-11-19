<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
    <!-- HEADER -->
    <header
      class="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <h1 class="text-2xl font-bold text-indigo-400">Portafolio</h1>
      <nav class="hidden md:flex gap-6 text-gray-300">
        <a href="#inicio" class="hover:text-indigo-400">Inicio</a>
        <a href="#sobremi" class="hover:text-indigo-400">Sobre mí</a>
        <a href="#tecnologias" class="hover:text-indigo-400">Tecnologías</a>
        <a href="#proyectos" class="hover:text-indigo-400">Proyectos</a>
        <a href="#certificados" class="hover:text-indigo-400">Certificados</a>
        <a href="#contacto" class="hover:text-indigo-400">Contacto</a>
      </nav>
    </header>

    <!-- INICIO -->
    <section id="inicio" class="h-screen flex flex-col justify-center items-center text-center px-6">
      <img src="/src/assets/perfil.jpg" alt="Perfil"
        class="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full mb-6 shadow-lg shadow-indigo-500/30 border border-indigo-400/30" />
      <h2 class="text-4xl md:text-5xl font-bold mb-3">
        Hola, Soy Samuel Gomez <span class="text-indigo-400">Desarrollador Freelancer</span>
      </h2>
      <p class="text-gray-400 max-w-lg">
        Apasionado por el diseño web moderno, las animaciones suaves y la experiencia de usuario.
      </p>
    </section>
  
    <!-- SOBRE MÍ -->
    <section id="sobremi" class="py-20 px-6 md:px-20 text-center">
      <div
        class="bg-white/10 backdrop-blur-md rounded-3xl p-10 max-w-3xl mx-auto border border-white/10 shadow-lg shadow-indigo-500/10">
        <h3 class="text-3xl font-semibold text-indigo-400 mb-6">Sobre mí</h3>
        <p class="text-gray-300 leading-relaxed">
          Desarrollador web apasionado con experiencia en la creación de sitios modernos, responsivos y funcionales.
          Habilidades en <span class="text-indigo-300">HTML, CSS, JavaScript, Vue.js, Postman y conocimientos de
            Jenkins</span>.
          Enfocado en soluciones digitales para negocios locales.
        </p>
      </div>
    </section>

    <!-- TECNOLOGÍAS -->
    <section id="tecnologias" class="py-20 px-6 md:px-20 text-center">
      <h3 class="text-3xl font-semibold text-indigo-400 mb-10">Tecnologías y Herramientas</h3>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
        <div v-for="(t, i) in tecnologias" :key="i"
          class="flex flex-col items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-md transition transform hover:scale-110 hover:shadow-indigo-500/20">
          <img :src="t.logo" :alt="t.nombre" class="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span class="text-gray-300 text-xs mt-2">{{ t.nombre }}</span>
        </div>
      </div>
    </section>

    <!-- PROYECTOS -->
    <section id="proyectos" class="py-20 px-6 md:px-20 text-center">
      <h3 class="text-3xl font-semibold text-indigo-400  mb-10">Proyectos Destacados</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(p, i) in proyectos" :key="i"
          class="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-indigo-500/10 hover:scale-105 transition transform">
          <img :src="p.imagen" :alt="p.nombre"
            class="w-full h-60 object-cover opacity-90 hover:opacity-100 transition" />
          <div class="p-5 text-left">
            <h4 class="text-lg font-semibold text-indigo-300 mb-1">{{ p.nombre }}</h4>
            <p class="text-gray-400 text-sm mb-3">{{ p.descripcion }}</p>
            <a :href="p.link" target="_blank" rel="noopener noreferrer"
              class="text-indigo-400 text-sm font-semibold hover:underline">Ver más →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICADOS -->
    <section id="certificados" class="py-20 px-6 md:px-20 text-center">
      <h3 class="text-3xl font-semibold text-indigo-400 mb-10">Certificados</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(cert, i) in certificados" :key="i"
          class="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-indigo-500/10 hover:scale-105 transition transform cursor-pointer"
          @click="openModal(cert.imagen)">
          <img :src="cert.imagen" :alt="cert.nombre"
            class="w-full h-25 sm:h-52 md:h-60 object-cover opacity-90 hover:opacity-100 transition" />

          <div class="p-5 text-left">
            <h4 class="text-lg font-semibold text-white">{{ cert.nombre }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- MODAL -->
    <transition name="fade">
      <div v-if="modalVisible" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        @click.self="closeModal">
        <div class="relative max-w-4xl w-full mx-4">
          <button @click="closeModal" class="absolute top-4 right-4 text-white text-3xl hover:text-indigo-400">
            &times;
          </button>
          <img :src="selectedImage" alt="Vista previa del certificado"
            class="w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      </div>
    </transition>

    <!-- CONTACTO -->
    <section id="contacto" class="py-20 text-center">
      <div
        class="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-lg shadow-indigo-500/10">
        <h3 class="text-3xl font-semibold text-indigo-400 mb-6">Contáctame</h3>
        <p class="text-gray-300 mb-8">¿Tienes un proyecto o una idea? ¡Hablemos!</p>
        <div class="flex flex-wrap justify-center gap-6 text-sm text-indigo-300 font-medium">
          <a href="mailto:samuelgomezltjnc@gmail.com" class="hover:text-indigo-400 transition">Email</a>
          <a href="https://github.com/SamuelG30/Portafolio" class="hover:text-indigo-400 transition">GitHub</a>
          <a href="https://wa.me/8292308873?" class="hover:text-indigo-400 transition">Whatsapp</a>
          <a href="https://www.instagram.com/samy_gomez30/?hl=en&g=5"
            class="hover:text-indigo-400 transition">Instagram</a>
           <a href="CV_Samuel_Gomez.pdf" download
   class="px-6  bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 transition">
   Descargar CV
</a>

        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-6 text-center text-gray-500 border-t border-white/10">
      © 2025 Mi Portafolio — Desarrollado con TailwindCSS y Vue.js
    </footer>
  </main>
</template>

<script setup>
import { ref } from "vue";

// --- MODAL DE CERTIFICADOS ---
const modalVisible = ref(false);
const selectedImage = ref("");

function openModal(src) {
  selectedImage.value = src;
  modalVisible.value = true;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalVisible.value = false;
  document.body.style.overflow = "auto";
}

// --- ARRAYS DE DATOS ---
const certificados = [
  { nombre: "Web Developer", imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/c1.png?raw=true" },
  { nombre: "TailwindCSS", imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/c2.png?raw=true" },
  { nombre: "Git GitHub", imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/c3.png?raw=true" },
  { nombre: "Postman", imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/c4.png?raw=true" },
  { nombre: "Jira", imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/c5.png?raw=true" },
];

const tecnologias = [
  { nombre: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nombre: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nombre: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nombre: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { nombre: "TailwindCSS", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg" },
  { nombre: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { nombre: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { nombre: "Postman", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/postman/postman-original.svg" },
  { nombre: "Jira", logo: "https://raw.githubusercontent.com/VectorLogoZone/vectorlogozone/b1ee6e4bb063e2db8bbf07278cb619b038c2f655/www/logos/atlassian_jira/atlassian_jira-icon.svg" },
  { nombre: "BitBucket", logo: "https://raw.githubusercontent.com/VectorLogoZone/vectorlogozone/b1ee6e4bb063e2db8bbf07278cb619b038c2f655/www/logos/bitbucket/bitbucket-icon.svg" },
  { nombre: "Jenkins", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/jenkins/jenkins-original.svg" },
  { nombre: "IBM API Connect", logo: "https://raw.githubusercontent.com/VectorLogoZone/vectorlogozone/b1ee6e4bb063e2db8bbf07278cb619b038c2f655/www/logos/ibm/ibm-icon.svg" },
  { nombre: "Docker", logo: "https://raw.githubusercontent.com/VectorLogoZone/vectorlogozone/b1ee6e4bb063e2db8bbf07278cb619b038c2f655/www/logos/docker/docker-icon.svg" },
  { nombre: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { nombre: "SQL Server", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
];

const proyectos = [
  {
    nombre: "Negocio (HTML + CSS + JavaScript)",
    descripcion: "Multi Tiendas En Un Mismo Sitio.",
    imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/1.png?raw=true",
    link: "https://storemultishop.com/"
  },
  {
    nombre: "MaxSupply (API de WhatsApp)",
    descripcion: "Página Para Vender Suplementos y Acesorios Deportivo",
    imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/2.png?raw=true",
    link: "https://storemultishop.com/MaxSupply/Suplementos/Creatina.html"
  },
  {
    nombre: "MarkeShop (Base de Datos)",
    descripcion: "Pagina Web Responsive Para Vender y Comprar Productos",
    imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/3.png?raw=true",
    link: "https://storemultishop.com/MarkeShop/Inicio.html"
  },
    {
    nombre: "Portafolio (VUES.JS + TAILWIND CSS) ",
    descripcion: "Portafolios Actractivos y Modernos ",
    imagen: "https://github.com/SamuelG30/Portafolio/blob/main/src/assets/4.png?raw=true",
    link: "https://samuelg30.github.io/Portafolio/"
  },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

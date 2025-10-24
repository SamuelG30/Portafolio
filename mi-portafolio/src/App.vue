<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
    <!-- HEADER -->
    <header
      class="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <h1 class="text-2xl font-bold text-indigo-400">Mi Portafolio</h1>
      <nav class="hidden md:flex gap-6 text-gray-300">
        <a href="#inicio" class="hover:text-indigo-400">Inicio</a>
        <a href="#sobremi" class="hover:text-indigo-400">Sobre mí</a>
        <a href="#tecnologias" class="hover:text-indigo-400">Tecnologías</a>
        <a href="#proyectos" class="hover:text-indigo-400">Proyectos</a>
        <a href="#contacto" class="hover:text-indigo-400">Contacto</a>
      </nav>
    </header>

    <!-- INICIO -->
    <section id="inicio" class="h-screen flex flex-col justify-center items-center text-center px-6">
      <img src="/src/assets/perfil.jpg" alt="Perfil"
        class="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full mb-6 shadow-lg shadow-indigo-500/30 border border-indigo-400/30" />
      <h2 class="text-4xl md:text-5xl font-bold mb-3">Hola, Soy Samuel Gomez <span class="text-indigo-400">Desarrollador
          Freelancer</span></h2>
      <p class="text-gray-400 max-w-lg">Apasionado por el diseño web moderno, las animaciones suaves y la experiencia de
        usuario.</p>
    </section>

    <!-- SOBRE MÍ -->
    <section id="sobremi" class="py-20 px-6 md:px-20 text-center">
      <div
        class="bg-white/10 backdrop-blur-md rounded-3xl p-10 max-w-3xl mx-auto border border-white/10 shadow-lg shadow-indigo-500/10">
        <h3 class="text-3xl font-semibold text-indigo-400 mb-6">Sobre mí</h3>
        <p class="text-gray-300 leading-relaxed">
          Desarrollador web apasionado con experiencia en la creación de sitios modernos, responsivos y funcionales. 
          Habilidades en <span class="text-indigo-300">HTML, CSS, JavaScript, Vue.js, Postman, y conocimientos de Jenkins. </span>. Enfocado en soluciones
           digitales para negocios locales.
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
      <h3 class="text-3xl font-semibold text-indigo-400 mb-10">Proyectos Destacados</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(p, i) in proyectos" :key="i"
          class="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-indigo-500/10 hover:scale-105 transition transform">
          <img :src="p.imagen" :alt="p.nombre"
            class="w-full h-60 object-cover opacity-90 hover:opacity-100 transition" />
          <div class="p-5 text-left">
            <h4 class="text-lg font-semibold text-indigo-300 mb-1">{{ p.nombre }}</h4>
            <p class="text-gray-400 text-sm mb-3">{{ p.descripcion }}</p>
            <a href="https://storemultishop.com/" class="text-indigo-400 text-sm font-semibold hover:underline">Ver más →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="py-20 text-center">
      <div
        class="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-lg shadow-indigo-500/10">
        <h3 class="text-3xl font-semibold text-indigo-400 mb-6">Contáctame</h3>
        <p class="text-gray-300 mb-8">¿Tienes un proyecto o una idea? ¡Hablemos!</p>
        <div class="flex flex-wrap justify-center gap-6 text-sm text-indigo-300 font-medium">
          <a href="mailto:samuelgomezltjnc@gmail.com" class="hover:text-indigo-400 transition">Email</a>
          <a href="#" class="hover:text-indigo-400 transition">GitHub</a>
          <a href="#" class="hover:text-indigo-400 transition">LinkedIn</a>
          <a href="#" class="hover:text-indigo-400 transition">Instagram</a>
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
const tecnologias = [
  { nombre: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nombre: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nombre: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nombre: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { nombre: "TailwindCSS", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg" },
  { nombre: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { nombre: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { nombre: "Postman", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/postman/postman-original.svg" },
  { nombre: "Jenkins", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/jenkins/jenkins-original.svg" },
  { nombre: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { nombre: "SQL Serve", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
];


const proyectos = [
  {
    nombre: "Negocio html + Css + JavaScript",
    descripcion: "Ecommerce moderno con autenticación y gestión de productos.",
    imagen: "https://github.com/Project3022/oo/blob/main/1.png?raw=truew=800",
  },
  {
    nombre: "Dashboard Interactivo",
    descripcion: "Panel de control con estadísticas dinámicas y diseño responsive.",
    imagen: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800",
  },
  {
    nombre: "App Fitness",
    descripcion: "Aplicación de entrenamiento con rutinas y control de progreso.",
    imagen: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=800",
  },
];
</script>

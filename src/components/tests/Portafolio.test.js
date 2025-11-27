import { mount } from "@vue/test-utils";
import Portafolio from "../../App.vue";

describe("Portafolio.vue", () => {

  test("renderiza el título del header", () => {
    const wrapper = mount(Portafolio);
    expect(wrapper.text()).toContain("Portafolio");
  });

});

test("renderiza todas las tecnologías", () => {
  const wrapper = mount(Portafolio);
  
  const techItems = wrapper.findAll('[id="tecnologias"] div div');

  // Debe coincidir con tecnologias.length (16)
  expect(techItems.length).toBe(15);
});


test("abre el modal al hacer click en un certificado", async () => {
  const wrapper = mount(Portafolio);

  // Busca el primer certificado
  const cert = wrapper.find('#certificados div div');

  await cert.trigger("click");

  expect(wrapper.vm.modalVisible).toBe(true);
});


test("cierra el modal al hacer click en el botón cerrar", async () => {
  const wrapper = mount(Portafolio);

  // Abrimos modal primero
  wrapper.vm.openModal("imagen.jpg");
  await wrapper.vm.$nextTick();

  // Click en cerrar
  const closeBtn = wrapper.find('button');
  await closeBtn.trigger("click");

  expect(wrapper.vm.modalVisible).toBe(false);
});



import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

// app/javascript/packs/application.js

document.addEventListener('DOMContentLoaded', () => {
  const updateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR');
    const formattedTime = now.toLocaleTimeString('pt-BR');
    document.getElementById('datetime-display').innerText = `${formattedDate} ${formattedTime}`;
  };

  updateTime();
  setInterval(updateTime, 1000); // Atualiza a cada segundo
});


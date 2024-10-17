// app/javascript/packs/application.js

// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "channels"
import 'stylesheets/application.css';


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

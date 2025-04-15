document.addEventListener('DOMContentLoaded', function () {
    // Aplicar idioma salvo
    const savedLanguage = localStorage.getItem('language') || 'pt-BR';
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
      languageSelect.value = savedLanguage;
  
      languageSelect.addEventListener('change', function () {
        const selectedLanguage = languageSelect.value;
        localStorage.setItem('language', selectedLanguage);
        updateTexts(selectedLanguage);
      });
    }
  
    // Atualizar textos com base no idioma
    function updateTexts(language) {
        const phrase = {
            'pt-BR': {
              title2: "Configuração do Sistema - Eco Solar",
              description2: "Insira os dados de configuração",
              theme: "Selecione o Tema",
              white: "Branco",
              orange: "Laranja",
              blue: "Azul",
              language: "Selecione o idioma",
              portuguese: "Português",
              english: "Inglês",
              rate: "Tarifa ($/kwh)",
              discount: "Desconto (%)",
              save: "Salvar Configuração",
              back: "Voltar"
            },
            'en-US': {
              title2: "System Configuration - Eco Solar",
              description2: "Enter the configuration data",
              theme: "Select Theme",
              white: "White",
              orange: "Orange",
              blue: "Blue",
              language: "Select Language",
              portuguese: "Portuguese",
              english: "English",
              rate: "Rate ($/kWh)",
              discount: "Discount (%)",
              save: "Save Settings",
              back: "Back"
        }
      };
  
      const text = phrase[language];
      if (text) {
        document.querySelector('h1').textContent = text.title2;
        document.querySelector('h2').textContent = text.description2;
        document.querySelector('label[for="theme"]').textContent = text.theme;
        document.querySelector('option[value="white"]').textContent = text.white;
        document.querySelector('option[value="orange"]').textContent = text.orange;
        document.querySelector('option[value="blue"]').textContent = text.blue;
        document.querySelector('label[for="language"]').textContent = text.language;
        document.querySelector('option[value="pt-BR"]').textContent = text.portuguese;
        document.querySelector('option[value="en-US"]').textContent = text.english;
        document.querySelector('label[for="rate"]').textContent = text.rate;
        document.querySelector('label[for="discount"]').textContent = text.discount;
        document.querySelector('button.save').textContent = text.save;
        document.querySelector('a.back').textContent = text.back;
      }
    }
  
    // Atualizar textos ao carregar a página
    updateTexts(savedLanguage);
  });

document.addEventListener('DOMContentLoaded', function () {
  // Aplicar tema salvo
  const savedTheme = localStorage.getItem('theme') || 'default';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeSelect = document.getElementById('theme');
  if (themeSelect) {
    themeSelect.value = savedTheme;

    themeSelect.addEventListener('change', function () {
      const selectedTheme = themeSelect.value;
      document.documentElement.setAttribute('data-theme', selectedTheme);
      localStorage.setItem('theme', selectedTheme);
    });
  }

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
        title: "Simulador de Economia - Eco Solar",         
        description: "Insira os dados abaixo para calcular sua economia de energia",
        description2: "Insira os dados de configuração",
        bill1: "Conta 1 (kWh):",
        bill2: "Conta 2 (kWh):",
        bill3: "Conta 3 (kWh):",
        bill4: "Conta 4 (kWh):",
        consumption: "Consumo Mensal (kWh):",
        calculate: "Calcular Economia",
        result: "Resultado",
        totalWithoutDiscont: "Total sem desconto:",
        totalWithDiscont: "Total com desconto:",
        savings: "Economia:",
        settings: "Configuração",
      },
      'en-US': {
        title: "Savings Simulator - Eco Solar",
        description: "Enter the data below to calculate your energy savings",
        description2: "Enter the configuration data",
        bill1: "Bill 1 (kWh):",
        bill2: "Bill 2 (kWh):",
        bill3: "Bill 3 (kWh):",
        bill4: "Bill 4 (kWh):",
        consumption: "Monthly Consumption (kWh):",
        calculate: "Calculate Savings",
        result: "Result",
        totalWithoutDiscont: "Total without discount:",
        totalWithDiscont: "Total with discount:",
        savings: "Savings:",
        settings: "Settings",
      }
    };

    const text = phrase[language];
    if (text) {
      document.querySelector('h1').textContent = text.title;
      document.querySelector('h2').textContent = text.description;
      document.querySelector('label[for="bill1"]').textContent = text.bill1;
      document.querySelector('label[for="bill2"]').textContent = text.bill2;
      document.querySelector('label[for="bill3"]').textContent = text.bill3;
      document.querySelector('label[for="bill4"]').textContent = text.bill4;
      document.querySelector('label[for="consumption"]').textContent = text.consumption;
      document.querySelector('button.calculate').textContent = text.calculate;
      document.getElementById('resultTitle').textContent = text.result;
      document.getElementById('totalWithoutDiscountLabel').textContent = text.totalWithoutDiscont;
      document.getElementById('totalWithDiscountLabel').textContent = text.totalWithDiscont;
      document.getElementById('savingsLabel').textContent = text.savings;
      document.querySelector('a.button.settings').textContent = text.settings;
    }
  }

  // Atualizar textos ao carregar a página
  updateTexts(savedLanguage);
});
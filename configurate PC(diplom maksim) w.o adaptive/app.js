const dropdownBtn1 = document.getElementById("dropdownBtn1");
const dropdownBtn2 = document.getElementById("dropdownBtn2");
const dropdownBtn3 = document.getElementById("dropdownBtn3");
const dropdownBtn4 = document.getElementById("dropdownBtn4");
const dropdownBtn5 = document.getElementById("dropdownBtn5");
const dropdownBtn6 = document.getElementById("dropdownBtn6");
const dropdownBtn7 = document.getElementById("dropdownBtn7");
const dropdownBtn8 = document.getElementById("dropdownBtn8");
const dropdownBtn9 = document.getElementById("dropdownBtn9");

const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");

displaySavedBuilds();

saveBtn.addEventListener("click", saveBuild);
loadBtn.addEventListener("click", loadBuild);


// Объекты модальных окон
const cpuModal = {
modal: document.getElementById("cpuModal"),
modalContent: document.getElementById("cpuModalContent"),
};
const motherboardModal = {
modal: document.getElementById("motherboardModal"),
modalContent: document.getElementById("motherboardModalContent"),
};
const ramModal = {
modal: document.getElementById("ramModal"),
modalContent: document.getElementById("ramModalContent"),
};
const videoCardModal = {
modal: document.getElementById("videoCardModal"),
modalContent: document.getElementById("videoCardModalContent"),
};
const storageModal = {
modal: document.getElementById("storageModal"),
modalContent: document.getElementById("storageModalContent"),
};
const coolerModal = {
modal: document.getElementById("coolerModal"),
modalContent: document.getElementById("coolerModalContent"),
};
const caseModal = {
  modal: document.getElementById("caseModal"),
  modalContent: document.getElementById("caseModalContent"),
};
const psuModal = {
  modal: document.getElementById("psuModal"),
  modalContent: document.getElementById("psuModalContent"),
};
const hddModal = {
  modal: document.getElementById("hddModal"),
  modalContent: document.getElementById("hddModalContent"),
};

// Данные о комплектующих (замените их на свои)
const processors = [{ name: "Intel Core i3-10100", price: 7500, socket: "LGA1200", tdp: 65, image: "images/hard/19358-50.png", manufacturer: "Intel" },
{ name: "Intel Core i3-12100F", price: 9060, socket: "LGA1700", tdp: 100, image: "images/hard/19358-50.png", manufacturer: "Intel" },
{ name: "Intel Core i5-10400", price: 9000, socket: "LGA1200", tdp: 75, image: "images/hard/18462-50.png", manufacturer: "Intel" },
{ name: "Intel Core i5-11400", price: 11000, socket: "LGA1200", tdp: 85, image: "images/hard/18462-50.png", manufacturer: "Intel" },
{ name: "Intel Core i5-12400F", price: 14700, socket: "LGA1700", tdp: 120, image: "images/hard/18462-50.png", manufacturer: "Intel" },
{ name: "Intel Core i5-13600KF", price: 28750, socket: "LGA1700", tdp: 120, image: "images/hard/18854-50.png", manufacturer: "Intel" },
{ name: "Intel Core i7-10700", price: 20000, socket: "LGA1200", tdp: 85, image: "images/hard/18461-50.png", manufacturer: "Intel" },
{ name: "Intel Core i7-12700F", price: 32800, socket: "LGA1700", tdp: 180, image: "images/hard/18461-50.png", manufacturer: "Intel" },
{ name: "Intel Core i7-13700KF", price: 39380, socket: "LGA1700", tdp: 180, image: "images/hard/18855-50.png", manufacturer: "Intel" },
{ name: "Intel Core i9-10900K", price: 35000, socket: "LGA1200", tdp: 80, image: "images/hard/12071-50.png", manufacturer: "Intel"  },
{ name: "Intel Core i9-11900", price: 38000, socket: "LGA1200", tdp: 80, image: "images/hard/12071-50.png", manufacturer: "Intel" },
{ name: "Intel Core i9-12900KF", price: 44000, socket: "LGA1700", tdp: 220, image: "images/hard/12071-50.png", manufacturer: "Intel" },
{ name: "Intel Core i9-13900KF", price: 58750, socket: "LGA1700", tdp: 220, image: "images/hard/18856-50.png", manufacturer: "Intel" },
{ name: "AMD Ryzen 5 3600", price: 15000, socket: "AM4", tdp: 85, image: "images/hard/12046-50.png", manufacturer: "AMD"  },
{ name: "AMD Ryzen 5 7600X", price: 23000, socket: "AM5", tdp: 155, image: "images/hard/12046-50.png", manufacturer: "AMD"  },
{ name: "AMD Ryzen 7 3700X", price: 21000, socket: "AM4", tdp: 95, image: "images/hard/12047-50.png", manufacturer: "AMD"  },
{ name: "AMD Ryzen 7 7700X", price: 32500, socket: "AM5", tdp: 180, image: "images/hard/12047-50.png", manufacturer: "AMD"  },
{ name: "AMD Ryzen 9 3900X", price: 30000, socket: "AM4", tdp: 180, image: "images/hard/12048-50.png", manufacturer: "AMD"  },
{ name: "AMD Ryzen 9 3950X", price: 45000, socket: "AM4", tdp: 200, image: "images/hard/12048-50.png", manufacturer: "AMD"  },
{ name: "AMD Ryzen 9 7900X", price: 46880, socket: "AM5", tdp: 220, image: "images/hard/12048-50.png", manufacturer: "AMD"  },];
const motherboards = [{name: "ASUS Prime B460M-A", price: 7000, socket: "LGA1200", image: "images/hard/18587-50.png", ramType: "DDR4", maxMemorySpeed: 2933 },
{ name: "GIGABYTE H410M H V2", price: 5000, socket: "LGA1200", ramType: "DDR4", image: "images/hard/18587-50.png", maxMemorySpeed: 2933 },
{ name: "MSI H510M-A PRO", price: 5500, socket: "LGA1200", ramType: "DDR4", image: "images/hard/18587-50.png", maxMemorySpeed: 3200 },
{ name: "GIGABYTE B560 HD3", price: 9000, socket: "LGA1200", ramType: "DDR4", image: "images/hard/18586-50.png", maxMemorySpeed: 3200 },
{ name: "MSI B460M PRO-VDH", price: 7500, socket: "LGA1200", ramType: "DDR4", image: "images/hard/18586-50.png", maxMemorySpeed: 2933 },
{ name: "Gigabyte B450M DS3H", price: 6000, socket: "AM4", ramType: "DDR4", image: "images/hard/18584-50.png", maxMemorySpeed: 3600 },
{ name: "ASUS Prime B450M-A", price: 6500, socket: "AM4", ramType: "DDR4", image: "images/hard/18584-50.png", maxMemorySpeed: 3200 },
{ name: "MSI B450M PRO-M2", price: 7000, socket: "AM4", ramType: "DDR4", image: "images/hard/18584-50.png", maxMemorySpeed: 3466 },
{ name: "ASRock B450M Pro4", price: 8000, socket: "AM4", ramType: "DDR4", image: "images/hard/18584-50.png", maxMemorySpeed: 3200 },
{ name: "Gigabyte B650M Gaming X", price: 20030, socket: "AM5", ramType: "DDR4", image: "images/hard/19095-50.png", maxMemorySpeed: 4800 },
{ name: "Gigabyte X670 Aorus Elite Wi-Fi", price: 34890, socket: "AM5", ramType: "DDR4", image: "images/hard/19323-50.png", maxMemorySpeed: 5200 },
{ name: "GIGABYTE B660 GAMING X", price: 11500, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18589-50.png", maxMemorySpeed: 3200 },
{ name: "GIGABYTE Z690 AORUS ELITE", price: 19000, socket: "LGA1700", ramType: "DDR4", image: "images/hard/19260-50.png", maxMemorySpeed: 4800 },
{ name: "ASUS TUF GAMING Z690-PLUS WI-FI", price: 27000, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18595-50.png", maxMemorySpeed: 4800 },
{ name: "Gigabyte Z690 AORUS PRO WI-FI", price: 31000, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18593-50.png", maxMemorySpeed: 4800 },
{ name: "MSI MPG Z690 FORCE WI-FI", price: 35300, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18598-50.png", maxMemorySpeed: 4800 },
{ name: "MSI MPG Z690 CARBON WI-FI", price: 37880, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18597-50.png", maxMemorySpeed: 4800 },
{ name: "ASUS ROG STRIX Z690-F GAMING WI-FI", price: 37880, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18596-50.png", maxMemorySpeed: 4800 },
{ name: "ASUS PROART Z690-CREATOR WI-FI", price: 43590, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18599-50.png", maxMemorySpeed: 5200 },
{ name: "GIGABYTE Z790 AORUS ELITE AX", price: 28000, socket: "LGA1700", ramType: "DDR4", image: "images/hard/12077-50.png", maxMemorySpeed: 4800 },
{ name: "MSI PRO B660M-E DDR4", price: 7000, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18589-50.png", maxMemorySpeed: 3200 },
{ name: "MSI PRO H610M-G DDR4", price: 8000, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18589-50.png", maxMemorySpeed: 3200 },
{ name: "GIGABYTE H610M H DDR4", price: 6500, socket: "LGA1700", ramType: "DDR4", image: "images/hard/18587-50.png", maxMemorySpeed: 3200 },];
const rams =[{ name: "Kingston Fury 8GB DDR4 2400MHz", price: 4000, ramType: "DDR4", image: "images/hard/405-50.png", maxMemorySpeed: 2400 },
{ name: "Kingston FURY Beast Black 16GB[8x2]", price: 4500, ramType: "DDR4", image: "images/hard/405-50.png", maxMemorySpeed: 3200 },
{ name: "Kingston Predator 16GB[8x2]", price: 5500, ramType: "DDR4", image: "images/hard/497-50.png", maxMemorySpeed: 3200 },
{ name: "Kingston FURY Beast Black 32GB[16x2]", price: 8500, ramType: "DDR4", image: "images/hard/405-50.png", maxMemorySpeed: 3200 },
{ name: "Kingston FURY RGB 16GB[8x2]", price: 6500, ramType: "DDR4", image: "images/hard/18634-50.png", maxMemorySpeed: 3200 },
{ name: "Kingston Predator RGB 16GB[8x2]", price: 5900, ramType: "DDR4", image: "images/hard/503-50.png", maxMemorySpeed: 3200 },
{ name: "G.Skill Trident Z RGB 16B [8x2]", price: 10500, ramType: "DDR4", image: "images/hard/514-50.png", maxMemorySpeed: 3600 },
{ name: "Kingston Predator 32GB[8x4]", price: 8800, ramType: "DDR4", image: "images/hard/533-50.png", maxMemorySpeed: 3600 },
{ name: "Kingston Predator RGB 32GB[8x4]", price: 12900, ramType: "DDR4", image: "images/hard/543-50.png", maxMemorySpeed: 3600 },
{ name: "G.Skill Trident Z RGB 32GB [8x4]", price: 21000, ramType: "DDR4", image: "images/hard/19264-50.png", maxMemorySpeed: 3600 },
];
const videoCards = [
{ name: "Gigabyte GTX 1660 WindForce", image: "images/hard/686-50.png", price: 16200 },
{ name: "MSI RTX 3050 Gaming X", image: "images/hard/18602-50.png", price: 30000 },
{ name: "Gigabyte RTX 3050 Aorus", image: "images/hard/18603-50.png", price: 29960 },
{ name: "Gigabyte RTX 3050 Gaming", image: "images/hard/18469-50.png", price: 29560 },
{ name: "MSI RTX 3060 Ventus 2x", image: "images/hard/11106-50.png", price: 37500 },
{ name: "Gigabyte RTX 3060 Gaming", image: "images/hard/10041-50.png", price: 39380 },
{ name: "MSI RTX 3060 Ventus 3x", image: "images/hard/18606-50.png", price: 40000 },
{ name: "Gigabyte RTX 3060ti Vision", image: "images/hard/18609-50.png", price: 47500 },
{ name: "MSI RTX 3060ti Gaming Z Trio", image: "images/hard/18611-50.png", price: 48750 },
{ name: "Gigabyte RTX 3070 Gaming", image: "images/hard/5199-50.png", price: 56000 },
{ name: "Gigabyte RTX 3070ti Gaming", image: "images/hard/12078-50.png", price: 63130 },
{ name: "MSI RTX 3070ti Gaming X Trio", image: "images/hard/18614-50.png", price: 67500 },
{ name: "Gigabyte RTX 3070ti Aorus", image: "images/hard/12080-50.png", price: 68700 },
{ name: "Palit RTX 4070 Ti GameRock", image: "images/hard/18772-50.png", price: 88700 },
{ name: "Gigabyte RTX 4070 Ti Gaming", image: "images/hard/19072-50.png", price: 92700 },
{ name: "MSI RTX 4070 Ti Suprim X", image: "images/hard/19349-50.png", price: 105000 },
{ name: "ASUS RTX 4070 Ti Rog Strix", image: "images/hard/19347-50.png", price: 115000 },
{ name: "Palit RTX 4080 GameRock", image: "images/hard/18772-50.png", price: 112500 },
{ name: "Palit RTX 4090 GameRock", image: "images/hard/18772-50.png", price: 160000 },
{ name: "Gigabyte RTX 4090 WindForce", image: "images/hard/18671-50.png", price: 161000 },
{ name: "MSI RTX 4090 Gaming Trio", image: "images/hard/18771-50.png", price: 193000 },
];
const storages = [
  { name: "Samsung 970 EVO 250GB NVMe M.2", image: "images/hard/624-50.png", price: 4000 },
  { name: "Samsung 860 EVO 250GB SSD", image: "images/hard/608-50.png", price: 3490 },  
  { name: "Samsung 980 Pro M.2 500GB NVMe M.2", image: "images/hard/619-50.png", price: 8260 },
  { name: "Samsung 980 Pro M.2 1000GB NVMe M.2", image: "images/hard/624-50.png", price: 10700 },
  { name: "Samsung 860 EVO 1000GB SSD", image: "images/hard/608-50.png", price: 9000 },  
  { name: "A-Data Falcon M.2 1024GB", image: "images/hard/622-50.png", price: 8330 },  
  { name: "Samsung 860 EVO 2000GB SSD", image: "images/hard/608-50.png", price: 17380 },  
  { name: "A-Data Falcon M.2 2048GB", image: "images/hard/622-50.png", price: 19330 },  
  { name: "Samsung 980 Pro EVO M.2 2000GB NVMe M.2", image: "images/hard/624-50.png", price: 20700 },
];
const coolers = [
  { name: "DeepCool Gammaxx 300R Red", image: "images/hard/864-50.png", price: 1240, maxTdp: "130" },
  { name: "ID-Cooling SE-214 ARGB", image: "images/hard/18636-50.png", price: 2240, maxTdp: "180" },
  { name: "ID-Cooling SE-214 White ARGB", image: "images/hard/18637-50.png", price: 2240, maxTdp: "180" },
  { name: "Jonsbo CR-1000 RGB", image: "images/hard/18638-50.png", price: 2040, maxTdp: "180" },
  { name: "ID-Cooling SE-207 Black", image: "images/hard/19102-50.png", price: 3740, maxTdp: "280" },
  { name: "be quiet! Dark Rock 4", image: "images/hard/557-50.png", price: 3740, maxTdp: "230" },
  { name: "be quiet! Dark Rock Pro 4", image: "images/hard/556-50.png", price: 6590, maxTdp: "250" },
  { name: "PCcooler CL240 PRO", image: "images/hard/18810-50.png", price: 4070, maxTdp: "280" },
  { name: "Jonsbo TW6 240 ARGB White", image: "images/hard/18644-50.png", price: 4920, maxTdp: "280" },
  { name: "Jonsbo TW6 240 ARGB", image: "images/hard/18643-50.png", price: 6000, maxTdp: "280" },
  { name: "Jonsbo TF 360 ARGB", image: "images/hard/18647-50.png", price: 7190, maxTdp: "280" },
  { name: "Gigabyte Aorus WaterForce 240", image: "images/hard/18648-50.png", price: 12960, maxTdp: "280" },
];
const cases = [{ name: "Fractal Design Meshify C", price: 11560, image: "images/hard/662-200.png", formFactor: "Micro-ATX" },
{ name: "Zalman Z1 Iceberg", price: 3000, image: "images/hard/18928-200.png", formFactor: "Micro-ATX" },
{ name: "Aerocool Cylon Mini RGB", price: 4700, image: "images/hard/764-200.png", formFactor: "Micro-ATX" },
{ name: "Deepcool MATREXX 40", price: 5110, image: "images/hard/12354-200.png", formFactor: "Micro-ATX" },
{ name: "Cooler Master MasterBox Q300P", price: 7380, image: "images/hard/336-200.png", formFactor: "Micro-ATX" },
{ name: "Powercase Vision mini Black", price: 7680, image: "images/hard/18784-200.png", formFactor: "Micro-ATX" },
{ name: "Thermaltake V150", price: 5600, image: "images/hard/19338-200.png", formFactor: "Micro-ATX" },
{ name: "Gigabyte Aorus G300", price: 14300, image: "images/hard/19333-200.png", formFactor: "ATX" },
{ name: "be quiet! Pure Base 500 Window", price: 12000, image: "images/hard/18922-200.png", formFactor: "ATX" },];
const psus = [
  { name: "Zalman ZM500-XE 500W 80+", image: "images/hard/2078-50.png", price: 3890 },
  { name: "be quiet! System Power 10 550W 80+ Bronze", image: "images/hard/570-50.png", price: 4950 },
  { name: "be quiet! System Power 10 650W 80+ Bronze", image: "images/hard/570-50.png", price: 6150 },
  { name: "be quiet! Straight Power 11 650W 80+ Gold", image: "images/hard/18632-50.png", price: 10300 },
  { name: "be quiet! System Power 11 750W 80+ Bronze", image: "images/hard/571-50.png", price: 7100 },
  { name: "be quiet! Pure Power 11 750W 80+ Gold", image: "images/hard/574-50.png", price: 9310 },
  { name: "be quiet! Straight Power 11 850W 80+ Gold", image: "images/hard/574-50.png", price: 15830 },
  { name: "be quiet! Straight Power 11 1000W 80+ Gold", image: "images/hard/18633-50.png", price: 18840 },
  { name: "be quiet! Straight Power 11 1200W 80+ Platinum", image: "images/hard/18633-50.png", price: 28840 },
];
// переделано под вентиляторы*
const hddstorages = [
  { name: "3 x Jonsbo FR901 ARGB White", image: "images/hard/18650-50.png", price: 1800 },
  { name: "3 x ID-Cooling DF-12025 ARGB", image: "images/hard/18651-50.png", price: 2270 },
  { name: "3 x ID-Cooling DF-12025 ARGB", image: "images/hard/18652-50.png", price: 2270 },
  { name: "3 x be quiet! Pure Wings 2", image: "images/hard/2511-50.png", price: 2660 },
  { name: "3 x be quiet! Shadow Wings 2", image: "images/hard/668-50.png", price: 3960 },
  { name: "3 x be quiet! Silent Wings 2", image: "images/hard/671-50.png", price: 5540 },
  { name: "3 x Gigabyte Aorus ARGB", image: "images/hard/18649-50.png", price: 6840 },
];

displaySavedBuilds();

let selectedItems = {
  cpu: null,
  motherboard: null,
  ram: null,
  videoCard: null,
  storage: null,
  cooler: null,
  hardDrive: null,
  case: null,
  psu: null,
  hdd: null,
};





const totalPriceEl = document.getElementById("totalPrice");
const selectedItemsEl = document.getElementById("selectedItems");

function updateSelectedItems() {
selectedItemsEl.innerHTML = '';
let totalPrice = 0;

for (const itemType in selectedItems) {
if (selectedItems.hasOwnProperty(itemType) && selectedItems[itemType]) {
const li = document.createElement("li");
li.textContent = selectedItems[itemType].name + ' - ' + selectedItems[itemType].price + " ₽";
selectedItemsEl.appendChild(li);
totalPrice += selectedItems[itemType].price;
}
}

totalPriceEl.textContent = "Итого: " + totalPrice + " руб.";
}

function openModal(itemType, filterFunction) {
const modal = {
cpu: cpuModal,
motherboard: motherboardModal,
ram: ramModal,
videoCard: videoCardModal,
storage: storageModal,
cooler: coolerModal,
case: caseModal,
psu: psuModal,
hdd: hddModal,
}[itemType];

const items = {
cpu: processors,
motherboard: motherboards,
ram: rams,
videoCard: videoCards,
storage: storages,
cooler: coolers,
case: cases,
psu: psus,
hdd: hddstorages,
}[itemType];

modal.modalContent.innerHTML = '';
items.filter(filterFunction).forEach(item => {
  const div = document.createElement("div");
  div.classList.add("modal-item");
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.marginBottom = "15px";
  div.innerHTML = `<img style="margin-right: 15px;" src="${item.image}" width="71" height="50"> ${item.name} - ${item.price} ₽`;

  div.addEventListener("click", () => {
    selectedItems[itemType] = item;
    updateSelectedItems();
    closeModal(modal.modal);
  });
  
  modal.modalContent.appendChild(div);
  
});



modal.modal.style.display = "block";
}

function closeModal(modal) {
modal.style.display = "none";
}

// Обработчики кликов на кнопки
dropdownBtn1.addEventListener("click", () => openModal("cpu", () => true));
dropdownBtn7.addEventListener("click", () => openModal("case", () => true));
dropdownBtn8.addEventListener("click", () => openModal("psu", () => true));
dropdownBtn9.addEventListener("click", () => openModal("hdd", () => true));
dropdownBtn2.addEventListener("click", () => {
const filterFunction = selectedItems.cpu ? item => item.socket === selectedItems.cpu.socket : () => true;
openModal("motherboard", filterFunction);
});
dropdownBtn3.addEventListener("click", () => {
const filterFunction = selectedItems.motherboard ? item => item.maxMemorySpeed <= selectedItems.motherboard.maxMemorySpeed : () => true;
openModal("ram", filterFunction);
});
dropdownBtn4.addEventListener("click", () => openModal("videoCard", () => true));
dropdownBtn5.addEventListener("click", () => openModal("storage", () => true));
dropdownBtn6.addEventListener("click", () => {
const filterFunction = selectedItems.cpu ? item => item.maxTdp >= selectedItems.cpu.tdp : () => true;
openModal("cooler", filterFunction);

});


indow.addEventListener("click", (event) => {
  if (event.target === cpuModal.modal) {
  closeModal(cpuModal.modal);
  } else if (event.target === motherboardModal.modal) {
  closeModal(motherboardModal.modal);
  } else if (event.target === ramModal.modal) {
  closeModal(ramModal.modal);
  } else if (event.target === videoCardModal.modal) {
  closeModal(videoCardModal.modal);
  } else if (event.target === storageModal.modal) {
  closeModal(storageModal.modal);
  } else if (event.target === hddModal.modal) {
  closeModal(hddModal.modal);
  } else if (event.target === coolerModal.modal) {
  closeModal(coolerModal.modal);
  } else if (event.target === psuModal.modal) {
  closeModal(psuModal.modal);
  } else if (event.target === caseModal.modal) {
  closeModal(caseModal.modal);
  }
});

function filterCpuByManufacturer(manufacturer) {
  displayItems("cpu", items => items.filter(item => item.manufacturer === manufacturer));
}

// Получение элементов кнопок фильтрации и добавление обработчиков событий
const filterAmdCpuButton = document.getElementById("filterAmdCpu");
const filterIntelCpuButton = document.getElementById("filterIntelCpu");

// Добавление обработчиков событий для кнопок фильтрации процессоров
filterAmdCpuButton.addEventListener("click", () => {
filterCpuByManufacturer("AMD");
});

filterIntelCpuButton.addEventListener("click", () => {
filterCpuByManufacturer("Intel");
});




function saveBuild() {
  const buildName = prompt("Введите имя для вашей сборки:");

  if (buildName) {
    const savedBuilds = JSON.parse(localStorage.getItem("savedBuilds")) || [];
    const newBuild = {
      name: buildName,
      items: selectedItems,
    };

    savedBuilds.push(newBuild);
    localStorage.setItem("savedBuilds", JSON.stringify(savedBuilds));
    alert(`Сборка "${buildName}" успешно сохранена!`);
  }
  displaySavedBuilds();
}

function loadBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem("savedBuilds")) || [];
  const build = savedBuilds[index];

  if (build) {
    selectedItems = build.items;

    // Обновление выбранных элементов
    for (const itemType in selectedItems) {
      const item = selectedItems[itemType];
      updateSelectedItems(itemType, item);
    }

    closeModal();
  }
}


function deleteBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem("savedBuilds")) || [];
  savedBuilds.splice(index, 1);
  localStorage.setItem("savedBuilds", JSON.stringify(savedBuilds));
  displaySavedBuilds();
}

function renameBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem("savedBuilds")) || [];
  const newBuildName = prompt("Введите новое имя для сборки:", savedBuilds[index].name);

  if (newBuildName) {
    savedBuilds[index].name = newBuildName;
    localStorage.setItem("savedBuilds", JSON.stringify(savedBuilds));
    displaySavedBuilds();
  }
}


function displaySavedBuilds() {
  const savedBuildsContainer = document.getElementById("savedBuildsContainer");
  const savedBuilds = JSON.parse(localStorage.getItem("savedBuilds")) || [];

  savedBuildsContainer.innerHTML = "<h3>Сохраненные сборки:</h3>";

  savedBuilds.forEach((build, index) => {
    const buildElement = document.createElement("div");
    buildElement.className = "saved-build";
    buildElement.style.display = "flex";
    buildElement.style.alignItems = "center";
    buildElement.style.width = "200px";

    const buildName = document.createElement("span");
    buildName.textContent = build.name;
    buildName.style.marginRight = "10px";
    buildElement.appendChild(buildName);

    const loadBuildBtn = document.createElement("button");
    loadBuildBtn.textContent = "Загрузить";
    loadBuildBtn.style.marginRight = "10px";
    loadBuildBtn.addEventListener("click", () => loadBuild(index));
    buildElement.appendChild(loadBuildBtn);

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "delete-icon";
    deleteIcon.innerHTML = "🗑️";
    deleteIcon.style.marginRight = "5px";
    deleteIcon.addEventListener("click", () => deleteBuild(index));
    buildElement.appendChild(deleteIcon);

    const renameIcon = document.createElement("span");
    renameIcon.className = "rename-icon";
    renameIcon.innerHTML = "✏️";
    renameIcon.addEventListener("click", () => renameBuild(index));
    buildElement.appendChild(renameIcon);

    savedBuildsContainer.appendChild(buildElement);
  });
} 

displaySavedBuilds();
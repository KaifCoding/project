const team = [
  {
    name: "Mohammad Kaif",
    edu: "BCA Final Year",
    image: "../images/kaif.jpg",
  },
  {
    name: "Alfaiz raza",
    edu: "BCA Final Year",
    image: "../images/alfaiz.jpeg",
  },
  {
    name: "Sehjan Baig",
    edu: "BCA Final Year",
    image: "../images/sehjan.jpeg",
  },
  {
    name: "Khushboo Verma",
    edu: "BCA Final Year",
    image: "https://dummyimage.com/80x80",
  },
  {
    name: "Aarti Meena",
    edu: "BCA Final Year",
    image: "https://dummyimage.com/80x80",
  },
];


const content = team.map(
  ({name, edu, image}) => `<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="${image}">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">${name}</h2>
                  <p class="text-gray-500">${edu}</p>
                </div>
              </div>
            </div>`
);

const teamContainer = document.getElementById("team-section");
teamContainer.innerHTML = content.join("");
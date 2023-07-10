document.addEventListener("DOMContentLoaded", function() {
  const chatBody = document.getElementById("chat-body");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // Define a dictionary of facts and information about space
  const knowledgeBase = {
      "What is your name?": "My name is Smartchat.",
      "How are you?": "I'm good, thank you!",
      "What is the weather today?": "Sorry, I cannot provide real-time weather information.",
      "What is a black hole?": "A black hole is a region of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.",
      "How far is the Sun from Earth?": "On average, the distance from the Sun to Earth is about 93 million miles or 150 million kilometers.",
      "What is the Big Bang theory?": "The Big Bang theory is the prevailing cosmological model that explains the origin and development of the universe.",
      "What are the different types of galaxies?": "There are three main types of galaxies: spiral galaxies, elliptical galaxies, and irregular galaxies.",
      "What is a supernova?": "A supernova is a powerful and luminous explosion that occurs at the end of a star's life cycle, often outshining an entire galaxy.",
      "What is a planet?": "A planet is a celestial body that orbits around a star, is spherical in shape, and has cleared its orbit of other debris.",
      "What is the Hubble Space Telescope?": "The Hubble Space Telescope is a space telescope that was launched into orbit in 1990 and has provided stunning images and valuable scientific data about space.",
      "What is the International Space Station (ISS)?": "The International Space Station is a modular space station in low Earth orbit where astronauts from various countries live and conduct scientific research.",
      "What is a satellite?": "A satellite is an object that orbits around a larger object in space. It can be natural, like a moon, or artificial, like a human-made spacecraft.",
      "What is the Mars Rover?": "The Mars Rover is a robotic vehicle sent by NASA to explore the surface of Mars, gather data, and conduct scientific experiments.",
      "What is the speed of light?": "The speed of light in a vacuum is approximately 299,792 kilometers per second (or about 186,282 miles per second).",
      "What is the Milky Way galaxy?": "The Milky Way is the galaxy in which our solar system is located. It is a barred spiral galaxy with billions of stars.",
      "What is a comet?": "A comet is a small celestial object composed of ice, dust, and rocky particles that orbits the Sun. When close to the Sun, it develops a glowing coma and, sometimes, a tail.",
      "What is a nebula?": "A nebula is a vast cloud of gas and dust in space. It is often the birthplace of new stars.",
      "What is the purpose of the James Webb Space Telescope?": "The James Webb Space Telescope (JWST) is a large, space-based observatory set to launch in 2021. It aims to study the universe's early galaxies, stars, and planets.",
      "What is a lunar eclipse?": "A lunar eclipse occurs when the Moon passes directly behind the Earth, into its shadow. This happens when the Sun, Earth, and Moon are precisely aligned.",
      "What is a solar eclipse?": "A solar eclipse occurs when the Moon passes between the Sun and the Earth, casting a shadow on Earth. This happens when the Sun, Moon, and Earth are precisely aligned.",
      "What is the Oort Cloud?": "The Oort Cloud is a hypothetical spherical cloud of icy objects that is believed to surround the Sun at a distance of about 2 light-years.",
      "What is a space probe?": "A space probe is an unmanned spacecraft designed to explore space and gather scientific data about celestial bodies and the universe.",
      "What is the age of the universe?": "The current estimated age of the universe is about 13.8 billion years.",
      "What is the capital of Bangladesh?": "The capital of Bangladesh is Dhaka.",
      "Who is the father of the nation of Bangladesh?": "Sheikh Mujibur Rahman is considered the father of the nation of Bangladesh.",
      "What is the national flower of Bangladesh?": "The national flower of Bangladesh is the Shapla (Water Lily).",
      "What is the official language of Bangladesh?": "The official language of Bangladesh is Bengali.",
      "When did Bangladesh gain independence?": "Bangladesh gained independence on March 26, 1971.",
      "Who wrote the national anthem of Bangladesh?": "The national anthem of Bangladesh, 'Amar Sonar Bangla,' was written by Rabindranath Tagore.",
      "What is the currency of Bangladesh?": "The currency of Bangladesh is the Bangladeshi Taka (BDT).",
      "What is the largest river in Bangladesh?": "The largest river in Bangladesh is the Padma River (Ganges).",
      "What is the highest peak in Bangladesh?": "The highest peak in Bangladesh is Keokradong, with an elevation of 986 meters.",
      "Who is the current Prime Minister of Bangladesh?": "The current Prime Minister of Bangladesh is Sheikh Hasina.",
      "What is the predominant religion in Bangladesh?": "Islam is the predominant religion in Bangladesh.",
      "What is the population of Bangladesh?": "As of the latest estimates, the population of Bangladesh is over 165 million.",
      "What is the national animal of Bangladesh?": "The national animal of Bangladesh is the Royal Bengal Tiger.",
      "What is the official sport of Bangladesh?": "The official sport of Bangladesh is Kabaddi.",
      "Which UNESCO World Heritage Site is located in Bangladesh?": "The Sundarbans, a mangrove forest, is a UNESCO World Heritage Site located in Bangladesh.",
      "What is the literacy rate in Bangladesh?": "The literacy rate in Bangladesh is approximately 75%.",
      "What is the national fruit of Bangladesh?": "The national fruit of Bangladesh is the Jackfruit.",
      "Who is the national poet of Bangladesh?": "Kazi Nazrul Islam is considered the national poet of Bangladesh.",
      "What is the area of Bangladesh in square kilometers?": "The area of Bangladesh is approximately 147,570 square kilometers.",
      "What is the main crop of Bangladesh?": "The main crop of Bangladesh is rice.",
      "What is Bangladesh?": "Bangladesh is a country located in South Asia, sharing its borders with India and Myanmar.Bangladesh is situated in the fertile Ganges-Brahmaputra Delta, with most of its land consisting of low-lying plains. The country has a diverse geography, including rivers, mangrove forests (such as the Sundarbans), and the Chittagong Hill Tracts.The capital city of Bangladesh is Dhaka, which is also its largest city. Other major cities include Chittagong, Khulna, Rajshahi, and Sylhet.With a population of over 166 million people (as of 2021), Bangladesh is the eighth most populous country in the world. The people of Bangladesh are known as Bangladeshis or Bengalis.The official language of Bangladesh is Bengali, and it is spoken by the majority of the population. English is also widely understood and used in business and education.Islam is the predominant religion in Bangladesh, with over 90% of the population being Muslim. Other religions, including Hinduism, Buddhism, and Christianity, are also practiced by smaller communities.Bangladesh is home to various natural attractions. The Sundarbans, a UNESCO World Heritage Site, is the world's largest mangrove forest and a habitat for the Bengal tiger. The country also has beautiful rivers, lakes, and tea gardens in its northeastern region.",
      "Hi": "Hi! How are you?",
      "I'm fine.": "I'm happy to know this. :->",
      "What is addition?": "Addition is the arithmetic operation of combining two or more numbers to find their total sum.",
      "What is multiplication?": "Multiplication is the arithmetic operation of repeated addition. It is used to find the result of adding a number to itself multiple times.",
      "What is subtraction?": "Subtraction is the arithmetic operation of taking one number away from another to find the difference.",
      "What is division?": "Division is the arithmetic operation of sharing a quantity equally into a specified number of parts.",
      "What is a fraction?": "A fraction represents a part of a whole or a ratio between two numbers, expressed as one number divided by another with a line in between.",
      "What is a decimal?": "A decimal is a number with a decimal point, used to represent a part of a whole or a fraction.",
      "What is a percentage?": "A percentage is a number or ratio expressed as a fraction of 100. It represents a portion or proportion out of 100.",
      "What is a prime number?": "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
      "What is a composite number?": "A composite number is a natural number greater than 1 that is not prime. It has multiple positive divisors other than 1 and itself.",
      "What is a factor?": "A factor of a number is a whole number that divides evenly into another number without leaving a remainder.",
      "What is a multiple?": "A multiple of a number is a product of that number and any other whole number.",
      "What is a square number?": "A square number is the product of an integer multiplied by itself.",
      "What is a cube number?": "A cube number is the product of an integer multiplied by itself twice.",
      "What is a square root?": "The square root of a number is a value that, when multiplied by itself, gives the original number.",
      "What is a cube root?": "The cube root of a number is a value that, when multiplied by itself twice, gives the original number.",
      "What is a geometric sequence?": "A geometric sequence is a sequence of numbers in which each term after the first is found by multiplying the previous term by a constant ratio.",
      "What is an arithmetic sequence?": "An arithmetic sequence is a sequence of numbers in which each term after the first is found by adding a constant difference to the previous term.",
      "What is the Pythagorean theorem?": "The Pythagorean theorem states that in a right-angled triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.",
      "What is the area of a triangle?": "The area of a triangle is half the product of the base and the height.",
      "What is the perimeter of a rectangle?": "The perimeter of a rectangle is the sum of the lengths of all its sides.",
      "What is the volume of a cube?": "The volume of a cube is the product of the length of its side raised to the power of 3.",
      "What is the circumference of a circle?": "The circumference of a circle is the distance around the edge of the circle.",
      "What is the area of a circle?": "The area of a circle is the number of square units enclosed by the circle.",
      "What is the formula for the area of a rectangle?": "The formula for the area of a rectangle is the product of its length and width.",
      "What is the formula for the area of a triangle?": "The formula for the area of a triangle is half the product of its base and height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a sphere?": "The formula for the volume of a sphere is four-thirds times pi times the radius cubed.",
      "What is the formula for the perimeter of a square?": "The formula for the perimeter of a square is four times the length of one of its sides.",
      "What is the formula for the perimeter of a rectangle?": "The formula for the perimeter of a rectangle is twice the sum of its length and width.",
      "What is the formula for the perimeter of a triangle?": "The formula for the perimeter of a triangle is the sum of the lengths of its three sides.",
      "What is the formula for the circumference of a circle?": "The formula for the circumference of a circle is two times pi times the radius.",
      "What is the formula for the area of a circle?": "The formula for the area of a circle is pi times the square of the radius.",
      "What is the formula for the area of a trapezoid?": "The formula for the area of a trapezoid is half the product of the sum of its bases and its height.",
      "What is the formula for the area of a parallelogram?": "The formula for the area of a parallelogram is the product of its base and height.",
      "What is the formula for the area of a rhombus?": "The formula for the area of a rhombus is half the product of its diagonals.",
      "What is the formula for the surface area of a rectangular prism?": "The formula for the surface area of a rectangular prism is the sum of the areas of its six faces.",
      "What is the formula for the surface area of a cylinder?": "The formula for the surface area of a cylinder is the sum of the areas of its two bases and its lateral surface area.",
      "What is the formula for the surface area of a sphere?": "The formula for the surface area of a sphere is four times pi times the square of its radius.",
      "What is the formula for the surface area of a cone?": "The formula for the surface area of a cone is the sum of the area of its base and its lateral surface area.",
      "What is the formula for the surface area of a pyramid?": "The formula for the surface area of a pyramid depends on its shape and can vary.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formulafor the volume of a pyramid?": "The formula for the volume of a pyramid depends on its shape and can vary.",
      "What is the formula for the volume of a sphere?": "The formula for the volume of a sphere is four-thirds times pi times the radius cubed.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cube?": "The formula for the volume of a cube is the product of the length of its side raised to the power of 3.",
      "What is the formula for the volume of a sphere?": "The formula for the volume of a sphere is four-thirds times pi times the radius cubed.",
      "What is the formula for the volume of a pyramid?": "The formula for the volume of a pyramid depends on its shape and can vary.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cube?": "The formula for the volume of a cube is the product of the length of its side raised to the power of 3.",
      "What is the formula for the volume of a sphere?": "The formula for the volume of a sphere is four-thirds times pi times the radius cubed.",
      "What is the formula for the volume of a pyramid?": "The formula for the volume of a pyramid depends on its shape and can vary.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cube?": "The formula for the volume of a cube is the product of the length of its side raised to the power of 3.",
      "What is the formula for the volume of a sphere?": "The formula for the volume of a sphere is four-thirds times pi times the radius cubed.",
      "What is the formula for the volume of a pyramid?": "The formula for the volume of a pyramid depends on its shape and can vary.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cube?": "The formula for the volume of a cube is the product of the length of its side raised to the power of 3.",
      "What is the formula for the volume of a sphere?": "The formula for the volume of a sphere is four-thirds times pi times the radius cubed.",
      "What is the formula for the volume of a pyramid?": "The formula for the volume of a pyramid depends on its shape and can vary.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      "What is the formula for the volume of a cone?": "The formula for the volume of a cone is one-third times the area of its base times its height.",
      "What is the formula for the volume of a cylinder?": "The formula for the volume of a cylinder is the product of the area of its base and its height.",
      "What is the formula for the volume of a rectangular prism?": "The formula for the volume of a rectangular prism is the product of its length, width, and height.",
      // Add more math concepts and their explanations here
    };

  // Function to create a chat message
  function createMessage(message, isBot) {
      const chatMessage = document.createElement("div");
      chatMessage.className = "chat-message" + (isBot ? " bot" : " user");
      const paragraph = document.createElement("p");
      paragraph.innerText = message;
      chatMessage.appendChild(paragraph);
      chatBody.appendChild(chatMessage);
      chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Function to generate a response based on the user's input
  function generateResponse(userInput) {
      const response = knowledgeBase[userInput];
      return response ? response :"This question's answer can't be genareted! ";
  }


  // Function to handle user input
  function handleUserInput() {
      const message = userInput.value;
      if (message.trim() !== "") {
          createMessage(message, false);
          const response = generateResponse(message);
          setTimeout(function() {
              createMessage(response, true);
          }, 500);
          userInput.value = "";
      }
  }

  // Event listeners
  userInput.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          sendButton.click();
      }
  });

  sendButton.addEventListener("click", function() {
      handleUserInput();
  });
  
  // Initial focus on user input
  userInput.focus();
});

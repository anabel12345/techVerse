// Import necessary modules and CSS
import { resizePage, centerPage, draggable } from './page-display'; // Importing functions for page manipulation
import WITManager from './WIT-manager'; // Importing a manager for Women in Tech data
// Import images
import baldonadoIMG from './images/baldonado.jpeg';
import jacobyIMG from './images/jacoby.jpg';
import mannIMG from './images/mann.jpg';
import hooverIMG from './images/hoover.png';
import laiIMG from './images/lai.png';
import howardIMG from './images/howard.jpg';
import pheonixIMG from './images/pheonix.jpg';
import bryantIMG from './images/bryant.jpg';
import saujaniIMG from './images/saujani.jpeg';
import mitraIMG from './images/mitra.jpeg';
import zhangIMG from './images/zhang.jpg';
import nadeemIMG from './images/nadeem.jpg';
import mohamedIMG from './images/mohamed.jpg';
import nyinamwiruIMG from './images/nyinamwiru.png';
import pearceIMG from './images/pearce.jpeg';
import vidalIMG from './images/vidal.jpg';
import dinIMG from './images/din.jpg';
import liuIMG from './images/liu.jpg';
import latifIMG from './images/latif.jpg';
import belvinIMG from './images/belvin.jpg';
import kellyIMG from './images/kelly.jpg';
import ottunIMG from './images/ottun.jpg';
import carrigyIMG from './images/carrigy.jpeg';
import riekenIMG from './images/rieken.jpg';
import gibrehiwetIMG from './images/gebrehiwet.png';
import surattIMG from './images/suratt.jpg';
import rodriguezIMG from './images/rodriguez.jpg';
import kikinaIMG from './images/kikina.jpg';
import mcarthurIMG from './images/mcarthur.jpg';
import rubinsIMG from './images/rubins.jpg';
import feinbergIMG from './images/feinberg.jpg';
import gcesGirlsWhoCode from './images/gces_girlswhocode.png';
import luoIMG from './images/luo.jpg';
import gaoIMG from './images/gao.jpeg';
import piersonIMG from './images/pierson.jpeg';
import perkinsIMG from './images/perkins.jpg';
import hZhangIMG from './images/h_zhang.jpg';
import forwardIMG from './images/forward.jpg';
import wengerIMG from './images/wenger.jpg';
import kalloshIMG from './images/kallosh.jpg';
import cardDisplayHandler from './card-display'; // Importing a function to handle card display
import lineStyles from './line-styles.css'; // Importing styles for connecting lines
import mainStyles from './styles.css'; // Importing main styles for the webpage
import cardStyles from './card-styles.css'; // Importing styles for the card display
import dialogStyles from './dialog-styles.css'; // Import styles for the instructions dialog

// Select the content element from the DOM
const content = document.querySelector('#content');

// Select the instructions dialog from the DOM
const dialog = document.querySelector('#dialog');

// Select button to close dialog from the DOM
const closeBtn = document.querySelector('#close');

// Create Women In Tech Manager object
const WITManagerObj = WITManager();

// Add information about Karen Mae Baldonado to the Women In Tech Manager object
WITManagerObj.addWIT({
  name: 'Karen Mae Baldonado',
  bio: " Karen Mae Baldonado is an intern at NASA's Langley Research Center. She studied mechanical engineering and researched how rovers can land on other planets (particularly Mars).",
  image: baldonadoIMG,
});

// Add information about Whitney Jacoby to the Women In Tech Manager object
WITManagerObj.addWIT({
  name: 'Whitney Jacoby',
  bio: ' Whitney Jacoby taught herself web development in two years. She was then hired at Kate Spade and is in charge of coding their website. Her favorite part about coding is creating things!',
  image: jacobyIMG,
});

// Add information about Nicole Aunapu Mann
WITManagerObj.addWIT({
  name: 'Nicole Aunapu Mann',
  bio: 'Nicole Aunapu Mann is a Mechanical Engineer who attended the U.S. Naval Academy. She is a part of the U.S. Marine Corps and the first indigenous woman to go to space (SpaceX Crew-5 mission). She is a member of the Wailacki tribe.',
  image: mannIMG,
});

// Add information about P.J. (Tricia) Hoover
WITManagerObj.addWIT({
  name: 'P.J. (Tricia) Hoover',
  bio: 'Tricia Hoover aught herself how to code in BASIC on the Commodore 64. She graduated from Virginia Tech and became an electrical engineer (designing computer chips at Motorola and Intel). She now writes books for middle grade.  ',
  image: hooverIMG,
});

// Add information about Laurie Lai
WITManagerObj.addWIT({
  name: 'Laurie Lai',
  bio: ' Laurie Lai is the Senior Counsel for Cybersecurity at CISA. Her advice to girls interested in cybersecurity is to “Work hard at what interests you. Your path may not look like anyone else’s, and that’s okay. Be persistent when something is confusing or hard.”',
  image: laiIMG,
});

// Add information about Dr. Ayanna Howard
WITManagerObj.addWIT({
  name: 'Dr. Ayanna Howard',
  bio: 'Dr. Ayanna Howard earned her Ph.D. in Electrical Engineering by the age of 27 and worked for the Jet Propulsion Labratory. She is currently the dean of the College of Engineering at Ohio State University and is the first woman in this position.',
  image: howardIMG,
});

// Add information about Adrienne Pheonix
WITManagerObj.addWIT({
  name: 'Adrienne Pheonix',
  bio: 'Adrienne Pheonis is an it Cybersecurity Specialist at CISA. Her favorite part of working in tech is the new challenges. She says that “Cybersecurity is an ever-changing field that requires us to think ahead as well as react to what’s happening now,"',
  image: pheonixIMG,
});

// Add information about Kimberly Bryant
WITManagerObj.addWIT({
  name: 'Kimberly Bryant',
  bio: 'Kimberly Bryant is the founder of Black Girls CODE, a nonprofit that introduces and supports girls of color to computer science and technology. She is also a Biotechnology Engineer and recieved the Jefferson Award for Community Service for her work in supporting girls of color.',
  image: bryantIMG,
});

// Add information about Reshma Saujani
WITManagerObj.addWIT({
  name: 'Reshma Saujani',
  bio: 'Reshma Saujani is the founder of Girls Who Code (girlswhocode.com), a non-profit working to close the gender gap in tech. She is also the founder of Moms First and worked to create the app AI for Paid Leave. She encourages girls to be "Brave, not Perfect"',
  image: saujaniIMG,
});

// Add information about Paromita Mitra
WITManagerObj.addWIT({
  name: 'Paromita Mitra',
  bio: 'Paromita Mitra is a human interface engineer at NASA who worked on spacesuit technologies. Her advice to anyone desiring to work in STEM or solve problems is to "dig deeper into whatever that problem might be and find what makes you passionate”.',
  image: mitraIMG,
});

// Add information about Duhan Zhang
WITManagerObj.addWIT({
  name: 'Duhan Zhang',
  bio: 'Duhan Zhang works at the MIT Department of Materials Science and Engineering. She has a doctorate in Mechanical Engineering from Cornell University. Her research takes on climate change and environmental protection.',
  image: zhangIMG,
});

// Add information about Mariam Mohamed
WITManagerObj.addWIT({
  name: 'Mariam Mohamed',
  bio: 'Mariam Mohamed is a computer scientist and Strategist at DTE Energy - a company that provides electricity to 2.2 million people and natural gas to 1.2 million people. She learned about computer science in high school by taking an AP Computer Science course. She also wrote code for an app that provides reports on safety at DTE Energy, a system used by over 10,000 employees.',
  image: mohamedIMG,
});

// Add information about Ayman Nadeem
WITManagerObj.addWIT({
  name: 'Ayman Nadeem',
  bio: 'Ayman Nadeem is a software engineer at GitHub. She initially studies artificial intelligence, creating her first business (Valley Innovations) at the age of 17. Her advice to people interested in tech is that "the easiest way to get noticed is by working on side projects that demonstrate your skills"',
  image: nadeemIMG,
});

// Add information about Daniah Din
WITManagerObj.addWIT({
  name: 'Daniah Din',
  bio: 'Daniah Din first worked as an intern at SurveyMonkey. She was then hired as an Account Manager. She now works at Asana. She feels that "being a Muslim at work is a blessing as it serves as a guide for me in all my interactions in the business world." and "when I have to make tough decisions, it’s very much relevant and helpful."',
  image: dinIMG,
});

// Add information about Esther Ninsiima Nyinamwiru
WITManagerObj.addWIT({
  name: 'Esther Ninsiima Nyinamwiru',
  bio: 'Esther Ninsiima Nyinamwiru is a Product Owner and Tech Talent Manager in Uganda. She is great at manging software development teams and projects. She has experienced significant success in the tech industry.',
  image: nyinamwiruIMG,
});

// Add information about Beth Pearce
WITManagerObj.addWIT({
  name: 'Beth Pearce',
  bio: 'Beth Pearce is a graduate student at the Massachusetts Institute of Technology. She works to understand successful immune responses to therapy (how our body fights germs, and how scientists can help it fight germs).',
  image: pearceIMG,
});

// Add information about Kr Lui
WITManagerObj.addWIT({
  name: 'Kr Lui',
  bio: 'Kr Lui is an advocate for gender equality, human rights, and disability inclusion. She has worked with several companies, including Salesforce, Uber, Capital One, and Cisco. She is currently the Head of Brand Accessibility at Google, where she uses her experiences as a deaf person to empower "the voice of millions from the diverse disabled community".',
  image: liuIMG,
});

// Add information about Eva Maria Lopez Vidal
WITManagerObj.addWIT({
  name: 'Eva Maria Lopez Vidal',
  bio: 'Eva Maria Lopez Vidal is a postdoc at the chemistry department at MIT from Spain. She is interested in using science and business to make an impact. She lobes solving complex real-life problems, working with people, and using her creativity.',
  image: vidalIMG,
});

// Add information about Sam Latif
WITManagerObj.addWIT({
  name: 'Sam Latif',
  bio: 'Sam Latif is the global accessibility leader at Proctor&Gamble. Her creative innovations are driven by her experiences with vision loss. In 2021, she made the Tide Detergent 2021 Super Bowl commercial feature a descriptive video to include the blind and low vision community.',
  image: latifIMG,
});

// Add information about Carina Belvin
WITManagerObj.addWIT({
  name: 'Carina Belvin',
  bio: 'Carina Belvin is a physics PhD student at MIT. She earned her bachelor (4 year) degree in Physics and Mathematics from Wellesley College. She is also and advocate for women in STEM (through the Graduate Women in Physics group at MIT and Science Club for Girls).',
  image: belvinIMG,
});

// Add information about Rachel Kelly
WITManagerObj.addWIT({
  name: 'Rachel Kelly',
  bio: 'Rachel Kelly is the the Deputy Chief, Cybersecurity Shared Services Offics at CISA. She says that cybersecurity is exciting as it is always changing and allows her to make an impact. She says that "Once you are out there, the help and support you’ll receive from other women in the field will be contagious." and "you just need to dive in and don’t look back" ',
  image: kellyIMG,
});

// Add information about Monsurat Ottun
WITManagerObj.addWIT({
  name: 'Monsurat Ottun',
  bio: 'Monsurat Ottun is an IT Cybersecurity Specialist and Cybersecurity Advisor at CISA. Her advice to girls interested in cybersecuity is to "Build a network, learn as much as you can, and understand that the possibilities are potentially limitless."',
  image: ottunIMG,
});

// Add information about Meskerem Gebrehiwet
WITManagerObj.addWIT({
  name: 'Meskerem Gebrehiwet',
  bio: 'Meskerem Gebrehiwet is a Security Consulting Analyst at Accenture. She loves helping organizations create secure environments and raising awareness about cybersecurity. She says that cybersecurity "is not only for tech savvy or those who have “hackers” skill, so don’t be intimidated to explore and consider the field"',
  image: gibrehiwetIMG,
});

// Add information about Anne Carrigy
WITManagerObj.addWIT({
  name: 'Anne Carrigy',
  bio: 'Anne Carrigy is the Chief Information Officer at Logitech. The organization she leads has 350 team members and exists in over 10 countries. She advocates for gender equality - in fact, 44% of her team are women.',
  image: carrigyIMG,
});

// Add information about Beth Rieken
WITManagerObj.addWIT({
  name: 'Beth Rieken',
  bio: 'Beth Rieken is an aerospace engineer working to evaluate and improve the Space Lauch System (NASAs most powerful rocket) at wind tunnel facilities. The SLS will be used in the Artemis Moon landing program.',
  image: riekenIMG,
});

// Add information about Kate Suratt
WITManagerObj.addWIT({
  name: 'Kate Suratt',
  bio: 'Kate Suratt is the Business and Strategic Assessments Lead for the Engineering Directorate at Johnson Space Center. She has worked there for 17 years and is a member of the LGBTQ Employee Resource Group. She makes it a priority to create a "safe place for others". ',
  image: surattIMG,
});

// Add information about Abigail Rodriguez
WITManagerObj.addWIT({
  name: 'Abigail Rodriguez',
  bio: 'Abigail Rodriguez was an intern at the Kennedy Space Center in Florida, and then an intern at the Glenn Research Center in Cleveland. She grew up in Añasco, Puerto Rico, and participated in multiple STEM opportunities in the public school system. She graduated from the University of Puerto Rico at Mayagüez with a degree in civil engineering. A decade later, she is in charge of safety assurance for Fission Surface Power project - a project intending to design a fission power system.',
  image: rodriguezIMG,
});

// Add information about Anna Kikina
WITManagerObj.addWIT({
  name: 'Anna Kikina',
  bio: 'Anna Kikina is a Russian cosmonaut who graduated from the Novosibirsk State Acadeny of Water Transport with a degree in economics and management. She traveled to space in October 2022 as part of the Crew-5 CCP mission, launching from the Kennedy Space Center in Florida. She takes photos for Crew Earth Observations that researchers use to determine how Earth is changing.',
  image: kikinaIMG,
});

// Add information about Megan McArthur
WITManagerObj.addWIT({
  name: 'Megan McArthur',
  bio: 'Megan McArthur operated a robotic arm during a mission to service the Hubble Space Telescope (which is still functional). She is also part of NASAs SpaceX Crew-2 mission which launched on April 21, 2021. She researched wheteher engineered tissues created in space could be used to test possible muscle loss treatments.',
  image: mcarthurIMG,
});

// Add information about Kate Rubins
WITManagerObj.addWIT({
  name: 'Kate Rubins',
  bio: 'Kate Rubins spent 3 months on the International Space Station in 2016, and traveled to space again in 2020. She was the first person to sequence DNA during her first trip. During her second trip, she used DNA sequencing to diagnose medical conditions. She has a degree in molecular biology as well as a doctorate in cancer biology, and has been in charge of a research lab in Africa studying viruses.',
  image: rubinsIMG,
});

// Add information about the Grassy Creek Girls Who Code Club
WITManagerObj.addWIT({
  name: 'GCES Girls Who Code',
  bio: 'The GCES Girls Who Code club is composed of bright fourth and fifth grade girls interested in tech. Their ambitions range from entrepreneurship to cybersecurity to web design. In 2023, they designed their own video game characters, coded Scratch projects, and met with women working in tech, and much more.',
  image: gcesGirlsWhoCode,
});

// Add information about Danielle Feinberg
WITManagerObj.addWIT({
  name: 'Danielle Feinberg',
  bio: 'Danielle Feinberg is the directory of photography at Pixar. She has designed the lighting for several popular animated movies. She helped develop code that tracks how light appears in water based on different depths for Finding Nemo, as well as code that put piping systems over the factory in Monsters Inc.',
  image: feinbergIMG,
});

// Add information about Yanyi Luo
WITManagerObj.addWIT({
  name: 'Yanyi Luo',
  bio: 'Yanyi Luo is a software engineer at AppNexus. She discovered compupter science in college, and felt like it was an avenue to imp rove the world. Her favorite part about her job is that she gets to make things that other people will use. ',
  image: luoIMG,
});

// Add information about Angela Gao
WITManagerObj.addWIT({
  name: 'Angela Gao',
  bio: 'Angela Gao is a PhD student at the California Institute of Technology. She is interested in computational imaging - using a combination of hardware and software to create precise images from measured information.',
  image: gaoIMG,
});

// Add information about Alyssa Pierson
WITManagerObj.addWIT({
  name: 'Alyssa Pierson',
  bio: 'Alyssa Pierson has a BS in engineering and an MS and PhD in Mechanical Engineering. She is now a research scientist in the field of Computer Science and Artificial Intelligence at MIT.',
  image: piersonIMG,
});

// Add information about Melanie Perkins
WITManagerObj.addWIT({
  name: 'Melanie Perkins',
  bio: 'Melanie Perkins is the CEO of Canva, an online graphic-design tool used by over 100 million people worldwide. She says that “we could go the easy route, or we can go the route that is terrifying, and it’s the terrifying route that usually pays off in the end.” ',
  image: perkinsIMG,
});

// Add information about Haiyan Zhang
WITManagerObj.addWIT({
  name: 'Haiyan Zhang',
  bio: 'Haiyan Zhang is the Innovation Director at Microsoft Research and do-founded OpenIDEO. She invented a tremor-reducing watch called "Project Emma" to help people with Parkinsons disease write and draw.',
  image: hZhangIMG,
});

// Add information about Danielle Forward
WITManagerObj.addWIT({
  name: 'Danielle Forward',
  bio: 'Danielle Forward is a Product Designer at Facebook. She grew up loving art and animation, and discovered the field of technology in college. She enjoys using technology to address problems, and is the founder of Natives Rising, an organization that promotes Native American role models in tech.',
  image: forwardIMG,
});

// Add information about Brittany Wenger
WITManagerObj.addWIT({
  name: 'Brittany Wenger',
  bio: 'Brittany Wenger created an algorithm (Cloud4Cancer) that determines if a breat mass is cancerous.',
  image: wengerIMG,
});

// Add information about Renata Kallosh
WITManagerObj.addWIT({
  name: 'Renata Kallosh',
  bio: 'Renata Kallosh is a professor at the Stanford Physics Department. She is interested in explaining the origin of the universe as well as its expansion and works to analyze data from the Large Hadron Collider.',
  image: kalloshIMG,
});

// Create object to handle display of the information in WITManager
const cardDisplay = cardDisplayHandler(WITManagerObj.accessArr(), content);

window.addEventListener('load', () => {
  setTimeout(() => {
    // Resize content element based on the number of items in WITManager
    resizePage(
      1.5,
      2,
      content,
      WITManagerObj.accessArr().length * 80,
      WITManagerObj.accessArr().length * 80,
    );

    console.log(dialog);
    // Show dialog with instructions
    dialog.showModal();

    // Center the user within the page
    centerPage();

    // Make the page draggable
    draggable(content);

    // Position the card elements within the content
    cardDisplay.positionElements();

    // Generate connecting lines between card elements
    cardDisplay.generateLines();
  }, 0);
});

window.addEventListener('resize', () => {
  resizePage(
    1.5,
    1.5,
    content,
    WITManagerObj.accessArr().length * 300,
    WITManagerObj.accessArr().length * 300,
  );
});

closeBtn.addEventListener('click', () => { // close dialog on click of close button
  dialog.close();
  dialog.style.display = 'none';
  console.log(dialog);
});

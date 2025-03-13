document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("languageselect");
    const translations = {
        English: {
            about: "About",
            aboutText: "With over 10 years of experience capturing the essence of surfing, Kiko Neves is a professional photographer based in Ericeira, Portugal—one of the most iconic destinations for wave lovers. Specializing in capturing unique moments in the sea, Kiko is known for his keen eye and ability to transform each surfed wave into an unforgettable memory.",
            aboutText2: "Serving clients from all over the world, many of whom discover their passion for surfing during lessons in the region, Kiko combines technique, creativity, and a genuine connection with the surfing lifestyle to deliver images that tell stories. Whether for beginners or experienced surfers, his work is a celebration of waves, movement, and the unique energy of Ericeira.",
            aboutText3: "Welcome to Kiko Neves' world—where every click is an invitation to relive the excitement of surfing!",
            services: "Services",
            partners:"Partners",
            partnerName: "3'SURFERS",
            partnerText1: "We are a surf school with the goal of providing a unique and unforgettable surfing experience, not just in summer but throughout the year. We take our students to find the best waves in Portugal according to their skill level, aiming to teach moral and civic values through the sport and the wonderful surfing lifestyle.",
            partnerText2: "We are like a family, always ready to welcome new members and integrate them into our environment, ensuring their safety in the water, proper equipment, highly trained instructors, and above all, lots of fun. Whether you are a beginner with no experience or an advanced surfer, we are here to provide great surfing lessons and meet all your expectations.",
            contactText: "Have any questions or want to book a surf photoshoot? Send me a message!",
            contactEmail: "Get in touch using the form or send an email to: kikonevesfotografia@gmail.com",
            ericeiratext: "Located on Portugal’s west coast, Ericeira is a true paradise for surfing lovers. Recognized as Europe’s first World Surfing Reserve, this charming fishing village is famous for its perfect waves and diverse surf spots, attracting surfers of all levels—from beginners to professionals. Iconic beaches like Ribeira d'Ilhas, Coxos, and Foz do Lizandro offer breathtaking landscapes and excellent surfing conditions.",
            ericeiratext2:"Beyond surfing, Ericeira captivates visitors with its relaxed atmosphere, blending local traditions with a vibrant coastal lifestyle. It is the perfect destination for those seeking adventure, nature, and the authentic Portuguese seaside spirit.",
        },
        Deutsch: {
            about: "Über",
            aboutText: "Mit über 10 Jahren Erfahrung in der Erfassung des Essenz des Surfens ist Kiko Neves ein professioneller Fotograf mit Sitz in Ericeira, Portugal—einem der ikonischsten Ziele für Wellenliebhaber. Er ist darauf spezialisiert, einzigartige Momente im Meer festzuhalten und ist bekannt für seinen scharfen Blick und die Fähigkeit, jede gewellte Welle in eine unvergessliche Erinnerung zu verwandeln.",
            aboutText2: "Wir bedienen Kunden aus der ganzen Welt, von denen viele ihre Leidenschaft fürs Surfen während des Unterrichts in der Region entdecken. Kiko kombiniert Technik, Kreativität und eine echte Verbindung zum Surf-Lifestyle, um Bilder zu liefern, die Geschichten erzählen. Ob für Anfänger oder erfahrene Surfer, seine Arbeit ist eine Feier der Wellen, Bewegung und der einzigartigen Energie von Ericeira.",
            aboutText3: "Willkommen in der Welt von Kiko Neves—wo jeder Klick eine Einladung ist, die Aufregung des Surfens erneut zu erleben!",
            services: "Dienste",
            partners:"Partner",
            partnerName: "3'SURFERS",
            partnerText1: "Wir sind eine Surfschule mit dem Ziel, ein einzigartiges und unvergessliches Surferlebnis zu bieten, nicht nur im Sommer, sondern das ganze Jahr über. Wir nehmen unsere Schüler mit, um die besten Wellen in Portugal entsprechend ihrem Fähigkeitsniveau zu finden, mit dem Ziel, moralische und zivile Werte durch den Sport und den wunderbaren Surfer-Lifestyle zu vermitteln.",
            partnerText2: "Wir sind wie eine Familie, immer bereit, neue Mitglieder willkommen zu heißen und sie in unsere Umgebung zu integrieren, wobei wir ihre Sicherheit im Wasser, die richtige Ausrüstung, hochqualifizierte Lehrer und vor allem viel Spaß gewährleisten. Ob du ein Anfänger ohne Erfahrung oder ein fortgeschrittener Surfer bist, wir sind hier, um dir großartige Surfstunden zu bieten und all deine Erwartungen zu erfüllen.",
            contactText: "Hast du Fragen oder möchtest ein Surf-Fotoshooting buchen? Schick mir eine Nachricht!",
            contactEmail: "Nimm über das Formular Kontakt auf oder sende eine E-Mail an: kikonevesfotografia@gmail.com",
            ericeiratext: "An der Westküste Portugals gelegen, ist Ericeira ein wahres Paradies für Surfliebhaber. Als Europas erstes World Surfing Reserve anerkannt, ist dieses charmante Fischerdorf bekannt für seine perfekten Wellen und vielfältigen Surfspots, die Surfer aller Könnerstufen anziehen – von Anfängern bis zu Profis. Ikonische Strände wie Ribeira d'Ilhas, Coxos und Foz do Lizandro bieten atemberaubende Landschaften und ausgezeichnete Surfbedingungen.",
            ericeiratext2:"Abseits des Surfens fasziniert Ericeira Besucher mit seiner entspannten Atmosphäre, die lokale Traditionen mit einem lebendigen Küstenlebensstil verbindet. Es ist das perfekte Reiseziel für alle, die Abenteuer, Natur und den authentischen portugiesischen Küstengeist suchen.",
          }, 
        Français: {
            about: "À propos",
            aboutText: "Avec plus de 10 ans d'expérience à capturer l'essence du surf, Kiko Neves est un photographe professionnel basé à Ericeira, au Portugal—l'un des endroits les plus emblématiques pour les amoureux des vagues. Spécialisé dans la capture de moments uniques en mer, Kiko est reconnu pour son œil affûté et sa capacité à transformer chaque vague surfée en un souvenir inoubliable.",
            aboutText2: "Au service de clients venus du monde entier, dont beaucoup découvrent leur passion pour le surf lors de cours dans la région, Kiko combine technique, créativité et une véritable connexion avec le style de vie du surf pour livrer des images qui racontent des histoires. Que ce soit pour les débutants ou les surfeurs expérimentés, son travail est une célébration des vagues, du mouvement et de l'énergie unique d'Ericeira.",
            aboutText3: "Bienvenue dans l'univers de Kiko Neves—où chaque clic est une invitation à revivre l'excitation du surf!",
            services: "Services",
            partners:"Partenaires",
            partnerName: "3'SURFERS",
            partnerText1: "Nous sommes une école de surf avec pour objectif d'offrir une expérience de surf unique et inoubliable, non seulement en été, mais tout au long de l'année. Nous emmenons nos élèves à la recherche des meilleures vagues au Portugal en fonction de leur niveau de compétence, dans le but d'enseigner des valeurs morales et civiques à travers le sport et le merveilleux mode de vie du surf.",
            partnerText2: "Nous sommes comme une famille, toujours prêts à accueillir de nouveaux membres et à les intégrer dans notre environnement, en garantissant leur sécurité dans l'eau, un équipement approprié, des instructeurs hautement qualifiés et surtout, beaucoup de plaisir. Que vous soyez débutant sans expérience ou surfeur avancé, nous sommes là pour vous offrir d'excellentes leçons de surf et répondre à toutes vos attentes.",
            contactText: "Vous avez des questions ou souhaitez réserver une séance photo de surf ? Envoyez-moi un message !",
            contactEmail: "Contactez-nous via le formulaire ou envoyez un e-mail à : kikonevesfotografia@gmail.com",
            ericeiratext: "Située sur la côte ouest du Portugal, Ericeira est un véritable paradis pour les amateurs de surf. Reconnue comme la première Réserve Mondiale de Surf d’Europe, ce charmant village de pêcheurs est célèbre pour ses vagues parfaites et ses spots de surf variés, attirant des surfeurs de tous niveaux, des débutants aux professionnels. Des plages emblématiques comme Ribeira d'Ilhas, Coxos et Foz do Lizandro offrent des paysages à couper le souffle et d'excellentes conditions de surf.",
            ericeiratext2:"Au-delà du surf, Ericeira captive les visiteurs par son atmosphère détendue, mêlant traditions locales et style de vie côtier animé. C’est la destination idéale pour ceux qui recherchent aventure, nature et l’authentique esprit balnéaire portugais.",
        },
        Español: {
            about: "Acerca de",
            aboutText: "Con más de 10 años de experiencia capturando la esencia del surf, Kiko Neves es un fotógrafo profesional con sede en Ericeira, Portugal—uno de los destinos más icónicos para los amantes de las olas. Especializado en capturar momentos únicos en el mar, Kiko es conocido por su aguda mirada y habilidad para transformar cada ola surfeada en un recuerdo inolvidable.",
            aboutText2: "Atendemos a clientes de todo el mundo, muchos de los cuales descubren su pasión por el surf durante las lecciones en la región. Kiko combina técnica, creatividad y una genuina conexión con el estilo de vida del surf para ofrecer imágenes que cuentan historias. Ya sea para principiantes o surfistas experimentados, su trabajo es una celebración de las olas, el movimiento y la energía única de Ericeira.",
            aboutText3: "¡Bienvenido al mundo de Kiko Neves, donde cada clic es una invitación a revivir la emoción del surf!",
            services: "Servicios",
            partners:"Socios comerciales",
            partnerName: "3'SURFERS",
            partnerText1: "Somos una escuela de surf con el objetivo de proporcionar una experiencia de surf única e inolvidable, no solo en verano, sino durante todo el año. Llevamos a nuestros estudiantes a encontrar las mejores olas en Portugal según su nivel de habilidad, con el fin de enseñar valores morales y cívicos a través del deporte y el maravilloso estilo de vida del surf.",
            partnerText2: "Somos como una familia, siempre dispuestos a acoger a nuevos miembros e integrarlos en nuestro entorno, asegurando su seguridad en el agua, el equipo adecuado, instructores altamente capacitados y, sobre todo, mucha diversión. Ya seas un principiante sin experiencia o un surfista avanzado, estamos aquí para ofrecerte grandes lecciones de surf y cumplir con todas tus expectativas.",
            contactText: "¿Tienes alguna pregunta o quieres reservar una sesión de fotos de surf? ¡Envíame un mensaje!",
            contactEmail: "Ponte en contacto utilizando el formulario o envía un correo electrónico a: kikonevesfotografia@gmail.com",
            ericeiratext: "Ubicada en la costa oeste de Portugal, Ericeira es un verdadero paraíso para los amantes del surf. Reconocida como la primera Reserva Mundial de Surf de Europa, esta encantadora aldea pesquera es famosa por sus olas perfectas y diversos puntos de surf, atrayendo a surfistas de todos los niveles, desde principiantes hasta profesionales. Playas icónicas como Ribeira d'Ilhas, Coxos y Foz do Lizandro ofrecen paisajes impresionantes y excelentes condiciones para surfear.",
            ericeiratext2:"Más allá del surf, Ericeira cautiva a los visitantes con su ambiente relajado, que combina tradiciones locales con un estilo de vida costero vibrante. Es el destino perfecto para quienes buscan aventura, naturaleza y el auténtico espíritu costero portugués.",
        },
        Português: {
            about: "Sobre",
            aboutText: "Com mais de 10 anos de experiência a capturar a essência do surf, Kiko Neves é um fotógrafo profissional baseado em Ericeira, Portugal—um dos destinos mais icónicos para os amantes das ondas. Especializado em capturar momentos únicos no mar, Kiko é conhecido pelo seu olhar atento e capacidade de transformar cada onda surfada numa memória inesquecível.",
            aboutText2: "Atendendo a clientes de todo o mundo, muitos dos quais descobrem a sua paixão pelo surf durante aulas na região, Kiko combina técnica, criatividade e uma genuína ligação ao estilo de vida do surf para entregar imagens que contam histórias. Quer seja para iniciantes ou surfistas experientes, o seu trabalho é uma celebração das ondas, do movimento e da energia única da Ericeira.",
            aboutText3: "Bem-vindo ao mundo de Kiko Neves—onde cada clique é um convite para reviver a emoção do surf!",
            services: "Serviços",
            partners:"Parceiros",
            partnerName: "3'SURFERS",
            partnerText1: "Somos uma escola de surf com o objetivo de proporcionar uma experiência única e inesquecível de surf, não apenas no verão, mas durante todo o ano. Levamos os nossos alunos a encontrar as melhores ondas em Portugal de acordo com o seu nível de habilidade, visando ensinar valores morais e cívicos através do desporto e do maravilhoso estilo de vida do surf. ",
            partnerText2: "Somos como uma família, sempre prontos para receber novos membros e integrá-los ao nosso ambiente, garantindo a sua segurança na água, o equipamento adequado, instrutores altamente qualificados e, acima de tudo, muita diversão. Seja você um iniciante sem experiência ou um surfista avançado, estamos aqui para oferecer ótimas aulas de surf e atender a todas as suas expectativas.",
            contactText: "Tem alguma dúvida ou quer marcar uma sessão fotográfica de surf? Envie-me uma mensagem!",
            contactEmail: "Entre em contacto através do formulário ou envie um e-mail para: kikonevesfotografia@gmail.com",
            ericeiratext: "Localizada na costa oeste de Portugal, Ericeira é um verdadeiro paraíso para os amantes do surfe. Reconhecida como a primeira Reserva Mundial de Surf da Europa, esta encantadora vila de pescadores é famosa por suas ondas perfeitas e diversos picos de surfe, atraindo surfistas de todos os níveis – dos iniciantes aos profissionais. Praias icônicas como Ribeira d'Ilhas, Coxos e Foz do Lizandro oferecem paisagens deslumbrantes e excelentes condições para a prática do surfe.",
            ericeiratext2:"Além do surfe, Ericeira encanta os visitantes com sua atmosfera descontraída, que combina tradições locais com um estilo de vida litorâneo vibrante. É o destino perfeito para quem busca aventura, natureza e o autêntico espírito praiano português.",
        }

    };

    function changeLanguage() {
        const selectedLang = languageSelector.value;
        if (translations[selectedLang]) {
            const t = translations[selectedLang];
            document.getElementById("about").textContent = t.about;
            document.getElementById("about-text").textContent = t.aboutText;
            document.getElementById("about-text2").textContent = t.aboutText2;
            document.getElementById("about-text3").textContent = t.aboutText3;
            document.getElementById("services").textContent = t.services;
            document.getElementById("partners").textContent = t.partners;
            document.getElementById("partner-name").textContent = t.partnerName;
            document.getElementById("partner-text1").textContent = t.partnerText1;
            document.getElementById("partner-text2").textContent = t.partnerText2;
            document.getElementById("contact-text").textContent = t.contactText;
            document.getElementById("contact-email").textContent = t.contactEmail;
            document.getElementById("ericeira-text").textContent = t.ericeiratext;
            document.getElementById("ericeira-text2").textContent = t.ericeiratext2;
        }
    }

    languageSelector.addEventListener("change", changeLanguage);
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Close the menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
        });
    });
});  

function resizeImage() {
    var selectElement = document.getElementById('languageselect');
    var germanFlag = document.getElementById('germanflag');
    
    if (selectElement.value === 'Deutsch') {
        germanFlag.style.width = '24px';  // 20% larger (20px + 20% = 24px)
        germanFlag.style.height = '24px';
    } else {
        germanFlag.style.width = '20px';  // Default size
        germanFlag.style.height = '20px';
    }
}

function resizeImage() {
    var selectElement = document.getElementById('languageselect');
    var portugueseflag = document.getElementById('portugueseflag');
    
    if (selectElement.value === 'Portugues') {
        portugueseflag.style.width = '24px';  // 20% larger (20px + 20% = 24px)
        portugueseflag.style.height = '24px';
    } else {
        portugueseflag.style.width = '20px';  // Default size
        portugueseflag.style.height = '20px';
    }
}
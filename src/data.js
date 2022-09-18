//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiLock,
  FiRefreshCcw,
  FiTool,
  FiPackage,
  FiPhone,
  FiMessageCircle,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/installz.png';
import Project2 from './assets/img/projects/zabbixm.png';
import Project3 from './assets/img/projects/serversec.webp';
import Project4 from './assets/img/projects/servers.jpg';
import Project5 from './assets/img/projects/linuxman.png';
import Project6 from './assets/img/projects/sqlserver.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/5.jpg';
import TestiImage2 from './assets/img/2.jpg';
import TestiImage3 from './assets/img/3.jpg';
import TestiImage4 from './assets/img/4.jpg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/saeid-sadeh-23b791220/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Mrsimple65',
  },
  {
    icon: <FiPhone/>,
    href: 'https://wa.me/989120742713',
    extend : "whatsapp"
  },

];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Install Zabbix Server on Ubuntu 20.04',
    category: 'zabbix',
    explain:'Zabbix is an open-source web-based monitoring tool for monitoring a diverse range of IT components.' ,
  },
  {
    id: '2',
    image: Project2,
    name: 'monitoring with zabbix',
    category: 'zabbix',
    explain: 'Zabbix is an open source monitoring software tool for diverse IT components, including networks, servers, virtual machines (VMs) and cloud services. Zabbix provides monitoring metrics, such as network utilization, CPU load and disk space consumption.'
  },
  {
    id: '3',
    image: Project3,
    name: 'run and configuration web servers ',
    category: 'server',
    explain: 'A server configuration defines a specific database as the repository for its data. To prevent corruption, that database can be associated with only one server configuration. However, that database can be used by other applications.'
  },
  {
    id: '4',
    image: Project4,
    name: 'server security',
    category: 'security',
    explain: 'What is server security? Server security focuses on the protection of data and resources held on the servers. It comprises tools and techniques that help prevent intrusions, hacking and other malicious actions. Server security measures vary and are typically implemented in layers'
  },
  {
    id: '5',
    image: Project5,
    name: 'linux server management',
    category: 'server',
    explain: 'Linux server management is an integration of cybersecurity and business objectives. Linux server management at scale is a vastly different activity from interacting with a terminal on one machine. The best Linux server management tools universally offer a server management GUI within a web browser.'
  },
  {
    id: '6',
    image: Project6,
    name: 'microsoft server management',
    category: 'server',
    explain: 'Microsoft Windows Server Manager is a tool to view and manage server roles and make configuration changes. Server Manager allows administrators to manage local and remote servers without requiring physical access to the servers or enabling Remote Desktop Protocol connections.'
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'server',
  },
  {
    name: 'security',
  },
  {
    name: 'zabbix',
  }, 
  
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLock />,
    name: 'server security',
    description:
      'server security is a sheared responsibility , and it boils down to this : in server security , the more systems we secure , the more secure we all are.',
  },
  {
    icon: <FiRefreshCcw />,
    name: 'root password recovery',
    description:
      'passwords are like under wear : you dont let people see it , you should change it very often , and you shouldent share it with strangers .',
  },
  {
    icon: <FiTool />,
    name: 'reapir linux grub/grub2',
    description:
      'linux is like a phonex it will rise from the ashes of the that burned .',
  },
  {
    icon: <FiPackage />,
    name: 'server counfiguration',
    description:
      'Represent your self to the Worlds in a good and safe way .',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'oliver pisher',
    authorPosition: 'linux administrator',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'mr saeid sadeh is a real linux engineer , when i was in a big trouble he helped me to repair linux grub .',
    authorName: 'jason dallas',
    authorPosition: 'linux engineer',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'he recoverd our server password with a very special method without removing any data , he is really clever and smart .',
    authorName: 'david jhonson',
    authorPosition: 'Head of zabbix admins , parsserver',
  },
  {
    authorImg: TestiImage4,
    authorText:
      'he provide the best hosting and domain services for all your needs with unlimited support services',
    authorName: 'nelli park',
    authorPosition: 'web developer',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at Saed.sadeh@yahoo.com',
   },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'tehran, iran',
    description: 'Serving clients worldwide',
   },
  {
    icon: <FiPhone/>,
    title: 'mobile',
    subtitle: '+98-9120742713',
    description: 'call me ',
   },
  {
    icon: <FiMessageCircle/>,
    title: 'whatsapp',
    subtitle: '+98-9120742713',
    description: '',
    links : 'https://wa.me/989120742713'
  },
  
];

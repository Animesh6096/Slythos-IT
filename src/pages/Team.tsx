import { motion } from 'framer-motion'
import Button from '../components/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'

// Team member image paths (public folder references)
const sadatPhoto = "/team/sadat3.jpg"
const animeshPhoto = "/team/24141102_Animesh Bhattacharjee_Photo.jpg"
const fuadPhoto = "/team/fuad.jpg"
const zamiPhoto = "/team/Zami.jpg"
const anitPhoto = "/team/Anit.jpg"
const SakibPhoto = "/team/Sakib.jpg"
const rewanPhoto = "https://media.licdn.com/dms/image/v2/D5603AQHzv_uLI72XKQ/profile-displayphoto-shrink_800_800/B56ZVw8OHXHoAc-/0/1741356592228?e=1756944000&v=beta&t=AUAgWZ-VA2x0QyCSzi-xtSEbnnuobwE7rA4erzDFWkY"
const srijonPhoto = "/team/Srijon.jpg"

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    facebook?: string;
    linkedin: string;
    github: string;
  };
}

// Team member data organized by categories
const managementTeam: TeamMember[] = [
  {
    name: "Sadat Sakib Prodhan",
    role: "Business Analyst",
    image: sadatPhoto,
    bio: "Strategic business analyst with expertise in market research and business process optimization.",
    socials: {
      facebook: "https://www.facebook.com/sprodhan78",
      linkedin: "https://www.linkedin.com/in/sadat-sakib-prodhan-b6804721a/",
      github: "#"
    }
  },
  {
    name: "Srijon Basak",
    role: "Project Manager",
    image: srijonPhoto,
    bio: "Experienced project manager ensuring timely delivery and quality in all projects.",
    socials: {
      facebook: "https://www.facebook.com/srij0nbasak",
      linkedin: "https://www.linkedin.com/in/srijon-basak-58b894234/",
      github: "https://github.com/SrijonBasak"
    }
  },
  {
    name: "Animesh Bhattacharjee",
    role: "Collaborator (Front-end & Back-end)",
    image: animeshPhoto,
    bio: "Full-stack collaborator with expertise in both frontend and backend technologies.",
    socials: {
      facebook: "https://www.facebook.com/animesh.bhattacharjee.6096",
      linkedin: "https://www.linkedin.com/in/animesh-bhattacharjee-jhalok/",
      github: "https://github.com/Animesh6096"
    }
  },
];

const developmentTeam: TeamMember[] = [
  {
    name: "Animesh Bhattacharjee",
    role: "Collaborator (Front-end & Back-end)",
    image: animeshPhoto,
    bio: "Full-stack collaborator with expertise in both frontend and backend technologies.",
    socials: {
      facebook: "https://www.facebook.com/animesh.bhattacharjee.6096",
      linkedin: "https://www.linkedin.com/in/animesh-bhattacharjee-jhalok/",
      github: "https://github.com/Animesh6096"
    }
  },
  {
    name: "MD. Saadman Fuad",
    role: "Front-end Developer (Lead)",
    image: fuadPhoto,
    bio: "Lead frontend developer specializing in modern JavaScript frameworks and responsive design.",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Md Sakibur Rahman",
    role: "Front-end Developer",
    image: SakibPhoto,
    bio: "Frontend developer passionate about creating intuitive and engaging user interfaces.",
    socials: {
      facebook: "https://www.facebook.com/sakiburrahman.akash",
      linkedin: "https://www.linkedin.com/in/md-sakibur-rahman-390521245/",
      github: "#"
    }
  },
  {
    name: "Hasan Sarwar Zami",
    role: "Back-end Developer (Lead)",
    image: zamiPhoto,
    bio: "Lead backend developer with expertise in scalable server architecture and database design.",
    socials: {
      facebook: "https://www.facebook.com/hs.zami18",
      linkedin: "https://www.linkedin.com/in/hasan-sarwar-zami-b150302a4/",
      github: "https://github.com/noobcoder-hasan"
    }
  },
  {
    name: "Anit Paul",
    role: "Back-end Developer",
    image: anitPhoto,
    bio: "Backend developer focused on building robust and efficient server-side applications.",
    socials: {
      facebook: "https://www.facebook.com/dean.anit",
      linkedin: "https://www.linkedin.com/in/anit-paul-625174335/",
      github: "https://github.com/AnitPaul112"
    }
  }
];

const qualityAssuranceTeam: TeamMember[] = [
  {
    name: "Md Rezwanur Rahman",
    role: "QA Team Lead",
    image: rewanPhoto,
    bio: "QA team lead ensuring the highest quality standards in all our software products.",
    socials: {
      facebook: "https://www.facebook.com/rayjan.bzs17",
      linkedin: "https://www.linkedin.com/in/md-rezwanur-rahman-933045278?",
      github: "https://github.com/md-rezwanur-rahman"
    }
  },
  {
    name: "Sadat Sakib Prodhan",
    role: "QA Analyst",
    image: sadatPhoto,
    bio: "Quality assurance analyst with a keen eye for detail and comprehensive testing strategies.",
    socials: {
      facebook: "https://www.facebook.com/sprodhan78",
      linkedin: "https://www.linkedin.com/in/sadat-sakib-prodhan-b6804721a/",
      github: "#"
    }
  }
];

// Add image error handling component
const TeamMemberImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Fallback to a more reliable placeholder
    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ccircle cx='200' cy='160' r='50' fill='%236b7280'/%3E%3Cpath d='M120 300 Q200 250 280 300 L280 400 L120 400 Z' fill='%236b7280'/%3E%3C/svg%3E";
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={handleImageError}
    />
  );
};

const TeamPage = () => {
  const scrollToSection = useScrollToSection()
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative min-h-[650px] h-[calc(100vh-4rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-1rem)] lg:h-screen xl:h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 pt-16 lg:pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col h-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex-1 justify-center pb-16 sm:pb-20">
            {/* Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden sm:inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-6"
              >
                <span className="text-green-400 font-medium text-sm sm:text-base">Meet Our Team</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6"
              >
                The Minds Behind{' '}
                <span className="bg-gradient-to-r from-primary via-green-400 to-blue-400 bg-clip-text text-transparent">
                  SLYTHOS IT
                </span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 w-24 bg-gradient-to-r from-primary to-green-400 mb-8 mx-auto lg:mx-0"
              ></motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Meet the talented individuals who bring expertise from diverse fields 
                to deliver exceptional solutions and drive SLYTHOS IT's success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  onClick={() => scrollToSection('team-members')}
                  variant="primary" 
                  className="px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
                >
                  Meet the Team
                </Button>
                <Button 
                  to="/careers"
                  variant="secondary" 
                  className="px-8 py-3 text-lg bg-white/5 backdrop-blur-sm border border-white/30 hover:bg-white/15 hover:border-white/50 transition-all duration-300"
                >
                  Join Our Team
                </Button>
              </motion.div>
            </div>

            {/* Team Stats Visual */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    {[
                      { number: '10+', label: 'Team Members', color: 'primary' },
                      { number: '5+', label: 'Departments', color: 'green-500' },
                      { number: '15+', label: 'Years Combined', color: 'blue-500' },
                      { number: '100%', label: 'Dedication', color: 'purple-500' }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className={`bg-${stat.color === 'primary' ? 'primary' : stat.color}/20 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-center border border-${stat.color === 'primary' ? 'primary' : stat.color}/30 min-h-[80px] sm:min-h-[90px] lg:min-h-[100px] flex flex-col justify-center`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                        <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/30 rounded-full blur-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full blur-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-12 left-0 right-0 z-30 
                     flex justify-center"
        >
          <motion.button 
            onClick={() => scrollToSection('team-members')}
            className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors group"
            aria-label="Scroll down"
            whileHover={{ y: -2 }}
          >
            <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium text-center whitespace-nowrap">Discover More</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 border-2 border-white/40 rounded-full flex justify-center items-start mx-auto"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 sm:h-1.5 lg:h-2 bg-white rounded-full mt-1 sm:mt-1.5 lg:mt-2"
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* Team Members Section */}
      <section id="team-members" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Management Team */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-4"
              >
                Management Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Our management team brings strategic vision and leadership to guide SLYTHOS IT towards continued excellence and innovation.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10"
            >
              {managementTeam.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden group relative hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-80">
                    <TeamMemberImage 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-4 flex justify-center space-x-2 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.socials.facebook && (
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                          </svg>
                        </a>
                      )}
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6">
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 lg:mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{member.role}</p>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 lg:mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300 line-clamp-3">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Development Team */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-4"
              >
                Development Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Our skilled developers bring technical expertise and innovation to create cutting-edge solutions.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10"
            >
              {developmentTeam.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden group relative hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-80">
                    <TeamMemberImage 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-4 flex justify-center space-x-2 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.socials.facebook && (
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                          </svg>
                        </a>
                      )}
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6">
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 lg:mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{member.role}</p>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 lg:mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300 line-clamp-3">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Quality Assurance Team */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
              >
                Quality Assurance Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Our QA team ensures the highest quality standards in all our software products and services.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10"
            >
              {qualityAssuranceTeam.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden group relative hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-80">
                    <TeamMemberImage 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-4 flex justify-center space-x-2 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.socials.facebook && (
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                          </svg>
                        </a>
                      )}
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6">
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 lg:mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{member.role}</p>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 lg:mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300 line-clamp-3">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Company Culture</h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At SLYTHOS IT, we believe that great products come from great teams. We foster a culture of 
                collaboration, innovation, and continuous learning that empowers our team members to do 
                their best work and grow professionally.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We value diversity of thought and background, knowing that different perspectives 
                lead to more creative solutions. Our work environment balances autonomy with accountability, 
                giving team members the freedom to explore ideas while maintaining high standards of quality.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Collaborative and supportive environment</p>
                </div>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Remote-friendly with flexible work options</p>
                </div>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Continuous learning and professional development</p>
                </div>
              </div>
              <Button to="/careers" variant="secondary">
                Join Our Team
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="SLYTHOS IT team collaboration" 
                  className="rounded-lg h-48 md:h-64 w-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="SLYTHOS IT office" 
                  className="rounded-lg h-48 md:h-64 w-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300 mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="SLYTHOS IT team event" 
                  className="rounded-lg h-48 md:h-64 w-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300 -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="SLYTHOS IT workspace" 
                  className="rounded-lg h-48 md:h-64 w-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            >
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10"
            >
              We're always looking for talented individuals who are passionate about technology and innovation.
              Check out our current openings or drop us your resume for future opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                to="/careers" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamPage
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { Card, Typography, Tag, Button, Space, Modal } from 'antd';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import GitHub from '../../assets/svg/GitHub';
import JavaScript from '../../assets/svg/JavaScript';
import Link from '../../assets/svg/Link';
import MERN from '../../assets/svg/MERN';
import React from '../../assets/svg/React';
import Sass from '../../assets/svg/SCSS';
import './ProjectSection.scss';

const { Title, Paragraph, Text } = Typography;

const ProjectSection = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  const projectData = [
    {
      id: 1,
      title: "Skill-Matching App",
      client: "Vizionists GmbH",
      description: "Im Rahmen eines Kundenprojekts für die Vizionists GmbH konzipierte und entwickelte ich eine voll funktionsfähige Weblösung zur KI-basierten Matching-Analyse. Zielgruppe sind Personaldienstleister und KMUs, die ihren Recruiting-Prozess datengestützt optimieren möchten.",
      challenge: "Fullstack-Entwicklung from scratch (Konzeption, Architektur, Entwicklung, Deployment) Umsetzung mit MERN-Stack, Machine-Learning-Integration zur semantischen Analyse REST-API, Authentifizierung, rollenbasiertes Zugriffssystem, Git-Versionierung Fokus auf Skalierbarkeit, modulare Architektur und Clean Code",
      solution: "Entwicklung eines datengetriebenen Analyse-Tools mit KI-gestütztem Matching auf Basis von Skills und psychologischen Profilen zur Optimierung von Recruiting und Teamdynamik.",
      techStack: ["React", "Node.js", "GraphQL", "MongoDB","OpenAI API","REST API"],
      videoUrl: "https://res.cloudinary.com/dxphdtwvh/video/upload/v1745921488/cc-match_cLYexN7W_j9mot0.mp4", // Platzhalter
      technologies: [<React key="react" />, <JavaScript key="javascript" />,<MERN key="mern" />,<Sass key="sass" />]
    },
    {
      id: 2,
      title: "Instagram Content & Reservierungstool",
      client: "Blue-Chip-Holding GmbH",
      description: "Ich entwickelte ein intelligentes Tool zur Verwaltung von Terminen und Inhalten – im direkten Kundenauftrag der Blue-Chip-Holding. Ziel war die Automatisierung manueller Abläufe im Veranstaltungsmanagement.",
      challenge: "Eigenverantwortlicher Aufbau der Anwendung mit React, Node.js, MongoDB Kalender-Logik, Benutzerverwaltung, dynamische Inhaltssteuerung per KI-Komponente Full-Deployment auf Render/Docker, API-Sicherheit via JWT",
      solution: " Entwicklung eines modularen Systems mit KI-gestützter Nachrichtenanalyse, Verfügbarkeitsprüfung und automatischer Terminvorschlagserstellung über eine interaktive Oberfläche.",
      techStack: ["React", "Node.js", "MongoDB", "OpenAI API","Stripe API"],
      videoUrl: "https://res.cloudinary.com/dxphdtwvh/video/upload/v1745924375/Bildschirmaufnahme_2025-04-24_um_14.54.43_c5ckud.mov", // Platzhalter
      technologies: [<React key="react" />, <JavaScript key="javascript" />, <MERN key="mern" /> ]
    },
    {
      id: 3,
      title: "TOKTOK (Mobile)",
      client: "Abschlussprojekt",
      description: "Unsere mobile App, gebaut im MERN-Stack, bietet eine sichere und skalierbare App zum Teilen von Fotos.",
      challenge: "Implementierung eines robusten Backends mit Fokus auf Sicherheit und Performance.",
      solution: "Entwicklung einer skalierbaren Backend-Struktur und nahtlose Integration mit dem Frontend.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "SCSS"],
      repoUrl: "https://github.com/canyus70/FullStack-Abschluss-Projekt-TokTok",
      liveUrl: "https://toktok-nks4.onrender.com/",
      technologies: [<Sass key="sass" />, <React key="react" />, <MERN key="mern" />]
    }
  ];

  return (
    <motion.section 
      className="projectsContainer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Title level={2} className="section-title">MEINE PROJEKTE</Title>
      
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Navigation, Pagination]}
        className="project-swiper"
        navigation
        pagination={{ clickable: true }}
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.id}>
            <Card className="project-card" bordered={false}>
              <Title level={3}>{project.title}</Title>
              <Paragraph className="client">
                <Text strong>Für: </Text>
                {project.client}
              </Paragraph>
              
              <div className="project-details">
                <div className="project-info">
                  <Paragraph>
                    <Text strong>Beschreibung: </Text>
                    {project.description}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Meine Rolle:</Text>
                    {project.challenge}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Ergebnis:</Text>
                    {project.solution}
                  </Paragraph>
                  
                  <div className="tech-stack">
                    <Text strong>Tech-Stack: </Text>
                    <div className="tech-tags">
                      {project.techStack.map((tech) => (
                        <Tag key={tech} color="blue">{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-actions">
                  <Space direction="vertical">
                    {project.id !== 3 && (
                      <Button 
                        type="primary" 
                        onClick={() => showVideoModal(project.videoUrl)}
                      >
                        Video anschauen
                      </Button>
                    )}
                    
                    {project.id === 3 && (
                      <>
                        <Button 
                          type="primary" 
                          onClick={() => window.open(project.repoUrl, '_blank')}
                        >
                          <span style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '8px', display: 'flex' }}>
                              <GitHub style={{ fill: 'currentColor' }} />
                            </span>
                            GitHub
                          </span>
                        </Button>
                        <Button 
                          type="default" 
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <span style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '8px', display: 'flex' }}>
                              <Link style={{ fill: 'currentColor' }} />
                            </span>
                            Live Demo
                          </span>
                        </Button>
                      </>
                    )}
                  </Space>
                </div>
              </div>
              
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-icon">
                    {tech}
                  </div>
                ))}
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Modal
        title="Projekt Demo"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
        centered
      >
        {currentVideo && (
          <div className="video-player-container">
            <ReactPlayer 
              url={currentVideo} 
              width="100%" 
              height="450px" 
              controls
              playing
            />
          </div>
        )}
      </Modal>
    </motion.section>
  );
};

export default ProjectSection;
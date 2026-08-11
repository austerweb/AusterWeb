// JavaScript específico para la página de trabajos/portfolio
// Usando namespace para evitar conflictos

window.PortfolioPage = (function() {
    'use strict';
    
    // Project data for modals
    const projectData = {
        '679inn': {
            title: '679inn - Departamentos Amueblados',
            category: 'Sitio Web Corporativo',
            description: 'Desarrollo completo de sitio web para empresa de alojamientos temporarios en Comodoro Rivadavia. Desarrollado con React para una experiencia interactiva, con base de datos PostgreSQL y diseño responsive moderno.',
            features: [
                'Interfaz desarrollada con React para máxima interactividad',
                'Base de datos PostgreSQL para rendimiento óptimo',
                'Diseño responsive con HTML5 y CSS3 moderno',
                'JavaScript avanzado para funcionalidades dinámicas',
                'Sistema de reservas en tiempo real',
                'Galería de imágenes optimizada',
                'Formularios inteligentes de contacto',
                'Optimización SEO y rendimiento'
            ],
            technologies: ['HTML', 'CSS', 'React', 'JS', 'PostgreSQL'],
            url: 'https://679inn.com.ar/',
            duration: 'Publicado',
            year: '2025'
        },
        'proyectar': {
            title: 'Proyectar Ideas - Plataforma Educativa',
            category: 'Plataforma E-learning',
            description: 'Plataforma educativa moderna desarrollada con React y TutorLMSPro, ofreciendo una experiencia de aprendizaje completa con cursos online, certificaciones y capacitación corporativa personalizada.',
            features: [
                'Frontend desarrollado en React para interfaz dinámica',
                'Integración completa con TutorLMSPro',
                'HTML5 y CSS3 para diseño responsive moderno',
                'Sistema de cursos multimedia interactivos',
                'Certificaciones automáticas digitales',
                'Dashboard avanzado para estudiantes y administradores',
                'Módulo de capacitación corporativa personalizada',
                'Seguimiento de progreso en tiempo real',
                'Sistema de evaluaciones interactivas'
            ],
            technologies: ['HTML', 'CSS', 'React', 'TutorLMSPro'],
            url: 'https://proyectarideas.com.ar/',
            duration: 'Publicado',
            year: '2025'
        },
        'nutrainer': {
            title: 'Nutrainer - E-commerce de Suplementos',
            category: 'E-commerce Especializado',
            description: 'E-commerce moderno de suplementos deportivos desarrollado con React, ofreciendo una experiencia de compra fluida con consultas nutricionales, mediciones antropométricas y sistema de viandas saludables integrado.',
            features: [
                'Interfaz de e-commerce desarrollada en React',
                'Diseño responsive con HTML5 y CSS3 avanzado',
                'Funcionalidades e-commerce completas y optimizadas',
                'Catálogo interactivo por categorías y marcas',
                'Sistema de consultas nutricionales online',
                'Mediciones antropométricas ISAK nivel 2',
                'Carrito de compras dinámico y intuitivo',
                'Sistema de pagos seguro integrado',
                'Área de miembros personalizada',
                'Blog de nutrición con contenido dinámico',
                'Integración con WhatsApp para consultas inmediatas'
            ],
            technologies: ['E-commerce', 'HTML', 'CSS', 'React'],
            url: 'https://nutrainer.com.ar/',
            duration: 'Publicado',
            year: '2025'
        },
        'odontologica': {
            title: 'Agenda Odontológica - AusterDental',
            category: 'Sistema Empresarial',
            description: 'Sistema inteligente de turnos odontológicos con historiales clínicos digitales, recordatorios automáticos y gestión integral del consultorio.',
            features: [
                'Agenda de turnos inteligente',
                'Historiales clínicos digitales',
                'Recordatorios automáticos a pacientes',
                'Gestión de tratamientos y odontograma',
                'Control de caja y pagos',
                'Reportes y estadísticas del consultorio'
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'WhatsApp'],
            url: 'https://austerdental.com.ar/',
            urlLabel: 'Ver Sitio Web',
            duration: 'Publicado',
            year: '2025'
        },

    };

    // Open project modal
    function openProjectModal(projectId) {
        const project = projectData[projectId];
        if (!project) return;
        
        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modalContent');
        
        if (!modal || !modalContent) return;
        
        modalContent.innerHTML = `
            <h2>${project.title}</h2>
            <div class="modal-category">${project.category}</div>
            <div class="modal-description">
                <p>${project.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Características Principales</h3>
                <ul class="features-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>Tecnologías Utilizadas</h3>
                <div class="modal-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-info">
                <div class="modal-info-item">
                    <strong>Estado:</strong> ${project.duration}
                </div>
                <div class="modal-info-item">
                    <strong>Año:</strong> ${project.year}
                </div>
                ${project.url !== '#' ? `
                <div class="modal-info-item">
                    <a href="${project.url}" ${project.url.startsWith('http') ? 'target="_blank"' : ''} class="btn btn-primary">
                        <span>${project.urlLabel || 'Ver Sitio Web'}</span>
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                ` : ''}
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Counter animation
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }

    // Initialize portfolio page
    function init() {
        console.log('Inicializando página de portfolio...');

        // Set up filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // Set up modal functionality
        const modal = document.getElementById('projectModal');
        const closeBtn = document.querySelector('.close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal && modal.style.display === 'block') {
                closeModal();
            }
        });

        // Set up counter animations
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.stat-number').forEach(counter => {
            counterObserver.observe(counter);
        });

        // Handle image loading errors
        document.querySelectorAll('.project-image img').forEach(img => {
            img.addEventListener('error', function() {
                const placeholder = document.createElement('div');
                placeholder.className = 'project-placeholder';
                placeholder.innerHTML = '<i class="fas fa-image"></i><span>Imagen no disponible</span>';
                this.parentNode.replaceChild(placeholder, this);
            });
        });

        console.log('Portfolio inicializado correctamente');
    }

    // Add modal styles
    const modalStyles = `
        .modal-category {
            color: #c45cff;
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 1rem;
        }
        
        .modal-description {
            margin-bottom: 2rem;
            color: #cccccc;
            line-height: 1.6;
        }
        
        .modal-section {
            margin-bottom: 2rem;
        }
        
        .modal-section h3 {
            color: #ffffff;
            font-size: 1.3rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid rgba(139, 69, 196, 0.3);
            padding-bottom: 0.5rem;
        }
        
        .features-list {
            list-style: none;
            padding: 0;
        }
        
        .features-list li {
            color: #cccccc;
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }
        
        .features-list li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #c45cff;
            font-weight: bold;
        }
        
        .modal-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .modal-info {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            align-items: center;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(139, 69, 196, 0.2);
        }
        
        .modal-info-item {
            color: #cccccc;
        }
        
        .modal-info-item strong {
            color: #ffffff;
        }
        
        @media (max-width: 768px) {
            .modal-info {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .features-list li {
                font-size: 0.9rem;
            }
        }
    `;

    // Add styles to document
    if (!document.getElementById('portfolio-modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'portfolio-modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API
    return {
        openProjectModal: openProjectModal,
        closeModal: closeModal,
        init: init
    };

})();

// Global function for onclick handlers
window.openProjectModal = window.PortfolioPage.openProjectModal;

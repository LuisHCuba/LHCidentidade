// Esperar que o DOM seja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classe ativa ao link do menu quando a seção correspondente estiver visível
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // Função para verificar quais seções estão visíveis
    function checkVisibleSections() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Verifica se a seção está visível na viewport
            if (scrollY >= (sectionTop - windowHeight / 2) && 
                scrollY < (sectionTop + sectionHeight - windowHeight / 4)) {
                
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Adicionar efeito de rolagem suave aos links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajuste para a altura da barra de navegação
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Verificar seções visíveis no scroll
    window.addEventListener('scroll', checkVisibleSections);
    
    // Verificar seções visíveis no carregamento inicial
    checkVisibleSections();
    
    // Adicionar efeito de hover aos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
    
    // Adicionar classe .scrolled ao menu quando a página é rolada
    function toggleScrolledClass() {
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', toggleScrolledClass);
    
    // Adicionar efeito de zoom às versões da logo
    const logoVariants = document.querySelectorAll('.logo-variant');
    logoVariants.forEach(variant => {
        variant.addEventListener('mouseenter', function() {
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'scale(1.1)';
                svg.style.transition = 'transform 0.3s ease';
            }
        });
        
        variant.addEventListener('mouseleave', function() {
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'scale(1)';
            }
        });
    });
}); 
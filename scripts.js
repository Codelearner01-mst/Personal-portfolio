  // Add smooth scroll behavior and interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Add subtle animation on scroll
            const card = document.querySelector('.card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            // Initial animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);

            // Add click effect to skill items
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach(item => {
                item.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1.05)';
                    }, 150);
                });
            });
        });
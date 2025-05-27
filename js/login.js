        function createParticles() {
            const bgAnimation = document.getElementById('bgAnimation');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                
                bgAnimation.appendChild(particle);
            }
        }

        function switchTab(tab) {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            const tabBtns = document.querySelectorAll('.tab-btn');

            tabBtns.forEach(btn => btn.classList.remove('active'));
            loginForm.classList.remove('active');
            signupForm.classList.remove('active');

            if (tab === 'login') {
                tabBtns[0].classList.add('active');
                loginForm.classList.add('active');
            } else {
                tabBtns[1].classList.add('active');
                signupForm.classList.add('active');
            }

            resetFormAnimations();
        }

        function resetFormAnimations() {
            const formGroups = document.querySelectorAll('.form.active .form-group, .form.active .checkbox-group, .form.active .btn, .form.active .forgot-password');
            
            formGroups.forEach((element, index) => {
                element.style.animation = 'none';
                element.offsetHeight; 
                element.style.animation = null;
            });
        }

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            const btn = this.querySelector('.btn');
            const originalText = btn.textContent;
            btn.textContent = 'Signing In...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                alert(`Login attempt:\nEmail: ${email}\nRemember Me: ${rememberMe}`);
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 1500);
        });

        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            const btn = this.querySelector('.btn');
            const originalText = btn.textContent;
            btn.textContent = 'Creating Account...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                alert(`Account created:\nName: ${name}\nEmail: ${email}`);
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 1500);
        });

        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        window.addEventListener('load', function() {
            createParticles();
        });

        document.addEventListener('mousemove', function(e) {
            const container = document.querySelector('.container');
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 10;
            const rotateY = -(x / rect.width) * 10;
            
            container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        document.addEventListener('mouseleave', function() {
            const container = document.querySelector('.container');
            container.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg)';
        });

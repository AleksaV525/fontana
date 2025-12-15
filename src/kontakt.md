---
layout: layout.njk
title: Kontakt
---

<section class="contact-section content-offset">
    <div class="container">
        <h1 class="contact-title">Kontaktirajte nas 👋</h1>
        <p class="contact-subtitle">Imate pitanja, predloge ili želite da nas posetite? Stojimo vam na raspolaganju!</p>

        <div class="contact-info-map-grid">
            
            <div class="contact-info">
                
                <h2 class="info-title">Naši podaci</h2>
                
                <ul class="info-list">
                    <li>
                        <i class="icon fas fa-envelope"></i>
                        <span class="info-label">Email</span>
                        <a href="mailto:markovico110011@gmail.com" class="info-link">markovico110011@gmail.com</a>
                    </li>
                    <li>
                        <i class="icon fas fa-phone"></i>
                        <span class="info-label">Telefon 1</span>
                        <a href="tel:+381 63-659-831" class="info-link">+381 63-659-831</a>
                    </li>
                    <li>
                        <i class="icon fas fa-phone"></i>
                        <span class="info-label">Telefon 2</span>
                        <a href="tel:+381 63-659-834" class="info-link">+381 63-659-834</a>
                    </li>
                    <li>
                        <i class="icon fas fa-mobile-alt"></i>
                        <span class="info-label">Mobilni</span>
                        <a href="tel:+381 34-6302-215" class="info-link">+381 34-6302-215</a>
                    </li>
                    <li>
                        <i class="icon fas fa-map-marker-alt"></i>
                        <span class="info-label">Adresa</span>
                        <address class="info-text">Janka Veselinovića 30 Kragujevac 34 000</address>
                    </li>
                </ul>
            </div>
            
            <div class="contact-map">
                <iframe 
                    title="Lokacija Fontana"
                    src="https://maps.google.com/maps?q=Janka Veselinovića 30 Kragujevac 34000&output=embed" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            
        </div>

        <div class="contact-form-section">
            <h2 class="form-title">Pošaljite nam poruku</h2>
            <form id="contactForm" class="contact-form" action="YOUR_EMAIL_SERVICE_ENDPOINT" method="POST">
                
                <div class="form-group">
                    <label for="name">Vaše ime:</label>
                    <input type="text" id="name" name="name" placeholder="Puno ime" required>
                </div>

                <div class="form-group">
                    <label for="email">Vaš email:</label>
                    <input type="email" id="email" name="email" placeholder="vas@email.com" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Naslov poruke:</label>
                    <input type="text" id="subject" name="subject" placeholder="Npr. Pitanje o uslugama" required>
                </div>

                <div class="form-group">
                    <label for="message">Vaša poruka:</label>
                    <textarea id="message" name="message" placeholder="Unesite vašu poruku ovde..." rows="6" required></textarea>
                </div>

                <button type="submit" class="submit-button">Pošalji poruku</button>

                <p id="formStatus" class="form-status"></p>
            </form>
        </div>
    </div>
</section>
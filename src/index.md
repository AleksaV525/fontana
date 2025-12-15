---
layout: layout.njk
title: Početna
---

<section class="hero">
  <div class="hero-content">
    <h1>Najbolja rešenja za grejanje vode</h1>
    <p>Najveći izbor bojlera, delova i profesionalnih usluga instalacije i servisa.</p>
    <a href="/katalog/" class="btn-primary">Pogledaj katalog</a>
  </div>
</section>

<div class="section-title">
  <h1>Izdvajamo iz ponude</h1>
</div>

<section class="index-promoted-products">
  
  {% for product in products | limit(3) %}
  <div class="index-product-card">
    <img src="{{ product.slika }}" alt="{{ product.naziv }}">
    <h3>{{ product.naziv }}</h3>
    <p>{{ product.opis }}</p>
    <a href="/proizvodi/{{ product.id }}/" class="btn-secondary">Saznaj više</a> 
  </div>
  {% endfor %}
  
</section>
<div class="section-title">
  <h1>Zašto izabrati nas</h1>
</div>

<section class="features">

  <div class="feature-card">
    <img src="/img/shop.png" alt="">
    <h3>Širok asortiman</h3>
    <p>Bojleri, grejači, delovi — sve na jednom mestu.</p>
  </div>

  <div class="feature-card">
    <img src="/img/tools.png" alt="">
    <h3>Profesionalna ugradnja</h3>
    <p>Stručna montaža i servis od strane iskusnih majstora.</p>
  </div>

  <div class="feature-card">
    <img src="/img/fast.png" alt="">
    <h3>Brza usluga</h3>
    <p>Dolazimo brzo i rešavamo problem odmah.</p>
  </div>

  <div class="feature-card">
    <img src="/img/trust.png" alt="">
    <h3>Iskustvo i poverenje</h3>
    <p>Preko 20 godina tradicije i zadovoljnih klijenata.</p>
  </div>

</section>
<section class="index-call-to-action">
  <h2>Trebate Hitnu Pomoć ili Savet?</h2>
  <div class="index-contact-container">
    <div class="index-contact-block">
      <h3>Pozovite nas odmah</h3>
      <p>Za hitne intervencije, kvarove i brzi servis.</p>
      <a href="tel:+38163659831" class="btn-cta">📞 +381 63-659-831</a>
    </div>
    <div class="index-contact-block">
      <h3>Kontaktirajte nas online</h3>
      <p>Za upite o proizvodima, ponudama ili zakazivanje ugradnje.</p>
      <a href="/kontakt/" class="btn-cta-secondary">✉️ Pošaljite Upit</a>
    </div>
  </div>
</section>
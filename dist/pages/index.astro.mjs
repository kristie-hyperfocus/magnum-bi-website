import { c as createComponent, a as addAttribute, r as renderTemplate, b as renderHead, d as createAstro } from '../chunks/astro/server_BQVMvWcQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const title = "MAGNUM BI";
const subtitle = "Building Inspection Sunshine Coast";
const tagline = "Professional inspections you can trust";
const cta_text = "Book Inspection";
const cta_link = "#contact";
const heroData = {
	title: title,
	subtitle: subtitle,
	tagline: tagline,
	cta_text: cta_text,
	cta_link: cta_link
};

const email = "info@magnumbi.com.au";
const phone = "0438 825 008";
const address = "Sunshine Coast, Queensland";
const hours = "Monday - Saturday, 7am - 5pm";
const contactData = {
	email: email,
	phone: phone,
	address: address,
	hours: hours};

const site_title = "Magnum BI - Building Inspection Sunshine Coast";
const site_description = "Professional building inspection services on the Sunshine Coast. Pre-purchase inspections, new build inspections, detailed reports. 20+ years experience. Same day appointments available.";
const keywords = [
	"building inspection",
	"Sunshine Coast",
	"pre-purchase inspection",
	"new build inspection",
	"property inspection",
	"building inspector",
	"Queensland"
];
const seoData = {
	site_title: site_title,
	site_description: site_description,
	keywords: keywords};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const services = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/services/new-build-inspection.md": () => import('../chunks/new-build-inspection_gxctaoHH.mjs'),"../../content/services/pre-purchase-inspection.md": () => import('../chunks/pre-purchase-inspection_BPEPDroG.mjs')}), () => "../../content/services/*.md");
  const faqs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/faq/how-long-does-inspection-take.md": () => import('../chunks/how-long-does-inspection-take_C12-5z1Z.mjs'),"../../content/faq/what-does-inspection-cost.md": () => import('../chunks/what-does-inspection-cost_CF9CV_pD.mjs')}), () => "../../content/faq/*.md");
  const sortedServices = services.sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0)).filter((s) => s.frontmatter.featured);
  faqs.sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0));
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${seoData.site_title}</title><meta name="description"${addAttribute(seoData.site_description, "content")}>${seoData.keywords && renderTemplate`<meta name="keywords"${addAttribute(seoData.keywords.join(", "), "content")}>`}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Syncopate:wght@700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-j7pv25f6> <!-- Custom Cursor --> <div id="cursor" data-astro-cid-j7pv25f6></div> <!-- Navigation --> <nav data-astro-cid-j7pv25f6> <div class="nav-container" data-astro-cid-j7pv25f6> <a href="/" class="logo" data-astro-cid-j7pv25f6> <img src="/Magnum-BI-Logo-Colour-White.svg" alt="Magnum BI Logo" data-astro-cid-j7pv25f6> </a> <ul class="nav-links" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><a href="#services" data-astro-cid-j7pv25f6>Services</a></li> <li data-astro-cid-j7pv25f6><a href="#gallery" data-astro-cid-j7pv25f6>Work</a></li> <li data-astro-cid-j7pv25f6><a href="#about" data-astro-cid-j7pv25f6>About</a></li> <li data-astro-cid-j7pv25f6><a href="#reviews" data-astro-cid-j7pv25f6>Reviews</a></li> <li data-astro-cid-j7pv25f6><a href="#contact" data-astro-cid-j7pv25f6>Contact</a></li> </ul> </div> </nav> <!-- ===== HERO ===== --> <section class="hero" data-astro-cid-j7pv25f6> <div class="hero-content" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${heroData.title}</h1> <p class="hero-subtitle" data-astro-cid-j7pv25f6>${heroData.subtitle}</p> ${renderTemplate`<p class="hero-tagline" data-astro-cid-j7pv25f6>${heroData.tagline}</p>`} <a${addAttribute(heroData.cta_link, "href")} class="hero-cta" data-astro-cid-j7pv25f6>${heroData.cta_text}</a> </div> </section> <!-- ===== SERVICES ===== --> <section id="services" class="services reveal" data-astro-cid-j7pv25f6> <h2 class="section-heading container" data-astro-cid-j7pv25f6>Our Services</h2> <div class="services-grid" data-astro-cid-j7pv25f6> ${sortedServices.map((service) => renderTemplate`<div class="service-card" data-astro-cid-j7pv25f6> <div class="service-icon" data-astro-cid-j7pv25f6>🔍</div> <h3 class="service-title" data-astro-cid-j7pv25f6>${service.frontmatter.title}</h3> <p class="service-description" data-astro-cid-j7pv25f6>${service.frontmatter.description}</p> ${service.frontmatter.price && renderTemplate`<p class="service-price" data-astro-cid-j7pv25f6>${service.frontmatter.price}</p>`} </div>`)} </div> </section> <!-- ===== CONTACT ===== --> <section id="contact" class="contact reveal" data-astro-cid-j7pv25f6> <h2 class="section-heading container" data-astro-cid-j7pv25f6>Let's Talk</h2> <div class="contact-container" data-astro-cid-j7pv25f6> <div class="contact-info" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Get in Touch</h3> <div class="contact-detail" data-astro-cid-j7pv25f6> <div class="contact-detail-label" data-astro-cid-j7pv25f6>Phone</div> <div class="contact-detail-value" data-astro-cid-j7pv25f6><a${addAttribute(`tel:${contactData.phone}`, "href")} data-astro-cid-j7pv25f6>${contactData.phone}</a></div> </div> <div class="contact-detail" data-astro-cid-j7pv25f6> <div class="contact-detail-label" data-astro-cid-j7pv25f6>Email</div> <div class="contact-detail-value" data-astro-cid-j7pv25f6><a${addAttribute(`mailto:${contactData.email}`, "href")} data-astro-cid-j7pv25f6>${contactData.email}</a></div> </div> <div class="contact-detail" data-astro-cid-j7pv25f6> <div class="contact-detail-label" data-astro-cid-j7pv25f6>Location</div> <div class="contact-detail-value" data-astro-cid-j7pv25f6>${contactData.address}</div> </div> <div class="contact-detail" data-astro-cid-j7pv25f6> <div class="contact-detail-label" data-astro-cid-j7pv25f6>Hours</div> <div class="contact-detail-value" data-astro-cid-j7pv25f6>${contactData.hours}</div> </div> </div> </div> </section> <!-- Netlify Identity Widget for CMS Authentication -->   </body> </html>`;
}, "/sessions/amazing-epic-tesla/mnt/magnum-bi-website/src/pages/index.astro", void 0);

const $$file = "/sessions/amazing-epic-tesla/mnt/magnum-bi-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

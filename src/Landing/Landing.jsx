import React, { useMemo, useState } from "react";
import './Landing.css'
import ImageRutinas from "../assets/gymhour/sc_rutinas.png"
import ImageInicio from "../assets/gymhour/sc_cuotas.png"
import ImageAdminKps from "../assets/gymhour/sc_admin_kps.png"
import ImageTurnos from "../assets/gymhour/sc_turnos.png"
import GymhourTextoDerecha from "../assets/gymhour/logo_gymhour_black_text_right.png"

const TopBar = ({ items }) => {
    return (
        <div className="gh-topbar" aria-label="Promociones">
            <div className="gh-topbar-viewport">
                <div className="gh-topbar-track">
                    {[...items, ...items, ...items].map((text, idx) => (
                        <span key={idx} className="gh-topbar-item">
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
    <section id={id} className={`gh-section ${className}`}>
        <div className={`gh-container ${className}`}>
            {/* {eyebrow && <div className="gh-eyebrow">{eyebrow}</div>} */}
            {title && <h2 className="gh-h2">{title}</h2>}
            {subtitle && <p className="gh-section-subtitle">{subtitle}</p>}
            {children}
        </div>
    </section>
);

const Badge = ({ children, variant = "soft" }) => (
    <span className={`gh-badge ${variant}`}>{children}</span>
);

const Card = ({ children, className = "" }) => (
    <div className={`gh-card ${className}`}>{children}</div>
);

const Pill = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`gh-pill ${active ? "is-active" : ""}`}
        type="button"
    >
        {children}
    </button>
);

const Feature = ({ icon, title, desc }) => (
    <Card>
        <div className="gh-feature">
            <div className="gh-icon-badge" aria-hidden>{icon}</div>
            <div>
                <h4 className="gh-feature-title">{title}</h4>
                <p className="gh-muted sm">{desc}</p>
            </div>
        </div>
    </Card>
);

// ————————————————————————————————————————————————
// Data de pantallas 
// ————————————————————————————————————————————————
// ————————————————————————————————————————————————
// Showcases (nuevo estilo "cards grandes" como la imagen)
// ————————————————————————————————————————————————
const showcases = [
    {
        eyebrow: "CUOTAS",
        title: "Cobros y cuotas sin dolores de cabeza",
        desc:
            "Generá cuotas para todos los usuarios, controlá vencimientos y visualizá pagos en segundos. Automatizá el seguimiento y mantené tus ingresos ordenados mes a mes.",
        alt: "Cuotas",
        url: ImageInicio,
    },
    {
        eyebrow: "RUTINAS",
        title: "Rutinas listas en minutos",
        desc:
            "Creá y asigná rutinas a tus alumnos, con la ayuda de un banco de ejercicios. Tus alumnos pueden ver sus rutinas 24/7 desde la app y descargarlas en PDF para imprimirlas cuando quieran.",
        alt: "Rutinas",
        url: ImageRutinas,
    },
    {
        eyebrow: "CLASES Y TURNOS",
        title: "Reservas simples para tus alumnos",
        desc:
            "Calendario claro, cupos, instructores y horarios. Tus alumnos reservan y vos controlás todo desde un solo lugar.",
        alt: "Turnos",
        url: ImageTurnos,
    },
    {
        eyebrow: "ADMIN",
        title: "Tu gimnasio en números, de un vistazo",
        desc:
            "Mirá alumnos activos, cuotas pagadas/impagas y métricas clave en una sola pantalla. Tomá decisiones rápidas con información clara y accionable.",
        alt: "Dashboard admin con KPIs de cobros y alumnos activos",
        url: ImageAdminKps,
    },
];

// ————————————————————————————————————————————————
// Features por Rol
// ————————————————————————————————————————————————
const alumnoFeatures = [
    { icon: "🔑", title: "Login / Signup + Recuperación", desc: "Registro en minutos, email de bienvenida y recuperación de contraseña por correo." },
    { icon: "📅", title: "Clases y horarios", desc: "Listado visual con fotos, días y entrenadores asignados." },
    { icon: "📋", title: "Turnos", desc: "Reservá, reprogramá o cancelá tus turnos sin fricción." },
    { icon: "🏋️", title: "Rutinas + Recomendadas", desc: "Armá tus rutinas o seguí las sugeridas por el gimnasio." },
    { icon: "✅", title: "Histórico de ejercicios", desc: "Cargá el peso por ejercicio y mirá cómo evoluciona tu progreso." },
    { icon: "💳", title: "Cuotas y pagos", desc: "Consultá tu estado de cuenta desde el perfil." },
];

const entrenadorFeatures = [
    { icon: "📅", title: "Clases", desc: "Gestioná tus clases y horarios con un calendario claro." },
    { icon: "👥", title: "Listado de alumnos", desc: "Buscá y filtrá alumnos para dar seguimiento rápido." },
    { icon: "📋", title: "Creación de rutinas", desc: "Construí rutinas para compartir." },
    { icon: "✅", title: "Asignación de rutinas", desc: "Asigná planes a cada alumno y hacé seguimiento." },
    { icon: "🏋️", title: "Ejercicios", desc: "Base de ejercicios con imágenes y videos a tu disposición." },
];

const adminFeatures = [
    { icon: "👥", title: "Usuarios + roles", desc: "Administrá alumnos, entrenadores y administradores con pantallas y permisos específicos." },
    { icon: "📅", title: "Clases y turnos", desc: "Definí clases, asigná entrenadores y administrá turnos fácilmente." },
    { icon: "🏋️", title: "Ejercicios y multimedia", desc: "Cargá fotos y videos, ordená por grupos musculares y categorías." },
    { icon: "📋", title: "Rutinas", desc: "Creá planes de entrenamiento rápidamente." },
    { icon: "✨", title: "Planes", desc: "Definí planes de suscripción y beneficios." },
    { icon: "🛡️", title: "Cuotas", desc: "Generación masiva de cuotas para activos con plan; verificación automática de vencidas." },
    { icon: "📈", title: "Dashboard con KPIs", desc: "Cobros pagados/impagos y alumnos activos en un vistazo." },
];

// ————————————————————————————————————————————————
// Pricing (nuevo estilo similar a la imagen)
// ————————————————————————————————————————————————
// ————————————————————————————————————————————————
// Pricing - Planes reales del PDF (Gimnasios Institucionales)
// ————————————————————————————————————————————————
const pricingPlans = [
    {
        key: "institutional_basic",
        name: "Gym básico",
        tagline: "Ideal para gimnasios con hasta 5 entrenadores y 100 alumnos",
        baseMonthly: 49000,
        bulletsTop: [
            "30 días gratis de prueba",
            "Backups mensuales automáticos",
            "Soporte personalizado (email + chat)",
        ],
        bulletsBottom: [
            "Hasta 200 usuarios alumnos y 5 entrenadores",
            "Roles y permisos avanzados",
            "Banco de ejercicios (imágenes + videos)",
            "Progreso histórico de ejercicios por alumno",
            "Filtros avanzados en listados",
            "Reserva de turnos y clases",
        ],
        cta: "Solicitar demo",
        featured: false,
    },
    {
        key: "Gym Mediano",
        name: "Gym en crecimiento",
        tagline: "Para gimnasios en crecimiento",
        baseMonthly: 89000,
        bulletsTop: [
            "30 días gratis de prueba",
            "Backups mensuales automáticos",
            "Soporte personalizado (email + chat)",
        ],
        bulletsBottom: [
            "Hasta 500 usuarios y 10 entrenadores",
            "Todo lo del plan Básico",
            "Creación de rutinas con ejercicios vinculados",
            "Muestra de rutinas recomendadas para todos los alumnos",
            "Módulo de cuotas con validación diaria",
            "Notificaciones automáticas",
            "Dashboard admin con KPIs",
        ],
        cta: "Solicitar demo",
        featured: true,
    },
    {
        key: "institutional_premium",
        name: "Gym Premium",
        tagline: "Para cadenas y gimnasios grandes",
        baseMonthly: 149000,
        bulletsTop: [
            "30 días gratis de prueba",
            "Backups mensuales automáticos",
            "Soporte personalizado (email + chat)",
        ],
        bulletsBottom: [
            "Hasta 1000 usuarios y 20 entrenadores",
            "Todo lo del plan Gym en crecimiento",
            "Onboarding dedicado",
            "Soporte premium",
            "Branding y dominio personalizado",
        ],
        cta: "Hablar con ventas",
        featured: false,
    },
];


const formatARS = (value) => {
    // Formato simple tipo $139.900
    try {
        return new Intl.NumberFormat("es-AR").format(value);
    } catch {
        return String(value);
    }
};

export default function GymHourLanding() {
    const [role, setRole] = useState("alumno");

    const TOPBAR_ITEMS = [
        "La app ideal para tu gimnasio",
        "1 mes de prueba gratis — sin compromisos",
        "Promoción especial: tu página web 100% gratis al contratar GymHour",
    ];

    const BILLING_OPTIONS = [
        { key: "monthly", label: "Mensual", months: 1, discount: 0 },
        { key: "quarterly", label: "3 meses", months: 3, discount: 0.10 },
        { key: "semiannual", label: "6 meses", months: 6, discount: 0.15 },
        { key: "annual", label: "Anual", months: 12, discount: 0.20 },
    ];

    const [billing, setBilling] = useState("monthly");


    const features = useMemo(
        () => ({ alumno: alumnoFeatures, entrenador: entrenadorFeatures, admin: adminFeatures }),
        []
    );

    const nav = [
        { href: "#funcionalidades", label: "Funcionalidades" },
        { href: "#screens", label: "Secciones" },
        { href: "#pricing", label: "Precios" },
        { href: "#faq", label: "FAQ" },
    ];

    const getDisplayedPrices = (plan) => {
        const opt = BILLING_OPTIONS.find((o) => o.key === billing) ?? BILLING_OPTIONS[0];

        const discountedMonthly = Math.round(plan.baseMonthly * (1 - opt.discount));
        const total = discountedMonthly * opt.months;

        return {
            opt,
            discountedMonthly,
            total,
            baseMonthly: plan.baseMonthly,
        };
    };


    return (
        <div className="gh-landing gh-theme-light">
            {/* Top Bar */}
            <TopBar items={TOPBAR_ITEMS} />

            {/* Header */}
            <header className="gh-header gh-header-light">
                <div className="gh-container gh-header-inner">
                    <a href="#hero" className="gh-brand">
                        <img src={GymhourTextoDerecha} alt="GymHour" width={120} />
                    </a>

                    <nav className="gh-nav gh-nav-desktop">
                        {nav.map((n) => (
                            <a key={n.href} href={n.href} className="gh-nav-link">
                                {n.label}
                            </a>
                        ))}
                    </nav>

                    <div className="gh-header-cta">
                        <a href="https://calendly.com/gymhourmails/30min" target="_blank" className="gh-btn gh-btn-primary">Agendar demo gratuita</a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <Section id="hero" className="gh-hero-light">
                <div className="gh-container gh-hero-center">

                    <h1 className="gh-h1 gh-h1-light">
                        Gestioná tu gimnasio <br />
                        <span className="muted">en un solo lugar</span>
                    </h1>

                    <p className="gh-muted gh-hero-lead">
                        Reservas de clases, creación de rutinas, listado de ejercicios, administración de cuotas y mucho más.
                        GymHour te permite simplificar la operación diaria y ofrecer una experiencia moderna para tus alumnos.
                    </p>

                    <div className="gh-hero-cta-row">
                        <a href="#pricing" className="gh-btn gh-btn-primary gh-hero-btn">
                            Probar gratis <span className="gh-hero-arrow" aria-hidden>→</span>
                        </a>

                        <a href="https://calendly.com/gymhourmails/30min" target="_blank" className="gh-btn gh-hero-btn gh-btn-outline">
                            <span className="gh-hero-icon" aria-hidden>
                                {/* Calendar icon */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M3.5 9h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path
                                        d="M6 5h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            Pedir una demo
                        </a>
                    </div>


                    <div className="gh-hero-panel">
                        <div className="gh-hero-preview-light" />
                    </div>
                </div>
            </Section>


            {/* Roles */}
            <Section
                id="funcionalidades"
                eyebrow="Vistas por perfil"
                title="Qué ofrece la plataforma"
                subtitle="Todo lo necesario para administrar alumnos, rutinas, clases, cobros y turnos con una experiencia moderna y simple."
                className="gh-section funcionalidades-section"
            >
                <div className="gh-role-pills">
                    <Pill active={role === "alumno"} onClick={() => setRole("alumno")}>Alumno</Pill>
                    <Pill active={role === "entrenador"} onClick={() => setRole("entrenador")}>Entrenador</Pill>
                    <Pill active={role === "admin"} onClick={() => setRole("admin")}>Admin</Pill>
                </div>
                <div className="gh-grid-3">
                    {(features[role] || []).map((f, i) => (
                        <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
                    ))}
                </div>
            </Section>

            {/* Screenshots */}
            <Section
                id="screens"
                eyebrow="Producto"
                title="Algunas secciones de Gymhour"
                subtitle="Un diseño cuidado para que alumnos, entrenadores y administradores trabajen más rápido y con menos fricción."
                className="funcionalidades-section"
            >
                <div className="gh-showcase-stack">
                    {showcases.map((item, i) => (
                        <Card
                            key={i}
                            className={`gh-showcase-card ${i % 2 === 1 ? "is-reverse" : ""}`}
                        >
                            <div className="gh-showcase-content">
                                <div className="gh-showcase-eyebrow">{item.eyebrow}</div>
                                <h3 className="gh-showcase-title">{item.title}</h3>
                                <p className="gh-showcase-desc">{item.desc}</p>
                            </div>

                            <div className="gh-showcase-frame">
                                <img src={item.url} alt={item.alt} />
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Promo Web Gratis (CTA real para #cta) */}
            <Section
                id="cta"
                eyebrow="PROMO"
                title="Sumá Gymhour y te regalamos tu página web"
                subtitle="Cuando contratás cualquiera de nuestros planes, incluimos una web profesional para tu gimnasio o para tu servicio como entrenador. Sin vueltas, lista para publicar."
                className="gh-promo-section"
            >
                <div className="gh-promo-card">
                    <div className="gh-promo-left">
                        <div className="gh-promo-badges">
                            <Badge variant="promo">BONUS INCLUIDO: TU WEB GRATIS</Badge>
                        </div>

                        <h3 className="gh-promo-title">
                            Presencia profesional + sistema de gestión, en un solo combo
                        </h3>

                        <p className="gh-muted gh-promo-lead">
                            Ideal para captar nuevos alumnos, mostrar tus servicios y llevar a la gente directo a tu demo o contacto.
                        </p>

                        <ul className="gh-promo-list">
                            <li><span className="gh-promo-check">✓</span> Página web moderna con distintos estilos</li>
                            <li><span className="gh-promo-check">✓</span> Secciones clave: servicios, planes, contacto, redes</li>
                            <li><span className="gh-promo-check">✓</span> Diseño responsive (celu/compu)</li>
                            <li><span className="gh-promo-check">✓</span> Lista para publicar y compartir</li>
                        </ul>

                        <div className="gh-promo-actions">
                            <a href="#pricing" className="gh-btn gh-btn-primary">Ver planes</a>
                        </div>

                        <p className="gh-promo-footnote">
                            *Promo disponible al contratar GymHour. Consultanos por tiempos y alcance según el plan.
                        </p>
                    </div>

                    <div className="gh-promo-right" aria-hidden>
                        <div className="gh-browser-mock">
                            <div className="gh-browser-top">
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                                <div className="gh-browser-url">tugimnasio.com</div>
                            </div>

                            <div className="gh-browser-body">
                                <div className="gh-browser-hero">
                                    <div className="gh-browser-logo">Gym</div>
                                    <div className="gh-browser-lines">
                                        <div className="l1" />
                                        <div className="l2" />
                                        <div className="l3" />
                                    </div>
                                    <div className="gh-browser-cta" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Pricing (nuevo layout) */}
            <section id="pricing" className="gh-pricing-section">
                <div className="gh-container gh-pricing-container">
                    <h2 className="gh-pricing-title">
                        Probalo 1 mes gratis y ahorrá más con planes por meses.
                    </h2>
                    <p className="gh-pricing-subtitle">
                        Elegí el plan que mejor se adapte a tu gimnasio.
                        Con la contratación de cualquiera de los planes, también te realizamos un sitio web sin costo.
                    </p>

                    <div className="gh-pricing-toggle">
                        {BILLING_OPTIONS.map((opt) => (
                            <button
                                key={opt.key}
                                type="button"
                                className={`gh-pricing-toggle-btn ${billing === opt.key ? "is-active" : ""}`}
                                onClick={() => setBilling(opt.key)}
                                title={opt.discount ? `${Math.round(opt.discount * 100)}% OFF` : "Sin descuento"}
                            >
                                {opt.label}
                                {opt.discount > 0 && (
                                    <span className="gh-toggle-hint"> ({Math.round(opt.discount * 100)}% OFF)</span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="gh-pricing-grid-new">
                        {pricingPlans.map((plan) => {
                            const prices = getDisplayedPrices(plan);

                            return (
                                <div
                                    key={plan.key}
                                    className={`gh-pricing-card-new ${plan.featured ? "is-featured" : ""}`}
                                >
                                    {plan.featured && (
                                        <div className="gh-pricing-popular-badge">
                                            <Badge variant="popular">Más elegido</Badge>
                                        </div>
                                    )}

                                    <div className="gh-pricing-card-head">
                                        <h3 className="gh-pricing-card-name">{plan.name}</h3>
                                        <div className="gh-pricing-card-tagline">{plan.tagline}</div>
                                    </div>

                                    <div className="gh-pricing-price-block">
                                        <div className="gh-pricing-price-main">
                                            <span className="gh-price-currency">$</span>
                                            <span className="gh-price-number">{formatARS(prices.discountedMonthly)}</span>
                                            <span className="gh-price-suffix">/mes</span>
                                        </div>

                                        <div className="gh-pricing-promo-line">
                                            {prices.opt.discount > 0 ? (
                                                <>
                                                    <span className="gh-pricing-promo-badge">
                                                        {Math.round(prices.opt.discount * 100)}% OFF
                                                    </span>
                                                    <span>pagando {prices.opt.label.toLowerCase()}</span>
                                                </>
                                            ) : (
                                                <span>Pago mensual sin descuento</span>
                                            )}
                                        </div>

                                        {/* {prices.opt.discount > 0 && (
                                            <div className="gh-pricing-after-line">
                                                <span className="gh-pricing-after-amount">
                                                    Base ${formatARS(prices.baseMonthly)}
                                                </span>
                                                <span className="gh-pricing-after-muted">/mes</span>
                                            </div>
                                        )} */}

                                        {/* <div className="gh-pricing-after-line">
                                            <span className="gh-pricing-after-amount">
                                                Total ${formatARS(prices.total)}
                                            </span>
                                            <span className="gh-pricing-after-muted">
                                                por {prices.opt.months} mes{prices.opt.months > 1 ? "es" : ""}
                                            </span>
                                        </div> */}
                                    </div>

                                    <a href="https://calendly.com/gymhourmails/30min" target="_blank" className="gh-pricing-btn">
                                        {plan.cta}
                                    </a>

                                    <ul className="gh-pricing-checklist">
                                        {plan.bulletsTop.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>

                                    <div className="gh-pricing-divider" />

                                    <ul className="gh-pricing-specs">
                                        {plan.bulletsBottom.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* FAQ */}
            <Section
                id="faq"
                eyebrow="Preguntas frecuentes"
                title="Todo lo que suelen consultarnos"
            >
                <div className="gh-grid-2">
                    <Card>
                        <h4 className="gh-feature-title">¿GymHour sirve para gimnasios y también para entrenadores personales?</h4>
                        <p className="gh-muted sm mt-6">Sí. Podés usarlo en gimnasios, boxes o studios, y también como entrenador personal para gestionar tus clases, rutinas y alumnos.</p>
                    </Card>
                    <Card>
                        <h4 className="gh-feature-title">¿Necesito instalar algo?</h4>
                        <p className="gh-muted sm mt-6">No. Es 100% web y funciona desde cualquier tipo de dispositivo con acceso a Internet.</p>
                    </Card>
                    <Card>
                        <h4 className="gh-feature-title">¿Cómo gestionan las cuotas?</h4>
                        <p className="gh-muted sm mt-6">Podés crear cuotas únicas o generar cuotas masivas para todos los usuarios. Además, el sistema marca automáticamente las vencidas mediante un proceso programado.</p>
                    </Card>
                    <Card>
                        <h4 className="gh-feature-title">¿Qué métricas muestra el panel?</h4>
                        <p className="gh-muted sm mt-6">Vas a ver cobros pagados/impagos y la cantidad de alumnos activos, para entender la salud de tu negocio de un vistazo.</p>
                    </Card>
                </div>
            </Section>

            {/* Footer */}
            <footer className="gh-footer-light">
                <div className="gh-container gh-footer-inner">
                    <p className="gh-muted">© {new Date().getFullYear()} GymHour</p>
                    <div className="gh-footer-links">
                        <a href="https://www.gymhour.app/terms-and-conditions" target="_blank">Términos y condiciones</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
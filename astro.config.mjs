// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
const siteUrl = process.env.SITE_URL ?? 'https://cortexpersist.com';

export default defineConfig({
	site: siteUrl,
	integrations: [
		starlight({
			title: 'CORTEX Docs',
			description: 'Trust infrastructure for autonomous AI.',
			logo: {
				src: './src/assets/logo-white.svg',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/borjamoskv/Cortex-Persist' }],
			sidebar: [
				{
					label: '🚀 Prime & Fundamentals',
					items: [
						{ label: 'Visión General', link: '/' },
						{ label: 'Quick Start', link: '/quickstart' },
						{ label: 'Instalación', link: '/installation' },
						{ label: 'CORTEX System Brief', link: '/cortex-system-brief' },
						{ label: 'Manifiesto Soberano', link: '/manifesto' },
					],
				},
				{
					label: '🏛️ Epistemología & Axiomas',
					items: [
						{ label: 'Axiomas Estructurales', link: '/axioms' },
						{ label: 'Axiomas Operativos', link: '/operating-axioms' },
						{ label: 'Registro de Axiomas', link: '/axiom-registry' },
						{ label: 'Peano Soberano', link: '/peano-soberano' },
						{ label: 'Ultrathink Physics', link: '/ultrathink_physics' },
						{ label: 'Sintetología Agéntica', link: '/agentica' },
						{ label: 'Puentes Epistémicos', link: '/epistemic-bridges' },
					],
				},
				{
					label: '⚡ Arquitectura de Hipervisor (V6-V8)',
					items: [
						{ label: 'Whitepaper Arquitectónico', link: '/cortex_architecture_whitepaper' },
						{ label: 'Arquitectura General', link: '/architecture' },
						{ label: 'Arquitectura V6', link: '/v6_architecture' },
						{ label: 'Evolución V7', link: '/v7_evolution' },
						{ label: 'Roadmap V8', link: '/cortex_v8_roadmap' },
						{ label: 'System Map', link: '/system-map' },
						{ label: 'Apotheosis Blueprint', link: '/apotheosis_blueprint' },
					],
				},
				{
					label: '🐝 Swarm & Termodinámica',
					items: [
						{ label: 'Termodinámica de Enjambres', link: '/termodinamica_enjambres' },
						{ label: 'Thermodynamic Enforcement', link: '/thermodynamic-enforcement' },
						{ label: 'Soberanía Cognitiva', link: '/cognitive_sovereignty_architectures' },
						{ label: 'Patrones de Orquestación', link: '/agent-orchestration-patterns-that-scale' },
						{ label: 'Prevención de Descontrol', link: '/por-que-los-agentes-autonomos-se-descontrolan' },
					],
				},
				{
					label: '🛡️ Seguridad, Confianza & SCITT',
					items: [
						{ label: 'Manifiesto de Seguridad', link: '/cortex_security_manifesto' },
						{ label: 'Modelo de Confianza', link: '/security_trust_model' },
						{ label: 'Semántica de Confianza', link: '/trust-semantics' },
						{ label: 'CORTEX Trust Standard', link: '/rfc-cortex-trust-standard' },
						{ label: 'Immunity Layer', link: '/immunity-layer' },
						{ label: 'Anatomía Audit Pack', link: '/audit_pack_anatomy' },
					],
				},
				{
					label: '🧠 Memory OS & Estado',
					items: [
						{ label: 'RFC CORTEX Memory OS', link: '/rfc-cortex-memory-os' },
						{ label: 'Memoria Auditable', link: '/how-to-build-agent-memory-that-survives-an-audit' },
						{ label: 'Comparativa Memoria 2026', link: '/comparativa-memoria-agentes-ia-2026' },
						{ label: 'Memoria con Evidencia', link: '/por-que-los-agentes-necesitan-memoria-con-evidencia' },
					],
				},
				{
					label: '🔌 SDKs, CLI & APIs',
					items: [
						{ label: 'Superficie SDK', link: '/sdk-surface' },
						{ label: 'Interfaz CLI', link: '/cli' },
						{ label: 'Referencia API', link: '/api' },
						{ label: 'Integración MCP', link: '/mcp' },
						{ label: 'Plugin Registry', link: '/plugin-registry' },
						{ label: 'Exportación Canonical JSON', link: '/export-canonical-json' },
					],
				},
				{
					label: '📰 Artículos & Publicaciones',
					autogenerate: { directory: 'articles' },
				},
				{
					label: '🌐 Global & Translations',
					autogenerate: { directory: 'zh' },
				},
			],
		}),
	],
});


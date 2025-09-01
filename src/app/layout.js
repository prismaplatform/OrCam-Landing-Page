import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Script from "next/script";
import Image from "next/image";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title:
		"OrCam România - Finanțare gratuită până la 39.000 RON pentru tehnologie asistivă",
	description:
		"Obține finanțare gratuită de până la 39.000 RON prin programul Teach Assist pentru echipamente OrCam inovatoare. Tehnologie asistivă pentru persoane cu deficiențe de vedere - OrCam MyEye Pro, Smart și Read.",
	keywords:
		"OrCam România, tehnologie asistivă, deficiențe vedere, finanțare gratuită, Teach Assist, OrCam MyEye Pro, OrCam MyEye Smart, OrCam Read, persoane nevăzătoare, independență, program european, 39000 RON",
	authors: [{ name: "OrCam România" }],
	creator: "OrCam România",
	publisher: "OrCam România",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "ro_RO",
		url: "https://orcam.ro",
		title:
			"OrCam România - Finanțare gratuită până la 39.000 RON pentru tehnologie asistivă",
		description:
			"Obține finanțare gratuită de până la 39.000 RON prin programul Teach Assist pentru echipamente OrCam inovatoare. Tehnologie asistivă pentru persoane cu deficiențe de vedere.",
		siteName: "OrCam România",
		images: [
			{
				url: "/orcam-myeye-pro.webp",
				width: 1200,
				height: 630,
				alt: "OrCam MyEye Pro - Tehnologie asistivă pentru persoane cu deficiențe de vedere",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "OrCam România - Finanțare gratuită până la 39.000 RON",
		description:
			"Tehnologie asistivă OrCam cu finanțare gratuită prin programul Teach Assist. Pentru persoane cu deficiențe de vedere.",
		images: ["/orcam-myeye-pro.webp"],
		creator: "@OrCam",
		site: "@OrCam",
	},
	alternates: {
		canonical: "https://orcam.ro",
		languages: {
			"ro-RO": "https://orcam.ro",
		},
	},
	category: "Healthcare Technology",
	classification: "Assistive Technology",
	other: {
		"google-site-verification": "your-google-verification-code-here",
		"msvalidate.01": "your-bing-verification-code-here",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="ro" className={roboto.className}>
			<head>
				{/* Preconnect to external domains for performance */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link rel="preconnect" href="https://kit.fontawesome.com" />

				{/* Favicon and app icons */}
				<link rel="icon" href="/favicon/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />

				{/* Theme and viewport */}
				<meta name="theme-color" content="#000000" />
				<meta name="color-scheme" content="light" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>

				{/* Additional SEO tags */}
				<meta name="format-detection" content="telephone=no" />
				<meta name="geo.region" content="RO" />
				<meta name="geo.country" content="Romania" />
				<meta name="language" content="Romanian" />
				<meta name="distribution" content="global" />
				<meta name="rating" content="general" />
				<meta name="revisit-after" content="7 days" />

				{/* Business/Organization structured data */}
				{/* <script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "OrCam România",
							url: "https://orcam.ro",
							logo: "https://orcam.ro/orcam-logo.svg",
							description:
								"Furnizor de tehnologie asistivă OrCam pentru persoane cu deficiențe de vedere în România",
							address: {
								"@type": "PostalAddress",
								addressCountry: "RO",
							},
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "+40-123-456-789",
								contactType: "customer service",
								email: "contact@orcam.ro",
								availableLanguage: "Romanian",
							},
							sameAs: [
								"https://www.facebook.com/OrCamTech",
								"https://www.youtube.com/c/OrCamTech",
								"https://twitter.com/OrCam",
								"https://www.instagram.com/orcam_technologies/",
								"https://www.linkedin.com/company/orcam/",
							],
						}),
					}}
				/> */}

				{/* Product structured data */}
				{/* <script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Product",
							name: "OrCam MyEye Pro",
							description:
								"Dispozitiv de asistență vizuală cu inteligență artificială pentru persoane cu deficiențe de vedere",
							brand: {
								"@type": "Brand",
								name: "OrCam",
							},
							category: "Assistive Technology",
							image: "https://orcam.ro/orcam-myeye-pro.webp",
							offers: {
								"@type": "Offer",
								availability: "https://schema.org/InStock",
								priceCurrency: "RON",
								price: "39000",
								description:
									"Finanțare disponibilă prin programul Teach Assist",
							},
						}),
					}}
				/> */}

				{/* WebSite structured data for search box */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "OrCam România",
							url: "https://orcam.ro",
							description:
								"Tehnologie asistivă OrCam cu finanțare gratuită pentru persoane cu deficiențe de vedere în România",
							inLanguage: "ro-RO",
						}),
					}}
				/>
			</head>
			<body className={`${roboto.variable}`}>
				<Script
					src="https://kit.fontawesome.com/0e7d01b6b6.js"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>

				{/* Google Analytics - replace with your tracking ID */}
				{/* <Script
					src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'GA_MEASUREMENT_ID');
                    `}
				</Script> */}

				{/* Facebook Pixel - replace with your pixel ID */}
				<Script id="facebook-pixel" strategy="afterInteractive">
					{`
                        !function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '3055671477943486');
						fbq('track', 'PageView');
                    `}
				</Script>
				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=3055671477943486&ev=PageView&noscript=1"
						alt="Facebook Pixel"
					/>
				</noscript>

				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

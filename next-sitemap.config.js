module.exports = {
	siteUrl: "https://dewwwelopment.pl",
	generateRobotsTxt: true,
	sitemapSize: 7000,
	changefreq: "weekly",
	exclude: ["/polityka-prywatnosci"],
	autoLastmod: true,
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", allow: "/" },
			{ userAgent: "*", disallow: "/polityka-prywatnosci" },
		],
	},
	transform: async (config, path) => {
		const priority = path === "/" ? 1 : 0.7;
		return {
			loc: path,
			changefreq: path === "/" ? "daily" : config.changefreq,
			priority,
		};
	},
};

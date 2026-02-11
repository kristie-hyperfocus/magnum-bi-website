import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BQVMvWcQ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Our <strong>pre-purchase building inspections start from $450</strong>, with the final price depending on:</p>\n<p><strong>Property factors:</strong></p>\n<ul>\n<li><strong>Size</strong> - Number of bedrooms, bathrooms, and overall square footage</li>\n<li><strong>Location</strong> - Distance from our base on the Sunshine Coast</li>\n<li><strong>Age and type</strong> - Older homes or unique construction may require additional time</li>\n<li><strong>Special features</strong> - Pools, large sheds, or multiple dwellings</li>\n</ul>\n<p><strong>New build stage inspections</strong> are priced individually based on:</p>\n<ul>\n<li>Which stages you require</li>\n<li>Size and complexity of the build</li>\n<li>Package deals (discount for multiple stages)</li>\n</ul>\n<p><strong>Why invest in an inspection?</strong></p>\n<p>The cost of a building inspection is typically <strong>less than 0.1%</strong> of the property purchase price. Consider this:</p>\n<ul>\n<li>A $600,000 property = $450 inspection (0.075% of purchase price)</li>\n<li>Average repair savings identified = $5,000 - $50,000+</li>\n</ul>\n<p><strong>What’s included in the price:</strong></p>\n<ul>\n<li>✓ Comprehensive on-site inspection (2-3 hours)</li>\n<li>✓ Detailed digital report with photos</li>\n<li>✓ Expert analysis and recommendations</li>\n<li>✓ Phone support to discuss findings</li>\n<li>✓ Delivered within 48 hours</li>\n</ul>\n<p><strong>Get a quote:</strong></p>\n<p>Contact us for an accurate quote based on your specific property:</p>\n<ul>\n<li><strong>Phone:</strong> 0438 825 008</li>\n<li><strong>Email:</strong> <a href=\"mailto:info@magnumbi.com.au\">info@magnumbi.com.au</a></li>\n</ul>\n<p>We’re happy to provide obligation-free quotes and answer any questions about our services.</p>";

				const frontmatter = {"question":"What does a building inspection cost?","category":"Pricing","order":2};
				const file = "/sessions/amazing-epic-tesla/mnt/magnum-bi-website/content/faq/what-does-inspection-cost.md";
				const url = undefined;
				function rawContent() {
					return "\nOur **pre-purchase building inspections start from $450**, with the final price depending on:\n\n**Property factors:**\n- **Size** - Number of bedrooms, bathrooms, and overall square footage\n- **Location** - Distance from our base on the Sunshine Coast\n- **Age and type** - Older homes or unique construction may require additional time\n- **Special features** - Pools, large sheds, or multiple dwellings\n\n**New build stage inspections** are priced individually based on:\n- Which stages you require\n- Size and complexity of the build\n- Package deals (discount for multiple stages)\n\n**Why invest in an inspection?**\n\nThe cost of a building inspection is typically **less than 0.1%** of the property purchase price. Consider this:\n- A $600,000 property = $450 inspection (0.075% of purchase price)\n- Average repair savings identified = $5,000 - $50,000+\n\n**What's included in the price:**\n- ✓ Comprehensive on-site inspection (2-3 hours)\n- ✓ Detailed digital report with photos\n- ✓ Expert analysis and recommendations\n- ✓ Phone support to discuss findings\n- ✓ Delivered within 48 hours\n\n**Get a quote:**\n\nContact us for an accurate quote based on your specific property:\n- **Phone:** 0438 825 008\n- **Email:** info@magnumbi.com.au\n\nWe're happy to provide obligation-free quotes and answer any questions about our services.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

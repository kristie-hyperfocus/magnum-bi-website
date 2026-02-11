import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BQVMvWcQ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A typical building inspection takes <strong>2-3 hours</strong> for an average-sized home, depending on the size and complexity of the property.</p>\n<p><strong>Factors that affect inspection time:</strong></p>\n<ul>\n<li><strong>Property size</strong> - Larger homes take longer</li>\n<li><strong>Age and condition</strong> - Older properties or those in poor condition require more detailed examination</li>\n<li><strong>Access</strong> - Some areas may be difficult to access, requiring additional time</li>\n<li><strong>Property type</strong> - Multi-story homes, properties with pools, or complex structures take longer</li>\n</ul>\n<p><strong>What happens during the inspection:</strong></p>\n<ol>\n<li>External inspection of roof, walls, and site</li>\n<li>Internal inspection of all accessible areas</li>\n<li>Detailed examination of structural elements</li>\n<li>Photography of key areas and defects</li>\n<li>Note-taking and documentation</li>\n</ol>\n<p><strong>Do I need to be present?</strong>\nYou’re welcome to attend, but it’s not required. Many clients prefer to attend so they can ask questions and see issues firsthand. However, access to the property is all we need.</p>\n<p><strong>When will I get my report?</strong>\nYour detailed report will be delivered within <strong>48 hours</strong> of the inspection.</p>";

				const frontmatter = {"question":"How long does a building inspection take?","category":"Process","order":1};
				const file = "/sessions/amazing-epic-tesla/mnt/magnum-bi-website/content/faq/how-long-does-inspection-take.md";
				const url = undefined;
				function rawContent() {
					return "\nA typical building inspection takes **2-3 hours** for an average-sized home, depending on the size and complexity of the property.\n\n**Factors that affect inspection time:**\n- **Property size** - Larger homes take longer\n- **Age and condition** - Older properties or those in poor condition require more detailed examination\n- **Access** - Some areas may be difficult to access, requiring additional time\n- **Property type** - Multi-story homes, properties with pools, or complex structures take longer\n\n**What happens during the inspection:**\n1. External inspection of roof, walls, and site\n2. Internal inspection of all accessible areas\n3. Detailed examination of structural elements\n4. Photography of key areas and defects\n5. Note-taking and documentation\n\n**Do I need to be present?**\nYou're welcome to attend, but it's not required. Many clients prefer to attend so they can ask questions and see issues firsthand. However, access to the property is all we need.\n\n**When will I get my report?**\nYour detailed report will be delivered within **48 hours** of the inspection.\n";
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

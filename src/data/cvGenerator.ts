import { content, ContentData } from './content';

export function generateCVText(data: ContentData = content): string {
  const p = data.personal;
  const divider = '='.repeat(80);
  const subDivider = '-'.repeat(80);

  let out = `${divider}\n${p.name.toUpperCase()} — CURRICULUM VITAE\n${divider}\n`;
  out += `Role:     ${p.title}\n`;
  out += `Company:  ${p.company} (${p.companyWebsite})\n`;
  out += `Email:    ${p.email}\n`;
  out += `Phone:    ${p.phone}\n`;
  out += `Location: ${p.location}\n`;
  out += `GitHub:   ${p.github}\n`;
  out += `LinkedIn: ${p.linkedin}\n\n`;

  out += `${subDivider}\nSUMMARY\n${subDivider}\n`;
  out += `${p.bio}\n\n`;

  out += `${subDivider}\nCORE SKILLS\n${subDivider}\n`;
  for (const cat of data.skillCategories) {
    out += `[${cat.title}]\n`;
    for (const s of cat.skills) {
      out += `  • ${s.name} (${s.level}%)\n`;
    }
    out += '\n';
  }

  out += `${subDivider}\nEXPERIENCE & LEADERSHIP\n${subDivider}\n`;
  for (const t of data.timeline) {
    out += `${t.role} | ${t.company} (${t.year})\n`;
    out += `Description: ${t.description}\n`;
    out += 'Key Contributions:\n';
    for (const h of t.highlights) {
      out += `  - ${h}\n`;
    }
    out += '\n';
  }

  out += `${subDivider}\nFEATURED PROJECTS & SYSTEMS\n${subDivider}\n`;
  for (const prj of data.projects) {
    out += `${prj.title} [${prj.category}]\n`;
    out += `Subtitle: ${prj.subtitle}\n`;
    out += `Summary:  ${prj.description}\n`;
    out += `Stack:    ${prj.tags.join(', ')}\n`;
    out += `GitHub:   ${prj.githubUrl}\n`;
    if (prj.demoUrl) out += `Demo:     ${prj.demoUrl}\n`;
    out += 'Metrics & Highlights:\n';
    for (const m of prj.metrics) {
      out += `  * ${m}\n`;
    }
    out += '\n';
  }

  out += `${subDivider}\nEDUCATION\n${subDivider}\n`;
  out += `${p.education}\n\n`;

  out += `${subDivider}\nCONTACT & CONNECT\n${subDivider}\n`;
  out += `Email:    ${p.email}\n`;
  out += `Phone:    ${p.phone}\n`;
  out += `Website:  ${p.companyWebsite}\n`;
  out += `GitHub:   ${p.github}\n`;
  out += `LinkedIn: ${p.linkedin}\n`;

  return out;
}

export function generateCVMarkdown(data: ContentData = content): string {
  const p = data.personal;

  let out = `# ${p.name}\n\n`;
  out += `**${p.title}**  \n`;
  out += `*${p.location}* | [${p.email}](mailto:${p.email}) | [${p.phone}](tel:${p.phoneRaw})  \n`;
  out += `[Company](${p.companyWebsite}) · [GitHub](${p.github}) · [LinkedIn](${p.linkedin})\n\n`;
  out += `---\n\n`;

  out += `## Professional Summary\n\n${p.bio}\n\n`;

  out += `## Technical Skills\n\n`;
  for (const cat of data.skillCategories) {
    out += `### ${cat.title}\n\n`;
    out += cat.skills.map((s) => `- **${s.name}** (${s.level}%)`).join('\n');
    out += '\n\n';
  }

  out += `## Experience & Leadership\n\n`;
  for (const t of data.timeline) {
    out += `### ${t.role} — ${t.company}\n`;
    out += `*${t.year}*\n\n`;
    out += `${t.description}\n\n`;
    for (const h of t.highlights) {
      out += `- ${h}\n`;
    }
    out += '\n';
  }

  out += `## Featured Engineering Projects\n\n`;
  for (const prj of data.projects) {
    out += `### [${prj.title}](${prj.githubUrl}) (${prj.category})\n`;
    out += `*${prj.subtitle}*\n\n`;
    out += `${prj.description}\n\n`;
    out += `**Tags:** ${prj.tags.map((t) => `\`${t}\``).join(', ')}  \n`;
    out += `**Key Highlights:**\n`;
    for (const m of prj.metrics) {
      out += `- ${m}\n`;
    }
    out += '\n';
  }

  out += `## Education\n\n${p.education}\n\n`;

  out += `## Contact\n\n`;
  out += `- **Email:** [${p.email}](mailto:${p.email})\n`;
  out += `- **Phone:** [${p.phone}](tel:${p.phoneRaw})\n`;
  out += `- **Company Website:** [${p.companyWebsite}](${p.companyWebsite})\n`;
  out += `- **GitHub:** [${p.github}](${p.github})\n`;
  out += `- **LinkedIn:** [${p.linkedin}](${p.linkedin})\n`;

  return out;
}

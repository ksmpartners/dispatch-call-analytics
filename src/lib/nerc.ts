// Links every mention of NERC, COM-002-4 and COM-003-1 in our own copy to NERC's site.
export const NERC_URL = 'https://www.nerc.com/';
export const COM_002_4_URL = 'https://www.nerc.com/globalassets/standards/reliability-standards/com/com-002-4.pdf';
// NERC Project 2007-02 white paper (May 2012).
export const COM_003_1_URL = 'https://www.nerc.com/globalassets/standards/projects/2007-02/com-003-1_white_paper_may-2012.pdf';

const urlFor = (m: string) =>
  m.includes('COM-002-4') ? COM_002_4_URL : m.includes('COM-003-1') ? COM_003_1_URL : NERC_URL;

const a = (href: string, text: string) =>
  `<a class="ref-link" href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

/** Returns HTML for trusted, static page copy with NERC references turned into links. */
export const linkNerc = (text: string) =>
  text.replace(/NERC COM-00[23]-[14]|COM-002-4|COM-003-1|NERC/g, (m) => a(urlFor(m), m));

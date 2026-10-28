// Infos perso et liens. Laisser '' pour cacher le bouton correspondant.
export const profile = {
  firstName: 'Felipe',
  lastName: 'Dos Santos Alves',
  initials: 'FD',
  email: 'f.dossantosalves97351@gmail.com',
  github: 'https://github.com/fdossantos266',
  linkedin: '',
  // Numéro au format international, sans espaces ni "+" (ex : 594694123456)
  whatsapp: '',
  // Mettre le PDF dans /public puis : cvUrl: '/cv.pdf'
  cvUrl: '',
}

export const skills: Record<'web' | 'back' | 'iot' | 'sys', string[]> = {
  web: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Flutter'],
  back: ['Node.js', 'PostgreSQL', 'Supabase', 'Firebase', 'Python'],
  iot: ['ESP32', 'C / C++', 'MQTT'],
  sys: ['Linux', 'Windows', 'Proxmox', 'Git'],
}

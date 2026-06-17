export interface Contact {
  type: 'email' | 'linkedin' | 'github' | 'whatsapp'
  info: string
  url?: string
}

export const contacts: Contact[] = [
  {
    type: 'email',
    info: 'jeffsilva1@outlook.com',
  },
  {
    type: 'linkedin',
    info: 'https://www.linkedin.com/in/jfromjefferson',
    url: 'https://www.linkedin.com/in/jfromjefferson',
  },
  {
    type: 'github',
    info: 'https://github.com/jfromjefferson',
    url: 'https://github.com/jfromjefferson',
  },
  {
    type: 'whatsapp',
    info: '+55 53 99165-4993',
    url: 'https://wa.me/5553991654993',
  },
]

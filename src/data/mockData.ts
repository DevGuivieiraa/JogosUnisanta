export interface User {
  id: string;
  email: string;
  name: string;
  surname?: string;
  preferredCourse?: string;
  preferredSport?: string;
  role: 'superadmin' | 'cliente';
  avatar?: string;
}

export interface Team {
  id: string;
  name: string;
  course: string;
  logo?: string;
}

export interface MatchEvent {
  id: string;
  type: 'goal' | 'yellow_card' | 'red_card' | 'start' | 'end' | 'set_win';
  minute: number;
  teamId?: string; // Which team the event belongs to
  player?: string; // Name of the player (optional)
  score?: string; // e.g., "25-23" (optional)
}

export interface Match {
  id: string;
  sport: string;
  teamA: Team;
  teamB: Team;
  scoreA: number;
  scoreB: number;
  status: 'live' | 'finished' | 'scheduled';
  date: string;
  time: string;
  location: string;
  events?: MatchEvent[];
}

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'superadmin@gmail.com',
    name: 'Super Admin',
    role: 'superadmin',
  },
  {
    id: '2',
    email: 'cliente@gmail.com',
    name: 'Cliente Teste',
    role: 'cliente',
  },
];

export const mockTeams: Team[] = [
  { id: '1', name: 'Fefesp - Unisanta', course: 'Educação Física', logo: '⚽' },
  { id: '2', name: 'Engenharia - Unisanta', course: 'Engenharia', logo: '⚙️' },
  { id: '3', name: 'Direito - Unisanta', course: 'Direito', logo: '⚖️' },
  { id: '4', name: 'Arquitetura - Unisanta', course: 'Arquitetura', logo: '📐' },
];

export const mockMatches: Match[] = [
  {
    id: 'm1',
    sport: 'Futsal Masculino',
    teamA: mockTeams[0],
    teamB: mockTeams[1],
    scoreA: 3,
    scoreB: 1,
    status: 'live',
    date: '2026-03-04',
    time: '19:00',
    location: 'Ginásio Laerte Gonçalves',
    events: [
      { id: 'e1', type: 'start', minute: 0 },
      { id: 'e2', type: 'goal', minute: 12, teamId: '1', player: 'Juninho' },
      { id: 'e3', type: 'yellow_card', minute: 18, teamId: '2', player: 'Ricardo' },
      { id: 'e4', type: 'goal', minute: 25, teamId: '1', player: 'Dudu' },
      { id: 'e5', type: 'goal', minute: 32, teamId: '2', player: 'Felipe' },
      { id: 'e6', type: 'red_card', minute: 38, teamId: '2', player: 'Ricardo' },
      { id: 'e7', type: 'goal', minute: 40, teamId: '1', player: 'Juninho' },
    ]
  },
  {
    id: 'm2',
    sport: 'Vôlei Feminino',
    teamA: mockTeams[2],
    teamB: mockTeams[3],
    scoreA: 2,
    scoreB: 0,
    status: 'live',
    date: '2026-03-04',
    time: '19:30',
    location: 'Poliesportivo Unisanta',
    events: [
      { id: 'v1', type: 'start', minute: 0 },
      { id: 'v2', type: 'set_win', minute: 25, teamId: '3', score: '25-18' },
      { id: 'v3', type: 'set_win', minute: 52, teamId: '3', score: '25-22' },
    ]
  },
  {
    id: 'm3',
    sport: 'Basquete Masculino',
    teamA: mockTeams[1],
    teamB: mockTeams[3],
    scoreA: 0,
    scoreB: 0,
    status: 'scheduled',
    date: '2026-03-04',
    time: '21:00',
    location: 'Ginásio Laerte Gonçalves',
  },
];

export const AVAILABLE_COURSES = [
  'Administração - Unisanta',
  'Administração - Strong',
  'Arquitetura - Unisanta',
  'Análise de Sistemas - Unip',
  'Ciên. Educ. - Unisantos',
  'Comunicação - Unisantos',
  'Direito - Unisanta',
  'Direito - Unisantos',
  'Direito - Esamc',
  'Educação Física - Unaerp',
  'Educação Física - Unifesp',
  'Educação Física - FPG',
  'Engenharia - Unisanta',
  'Engenharia - ESAMC',
  'Engenharia - Federal de Cubatão',
  'Farmácia - Unisanta',
  'FEFESP - Unisanta',
  'FEFIS - Unimes',
  'Fisioterapia - Unisanta',
  'Fisioterapia - Unifesp',
  'Fisioterapia - Unaerp',
  'Medicina - Unaerp',
  'Medicina - Unoeste',
  'Medicina Veterinária - São Judas',
  'Medicina Veterinária - Unimes',
  'Nutrição - Unisanta',
  'Nutrição - Unifesp',
  'Odontologia - Unisanta',
  'Odonto - São Judas',
  'Psicologia - Unisanta',
  'Rel. Internacionais - Unisanta',
  'Saúde - Unisantos',
  'Sistemas de Informação - Unisanta',
  'Tec. Inf. - Unisantos'
];

export const AVAILABLE_SPORTS = [
  'Futsal Masculino',
  'Futsal Feminino',
  'Vôlei Masculino',
  'Vôlei Feminino',
  'Basquete Masculino',
  'Basquete Feminino',
  'Handebol Masculino',
  'Handebol Feminino',
  'Natação',
  'Judô',
  'Tênis de Mesa'
];

export const COURSE_ICONS: Record<string, string> = {
  'Administração': '💼',
  'Arquitetura': '📐',
  'Análise de Sistemas': '💻',
  'Ciên. Educ.': '📚',
  'Comunicação': '📣',
  'Direito': '⚖️',
  'Educação Física': '⚽',
  'FEFESP': '⚽',
  'Fefesp': '⚽',
  'FEFIS': '⚽',
  'Engenharia': '⚙️',
  'Farmácia': '💊',
  'Fisioterapia': '⚕️',
  'Medicina': '🏥',
  'Medicina Veterinária': '🐾',
  'Nutrição': '🍎',
  'Odontologia': '🦷',
  'Odonto': '🦷',
  'Psicologia': '🧠',
  'Rel. Internacionais': '🌎',
  'Saúde': '🏥',
  'Sistemas de Informação': '💻',
  'Tec. Inf.': '💻',
};

export interface News {
  id: string;
  title: string;
  summary: string;
  date: string;
  image?: string;
  url: string;
}

export const mockNews: News[] = [
  {
    id: 'n1',
    title: 'Comissão organizadora do 41º Jogos da Unisanta convoca atléticas para reunião de apresentação',
    summary: 'A Universidade Santa Cecília deu início à organização do 41º Jogos da Unisanta, que serão realizados entre os dias 4 e 22 de maio.',
    date: '24/02/2026',
    url: 'https://santaportal.com.br/jogos-da-unisanta/comissao-organizadora-do-41o-jogos-da-unisanta-convoca-atleticas-para-reuniao-de-apresentacao'
  },
  {
    id: 'n2',
    title: 'Entidades assistenciais recebem cerca de sete toneladas de alimentos arrecadados nos Jogos da Unisanta',
    summary: 'A Unisanta realizou, na manhã desta terça-feira (27), a cerimônia de entrega dos alimentos arrecadados durante os Jogos da Unisanta.',
    date: '27/05/2025',
    url: 'https://santaportal.com.br/jogos-da-unisanta/entidades-assistenciais-recebem-cerca-de-sete-toneladas-de-alimentos-arrecadados-nos-jogos-da-unisanta'
  },
  {
    id: 'n3',
    title: 'Fefesp é a campeã geral da 40ª edição dos Jogos da Unisanta',
    summary: 'A 40ª edição dos Jogos da Unisanta chegou ao fim nesta sexta-feira (23) e marcou uma noite histórica para a Fefesp Unisanta.',
    date: '23/05/2025',
    url: 'https://santaportal.com.br/jogos-da-unisanta/fefesp-e-a-campea-geral-da-40a-edicao-dos-jogos-da-unisanta'
  },
  {
    id: 'n4',
    title: 'Unimed Santos reconhece grandiosidade dos Jogos da Unisanta',
    summary: 'Levando o lema de vida saudável e da defesa da saúde a sério, a Unimed Santos integra o time de patrocinadores.',
    date: '23/05/2025',
    url: 'https://santaportal.com.br/jogos-da-unisanta/unimed-santos-reconhece-a-grandiosidade-dos-jogos-da-unisanta-e-integra-o-time-de-patrocinadores'
  },
  {
    id: 'n5',
    title: 'Sanmell Motos reafirma compromisso com a sociedade ao apoiar os Jogos da Unisanta',
    summary: 'Em seu primeiro ano de parceria, a Sanmell Motos reafirma seu compromisso em apoiar eventos voltados à saúde.',
    date: '23/05/2025',
    url: 'https://santaportal.com.br/jogos-da-unisanta/sanmell-motos-reafirma-compromisso-com-a-sociedade-ao-apoiar-os-jogos-da-unisanta'
  },
  {
    id: 'n6',
    title: 'Allyfutebol apoia o futuro da sociedade através dos Jogos da Unisanta',
    summary: 'Objetivando gerar um impacto positivo na sociedade, a Allyfutebol participa como um dos integrantes do time de apoiadores.',
    date: '23/05/2025',
    url: 'https://santaportal.com.br/jogos-da-unisanta/allyfutebol-apoia-o-futuro-da-sociedade-atraves-dos-jogos-da-unisanta'
  }
];

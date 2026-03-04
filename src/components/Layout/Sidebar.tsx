import { type FC } from 'react';
import {
    Trophy,
    Dribbble,
    Target,
    Users,
    ChevronRight,
    TrendingUp,
    History
} from 'lucide-react';

const Sidebar: FC = () => {
    const sports = [
        { name: 'Futsal', icon: <Target size={18} /> },
        { name: 'Basquete', icon: <Dribbble size={18} /> },
        { name: 'Vôlei', icon: <Users size={18} /> },
        { name: 'Natação', icon: <TrendingUp size={18} /> },
        { name: 'Handebol', icon: <Target size={18} /> },
    ];

    return (
        <aside style={{
            width: 'var(--sidebar-width)',
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            bottom: 0,
            background: 'var(--bg-main)',
            borderRight: '1px solid var(--border-color)',
            padding: '20px 0',
            overflowY: 'auto'
        }}>
            <div style={{ padding: '0 20px 15px', borderBottom: '1px solid var(--border-color)', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '14px' }}>
                    <Trophy size={18} />
                    ESPORTES
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {sports.map((sport) => (
                    <a
                        key={sport.name}
                        href="#"
                        className="sidebar-link"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 20px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'var(--text-secondary)',
                            transition: 'background 0.2s'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {sport.icon}
                            {sport.name}
                        </div>
                        <ChevronRight size={14} opacity={0.5} />
                    </a>
                ))}
            </div>

            <div style={{ marginTop: '30px', padding: '0 20px 15px', borderBottom: '1px solid var(--border-color)', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontWeight: 'bold', fontSize: '13px' }}>
                    <History size={16} />
                    COMPETIÇÃO
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingBottom: '20px' }}>
                <a href="#" style={{ padding: '10px 20px', fontSize: '13px', color: 'var(--text-secondary)' }}>Classificação Geral</a>
                <a href="#" style={{ padding: '10px 20px', fontSize: '13px', color: 'var(--text-secondary)' }}>Melhores Atletas</a>
                <a href="#" style={{ padding: '10px 20px', fontSize: '13px', color: 'var(--text-secondary)' }}>Histórico</a>
            </div>

            <style>{`
        .sidebar-link:hover {
          background: var(--bg-hover);
          color: var(--text-primary) !important;
        }
      `}</style>
        </aside>
    );
};

export default Sidebar;

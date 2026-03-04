import { type FC } from 'react';
import Header from '../components/Navigation/Header';
import Sidebar from '../components/Layout/Sidebar';
import { AVAILABLE_COURSES, COURSE_ICONS } from '../data/mockData';
import { GraduationCap, School } from 'lucide-react';

const Participants: FC = () => {
    const getCourseIcon = (name: string) => {
        const foundKey = Object.keys(COURSE_ICONS).find(key => name.includes(key));
        return foundKey ? COURSE_ICONS[foundKey] : null;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1, paddingLeft: 'var(--sidebar-width)', paddingTop: 'var(--header-height)' }}>
                <Sidebar />
                <main style={{ flex: 1, padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '10px' }}>Cursos Participantes</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Conheça todas as atléticas e faculdades que disputam os Jogos da Unisanta</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '20px'
                    }}>
                        {AVAILABLE_COURSES.map((course, index) => {
                            const [name, university] = course.split(' - ');
                            const icon = getCourseIcon(name);

                            return (
                                <div key={index} className="premium-card hover-glow" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '20px',
                                    transition: 'all 0.2s'
                                }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'var(--bg-hover)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent-color)',
                                        fontSize: '24px'
                                    }}>
                                        {icon || <GraduationCap size={24} />}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                                            {name}
                                        </div>
                                        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                                            <School size={12} />
                                            {university}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div style={{
                        marginTop: '60px',
                        padding: '30px',
                        background: 'linear-gradient(135deg, rgba(227, 6, 19, 0.1) 0%, rgba(227, 6, 19, 0.05) 100%)',
                        borderRadius: 'var(--border-radius)',
                        textAlign: 'center',
                        border: '1px solid rgba(227, 6, 19, 0.2)'
                    }}>
                        <h2 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>Disputa Acirrada!</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                            São {AVAILABLE_COURSES.length} delegações lutando pelo título de campeão geral.
                        </p>
                    </div>
                </main>
            </div>

            <style>{`
                .hover-glow:hover {
                    transform: translateY(-4px);
                    border-color: var(--accent-color);
                    background: var(--bg-hover);
                    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.1);
                }
            `}</style>
        </div>
    );
};

export default Participants;

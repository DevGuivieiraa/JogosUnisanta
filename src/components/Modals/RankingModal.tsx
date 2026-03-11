import React, { useMemo } from 'react';
import { X, Trophy, Medal } from 'lucide-react';
import { mockRanking, COURSE_ICONS, COURSE_EMBLEMS } from '../../data/mockData';
import { useData } from '../context/DataContext';

interface RankingModalProps {
    onClose: () => void;
}

const RankingModal: React.FC<RankingModalProps> = ({ onClose }) => {
    const { courses, customEmblems } = useData();

    const getTeamEmblem = (fullCourseName: string) => {
        if (customEmblems[fullCourseName]) return customEmblems[fullCourseName];
        if (fullCourseName in COURSE_EMBLEMS) return `/emblemas/${COURSE_EMBLEMS[fullCourseName]}`;
        return null;
    };

    const sortedRanking = useMemo(() => {
        // Build array combining points from mockRanking with all courses available
        const rankingMap = new Map(mockRanking.map(r => [r.course, r.points]));
        
        const fullList = courses.map(course => {
            return {
                course: course,
                points: rankingMap.get(course) || 0
            };
        });

        // Sort dynamically: 1st Points (descending), 2nd Alphabetical (ascending)
        return fullList.sort((a, b) => {
            if (b.points !== a.points) {
                return b.points - a.points;
            }
            return a.course.localeCompare(b.course);
        });
    }, [courses]);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px'
        }}>
            <div className="premium-card animate-in" style={{
                width: '100%',
                maxWidth: '700px',
                height: '85vh',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: '25px',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(255,255,255,0.02)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '12px',
                            background: 'var(--accent-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 20px rgba(255, 46, 46, 0.3)'
                        }}>
                            <Trophy size={24} color="white" />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>Ranking Geral</h2>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Pontuação acumulada de todos os cursos</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'var(--bg-hover)',
                            border: 'none',
                            color: 'white',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div style={{
                    overflowY: 'auto',
                    padding: '20px',
                    flex: 1
                }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <th style={{ padding: '12px 15px' }}>Pos</th>
                                <th style={{ padding: '12px 15px' }}>Curso / Faculdade</th>
                                <th style={{ padding: '12px 15px', textAlign: 'right' }}>Pontos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedRanking.map((item, index) => {
                                const courseName = item.course.split(' - ')[0];
                                const institution = item.course.split(' - ')[1] || '';
                                const icon = COURSE_ICONS[courseName] || '🏆';
                                const rankOrdinal = index + 1;

                                return (
                                    <tr
                                        key={item.course}
                                        style={{
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            background: index < 3 ? 'rgba(255, 46, 46, 0.03)' : 'transparent',
                                            transition: 'background 0.2s'
                                        }}
                                        className="hover-glow-subtle"
                                    >
                                        <td style={{ padding: '15px' }}>
                                            <div style={{
                                                width: '28px',
                                                height: '28px',
                                                borderRadius: '6px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '13px',
                                                fontWeight: 800,
                                                background: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : 'var(--bg-hover)',
                                                color: index <= 2 ? '#000' : 'var(--text-secondary)'
                                            }}>
                                                {rankOrdinal}
                                            </div>
                                        </td>
                                        <td style={{ padding: '15px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    {(() => {
                                                        const emblemUrl = getTeamEmblem(item.course);
                                                        return emblemUrl ? (
                                                            <>
                                                                <img
                                                                    src={emblemUrl}
                                                                    alt={courseName}
                                                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                                                    onError={(e) => {
                                                                        e.currentTarget.style.display = 'none';
                                                                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                                                        if (fallback) fallback.style.display = 'flex';
                                                                    }}
                                                                />
                                                                <div style={{
                                                                    display: 'none',
                                                                    width: '32px',
                                                                    height: '32px',
                                                                    borderRadius: '8px',
                                                                    background: 'var(--bg-hover)',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    fontSize: '16px'
                                                                }}>
                                                                    {icon}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <div style={{
                                                                width: '32px',
                                                                height: '32px',
                                                                borderRadius: '8px',
                                                                background: 'var(--bg-hover)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                fontSize: '16px'
                                                            }}>
                                                                {icon}
                                                            </div>
                                                        );
                                                    })()}
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>{courseName}</div>
                                                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{institution}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: '15px', textAlign: 'right' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                <span style={{ fontSize: '15px', fontWeight: 800, color: index <= 2 ? 'var(--accent-color)' : 'white' }}>
                                                    {item.points}
                                                </span>
                                                <span style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Pts</span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div style={{
                    padding: '20px',
                    borderTop: '1px solid var(--border-color)',
                    textAlign: 'center',
                    background: 'rgba(0,0,0,0.2)'
                }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <Medal size={14} />
                        As pontuações são atualizadas após o encerramento de cada partida oficial.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RankingModal;

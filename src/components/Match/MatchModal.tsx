import { type FC } from 'react';
import { X, Clock, MapPin, Trophy, Play, CheckCircle } from 'lucide-react';
import { type Match, type MatchEvent } from '../../data/mockData';

interface MatchModalProps {
    match: Match;
    onClose: () => void;
}

const MatchModal: FC<MatchModalProps> = ({ match, onClose }) => {
    const getEventIcon = (type: MatchEvent['type']) => {
        switch (type) {
            case 'goal': return <Trophy size={16} color="#ffd700" />;
            case 'set_win': return <Trophy size={16} color="#ffd700" />;
            case 'yellow_card': return <div style={{ width: 12, height: 16, background: '#ffcc00', borderRadius: 2 }} />;
            case 'red_card': return <div style={{ width: 12, height: 16, background: '#ff4444', borderRadius: 2 }} />;
            case 'start': return <Play size={16} color="var(--accent-color)" />;
            case 'end': return <CheckCircle size={16} color="#44ff44" />;
            default: return null;
        }
    };

    const getEventLabel = (type: MatchEvent['type']) => {
        switch (type) {
            case 'goal': return 'GOL!';
            case 'set_win': return 'Fim do Set';
            case 'yellow_card': return 'Cartão Amarelo';
            case 'red_card': return 'Cartão Vermelho';
            case 'start': return 'Início da Partida';
            case 'end': return 'Fim da Partida';
            default: return '';
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)'
                }}
            />

            {/* Modal Content */}
            <div className="premium-card" style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                maxHeight: '90vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                animation: 'modalSlideUp 0.3s ease-out'
            }}>
                {/* Header */}
                <div style={{
                    padding: '30px',
                    borderBottom: '1px solid var(--border-color)',
                    background: 'linear-gradient(to bottom, var(--bg-hover), var(--bg-primary))'
                }}>
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'var(--bg-hover)',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={20} />
                    </button>

                    <div style={{ textAlign: 'center', marginBottom: '10px', fontSize: '12px', color: 'var(--accent-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {match.sport}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{match.teamA.logo}</div>
                            <div style={{ fontSize: '18px', fontWeight: 800 }}>{match.teamA.name.split(' - ')[0]}</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{match.teamA.name.split(' - ')[1]}</div>
                        </div>

                        <div style={{ padding: '0 30px', textAlign: 'center' }}>
                            <div style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '4px', color: 'var(--text-primary)' }}>
                                {match.scoreA} - {match.scoreB}
                            </div>
                            {match.status === 'live' && (
                                <div style={{
                                    fontSize: '11px',
                                    color: 'var(--live-color)',
                                    fontWeight: 700,
                                    background: 'rgba(255, 68, 68, 0.1)',
                                    padding: '2px 8px',
                                    borderRadius: '10px',
                                    marginTop: '5px',
                                    display: 'inline-block'
                                }}>
                                    AO VIVO
                                </div>
                            )}
                        </div>

                        <div style={{ flex: 1, textAlign: 'center' }}>
                            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{match.teamB.logo}</div>
                            <div style={{ fontSize: '18px', fontWeight: 800 }}>{match.teamB.name.split(' - ')[0]}</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{match.teamB.name.split(' - ')[1]}</div>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        fontSize: '12px',
                        color: 'var(--text-secondary)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Clock size={14} />
                            {match.date} às {match.time}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <MapPin size={14} />
                            {match.location}
                        </div>
                    </div>
                </div>

                {/* Timeline Body */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '30px',
                    background: 'var(--bg-primary)'
                }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>Cronologia</h3>

                    {match.events && match.events.length > 0 ? (
                        <div style={{ position: 'relative' }}>
                            {/* Vertical Line */}
                            <div style={{
                                position: 'absolute',
                                left: '9px',
                                top: '10px',
                                bottom: '10px',
                                width: '2px',
                                background: 'var(--border-color)'
                            }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                {[...match.events].sort((a, b) => a.minute - b.minute).map((event) => {
                                    const isTeamA = event.teamId === match.teamA.id;
                                    return (
                                        <div key={event.id} style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1, marginBottom: '25px' }}>
                                            <div style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                background: 'var(--bg-hover)',
                                                border: '2px solid var(--border-color)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '20px',
                                                zIndex: 2
                                            }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)' }} />
                                            </div>

                                            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    {getEventIcon(event.type)}
                                                    <div>
                                                        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                                                            {getEventLabel(event.type)} {event.score && <span style={{ color: 'var(--accent-color)', marginLeft: '8px' }}>({event.score})</span>}
                                                        </div>
                                                        {(event.player || event.teamId) && (
                                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                                                                {event.player ? `${event.player} (` : ''}
                                                                {isTeamA ? match.teamA.name.split(' - ')[0] : match.teamB.name.split(' - ')[0]}
                                                                {event.player ? ')' : ''}
                                                                {event.type === 'set_win' ? ' venceu o set' : ''}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                            <Clock size={32} style={{ opacity: 0.2, marginBottom: '10px' }} />
                            <div>Nenhum evento registrado ainda.</div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes modalSlideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default MatchModal;

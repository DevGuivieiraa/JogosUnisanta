import React, { useState } from 'react';
import {
    Users,
    Settings,
    PlusCircle,
    FileText,
    Trophy,
    BookOpen,
    Clock,
    Layout
} from 'lucide-react';
import { mockMatches } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { label: 'Total Atletas', value: '1,240', icon: <Users size={20} />, color: '#3b82f6' },
        { label: 'Partidas Hoje', value: '12', icon: <Trophy size={20} />, color: '#ef4444' },
        { label: 'Cursos Inscritos', value: '18', icon: <BookOpen size={20} />, color: '#10b981' },
        { label: 'Resultados Pendentes', value: '5', icon: <PlusCircle size={20} />, color: '#f59e0b' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>Painel de Controle Super Admin</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Gerencie os Jogos Unisanta, equipes e resultados.</p>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
                {stats.map(stat => (
                    <div key={stat.label} className="premium-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: `${stat.color}20`,
                            color: stat.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {stat.icon}
                        </div>
                        <div>
                            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 600 }}>{stat.label}</div>
                            <div style={{ fontSize: '24px', fontWeight: 800 }}>{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Admin Area */}
            <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                        { id: 'overview', label: 'Visão Geral', icon: <Layout size={18} /> },
                        { id: 'matches', label: 'Gerenciar Partidas', icon: <Clock size={18} /> },
                        { id: 'teams', label: 'Equipes & Cursos', icon: <Users size={18} /> },
                        { id: 'reports', label: 'Relatórios PDF', icon: <FileText size={18} /> },
                        { id: 'settings', label: 'Configurações', icon: <Settings size={18} /> },
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 16px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: 600,
                                background: activeTab === tab.id ? 'var(--bg-hover)' : 'transparent',
                                color: activeTab === tab.id ? 'var(--accent-color)' : 'var(--text-secondary)',
                                transition: 'all 0.2s',
                                textAlign: 'left'
                            }}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="premium-card" style={{ padding: '0', overflow: 'hidden' }}>
                    <div style={{ padding: '20px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Últimas Atividades</h2>
                        <button style={{
                            background: 'var(--accent-color)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            fontSize: '13px',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <PlusCircle size={16} />
                            Nova Partida
                        </button>
                    </div>

                    <div style={{ padding: '20px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                            <thead>
                                <tr style={{ textAlign: 'left', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ padding: '12px' }}>PARTIDA</th>
                                    <th style={{ padding: '12px' }}>MODALIDADE</th>
                                    <th style={{ padding: '12px' }}>STATUS</th>
                                    <th style={{ padding: '12px' }}>AÇÕES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockMatches.map(match => (
                                    <tr key={match.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                        <td style={{ padding: '15px 12px' }}>
                                            <div style={{ fontWeight: 600 }}>{match.teamA.name} vs {match.teamB.name}</div>
                                            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{match.location}</div>
                                        </td>
                                        <td style={{ padding: '15px 12px' }}>{match.sport}</td>
                                        <td style={{ padding: '15px 12px' }}>
                                            <span style={{
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontSize: '11px',
                                                fontWeight: 700,
                                                background: match.status === 'live' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                                color: match.status === 'live' ? '#ef4444' : 'var(--text-secondary)'
                                            }}>
                                                {match.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td style={{ padding: '15px 12px' }}>
                                            <button style={{ color: 'var(--accent-color)', fontWeight: 600, marginRight: '15px' }}>Editar</button>
                                            <button style={{ color: 'var(--text-secondary)' }}>Placar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

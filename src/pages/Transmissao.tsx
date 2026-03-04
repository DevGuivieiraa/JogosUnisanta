import { type FC, useState } from 'react';
import Header from '../components/Navigation/Header';
import Sidebar from '../components/Layout/Sidebar';
import RankingModal from '../components/Modals/RankingModal';

const Transmissao: FC = () => {
    const [showRanking, setShowRanking] = useState(false);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1, paddingLeft: 'var(--sidebar-width)', paddingTop: 'var(--header-height)' }}>
                <Sidebar onShowRanking={() => setShowRanking(true)} />
                <main style={{ flex: 1, padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '20px', color: 'var(--text-primary)' }}>Transmissão</h1>

                        <div className="premium-card hover-glow" style={{ padding: '40px', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '16px' }}>
                            <p style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 500 }}>
                                Jogos Anteriores
                            </p>

                            <div style={{
                                position: 'relative',
                                paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                                height: 0,
                                overflow: 'hidden',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                            }}>
                                <iframe
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0
                                    }}
                                    src="https://www.youtube.com/embed/_OM5tlBz7z8?list=PL8-hcgQoKFxzK8hXAuKTB6HSKQcc_UC2J"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {showRanking && <RankingModal onClose={() => setShowRanking(false)} />}
        </div>
    );
};

export default Transmissao;

// Data for models and projects
const DATA = {
    models: {
        kr: [
            {
                id: 'kr-momentum',
                name: 'KR-Momentum',
                benchmark: 'Kospi200',
                capacity: '50–80억',
                metrics: {
                    inSample: {
                        sharpe: '1.85',
                        cagr: '18.4%'
                    },
                    outSample: {
                        sharpe: '1.72',
                        cagr: '16.8%'
                    }
                },
                description: '한국 주식 시장의 모멘텀 효과를 활용한 중단기 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 15bp)',
                    '참여율 20% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/kr_momentum_performance.png',
                        title: '누적 수익률 차트'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/kr_momentum_drawdown.png',
                        title: '드로다운 분석'
                    }
                ]
            },
            {
                id: 'kr-meanreversion',
                name: 'KR-MeanReversion',
                benchmark: 'Kospi200',
                capacity: '40–70억',
                metrics: {
                    inSample: {
                        sharpe: '1.92',
                        cagr: '16.7%'
                    },
                    outSample: {
                        sharpe: '1.78',
                        cagr: '15.2%'
                    }
                },
                description: '한국 주식 시장의 평균회귀 효과를 활용한 단기 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 18bp)',
                    '참여율 15% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/kr_meanreversion_performance.png',
                        title: '누적 수익률 차트'
                    }
                ]
            },
            {
                id: 'kr-statarb',
                name: 'KR-StatArb',
                benchmark: 'Kospi200',
                capacity: '30–60억',
                metrics: {
                    inSample: {
                        sharpe: '2.14',
                        cagr: '19.8%'
                    },
                    outSample: {
                        sharpe: '1.96',
                        cagr: '17.9%'
                    }
                },
                description: '한국 주식 시장의 통계적 차익거래 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 20bp)',
                    '참여율 12% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/kr_statarb_performance.png',
                        title: '누적 수익률 차트'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/kr_statarb_correlation.png',
                        title: '상관관계 분석'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/kr_statarb_heatmap.png',
                        title: '월별 수익 히트맵'
                    }
                ]
            },
            {
                id: 'kr-value',
                name: 'KR-Value',
                benchmark: 'Kospi200',
                capacity: '60–100억',
                metrics: {
                    inSample: {
                        sharpe: '1.67',
                        cagr: '15.2%'
                    },
                    outSample: {
                        sharpe: '1.51',
                        cagr: '13.8%'
                    }
                },
                description: '한국 주식 시장의 가치 투자 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 12bp)',
                    '참여율 25% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/kr_value_performance.png',
                        title: '누적 수익률 차트'
                    }
                ]
            }
        ],
        us: [
            {
                id: 'us-meanreversion',
                name: 'US-MeanReversion',
                benchmark: 'S&P500',
                capacity: '100–150억',
                metrics: {
                    inSample: {
                        sharpe: '1.78',
                        cagr: '17.3%'
                    },
                    outSample: {
                        sharpe: '1.64',
                        cagr: '15.9%'
                    }
                },
                description: '미국 주식 시장의 평균회귀 효과를 활용한 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 8bp)',
                    '참여율 18% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/us_meanreversion_performance.png',
                        title: '누적 수익률 차트'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/us_meanreversion_drawdown.png',
                        title: '드로다운 분석'
                    }
                ]
            },
            {
                id: 'us-momentum',
                name: 'US-Momentum',
                benchmark: 'S&P500',
                capacity: '90–130억',
                metrics: {
                    inSample: {
                        sharpe: '1.89',
                        cagr: '19.1%'
                    },
                    outSample: {
                        sharpe: '1.73',
                        cagr: '17.4%'
                    }
                },
                description: '미국 주식 시장의 모멘텀 효과를 활용한 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 10bp)',
                    '참여율 22% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/us_momentum_performance.png',
                        title: '누적 수익률 차트'
                    }
                ]
            },
            {
                id: 'us-statarb',
                name: 'US-StatArb',
                benchmark: 'S&P500',
                capacity: '80–140억',
                metrics: {
                    inSample: {
                        sharpe: '2.03',
                        cagr: '18.6%'
                    },
                    outSample: {
                        sharpe: '1.87',
                        cagr: '16.9%'
                    }
                },
                description: '미국 주식 시장의 통계적 차익거래 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 12bp)',
                    '참여율 15% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/us_statarb_performance.png',
                        title: '누적 수익률 차트'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/us_statarb_pairs.png',
                        title: '페어 분석'
                    }
                ]
            },
            {
                id: 'us-pairs',
                name: 'US-Pairs',
                benchmark: 'S&P500',
                capacity: '60–110억',
                metrics: {
                    inSample: {
                        sharpe: '1.95',
                        cagr: '16.4%'
                    },
                    outSample: {
                        sharpe: '1.81',
                        cagr: '15.1%'
                    }
                },
                description: '미국 주식 시장의 페어 트레이딩 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 14bp)',
                    '참여율 12% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: []
            },
            {
                id: 'us-quality',
                name: 'US-Quality',
                benchmark: 'S&P500',
                capacity: '120–180억',
                metrics: {
                    inSample: {
                        sharpe: '1.72',
                        cagr: '14.8%'
                    },
                    outSample: {
                        sharpe: '1.58',
                        cagr: '13.2%'
                    }
                },
                description: '미국 주식 시장의 퀄리티 팩터 전략',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 9bp)',
                    '참여율 28% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/us_quality_performance.png',
                        title: '누적 수익률 차트'
                    }
                ]
            }
        ],
        regime: [
            {
                id: 'regime-switch',
                name: 'Regime-Switch',
                benchmark: 'Mixed',
                capacity: '80–120억',
                metrics: {
                    inSample: {
                        sharpe: '2.21',
                        cagr: '20.3%'
                    },
                    outSample: {
                        sharpe: '2.04',
                        cagr: '18.7%'
                    }
                },
                description: '시장 레짐 변화를 감지하여 전략을 전환하는 적응형 모델',
                assumptions: [
                    '수수료/슬리피지 보수적 가정 (편도 16bp)',
                    '참여율 20% 이하 제한',
                    '체결 규칙 고정 (VWAP 기준)'
                ],
                validation: [
                    '워크포워드 & 레짐 스트레스 테스트',
                    '코스트 민감도 체크',
                    '로버스트니스 검증'
                ],
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/regime_switch_performance.png',
                        title: '누적 수익률 차트'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/regime_switch_regimes.png',
                        title: '레짐 분석'
                    },
                    {
                        type: 'video',
                        src: '/assets/models/regime_switch_demo.mp4',
                        title: '레짐 전환 시뮬레이션'
                    }
                ]
            }
        ]
    },
    projects: [
        {
            id: 'crypto-env',
            title: '크립토 트레이딩 연구 환경 개발',
            status: '진행중',
            period: '2025.7~',
            description: 'Hummingbot 프레임워크와 패널 데이터 기반 연구 환경 통합',
            techStack: ['Python', 'Hummingbot', 'Pandas', 'Docker'],
            media: []
        },
        {
            id: 'execution-algo',
            title: '틱 데이터 기반 주문집행 알고리즘 개발',
            status: '완료',
            badge: '발표 우수상',
            period: '2025.4–2025.7',
            description: '(서울대학교 AI CEO 과정 · 빅데이터 핀테크 과정 · 법무법인 영진) KOSPI200 구성종목의 오더북 데이터를 활용해 VWAP/TWAP을 능가하는 집행 전략 개발',
            techStack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'SQL'],
            media: [
                {
                    type: 'image',
                    src: '/assets/projects/algo_intro.png',
                    title: 'Backtest Overview'
                },
                {
                    type: 'image',
                    src: '/assets/projects/algo_finale.png',
                    title: 'Orderbook Features'
                }
            ]
        },
        {
            id: 'basketball-game',
            title: '농구게임',
            status: '완료',
            period: '2024.10',
            description: '컴퓨터프로그래밍 수업 중간 개인 프로젝트. 중독성 있음',
            techStack: ['C++', 'OpenGL', 'GLFW'],
            media: [
                {
                    type: 'video',
                    src: '/assets/projects/basket_game.mp4',
                    title: 'Gameplay (mp4)'
                }
            ]
        },
        {
            id: 'brick-breaker',
            title: '벽돌깨기 앱',
            status: '완료',
            period: '2024.12',
            description: '컴퓨터프로그래밍 수업 기말 개인 프로젝트. 타격감 있음',
            techStack: ['C++', 'OpenGL', 'GLFW'],
            media: [
                {
                    type: 'video',
                    src: '/assets/projects/brick_breaker.mp4',
                    title: 'Gameplay (mp4)'
                }
            ]
        },
        {
            id: 'first-click',
            title: '수강신청 첫클릭 프로그램',
            status: '완료',
            period: '2024.8',
            description: '<10ms 레이턴시 확보. 전필 수강제한 안 풀어주는 컴퓨터공학부를 향한 다전공생의 소리없는 아우성',
            techStack: ['Python', 'Selenium', 'Threading'],
            media: []
        },
        {
            id: 'ambient-ai',
            title: 'SNU GSDS Ambient AI Contest',
            status: '완료',
            badge: '3rd prize',
            period: '2023.1',
            description: '유리창으로 향하는 야생 조류를 on-device(Coral Board) 탐지해 음성 신호로 쫓아 충돌을 방지',
            techStack: ['Python', 'TensorFlow Lite', 'OpenCV', 'Edge TPU'],
            media: []
        }
    ]
};
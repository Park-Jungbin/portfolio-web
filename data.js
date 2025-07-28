// Data for models and projects
const DATA = {
    models: {
        kr: [
            {
                id: 'kr-momentum',
                name: 'Dividend universe',
                benchmark: 'Kospi200',
                capacity: '1조~5조',
                metrics: {
                    inSample: {
                        sharpe: '1.08',
                        cagr: '23.02%'
                    },
                    outSample: {
                        sharpe: '2.88',
                        cagr: '72.0%'
                    }
                },
                description: '배당을 오랜 기간 지급한 대형주 중에서, 시장 대비 초과성과를 기록할 것으로 예상되는 종목에 베팅하는 전략입니다.',
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
                        src: '/assets/models/dividend_10_left.png',
                        title: '누적 로그 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/dividend_10_right.png',
                        title: '누적 초과 수익률'
                    }
                ]
            },
            {
                id: 'kr-meanreversion',
                name: 'Event_driven_1',
                benchmark: 'Kospi200',
                capacity: '100–500억',
                metrics: {
                    inSample: {
                        sharpe: '2.33',
                        cagr: '281.57%'
                    },
                    outSample: {
                        sharpe: '2.6',
                        cagr: '501.41%'
                    }
                },
                description: '경제 논리로 설명 불가능하지만, 어떤 이벤트가 발생하면 단기적으로 주가가 급격히 상승합니다. 해당 이벤트는 중소형주에서 주로 발생하는 경향이 있습니다. 따라서 Aum이 커졌을 때 유동성 충격으로 수익률이 악화될 수 있습니다. 포트폴리오 집중도가 높기 때문에 Monotonic한 수익을 추구하기는 어렵습니다.',
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
                        src: '/assets/models/anomaly_1_left.png',
                        title: '누적 로그 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/anomaly_1_right.png',
                        title: '누적 초과 수익률'
                    }
                ]
            },
            {
                id: 'kr-statarb',
                name: 'Event_driven_2',
                benchmark: 'Kospi200',
                capacity: '10억 이하',
                metrics: {
                    inSample: {
                        sharpe: '1.58',
                        cagr: '46.75%'
                    },
                    outSample: {
                        sharpe: '2.38',
                        cagr: '70.04%'
                    }
                },
                description: '소형주에서 나타나는 이상 현상에서 알파를 취합니다. 자금 수용력이 매우 작습니다.',
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
                        src: '/assets/models/lynch_cut_left.png',
                        title: '누적 로그 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/lynch_cut_right.png',
                        title: '누적 초과 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/kr_statarb_heatmap.png',
                        title: '월별 수익 히트맵'
                    }
                ]
            },

        ],
        us: [
            {
                id: 'us-meanreversion',
                name: 'Trend-following_1',
                benchmark: 'S&P500',
                capacity: '10조 이상',
                metrics: {
                    inSample: {
                        sharpe: '0.91',
                        cagr: '19.24%'
                    },
                    outSample: {
                        sharpe: '0.97',
                        cagr: '24.59%'
                    }
                },
                description: 'S&P500 지수 구성 종목에서 알파를 취합니다. LP가 유동성을  막대하게 공급하는 종목만으로 이루어져 있어 자금수용력에 제한이 거의 없습니다',
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
                        src: '/assets/models/spx_skew_0_left.png',
                        title: '누적 로그 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/spx_skew_0_right.png',
                        title: '누적 초과 수익률'
                    }
                ]
            },
            {
                id: 'us-momentum',
                name: 'Trend-following_2',
                benchmark: 'S&P500',
                capacity: '10조 이상',
                metrics: {
                    inSample: {
                        sharpe: '1.22',
                        cagr: '61.30%'
                    },
                    outSample: {
                        sharpe: '2.12',
                        cagr: '179.95%'
                    }
                },
                description: '포트폴리오 집중도가 높은 추세 추종 전략입니다.',
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
                        src: '/assets/models/turnover_adj_momentum_1_left.png',
                        title: '누적 로그 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/turnover_adj_momentum_1_right.png',
                        title: '누적 초과 수익률'
                    },
                ]
            },
            {
                id: 'us-statarb',
                name: 'Barbell',
                benchmark: 'S&P500',
                capacity: '10조 이상',
                metrics: {
                    inSample: {
                        sharpe: '1.39',
                        cagr: '43.55%'
                    },
                    outSample: {
                        sharpe: '1.48',
                        cagr: '35.19%'
                    }
                },
                description: 'de-coupling되어 움직이는 종목들에 동시에 투자하는 전략입니다. 일상적 시장 변동성에 영향을 거의 받지 않는 성질이 있어, 레짐 체인지를 파악하는 신호로 활용될 수 있습니다',
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
                        src: '/assets/models/barbell_0_left.png',
                        title: '누적 로그 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/barbell_0_right.png',
                        title: '누적 초과 수익률'
                    }
                ]
            },
            {
                id: 'us-pairs',
                name: 'Finance_1',
                benchmark: 'S&P500',
                capacity: '5조 이상',
                metrics: {
                    inSample: {
                        sharpe: '1.07',
                        cagr: '31.98%'
                    },
                    outSample: {
                        sharpe: '1.09',
                        cagr: '48.66%'
                    }
                },
                description: '재무 건전성과 성장률이 우수한 종목을 선별하여 투자합니다',
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
                media: [
                    {
                        type: 'image',
                        src: '/assets/models/spx_0_left.png',
                        title: '누적 로그 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/spx_0_right.png',
                        title: '누적 초과 수익률'
                    }
                ]
            },

        ],
        regime: [
            {
                id: 'regime-switch',
                name: 'Regime-Switch',
                benchmark: 'S&P500 또는 VN30',
                description: '고객들에게 마켓 레짐에 대한 뷰를 제공합니다.',
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
                        title: '누적 수익률'
                    },
                    {
                        type: 'image',
                        src: '/assets/models/regime_switch_regimes.png',
                        title: '레짐 시그널'
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
            title: 'LLM 자동화 연구를 위한 크립토 트레이딩 연구 환경 개발',
            status: '진행중',
            period: '2025.7~',
            description: 'Hummingbot 프레임워크와 패널 데이터 기반 연구 환경 통합 및 LLM 커뮤니케이션 시스템 구축',
            techStack: ['Python', 'Hummingbot', 'Pandas', 'Docker', 'A2A'],
            media: []
        },
        {
            id: 'execution-algo',
            title: '틱 데이터 기반 주문집행 알고리즘 개발',
            status: '완료',
            badge: '발표 우수상',
            period: '2025.4–2025.7',
            description: '(서울대학교 AI CEO 과정 · 빅데이터 핀테크 과정 · 법무법인 영진) KOSPI200 구성종목의 오더북 데이터를 활용해 VWAP/TWAP을 능가하는 집행 전략 개발',
            techStack: [],
            media: [
                {
                    type: 'image',
                    src: '/assets/projects/algo_intro.png',
                    title: ''
                },
                {
                    type: 'image',
                    src: '/assets/projects/algo_finale.png',
                    title: ''
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
            techStack: ['JavaScript'],
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
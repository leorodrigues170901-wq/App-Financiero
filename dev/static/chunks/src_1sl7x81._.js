(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://avthptkqqqgheseiwfmo.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_LKOq6ykVu17GTYWYfEhwsw_bQTq7IUE") || '';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl || 'https://ERRO-ENV-NAO-CARREGADO.supabase.co', supabaseAnonKey || 'ERRO', {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AppLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AppLayout({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [headerData, setHeaderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingHeader, setIsLoadingHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSidebarExpanded, setIsSidebarExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppLayout.useEffect": ()=>{
            async function fetchHeaderData() {
                try {
                    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    if (!user) {
                        setIsLoadingHeader(false);
                        return;
                    }
                    const { data: perfil } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('nome_usuario').eq('id', user.id).single();
                    const { data: membro } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('familia_id').eq('perfil_id', user.id).in('status', [
                        'ativo',
                        'host'
                    ]).single();
                    if (!membro) {
                        setHeaderData({
                            nomeUsuario: perfil?.nome_usuario || 'Usuário',
                            nomeFamilia: 'Nenhuma Família',
                            participantes: []
                        });
                        setIsLoadingHeader(false);
                        return;
                    }
                    const { data: familia } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('familias').select('nome').eq('id', membro.familia_id).single();
                    const { data: participantesData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('perfil_id').eq('familia_id', membro.familia_id).in('status', [
                        'ativo',
                        'host'
                    ]);
                    let participantesNomes = [];
                    if (participantesData && participantesData.length > 0) {
                        const perfilIds = participantesData.map({
                            "AppLayout.useEffect.fetchHeaderData.perfilIds": (p)=>p.perfil_id
                        }["AppLayout.useEffect.fetchHeaderData.perfilIds"]);
                        const { data: perfisParticipantes } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('id, nome_usuario, cor_perfil').in('id', perfilIds);
                        if (perfisParticipantes) {
                            participantesNomes = perfisParticipantes.map({
                                "AppLayout.useEffect.fetchHeaderData": (p)=>({
                                        id: p.id,
                                        nome: p.id === user.id ? 'Você' : p.nome_usuario || 'Usuário',
                                        cor: p.cor_perfil || 'slate'
                                    })
                            }["AppLayout.useEffect.fetchHeaderData"]);
                        }
                    }
                    setHeaderData({
                        nomeUsuario: perfil?.nome_usuario || 'Usuário',
                        nomeFamilia: familia?.nome || 'Família',
                        participantes: participantesNomes
                    });
                } catch (err) {
                    console.error('Erro ao carregar header:', err);
                } finally{
                    setIsLoadingHeader(false);
                }
            }
            fetchHeaderData();
        }
    }["AppLayout.useEffect"], []);
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        router.push('/login');
    };
    const navItems = [
        {
            name: 'Resumo',
            href: '/dashboard',
            icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
        },
        {
            name: 'Receitas',
            href: '/receitas',
            icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
        },
        {
            name: 'Despesas',
            href: '/despesas',
            icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z'
        },
        {
            name: 'Histórico',
            href: '/historico',
            icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
        }
    ];
    const textColors = {
        blue: "text-blue-600",
        pink: "text-pink-600",
        emerald: "text-emerald-600",
        purple: "text-purple-600",
        amber: "text-amber-600",
        teal: "text-teal-600",
        cyan: "text-cyan-600",
        indigo: "text-indigo-600",
        rose: "text-rose-600",
        orange: "text-orange-600",
        slate: "text-slate-600"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#cfddea] flex flex-col md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block w-20 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/AppLayout.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                onClick: ()=>setIsSidebarExpanded(!isSidebarExpanded),
                className: `fixed hidden md:flex flex-col transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-xl border-r border-white/40 shadow-[4px_0_24px_rgba(0,0,0,0.02)] min-h-screen top-0 left-0 overflow-hidden z-50 ${isSidebarExpanded ? 'w-64 shadow-[4px_0_24px_rgba(0,0,0,0.08)]' : 'w-20 cursor-pointer'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 flex items-center h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm",
                                children: "F"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppLayout.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `text-xl font-bold font-manrope tracking-tight text-[#0f0f0f] ml-4 transition-opacity duration-300 whitespace-nowrap ${isSidebarExpanded ? 'opacity-100' : 'opacity-0'}`,
                                children: "Familia Finance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppLayout.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AppLayout.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 px-3 space-y-2 mt-4",
                        children: navItems.map((item)=>{
                            const isActive = pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center p-3 rounded-2xl transition-all ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-black/5 hover:text-black'} overflow-hidden`,
                                    title: item.name,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6 flex-shrink-0",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppLayout.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppLayout.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-semibold text-sm ml-4 transition-opacity duration-300 whitespace-nowrap ${isSidebarExpanded ? 'opacity-100' : 'opacity-0'}`,
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppLayout.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppLayout.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/src/components/AppLayout.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppLayout.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-t border-gray-100 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "w-full text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-1 py-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors",
                                title: "Sair",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-6 h-6 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `ml-4 transition-opacity duration-300 whitespace-nowrap ${isSidebarExpanded ? 'opacity-100' : 'opacity-0'}`,
                                        children: "Sair"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AppLayout.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppLayout.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppLayout.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppLayout.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0 pb-20 md:pb-0 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm px-6 md:px-10 py-5 flex items-center min-h-[85px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: isLoadingHeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 bg-gray-200 rounded w-48"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-200 rounded w-72"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AppLayout.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this) : headerData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900 tracking-tight",
                                        children: [
                                            "Bem-vindo(a) ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600",
                                                children: headerData.nomeUsuario
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppLayout.tsx",
                                                lineNumber: 176,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1 font-medium",
                                        children: [
                                            "Você está logado na ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-gray-800",
                                                children: headerData.nomeFamilia
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppLayout.tsx",
                                                lineNumber: 179,
                                                columnNumber: 39
                                            }, this),
                                            ". Participantes ativos:",
                                            ' ',
                                            headerData.participantes.map((part, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-bold ${textColors[part.cor] || 'text-slate-600'}`,
                                                            children: part.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AppLayout.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 23
                                                        }, this),
                                                        index < headerData.participantes.length - 1 && ', '
                                                    ]
                                                }, part.id, true, {
                                                    fileName: "[project]/src/components/AppLayout.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppLayout.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppLayout.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppLayout.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-200 z-50 px-6 py-3 pb-safe flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)]",
                children: navItems.map((item)=>{
                    const isActive = pathname === item.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: "flex flex-col items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 rounded-xl transition-all ${isActive ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 205,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppLayout.tsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppLayout.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] font-semibold ${isActive ? 'text-black' : 'text-gray-500'}`,
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppLayout.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/AppLayout.tsx",
                        lineNumber: 202,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/AppLayout.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AppLayout.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(AppLayout, "FWBI20RGGLO8cqp1VF605vtdvKk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AppLayout;
var _c;
__turbopack_context__.k.register(_c, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/IncomeExpenseChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IncomeExpenseChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function IncomeExpenseChart() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [membrosAtivos, setMembrosAtivos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filtroUsuario, setFiltroUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Todos');
    const [receitasBrutas, setReceitasBrutas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [despesasBrutas, setDespesasBrutas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [anoSelecionado, setAnoSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mesInicioIndex, setMesInicioIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mesFimIndex, setMesFimIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(11);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IncomeExpenseChart.useEffect": ()=>{
            async function fetchData() {
                setLoading(true);
                const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                if (!user) {
                    setLoading(false);
                    return;
                }
                const { data: membroFamily } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('familia_id').eq('perfil_id', user.id).maybeSingle();
                const familiaId = membroFamily?.familia_id;
                let profilesData = [];
                if (familiaId) {
                    const { data: membersList } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('perfil_id, perfis(id, nome_usuario)').eq('familia_id', familiaId);
                    profilesData = membersList?.filter({
                        "IncomeExpenseChart.useEffect.fetchData": (m)=>m.perfis
                    }["IncomeExpenseChart.useEffect.fetchData"]).map({
                        "IncomeExpenseChart.useEffect.fetchData": (m)=>({
                                id: m.perfis?.id,
                                nome: m.perfis?.nome_usuario || 'Usuário'
                            })
                    }["IncomeExpenseChart.useEffect.fetchData"]) || [];
                } else {
                    const { data: p } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('id, nome_usuario').eq('id', user.id).single();
                    if (p) profilesData = [
                        {
                            id: p.id,
                            nome: p.nome_usuario || 'Você'
                        }
                    ];
                }
                setMembrosAtivos(profilesData);
                let queryReceitas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('receitas').select('*');
                let queryDespesas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('despesas').select('*');
                if (familiaId) {
                    queryReceitas = queryReceitas.eq('familia_id', familiaId);
                    queryDespesas = queryDespesas.eq('familia_id', familiaId);
                } else {
                    queryReceitas = queryReceitas.eq('perfil_id', user.id);
                    queryDespesas = queryDespesas.eq('perfil_id', user.id);
                }
                const [resReceitas, resDespesas] = await Promise.all([
                    queryReceitas,
                    queryDespesas
                ]);
                setReceitasBrutas(resReceitas.data || []);
                setDespesasBrutas(resDespesas.data || []);
                setLoading(false);
            }
            fetchData();
        }
    }["IncomeExpenseChart.useEffect"], []);
    const getValorRateado = (despesa, filtroId)=>{
        const valorTotal = Number(despesa.valor || 0);
        if (filtroId === 'Todos') return valorTotal;
        const responsaveis = despesa.responsaveis_divisao || [];
        if (responsaveis.length === 0 && despesa.perfil_id === filtroId) return valorTotal;
        if (responsaveis.length === 1 && responsaveis[0].id === filtroId) return valorTotal;
        const fatia = responsaveis.find((r)=>r.id === filtroId);
        return fatia ? Number(fatia.valor || 0) : 0;
    };
    const mesesNomes = [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez'
    ];
    const getMesAnoKey = (dataString)=>{
        if (!dataString) return null;
        const partes = dataString.split('T')[0].split('-');
        if (partes.length < 3) return null;
        return `${partes[0]}-${partes[1]}`; // YYYY-MM
    };
    // Agregador de Dados por Mês (Independente de Gaps)
    const agregadosPorMes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IncomeExpenseChart.useMemo[agregadosPorMes]": ()=>{
            const mapa = {};
            receitasBrutas.forEach({
                "IncomeExpenseChart.useMemo[agregadosPorMes]": (r)=>{
                    if (filtroUsuario === 'Todos' || r.perfil_id === filtroUsuario) {
                        const key = getMesAnoKey(r.data); // YYYY-MM
                        if (key) {
                            if (!mapa[key]) mapa[key] = {
                                receita: 0,
                                despesa: 0
                            };
                            mapa[key].receita += Number(r.valor || 0);
                        }
                    }
                }
            }["IncomeExpenseChart.useMemo[agregadosPorMes]"]);
            despesasBrutas.forEach({
                "IncomeExpenseChart.useMemo[agregadosPorMes]": (d)=>{
                    const valor = getValorRateado(d, filtroUsuario);
                    if (valor > 0) {
                        const key = getMesAnoKey(d.data);
                        if (key) {
                            if (!mapa[key]) mapa[key] = {
                                receita: 0,
                                despesa: 0
                            };
                            mapa[key].despesa += valor;
                        }
                    }
                }
            }["IncomeExpenseChart.useMemo[agregadosPorMes]"]);
            return mapa;
        }
    }["IncomeExpenseChart.useMemo[agregadosPorMes]"], [
        receitasBrutas,
        despesasBrutas,
        filtroUsuario
    ]);
    // Lista de anos para o Slicer baseada nos dados reais + ano atual
    const anosDisponiveis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IncomeExpenseChart.useMemo[anosDisponiveis]": ()=>{
            const anos = new Set();
            receitasBrutas.forEach({
                "IncomeExpenseChart.useMemo[anosDisponiveis]": (r)=>{
                    const k = getMesAnoKey(r.data);
                    if (k) anos.add(k.substring(0, 4));
                }
            }["IncomeExpenseChart.useMemo[anosDisponiveis]"]);
            despesasBrutas.forEach({
                "IncomeExpenseChart.useMemo[anosDisponiveis]": (d)=>{
                    const k = getMesAnoKey(d.data);
                    if (k) anos.add(k.substring(0, 4));
                }
            }["IncomeExpenseChart.useMemo[anosDisponiveis]"]);
            anos.add(new Date().getFullYear().toString());
            return Array.from(anos).sort();
        }
    }["IncomeExpenseChart.useMemo[anosDisponiveis]"], [
        receitasBrutas,
        despesasBrutas
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IncomeExpenseChart.useEffect": ()=>{
            if (anosDisponiveis.length > 0 && !anosDisponiveis.includes(anoSelecionado)) {
                setAnoSelecionado(anosDisponiveis[anosDisponiveis.length - 1]);
            }
        }
    }["IncomeExpenseChart.useEffect"], [
        anosDisponiveis,
        anoSelecionado
    ]);
    // Motor de Gaps Forçado: Gera o array ESTRITAMENTE baseado no Slicer
    const chartDataVisivel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IncomeExpenseChart.useMemo[chartDataVisivel]": ()=>{
            if (!anoSelecionado) return [];
            const dados = [];
            for(let mesIdx = mesInicioIndex; mesIdx <= mesFimIndex; mesIdx++){
                const mesString = String(mesIdx + 1).padStart(2, '0');
                const key = `${anoSelecionado}-${mesString}`;
                const stats = agregadosPorMes[key] || {
                    receita: 0,
                    despesa: 0
                }; // Injeta ZEROS absolutos
                dados.push({
                    key,
                    ano: anoSelecionado,
                    mes: mesIdx + 1,
                    receita: stats.receita,
                    despesa: stats.despesa,
                    label: `${mesesNomes[mesIdx]}/${anoSelecionado.slice(2)}`
                });
            }
            return dados;
        }
    }["IncomeExpenseChart.useMemo[chartDataVisivel]"], [
        anoSelecionado,
        mesInicioIndex,
        mesFimIndex,
        agregadosPorMes
    ]);
    const valoresMaximos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IncomeExpenseChart.useMemo[valoresMaximos]": ()=>{
            let maxR = 0;
            let maxD = 0;
            chartDataVisivel.forEach({
                "IncomeExpenseChart.useMemo[valoresMaximos]": (d)=>{
                    if (d.receita > maxR) maxR = d.receita;
                    if (d.despesa > maxD) maxD = d.despesa;
                }
            }["IncomeExpenseChart.useMemo[valoresMaximos]"]);
            return {
                receita: maxR,
                despesa: maxD
            };
        }
    }["IncomeExpenseChart.useMemo[valoresMaximos]"], [
        chartDataVisivel
    ]);
    const formatCurrency = (val)=>{
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(val);
    };
    const formatYAxis = (tickItem)=>{
        if (tickItem >= 1000) return `R$ ${(tickItem / 1000).toFixed(1).replace('.0', '')}k`;
        return `R$ ${tickItem}`;
    };
    const CustomTooltip = ({ active, payload, label })=>{
        if (active && payload && payload.length) {
            let receita = 0;
            let despesa = 0;
            payload.forEach((p)=>{
                if (p.dataKey === 'receita') receita = p.value;
                if (p.dataKey === 'despesa') despesa = p.value;
            });
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 p-3 rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-gray-800 mb-2",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-emerald-600 font-semibold text-sm",
                        children: [
                            "Receitas: ",
                            formatCurrency(receita)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 font-semibold text-sm",
                        children: [
                            "Despesas: ",
                            formatCurrency(despesa)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-80 flex items-center justify-center bg-white rounded-3xl border border-gray-100 shadow-sm mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-3xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-6 mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold font-manrope text-gray-900",
                        children: "Renda vs Despesas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap bg-gray-50 rounded-full p-1 border border-gray-200 gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFiltroUsuario('Todos'),
                                className: `px-4 py-1.5 text-xs font-bold rounded-full transition-all ${filtroUsuario === 'Todos' ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`,
                                children: "Todos"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            membrosAtivos.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFiltroUsuario(m.id),
                                    className: `px-4 py-1.5 text-xs font-bold rounded-full transition-all ${filtroUsuario === m.id ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`,
                                    children: m.nome
                                }, m.id, false, {
                                    fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-end gap-4 mb-8 bg-gray-50/50 p-4 rounded-xl border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-500 uppercase tracking-wider",
                                children: "Período de Análise"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: anoSelecionado,
                                        onChange: (e)=>setAnoSelecionado(e.target.value),
                                        className: "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2",
                                        children: anosDisponiveis.map((ano)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: ano,
                                                children: ano
                                            }, ano, false, {
                                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: mesInicioIndex,
                                        onChange: (e)=>{
                                            const val = parseInt(e.target.value);
                                            setMesInicioIndex(val);
                                            if (val > mesFimIndex) setMesFimIndex(val);
                                        },
                                        className: "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2",
                                        children: mesesNomes.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: i,
                                                children: m
                                            }, m, false, {
                                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 text-sm font-medium",
                                        children: "até"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: mesFimIndex,
                                        onChange: (e)=>{
                                            const val = parseInt(e.target.value);
                                            setMesFimIndex(val);
                                            if (val < mesInicioIndex) setMesInicioIndex(val);
                                        },
                                        className: "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2",
                                        children: mesesNomes.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: i,
                                                children: m
                                            }, m, false, {
                                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 text-right mt-4 md:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-gray-500 uppercase tracking-wider",
                                        children: "Renda Máx."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-black text-emerald-600",
                                        children: formatCurrency(valoresMaximos.receita)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-gray-500 uppercase tracking-wider",
                                        children: "Despesa Máx."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-black text-red-500",
                                        children: formatCurrency(valoresMaximos.despesa)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                        data: chartDataVisivel,
                        margin: {
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0
                        },
                        style: {
                            backgroundColor: "#f8fafc",
                            borderRadius: "0.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "colorDespesa",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "5%",
                                            stopColor: "#ef4444",
                                            stopOpacity: 0.3
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "95%",
                                            stopColor: "#ef4444",
                                            stopOpacity: 0
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                horizontal: true,
                                vertical: true,
                                stroke: "#cbd5e1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "label",
                                axisLine: false,
                                tickLine: false,
                                tick: {
                                    fontSize: 14,
                                    fill: '#334155',
                                    fontWeight: 700
                                },
                                padding: {
                                    left: 20,
                                    right: 20
                                },
                                dy: 10
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                domain: [
                                    0,
                                    'auto'
                                ],
                                width: 65,
                                axisLine: false,
                                tickLine: false,
                                tickFormatter: formatYAxis,
                                tick: {
                                    fontSize: 14,
                                    fill: '#334155',
                                    fontWeight: 700
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                    lineNumber: 336,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                type: "monotone",
                                dataKey: "despesa",
                                stroke: "#ef4444",
                                strokeWidth: 3,
                                fillOpacity: 1,
                                fill: "url(#colorDespesa)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                type: "monotone",
                                dataKey: "receita",
                                stroke: "#10b981",
                                strokeWidth: 3,
                                strokeDasharray: "5 5",
                                dot: {
                                    r: 4,
                                    fill: '#10b981',
                                    strokeWidth: 0
                                },
                                activeDot: {
                                    r: 6
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/IncomeExpenseChart.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(IncomeExpenseChart, "izOJCK/naooDsixkmIyN12P5lUs=");
_c = IncomeExpenseChart;
var _c;
__turbopack_context__.k.register(_c, "IncomeExpenseChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/AuvpChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuvpChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const categoriasConfig = [
    {
        nome: 'Essencial',
        percentual: 0.40,
        tipo: 'Teto',
        corForte: '#3b82f6',
        corFraca: '#dbeafe'
    },
    {
        nome: 'Investimento',
        percentual: 0.25,
        tipo: 'Piso',
        corForte: '#10b981',
        corFraca: '#d1fae5'
    },
    {
        nome: 'Conforto',
        percentual: 0.10,
        tipo: 'Teto',
        corForte: '#06b6d4',
        corFraca: '#cffafe'
    },
    {
        nome: 'Prazer',
        percentual: 0.10,
        tipo: 'Teto',
        corForte: '#a855f7',
        corFraca: '#f3e8ff'
    },
    {
        nome: 'Meta Planejada',
        percentual: 0.05,
        tipo: 'Piso',
        corForte: '#6366f1',
        corFraca: '#e0e7ff'
    },
    {
        nome: 'Oportunidade',
        percentual: 0.05,
        tipo: 'Teto',
        corForte: '#f59e0b',
        corFraca: '#fef3c7'
    },
    {
        nome: 'Aumentar Renda',
        percentual: 0.05,
        tipo: 'Piso',
        corForte: '#f43f5e',
        corFraca: '#ffe4e6'
    }
];
function AuvpChart() {
    _s();
    const [loadingInitial, setLoadingInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingData, setLoadingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [membrosAtivos, setMembrosAtivos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mesesDisponiveis, setMesesDisponiveis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mesAnoSelecionado, setMesAnoSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [receitas, setReceitas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [despesas, setDespesas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuvpChart.useEffect": ()=>{
            console.log("=== DIAGNÓSTICO AUVP ===");
            console.log("1. Filtro Mês Selecionado (Exato):", mesAnoSelecionado);
            console.log("2. Filtro Usuário Selecionado (Exato):", usuarioSelecionado);
            if (receitas && receitas.length > 0) {
                console.log("3. Amostra Receita (Primeiro item):", receitas[0]);
            }
            if (despesas && despesas.length > 0) {
                console.log("4. Amostra Despesa (Primeiro item):", despesas[0]);
            }
        }
    }["AuvpChart.useEffect"], [
        mesAnoSelecionado,
        usuarioSelecionado,
        receitas,
        despesas
    ]);
    const getChaveMesAno = (dataString)=>{
        if (!dataString) return "";
        // Pega exatamente "YYYY-MM" do formato "YYYY-MM-DDTHH..."
        return dataString.substring(0, 7);
    };
    // 1. FETCH INICIAL: Membros e Meses Disponíveis
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuvpChart.useEffect": ()=>{
            async function fetchMetadata() {
                const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                if (!user) return;
                const { data: membroFamily } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('familia_id').eq('perfil_id', user.id).maybeSingle();
                const familiaId = membroFamily?.familia_id;
                let profilesData = [];
                if (familiaId) {
                    const { data: membersList } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('perfil_id, perfis(id, nome_usuario)').eq('familia_id', familiaId);
                    profilesData = membersList?.filter({
                        "AuvpChart.useEffect.fetchMetadata": (m)=>m.perfis
                    }["AuvpChart.useEffect.fetchMetadata"]).map({
                        "AuvpChart.useEffect.fetchMetadata": (m)=>({
                                id: m.perfis?.id,
                                nome: m.perfis?.nome_usuario || 'Usuário'
                            })
                    }["AuvpChart.useEffect.fetchMetadata"]) || [];
                } else {
                    const { data: p } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('id, nome_usuario').eq('id', user.id).single();
                    if (p) profilesData = [
                        {
                            id: p.id,
                            nome: p.nome_usuario || 'Você'
                        }
                    ];
                }
                setMembrosAtivos(profilesData);
                if (profilesData.length > 0) {
                    setUsuarioSelecionado(user.id);
                }
                // Fetch lightweight para datas
                let queryDespesas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('despesas').select('data');
                if (familiaId) queryDespesas = queryDespesas.eq('familia_id', familiaId);
                else queryDespesas = queryDespesas.eq('perfil_id', user.id);
                const { data: datas } = await queryDespesas;
                const mesesSet = new Set();
                if (datas) {
                    datas.forEach({
                        "AuvpChart.useEffect.fetchMetadata": (d)=>{
                            const key = getChaveMesAno(d.data);
                            if (key) mesesSet.add(key);
                        }
                    }["AuvpChart.useEffect.fetchMetadata"]);
                }
                const hoje = new Date();
                mesesSet.add(`${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}`);
                const mesesArray = Array.from(mesesSet).sort().reverse();
                const opcoesMeses = mesesArray.map({
                    "AuvpChart.useEffect.fetchMetadata.opcoesMeses": (m)=>{
                        const [ano, mes] = m.split('-');
                        return {
                            value: m,
                            label: `${mes}/${ano}`
                        };
                    }
                }["AuvpChart.useEffect.fetchMetadata.opcoesMeses"]);
                setMesesDisponiveis(opcoesMeses);
                if (opcoesMeses.length > 0) {
                    setMesAnoSelecionado(opcoesMeses[0].value);
                }
                setLoadingInitial(false);
            }
            fetchMetadata();
        }
    }["AuvpChart.useEffect"], []);
    // 2. FETCH DE DADOS
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuvpChart.useEffect": ()=>{
            async function fetchMonthData() {
                if (!usuarioSelecionado || !mesAnoSelecionado) return;
                setLoadingData(true);
                const startDate = `${mesAnoSelecionado}-01`;
                const endDate = `${mesAnoSelecionado}-31`;
                const [resReceitas, resDespesas] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('receitas').select('*').eq('perfil_id', usuarioSelecionado).gte('data', startDate).lte('data', endDate),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('despesas').select('*').gte('data', startDate).lte('data', endDate)
                ]);
                setReceitas(resReceitas.data || []);
                setDespesas(resDespesas.data || []);
                setLoadingData(false);
            }
            fetchMonthData();
        }
    }["AuvpChart.useEffect"], [
        usuarioSelecionado,
        mesAnoSelecionado
    ]);
    const formatCurrency = (val)=>{
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(val);
    };
    const formatYAxis = (tickItem)=>{
        if (tickItem >= 1000) return `R$ ${(tickItem / 1000).toFixed(1).replace('.0', '')}k`;
        return `R$ ${tickItem}`;
    };
    const getValorRateado = (despesa, filtroId)=>{
        const valorTotal = Number(despesa.valor || 0);
        const responsaveis = despesa.responsaveis_divisao || [];
        if (responsaveis.length === 0 && despesa.perfil_id === filtroId) return valorTotal;
        if (responsaveis.length === 1 && responsaveis[0].id === filtroId) return valorTotal;
        const fatia = responsaveis.find((r)=>r.id === filtroId);
        return fatia ? Number(fatia.valor || 0) : 0;
    };
    // 3. CALCULO AUVP
    const { totalReceita, chartData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuvpChart.useMemo": ()=>{
            const recTotal = receitas.filter({
                "AuvpChart.useMemo.recTotal": (r)=>r.perfil_id === usuarioSelecionado && getChaveMesAno(r.data) === mesAnoSelecionado
            }["AuvpChart.useMemo.recTotal"]).reduce({
                "AuvpChart.useMemo.recTotal": (acc, curr)=>acc + Number(curr.valor)
            }["AuvpChart.useMemo.recTotal"], 0);
            const agrupado = {};
            despesas.forEach({
                "AuvpChart.useMemo": (d)=>{
                    if (getChaveMesAno(d.data) === mesAnoSelecionado) {
                        const valor = getValorRateado(d, usuarioSelecionado);
                        if (valor > 0) {
                            const cat = d.classificacao_auvp || d.auvp || 'Outros';
                            if (!agrupado[cat]) agrupado[cat] = 0;
                            agrupado[cat] += valor;
                        }
                    }
                }
            }["AuvpChart.useMemo"]);
            const processadas = categoriasConfig.map({
                "AuvpChart.useMemo.processadas": (cat)=>{
                    const meta = recTotal * cat.percentual;
                    const realizado = agrupado[cat.nome] || 0;
                    return {
                        ...cat,
                        meta,
                        realizado
                    };
                }
            }["AuvpChart.useMemo.processadas"]);
            return {
                totalReceita: recTotal,
                chartData: processadas
            };
        }
    }["AuvpChart.useMemo"], [
        receitas,
        despesas,
        usuarioSelecionado,
        mesAnoSelecionado
    ]);
    // Componentes Custom do Recharts
    const CustomXAxisTick = ({ x, y, payload })=>{
        const words = payload.value.split(' ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: x,
            y: y + 12,
            textAnchor: "middle",
            fill: "#334155",
            fontSize: 11,
            fontWeight: "bold",
            children: words.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                    x: x,
                    dy: index === 0 ? 0 : 12,
                    children: word
                }, index, false, {
                    fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this);
    };
    const CustomTooltip = ({ active, payload, label })=>{
        if (active && payload && payload.length) {
            let meta = 0;
            let realizado = 0;
            let tipo = '';
            payload.forEach((p)=>{
                if (p.dataKey === 'meta') {
                    meta = p.value;
                    tipo = p.payload.tipo;
                }
                if (p.dataKey === 'realizado') realizado = p.value;
            });
            let mensagem = '';
            let corTexto = '';
            if (tipo === 'Teto') {
                if (realizado <= meta) {
                    mensagem = `Ainda pode gastar ${formatCurrency(meta - realizado)}`;
                    corTexto = 'text-green-600 font-bold';
                } else {
                    mensagem = `Extrapolou o teto em ${formatCurrency(realizado - meta)}`;
                    corTexto = 'text-red-600 font-bold';
                }
            } else {
                if (realizado < meta) {
                    mensagem = `Faltam ${formatCurrency(meta - realizado)} para atingir a meta`;
                    corTexto = 'text-red-600 font-bold';
                } else {
                    mensagem = `Meta de aporte atingida! (+ ${formatCurrency(realizado - meta)})`;
                    corTexto = 'text-green-600 font-bold';
                }
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 p-3 rounded-lg shadow-lg max-w-[250px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-gray-800 mb-2 border-b pb-2",
                        children: [
                            label,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400 font-normal ml-1",
                                children: [
                                    "(",
                                    tipo,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 254,
                                columnNumber: 77
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "Realizado:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: formatCurrency(realizado)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "Meta/Limite:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: formatCurrency(meta)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs mt-2 pt-2 border-t ${corTexto}`,
                        children: mensagem
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    if (loadingInitial) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex justify-center items-center h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                lineNumber: 273,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
            lineNumber: 272,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-3xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full flex items-center justify-center bg-blue-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 text-blue-600",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                        lineNumber: 284,
                                        columnNumber: 106
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold font-manrope text-gray-900",
                                children: "Planejado vs Realizado"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: usuarioSelecionado,
                                onChange: (e)=>setUsuarioSelecionado(e.target.value),
                                className: "bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none",
                                children: membrosAtivos.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: m.id,
                                        children: m.nome
                                    }, m.id, false, {
                                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: mesAnoSelecionado,
                                onChange: (e)=>setMesAnoSelecionado(e.target.value),
                                className: "bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none",
                                children: mesesDisponiveis.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: m.value,
                                        children: m.label
                                    }, m.value, false, {
                                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            loadingData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                    lineNumber: 314,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, this) : totalReceita === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center h-80 bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-12 h-12 text-gray-400 mb-3",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                            lineNumber: 318,
                            columnNumber: 111
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium",
                        children: "Cadastre suas receitas deste mês para calcular as metas AUVP."
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                lineNumber: 317,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: chartData,
                        margin: {
                            top: 20,
                            right: 10,
                            left: -20,
                            bottom: 20
                        },
                        style: {
                            backgroundColor: "#f8fafc",
                            borderRadius: "0.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                horizontal: true,
                                vertical: true,
                                stroke: "#cbd5e1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "nome",
                                xAxisId: 0,
                                tick: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomXAxisTick, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                    lineNumber: 334,
                                    columnNumber: 23
                                }, this),
                                axisLine: false,
                                tickLine: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 331,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "nome",
                                xAxisId: 1,
                                hide: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                domain: [
                                    0,
                                    'auto'
                                ],
                                width: 65,
                                axisLine: false,
                                tickLine: false,
                                tickFormatter: formatYAxis,
                                tick: {
                                    fontSize: 14,
                                    fill: '#334155',
                                    fontWeight: 700
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 340,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                    lineNumber: 349,
                                    columnNumber: 33
                                }, this),
                                cursor: {
                                    fill: 'transparent'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 349,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "meta",
                                xAxisId: 0,
                                barSize: 50,
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ],
                                children: chartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: entry.corFraca
                                    }, `cell-meta-${index}`, false, {
                                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                        lineNumber: 354,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 352,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "realizado",
                                xAxisId: 1,
                                barSize: 20,
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ],
                                children: chartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: entry.corForte
                                    }, `cell-real-${index}`, false, {
                                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                        lineNumber: 361,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                                lineNumber: 359,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                        lineNumber: 324,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
                lineNumber: 322,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/AuvpChart.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_s(AuvpChart, "n7G0ignxXN23wNaz+WX/47BOrIs=");
_c = AuvpChart;
var _c;
__turbopack_context__.k.register(_c, "AuvpChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$IncomeExpenseChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/IncomeExpenseChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$AuvpChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/AuvpChart.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function DashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative font-sans text-[#0f0f0f] min-h-screen pb-24 bg-gray-50/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white sticky top-0 z-40 border-b border-gray-200 py-5 mb-8 shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-[1400px] px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold font-manrope tracking-tight text-gray-900",
                            children: "Dashboard Gerencial"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mx-auto max-w-[1400px] px-6 space-y-10 animate-slide-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$IncomeExpenseChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$AuvpChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1sl7x81._.js.map
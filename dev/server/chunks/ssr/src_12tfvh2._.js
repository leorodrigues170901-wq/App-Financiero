module.exports = [
"[project]/src/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://avthptkqqqgheseiwfmo.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_LKOq6ykVu17GTYWYfEhwsw_bQTq7IUE") || '';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl || 'https://ERRO-ENV-NAO-CARREGADO.supabase.co', supabaseAnonKey || 'ERRO', {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }
});
}),
"[project]/src/components/AppLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function AppLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [headerData, setHeaderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingHeader, setIsLoadingHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSidebarExpanded, setIsSidebarExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchHeaderData() {
            try {
                const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                if (!user) {
                    setIsLoadingHeader(false);
                    return;
                }
                const { data: perfil } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('nome_usuario').eq('id', user.id).single();
                const { data: membro } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('familia_id').eq('perfil_id', user.id).in('status', [
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
                const { data: familia } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('familias').select('nome').eq('id', membro.familia_id).single();
                const { data: participantesData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('perfil_id').eq('familia_id', membro.familia_id).in('status', [
                    'ativo',
                    'host'
                ]);
                let participantesNomes = [];
                if (participantesData && participantesData.length > 0) {
                    const perfilIds = participantesData.map((p)=>p.perfil_id);
                    const { data: perfisParticipantes } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('id, nome_usuario, cor_perfil').in('id', perfilIds);
                    if (perfisParticipantes) {
                        participantesNomes = perfisParticipantes.map((p)=>({
                                id: p.id,
                                nome: p.id === user.id ? 'Você' : p.nome_usuario || 'Usuário',
                                cor: p.cor_perfil || 'slate'
                            }));
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
    }, []);
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#cfddea] flex flex-col md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block w-20 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/AppLayout.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                onClick: ()=>setIsSidebarExpanded(!isSidebarExpanded),
                className: `fixed hidden md:flex flex-col transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-xl border-r border-white/40 shadow-[4px_0_24px_rgba(0,0,0,0.02)] min-h-screen top-0 left-0 overflow-hidden z-50 ${isSidebarExpanded ? 'w-64 shadow-[4px_0_24px_rgba(0,0,0,0.08)]' : 'w-20 cursor-pointer'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 flex items-center h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm",
                                children: "F"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppLayout.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 px-3 space-y-2 mt-4",
                        children: navItems.map((item)=>{
                            const isActive = pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center p-3 rounded-2xl transition-all ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-black/5 hover:text-black'} overflow-hidden`,
                                    title: item.name,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6 flex-shrink-0",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-t border-gray-100 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "w-full text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-1 py-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors",
                                title: "Sair",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-6 h-6 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0 pb-20 md:pb-0 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm px-6 md:px-10 py-5 flex items-center min-h-[85px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: isLoadingHeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 bg-gray-200 rounded w-48"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppLayout.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            }, this) : headerData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900 tracking-tight",
                                        children: [
                                            "Bem-vindo(a) ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1 font-medium",
                                        children: [
                                            "Você está logado na ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-gray-800",
                                                children: headerData.nomeFamilia
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppLayout.tsx",
                                                lineNumber: 179,
                                                columnNumber: 39
                                            }, this),
                                            ". Participantes ativos:",
                                            ' ',
                                            headerData.participantes.map((part, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-200 z-50 px-6 py-3 pb-safe flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)]",
                children: navItems.map((item)=>{
                    const isActive = pathname === item.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: "flex flex-col items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 rounded-xl transition-all ${isActive ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/lib/formatters.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "converterBancoParaInput",
    ()=>converterBancoParaInput,
    "formatarVisualmente",
    ()=>formatarVisualmente,
    "limparDinheiroParaBanco",
    ()=>limparDinheiroParaBanco
]);
function formatarVisualmente(valor) {
    if (valor === undefined || valor === null || valor === '') return '';
    let str = String(valor);
    // Trocar ponto por vírgula se usuário digitar ponto
    str = str.replace('.', ',');
    // Limpar tudo que não for dígito ou vírgula
    str = str.replace(/[^0-9,]/g, '');
    // Garantir apenas uma vírgula
    const parts = str.split(',');
    if (parts.length > 2) {
        str = parts[0] + ',' + parts.slice(1).join('');
    }
    // Limitar a duas casas decimais
    if (parts.length === 2 && parts[1].length > 2) {
        str = parts[0] + ',' + parts[1].substring(0, 2);
    }
    // Remover zeros à esquerda (exceto "0," ou "0")
    let [inteiro, decimal] = str.split(',');
    if (inteiro && inteiro.length > 1 && inteiro.startsWith('0')) {
        inteiro = inteiro.replace(/^0+/, '');
        if (inteiro === '') inteiro = '0';
    }
    // Formatar milhares da parte inteira
    if (inteiro) {
        inteiro = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return decimal !== undefined ? `${inteiro},${decimal}` : inteiro;
}
function limparDinheiroParaBanco(valor) {
    if (valor === undefined || valor === null || String(valor).trim() === '') return 0;
    let str = String(valor);
    str = str.replace(/\./g, ''); // Remove todos os pontos (separadores de milhar)
    str = str.replace(',', '.'); // Troca a primeira vírgula por ponto decimal
    return parseFloat(str) || 0;
}
function converterBancoParaInput(valor) {
    if (valor === undefined || valor === null) return '';
    // Se era 35.50 no banco, converte para 35,50 e já retorna formatado visualmente
    return formatarVisualmente(String(valor).replace('.', ','));
}
}),
"[project]/src/components/TransactionModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MonthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/MonthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const categoriasAUVP = [
    'Essencial',
    'Investimento',
    'Prazer',
    'Meta Planejada',
    'Oportunidade',
    'Conforto',
    'Aumentar Renda'
];
const CATEGORIAS_GASTOS = [
    'Custo Fixo Assumido',
    'Custo Recorrente Cancelável',
    'Custo Recorrente Planejado',
    'Custo Variável'
];
const FORMAS_PAGAMENTO = [
    'Pix',
    'Cartão de Crédito',
    'Caixinha Reserva'
];
const TIPOS_DIVISAO = [
    'Igualitária',
    'Proporcional à Renda',
    'Personalizada'
];
function TransactionModal({ isOpen, onClose, initialData, onSave, type = 'despesa' }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        descricao: '',
        valor: '',
        status: 'Pendente',
        resp: 'Todos',
        respNome: 'Todos',
        tipoDivisao: 'Igualitária',
        auvp: 'Essencial',
        categoria: 'Custo Fixo Assumido',
        formaPagamento: 'Pix',
        isParcelado: false,
        parcelaAtual: 1,
        totalParcelas: 12
    });
    const [membrosDisponiveis, setMembrosDisponiveis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [percentuaisPersonalizados, setPercentuaisPersonalizados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const { currentDate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MonthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMonth"])();
    const [saldosMembros, setSaldosMembros] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch Membros
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchMembros() {
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user) return;
            const { data: userFam } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('familia_id').eq('perfil_id', user.id).maybeSingle();
            let profilesData = [];
            if (userFam?.familia_id) {
                const { data: membrosFam } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('perfil_id').eq('familia_id', userFam.familia_id).in('status', [
                    'host',
                    'ativo'
                ]);
                if (membrosFam && membrosFam.length > 0) {
                    const ids = membrosFam.map((m)=>m.perfil_id);
                    const { data: perfis } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('id, nome_usuario, cor_perfil').in('id', ids);
                    profilesData = perfis?.map((p)=>({
                            id: p.id,
                            nome_usuario: p.nome_usuario || 'Usuário',
                            cor_perfil: p.cor_perfil || 'blue'
                        })) || [];
                }
            } else {
                const { data: perfis } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('id, nome_usuario, cor_perfil').eq('id', user.id);
                profilesData = perfis?.map((p)=>({
                        id: p.id,
                        nome_usuario: p.nome_usuario || 'Você',
                        cor_perfil: p.cor_perfil || 'blue'
                    })) || [];
            }
            setMembrosDisponiveis(profilesData);
            // Atualiza resp/respNome no caso de não ser edição e não ter 'Todos' selecionado
            if (!initialData && type === 'receita' && profilesData.length > 0) {
                // Se receita, por padrão pega o próprio usuário ou o primeiro da lista
                const defaultMember = profilesData.find((m)=>m.id === user.id) || profilesData[0];
                setFormData((prev)=>({
                        ...prev,
                        resp: defaultMember.id,
                        respNome: defaultMember.nome_usuario
                    }));
            }
        }
        if (isOpen) {
            fetchMembros();
        }
    }, [
        isOpen,
        type,
        initialData
    ]);
    // Fetch Saldos
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchSaldos() {
            if (type === 'receita' || !currentDate || membrosDisponiveis.length === 0) return;
            const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString();
            const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59).toISOString();
            const memberIds = membrosDisponiveis.map((m)=>m.id);
            const [{ data: receitasData }, { data: despesasData }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('receitas').select('perfil_id, valor').in('perfil_id', memberIds).gte('data', startOfMonth).lte('data', endOfMonth),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('despesas').select('perfil_id, valor, responsaveis_divisao, id').gte('data', startOfMonth).lte('data', endOfMonth)
            ]);
            const newSaldos = {};
            membrosDisponiveis.forEach((m)=>{
                newSaldos[m.id] = {
                    receitaTotal: 0,
                    despesaTotal: 0,
                    saldoDisponivel: 0
                };
            });
            if (receitasData) {
                receitasData.forEach((r)=>{
                    if (newSaldos[r.perfil_id]) {
                        newSaldos[r.perfil_id].receitaTotal += Number(r.valor);
                    }
                });
            }
            if (despesasData) {
                despesasData.forEach((d)=>{
                    // Ignorar a despesa atual se estivermos editando
                    if (initialData && d.id === initialData.id) return;
                    if (d.responsaveis_divisao && Array.isArray(d.responsaveis_divisao)) {
                        d.responsaveis_divisao.forEach((div)=>{
                            if (newSaldos[div.id]) {
                                newSaldos[div.id].despesaTotal += Number(div.valor);
                            }
                        });
                    } else if (newSaldos[d.perfil_id]) {
                        newSaldos[d.perfil_id].despesaTotal += Number(d.valor);
                    }
                });
            }
            Object.keys(newSaldos).forEach((id)=>{
                newSaldos[id].saldoDisponivel = newSaldos[id].receitaTotal - newSaldos[id].despesaTotal;
            });
            setSaldosMembros(newSaldos);
        }
        if (isOpen) {
            fetchSaldos();
        }
    }, [
        isOpen,
        currentDate,
        membrosDisponiveis,
        type,
        initialData
    ]);
    const resetFormStates = ()=>{
        setFormData((prev)=>({
                ...prev,
                descricao: '',
                valor: '',
                status: type === 'receita' ? 'Recebido' : 'Pendente',
                tipoDivisao: 'Igualitária',
                auvp: 'Essencial',
                categoria: type === 'receita' ? '' : 'Custo Fixo Assumido',
                formaPagamento: 'Pix',
                isParcelado: false,
                parcelaAtual: 1,
                totalParcelas: 12
            }));
        setPercentuaisPersonalizados({});
        setErrorMsg(null);
    };
    const handleClose = ()=>{
        resetFormStates();
        onClose();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            resetFormStates();
            return;
        }
        if (initialData) {
            let respId = initialData.perfil_id || initialData.responsavel || initialData.resp || 'Todos';
            let respNome = initialData.respNome || 'Todos';
            let tipoDivisao = initialData.tipoDivisao || initialData.tipo_divisao || 'Igualitária';
            let newPercentuais = {};
            if (respId === 'Casal') respId = 'Todos';
            if (!isReceita && initialData.responsaveis_divisao && Array.isArray(initialData.responsaveis_divisao)) {
                if (initialData.responsaveis_divisao.length === 1) {
                    respId = initialData.responsaveis_divisao[0].id;
                } else if (initialData.responsaveis_divisao.length > 1) {
                    respId = 'Todos';
                    if (tipoDivisao === 'Personalizada') {
                        initialData.responsaveis_divisao.forEach((div)=>{
                            newPercentuais[div.id] = div.percentual || 0;
                        });
                    }
                }
            }
            if (respId !== 'Todos' && membrosDisponiveis.length > 0) {
                const member = membrosDisponiveis.find((m)=>m.id === respId || m.nome_usuario === respId);
                if (member) {
                    respId = member.id;
                    respNome = member.nome_usuario;
                }
            }
            setFormData({
                descricao: initialData.descricao || '',
                valor: initialData.valor !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["converterBancoParaInput"])(initialData.valor) : '',
                status: initialData.status || (type === 'receita' ? 'Recebido' : 'Pendente'),
                resp: respId,
                respNome: respNome,
                tipoDivisao: tipoDivisao,
                auvp: initialData.classificacao_auvp || initialData.auvp || 'Essencial',
                categoria: initialData.categoria_gastos || initialData.categoria || (type === 'receita' ? 'Entrada' : 'Custo Fixo Assumido'),
                formaPagamento: initialData.forma_pagamento || initialData.formaPagamento || 'Pix',
                isParcelado: initialData.parcelado || initialData.isParcelado || initialData.is_parcelado || false,
                parcelaAtual: initialData.parcela_atual || initialData.parcelaAtual || 1,
                totalParcelas: initialData.total_parcelas || initialData.totalParcelas || 1
            });
            setPercentuaisPersonalizados(newPercentuais);
        } else {
            resetFormStates();
        }
    }, [
        initialData,
        isOpen,
        type,
        membrosDisponiveis
    ]);
    if (!isOpen) return null;
    const isEditing = !!initialData;
    const isReceita = type === 'receita';
    const title = isEditing ? isReceita ? 'Editar Receita' : 'Editar Despesa' : isReceita ? 'Nova Receita' : 'Nova Despesa';
    const buttonText = isEditing ? 'Salvar Alterações' : isReceita ? 'Criar Receita' : 'Criar Despesa';
    const handleRespChange = (e)=>{
        const val = e.target.value;
        if (val === 'Todos') {
            setFormData({
                ...formData,
                resp: 'Todos',
                respNome: 'Todos'
            });
        } else {
            const selected = membrosDisponiveis.find((m)=>m.id === val);
            setFormData({
                ...formData,
                resp: val,
                respNome: selected ? selected.nome_usuario : val
            });
        }
    };
    const calcularRateio = (valorTotalNum)=>{
        let rateio = [];
        if (formData.resp !== 'Todos') {
            const membro = membrosDisponiveis.find((m)=>m.id === formData.resp);
            if (membro) {
                rateio.push({
                    id: membro.id,
                    nome: membro.nome_usuario,
                    percentual: 100,
                    valor: valorTotalNum
                });
            }
        } else {
            if (formData.tipoDivisao === 'Igualitária' || formData.tipoDivisao === '50/50') {
                const numMembros = membrosDisponiveis.length;
                const percentual = 100 / numMembros;
                const valorPorMembro = valorTotalNum / numMembros;
                membrosDisponiveis.forEach((m)=>{
                    rateio.push({
                        id: m.id,
                        nome: m.nome_usuario,
                        percentual: Number(percentual.toFixed(2)),
                        valor: Number(valorPorMembro.toFixed(2))
                    });
                });
            } else if (formData.tipoDivisao === 'Proporcional à Renda') {
                let somaReceitas = 0;
                membrosDisponiveis.forEach((m)=>{
                    somaReceitas += saldosMembros[m.id]?.receitaTotal || 0;
                });
                membrosDisponiveis.forEach((m)=>{
                    let percentual = 0;
                    if (somaReceitas === 0) {
                        percentual = 100 / membrosDisponiveis.length;
                    } else {
                        const receitaMembro = saldosMembros[m.id]?.receitaTotal || 0;
                        percentual = receitaMembro / somaReceitas * 100;
                    }
                    const valor = percentual / 100 * valorTotalNum;
                    rateio.push({
                        id: m.id,
                        nome: m.nome_usuario,
                        percentual: Number(percentual.toFixed(2)),
                        valor: Number(valor.toFixed(2))
                    });
                });
            } else if (formData.tipoDivisao === 'Personalizada') {
                membrosDisponiveis.forEach((m)=>{
                    const perc = percentuaisPersonalizados[m.id] || 0;
                    const valor = perc / 100 * valorTotalNum;
                    rateio.push({
                        id: m.id,
                        nome: m.nome_usuario,
                        percentual: perc,
                        valor: Number(valor.toFixed(2))
                    });
                });
            }
        }
        if (rateio.length > 0) {
            const somaValores = rateio.reduce((acc, curr)=>acc + curr.valor, 0);
            const diff = valorTotalNum - somaValores;
            if (Math.abs(diff) > 0.001) {
                rateio[0].valor = Number((rateio[0].valor + diff).toFixed(2));
            }
        }
        return rateio;
    };
    const handleSaveClick = ()=>{
        setErrorMsg(null);
        const valorString = String(formData.valor);
        const valorNumerico = Number(valorString.replace(/\./g, "").replace(",", "."));
        const formatCurrency = (val)=>new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(val);
        if (valorNumerico <= 0) {
            setErrorMsg('O valor deve ser maior que zero.');
            return;
        }
        if (!isReceita) {
            if (formData.resp === 'Todos' && formData.tipoDivisao === 'Personalizada') {
                let soma = 0;
                membrosDisponiveis.forEach((m)=>{
                    soma += percentuaisPersonalizados[m.id] || 0;
                });
                if (Math.abs(soma - 100) > 0.01) {
                    setErrorMsg('A soma das porcentagens deve ser exatamente 100%.');
                    return;
                }
            }
            const rateioArray = calcularRateio(valorNumerico);
            // HARD BLOCK
            const membrosSemSaldo = [];
            for (const fatia of rateioArray){
                const saldoDisp = saldosMembros[fatia.id]?.saldoDisponivel || 0;
                if (fatia.valor > saldoDisp) {
                    const membroDetalhe = membrosDisponiveis.find((m)=>m.id === fatia.id);
                    membrosSemSaldo.push({
                        id: fatia.id,
                        nome: fatia.nome,
                        cor: membroDetalhe?.cor_perfil || 'red',
                        deficit: fatia.valor - saldoDisp
                    });
                }
            }
            if (membrosSemSaldo.length > 0) {
                setErrorMsg(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-red-600",
                            children: "Bloqueio Rígido: Saldo insuficiente."
                        }, void 0, false, {
                            fileName: "[project]/src/components/TransactionModal.tsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-red-500 mb-2",
                            children: "Para salvar esta despesa, é necessário cadastrar novas receitas para cobrir os valores faltantes:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TransactionModal.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc pl-5 text-sm",
                            children: membrosSemSaldo.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-red-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-bold text-${m.cor}-500`,
                                            children: m.nome
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TransactionModal.tsx",
                                            lineNumber: 386,
                                            columnNumber: 19
                                        }, this),
                                        " precisa de mais ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: formatCurrency(m.deficit)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TransactionModal.tsx",
                                            lineNumber: 386,
                                            columnNumber: 99
                                        }, this)
                                    ]
                                }, m.id, true, {
                                    fileName: "[project]/src/components/TransactionModal.tsx",
                                    lineNumber: 385,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/TransactionModal.tsx",
                            lineNumber: 383,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TransactionModal.tsx",
                    lineNumber: 380,
                    columnNumber: 11
                }, this));
                return;
            }
            const payloadDespesa = {
                descricao: formData.descricao,
                valor: formData.valor,
                status: formData.status,
                classificacao_auvp: formData.auvp,
                categoria_gastos: formData.categoria,
                forma_pagamento: formData.formaPagamento,
                tipo_divisao: formData.tipoDivisao,
                responsaveis_divisao: rateioArray,
                parcelado: formData.isParcelado,
                parcela_atual: formData.parcelaAtual,
                total_parcelas: formData.totalParcelas,
                resp: formData.resp
            };
            if (onSave) onSave(payloadDespesa);
            handleClose();
        } else {
            if (onSave) onSave({
                ...formData
            });
            handleClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity",
                onClick: handleClose
            }, void 0, false, {
                fileName: "[project]/src/components/TransactionModal.tsx",
                lineNumber: 420,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    handleSaveClick();
                },
                className: "relative w-full max-w-lg bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center p-6 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionModal.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleClose,
                                className: "text-gray-400 hover:text-black transition-colors p-1 rounded-full hover:bg-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TransactionModal.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionModal.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionModal.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-semibold animate-fade-in",
                        children: errorMsg
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionModal.tsx",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 overflow-y-auto custom-scrollbar space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Descrição"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 452,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.descricao,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        descricao: e.target.value
                                                    }),
                                                placeholder: isReceita ? "Ex: Salário, Projeto..." : "Ex: Aluguel, Mercado...",
                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 453,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 451,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Valor (R$)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 463,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.valor,
                                                onChange: (e)=>{
                                                    let val = e.target.value;
                                                    // 1. Se o usuário digitar um ponto para decimais (no fim da string ou antes de até 2 dígitos), converte para vírgula
                                                    val = val.replace(/\.(?=\d{0,2}$)/, ',');
                                                    // 2. Remove todos os pontos de formatação visual antigos
                                                    val = val.replace(/\./g, '');
                                                    // 3. Remove tudo que não for dígito numérico ou vírgula
                                                    val = val.replace(/[^\d,]/g, '');
                                                    // 4. Garante apenas uma vírgula na string
                                                    const parts = val.split(',');
                                                    if (parts.length > 2) val = parts[0] + ',' + parts.slice(1).join('');
                                                    let [integerPart, decimalPart] = val.split(',');
                                                    // 5. Formata a parte inteira (milhares)
                                                    if (integerPart) {
                                                        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                                                    }
                                                    // 6. Limita a parte decimal a 2 dígitos
                                                    if (decimalPart !== undefined) decimalPart = decimalPart.substring(0, 2);
                                                    const finalString = decimalPart !== undefined ? integerPart + ',' + decimalPart : integerPart;
                                                    setFormData({
                                                        ...formData,
                                                        valor: finalString
                                                    });
                                                },
                                                placeholder: "0,00",
                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all font-mono"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 464,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 499,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.status,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        status: e.target.value
                                                    }),
                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer",
                                                children: isReceita ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Recebido",
                                                            children: "Recebido"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TransactionModal.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Pendente",
                                                            children: "Pendente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TransactionModal.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Pendente",
                                                            children: "Pendente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TransactionModal.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Realizado",
                                                            children: "Realizado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TransactionModal.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 500,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Responsável"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 520,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.resp,
                                                onChange: handleRespChange,
                                                disabled: membrosDisponiveis.length === 1,
                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer",
                                                children: [
                                                    !isReceita && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Todos",
                                                        children: "Todos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 32
                                                    }, this),
                                                    membrosDisponiveis.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: m.id,
                                                            children: m.nome_usuario
                                                        }, m.id, false, {
                                                            fileName: "[project]/src/components/TransactionModal.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 521,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this),
                                    !isReceita && formData.resp === 'Todos' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Tipo de Divisão"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.tipoDivisao,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        tipoDivisao: e.target.value
                                                    }),
                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer",
                                                children: TIPOS_DIVISAO.map((tipo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: tipo,
                                                        children: tipo
                                                    }, tipo, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 538,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this),
                                    !isReceita && formData.resp === 'Todos' && formData.tipoDivisao === 'Personalizada' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-4 animate-fade-in space-y-3 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-gray-600 uppercase tracking-wider block",
                                                children: "Porcentagem por Membro (%)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: membrosDisponiveis.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-gray-700 flex-1 truncate",
                                                                children: m.nome_usuario
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: percentuaisPersonalizados[m.id] || '',
                                                                        onChange: (e)=>setPercentuaisPersonalizados({
                                                                                ...percentuaisPersonalizados,
                                                                                [m.id]: Number(e.target.value)
                                                                            }),
                                                                        onFocus: (e)=>e.target.select(),
                                                                        placeholder: "0",
                                                                        className: "w-16 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-black transition-all font-mono"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500 font-semibold text-sm",
                                                                        children: "%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                                        lineNumber: 569,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, m.id, true, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 554,
                                        columnNumber: 15
                                    }, this),
                                    !isReceita && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                                        children: "Classificação AUVP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.auvp,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                auvp: e.target.value
                                                            }),
                                                        className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer",
                                                        children: categoriasAUVP.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat,
                                                                children: cat
                                                            }, cat, false, {
                                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                                lineNumber: 587,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 579,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                                        children: "Categoria do Gasto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.categoria,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                categoria: e.target.value
                                                            }),
                                                        className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer",
                                                        children: CATEGORIAS_GASTOS.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat,
                                                                children: cat
                                                            }, cat, false, {
                                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                                lineNumber: 600,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                                        children: "Forma de Pagamento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.formaPagamento,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                formaPagamento: e.target.value
                                                            }),
                                                        className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer",
                                                        children: FORMAS_PAGAMENTO.map((forma)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: forma,
                                                                children: forma
                                                            }, forma, false, {
                                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                                lineNumber: 613,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 605,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TransactionModal.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            !isReceita && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 cursor-pointer group w-max",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        className: "peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md bg-white checked:bg-black checked:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 transition-all",
                                                        checked: formData.isParcelado,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                isParcelado: e.target.checked
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "3",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TransactionModal.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 212
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 625,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-gray-700 group-hover:text-black transition-colors",
                                                children: "Compra Parcelada?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 624,
                                        columnNumber: 15
                                    }, this),
                                    formData.isParcelado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 pt-3 animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: formData.parcelaAtual,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                parcelaAtual: parseInt(e.target.value) || 1
                                                            }),
                                                        onFocus: (e)=>e.target.select(),
                                                        className: "w-16 bg-white border border-gray-300 rounded-lg px-2 py-2 text-sm text-center text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-mono",
                                                        min: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500 font-semibold text-sm",
                                                        children: "de"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 648,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: formData.totalParcelas,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                totalParcelas: parseInt(e.target.value) || 2
                                                            }),
                                                        onFocus: (e)=>e.target.select(),
                                                        className: "w-16 bg-white border border-gray-300 rounded-lg px-2 py-2 text-sm text-center text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-mono",
                                                        min: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 639,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                children: "parcelas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionModal.tsx",
                                                lineNumber: 658,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionModal.tsx",
                                        lineNumber: 638,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TransactionModal.tsx",
                                lineNumber: 623,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionModal.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleClose,
                                className: "px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-black hover:bg-gray-200 rounded-xl transition-colors",
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionModal.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-6 py-2.5 text-sm font-bold text-white bg-black hover:bg-gray-800 rounded-xl shadow-md transition-all active:scale-95",
                                children: buttonText
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionModal.tsx",
                                lineNumber: 675,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionModal.tsx",
                        lineNumber: 667,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TransactionModal.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TransactionModal.tsx",
        lineNumber: 419,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/despesas/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DespesasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TransactionModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$import$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Import$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/import.mjs [app-ssr] (ecmascript) <export default as Import>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MonthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/MonthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const STATUS_OPCOES = [
    'Pendente',
    'Realizado'
];
const AUVP_OPCOES = [
    'Essencial',
    'Investimento',
    'Prazer',
    'Meta Planejada',
    'Oportunidade',
    'Conforto',
    'Aumentar Renda'
];
const GASTOS_OPCOES = [
    'Custo Fixo Assumido',
    'Custo Recorrente Cancelável',
    'Custo Recorrente Planejado',
    'Custo Variável'
];
const CORES_AUVP = {
    'Essencial': 'bg-blue-100 text-blue-700 border-blue-200',
    'Investimento': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'Prazer': 'bg-pink-100 text-pink-700 border-pink-200',
    'Meta Planejada': 'bg-indigo-100 text-indigo-700 border-indigo-200',
    'Oportunidade': 'bg-amber-100 text-amber-700 border-amber-200',
    'Conforto': 'bg-purple-100 text-purple-700 border-purple-200',
    'Aumentar Renda': 'bg-teal-100 text-teal-700 border-teal-200'
};
const getAvatarColor = (colorName)=>{
    const map = {
        blue: 'bg-blue-500',
        pink: 'bg-pink-500',
        emerald: 'bg-emerald-500',
        purple: 'bg-purple-500',
        red: 'bg-red-500',
        amber: 'bg-amber-500',
        indigo: 'bg-indigo-500',
        teal: 'bg-teal-500',
        cyan: 'bg-cyan-500',
        orange: 'bg-orange-500'
    };
    return map[colorName] || 'bg-gray-500';
};
const getTextColor = (colorName)=>{
    const map = {
        blue: 'text-blue-500',
        pink: 'text-pink-500',
        emerald: 'text-emerald-500',
        purple: 'text-purple-500',
        red: 'text-red-500',
        amber: 'text-amber-500',
        indigo: 'text-indigo-500',
        teal: 'text-teal-500',
        cyan: 'text-cyan-500',
        orange: 'text-orange-500'
    };
    return map[colorName] || 'text-gray-500';
};
const getAvatarStyle = (cor)=>{
    if (!cor) return {
        className: 'bg-gray-500'
    };
    if (cor.startsWith('#')) return {
        style: {
            backgroundColor: cor
        }
    };
    return {
        className: getAvatarColor(cor)
    };
};
const getTextStyle = (cor)=>{
    if (!cor) return {
        className: 'text-gray-500'
    };
    if (cor.startsWith('#')) return {
        style: {
            color: cor
        }
    };
    return {
        className: getTextColor(cor)
    };
};
function DespesasPage() {
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingDespesa, setEditingDespesa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [itemToDelete, setItemToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { currentDate, setCurrentDate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MonthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMonth"])();
    const [filtroUsuarios, setFiltroUsuarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ordenacao, setOrdenacao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("padrao");
    const [importError, setImportError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'Enter' && itemToDelete) {
                confirmDelete();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        itemToDelete
    ]);
    const [despesas, setDespesas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [membrosAtivos, setMembrosAtivos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isImporting, setIsImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filtroStatus, setFiltroStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filtroAUVP, setFiltroAUVP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filtroGastos, setFiltroGastos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filtroGastosIndividuais, setFiltroGastosIndividuais] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filtroGastosCompartilhados, setFiltroGastosCompartilhados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const filterMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (event.target.closest(".user-filter-btn")) return;
            if (filterMenuRef.current && !filterMenuRef.current.contains(event.target)) {
                setIsFilterMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const bgColors = {
        blue: "bg-blue-100 text-blue-700",
        pink: "bg-pink-100 text-pink-700",
        emerald: "bg-emerald-100 text-emerald-700",
        purple: "bg-purple-100 text-purple-700",
        amber: "bg-amber-100 text-amber-700",
        teal: "bg-teal-100 text-teal-700",
        cyan: "bg-cyan-100 text-cyan-700",
        indigo: "bg-indigo-100 text-indigo-700",
        rose: "bg-rose-100 text-rose-700",
        orange: "bg-orange-100 text-orange-700",
        slate: "bg-slate-100 text-slate-700"
    };
    const bgHoverColors = {
        blue: "hover:bg-blue-100 hover:text-blue-700",
        pink: "hover:bg-pink-100 hover:text-pink-700",
        emerald: "hover:bg-emerald-100 hover:text-emerald-700",
        purple: "hover:bg-purple-100 hover:text-purple-700",
        amber: "hover:bg-amber-100 hover:text-amber-700",
        teal: "hover:bg-teal-100 hover:text-teal-700",
        cyan: "hover:bg-cyan-100 hover:text-cyan-700",
        indigo: "hover:bg-indigo-100 hover:text-indigo-700",
        rose: "hover:bg-rose-100 hover:text-rose-700",
        orange: "hover:bg-orange-100 hover:text-orange-700",
        slate: "hover:bg-slate-100 hover:text-slate-700"
    };
    const ringColors = {
        blue: "ring-blue-500",
        pink: "ring-pink-500",
        emerald: "ring-emerald-500",
        purple: "ring-purple-500",
        amber: "ring-amber-500",
        teal: "ring-teal-500",
        cyan: "ring-cyan-500",
        indigo: "ring-indigo-500",
        rose: "ring-rose-500",
        orange: "ring-orange-500",
        slate: "ring-slate-500"
    };
    const toggleFiltro = (tipo, valor)=>{
        if (tipo === 'status') {
            setFiltroStatus((prev)=>prev.includes(valor) ? prev.filter((v)=>v !== valor) : [
                    ...prev,
                    valor
                ]);
        } else if (tipo === 'auvp') {
            setFiltroAUVP((prev)=>prev.includes(valor) ? prev.filter((v)=>v !== valor) : [
                    ...prev,
                    valor
                ]);
        } else if (tipo === 'gastos') {
            setFiltroGastos((prev)=>prev.includes(valor) ? prev.filter((v)=>v !== valor) : [
                    ...prev,
                    valor
                ]);
        }
    };
    const fetchDespesas = async ()=>{
        setLoading(true);
        const anoStr = currentDate.getFullYear();
        const mesAtualStr = String(currentDate.getMonth() + 1).padStart(2, '0');
        const ultimoDiaAtual = new Date(anoStr, currentDate.getMonth() + 1, 0).getDate();
        const startOfCurrentMonth = `${anoStr}-${mesAtualStr}-01`;
        const endOfCurrentMonth = `${anoStr}-${mesAtualStr}-${String(ultimoDiaAtual).padStart(2, '0')}`;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('despesas').select('*').gte('data', startOfCurrentMonth).lte('data', endOfCurrentMonth).order('data', {
            ascending: false
        });
        if (error) {
            console.error('Erro ao buscar despesas:', error);
            setLoading(false);
            return;
        }
        if (data) {
            const mapped = data.map((item)=>{
                let responsaveis = item.responsaveis_divisao || [];
                const valorTotal = Number(item.valor);
                // Fallback Crítico: Se a array desapareceu, recria com o dono original a 100%
                if (responsaveis.length === 0) {
                    responsaveis = [
                        {
                            id: item.perfil_id,
                            nome: 'Desconhecido',
                            percentual: 100,
                            valor: valorTotal
                        }
                    ];
                }
                // Auto-Reparação: Se a despesa é INDIVIDUAL, a fatia tem obrigatoriamente de ser igual ao valor total.
                if (responsaveis.length === 1) {
                    if (Number(responsaveis[0].valor) !== valorTotal) {
                        responsaveis[0].valor = valorTotal;
                        responsaveis[0].percentual = 100;
                    }
                }
                return {
                    id: item.id,
                    descricao: item.descricao,
                    responsaveis_divisao: responsaveis,
                    classificacao_auvp: item.classificacao_auvp || item.auvp || 'Essencial',
                    categoria_gastos: item.categoria_gastos || item.categoria || 'Variável',
                    tipo_divisao: item.tipo_divisao || 'Igualitária',
                    valor: valorTotal,
                    status: item.status || 'Pendente',
                    parcelado: item.parcelado || item.is_parcelado || false,
                    parcela_atual: item.parcela_atual || 1,
                    total_parcelas: item.total_parcelas || 1,
                    data: item.data,
                    created_at: item.created_at
                };
            });
            setDespesas(mapped);
        }
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUserData = async ()=>{
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user) return;
            const { data: membro } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('familia_id').eq('perfil_id', user.id).maybeSingle();
            setUserData({
                perfilId: user.id,
                familiaId: membro?.familia_id || null
            });
            if (membro?.familia_id) {
                const { data: familiaMembros } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('membros_familia').select('perfil_id').eq('familia_id', membro.familia_id);
                if (familiaMembros && familiaMembros.length > 0) {
                    const ids = familiaMembros.map((m)=>m.perfil_id);
                    const { data: perfis } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('id, nome_usuario, cor_perfil').in('id', ids);
                    if (perfis) setMembrosAtivos(perfis);
                }
            } else {
                const { data: perfis } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('perfis').select('id, nome_usuario, cor_perfil').eq('id', user.id);
                if (perfis) setMembrosAtivos(perfis);
            }
        };
        fetchUserData();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setImportError(null);
        fetchDespesas();
    }, [
        currentDate
    ]);
    const handlePrevMonth = ()=>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };
    const handleNextMonth = ()=>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };
    const formattedMonth = currentDate.toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric'
    });
    const displayMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);
    // Lógica de Filtragem
    const qtdFiltrosAtivos = filtroStatus.length + filtroAUVP.length + filtroGastos.length + filtroGastosIndividuais.length + filtroGastosCompartilhados.length;
    const filteredDespesas = despesas.filter((d)=>{
        let passUsuario = true;
        if (filtroUsuarios.length > 0) {
            const idsDaDespesa = d.responsaveis_divisao?.map((r)=>r.id) || [];
            passUsuario = filtroUsuarios.some((id)=>idsDaDespesa.includes(id));
        }
        const passStatus = filtroStatus.length === 0 || filtroStatus.includes(d.status);
        const passAUVP = filtroAUVP.length === 0 || filtroAUVP.includes(d.classificacao_auvp);
        const passGastos = filtroGastos.length === 0 || filtroGastos.includes(d.categoria_gastos);
        const passIndividual = filtroGastosIndividuais.length === 0 || d.responsaveis_divisao?.length === 1 && filtroGastosIndividuais.includes(d.responsaveis_divisao[0].id);
        const passCompartilhado = filtroGastosCompartilhados.length === 0 || d.responsaveis_divisao?.length > 1 && filtroGastosCompartilhados.every((userId)=>d.responsaveis_divisao.some((resp)=>resp.id === userId));
        return passUsuario && passStatus && passAUVP && passGastos && passIndividual && passCompartilhado;
    });
    // Função auxiliar para obter o valor real (fatiado ou integral)
    const getValorConsiderado = (despesa)=>{
        // Se não há filtro global de utilizador (todos selecionados): soma o total absoluto
        if (!filtroUsuarios || filtroUsuarios.length === 0) return Number(despesa.valor || 0);
        const responsaveis = despesa.responsaveis_divisao || [];
        const fatiasFiltradas = responsaveis.filter((r)=>filtroUsuarios.includes(r.id));
        // Com filtro global ativo: soma OBRIGATORIAMENTE apenas as fatias do(s) utilizador(es) filtrado(s)
        if (fatiasFiltradas.length > 0) {
            return fatiasFiltradas.reduce((sum, r)=>sum + Number(r.valor || 0), 0);
        }
        return 0; // Retorno de segurança
    };
    // Cálculos Dinâmicos
    const totalPrevisto = filteredDespesas.reduce((acc, curr)=>acc + getValorConsiderado(curr), 0);
    const jaPago = filteredDespesas.filter((d)=>d.status === 'Realizado').reduce((acc, curr)=>acc + getValorConsiderado(curr), 0);
    const faltaPagar = filteredDespesas.filter((d)=>d.status !== 'Realizado').reduce((acc, curr)=>acc + getValorConsiderado(curr), 0);
    const formatCurrency = (val)=>{
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(val);
    };
    const getStatusColor = (status)=>{
        switch(status){
            case 'Pago':
                return 'bg-emerald-50 text-emerald-700 border-emerald-200';
            case 'Pendente':
                return 'bg-red-50 text-red-700 border-red-200';
            case 'Direcionado':
                return 'bg-amber-50 text-amber-700 border-amber-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };
    const getStatusDot = (status)=>{
        switch(status){
            case 'Realizado':
                return 'bg-emerald-500';
            case 'Pago':
                return 'bg-emerald-500';
            case 'Pendente':
                return 'bg-red-500';
            case 'Direcionado':
                return 'bg-amber-500';
            default:
                return 'bg-gray-400';
        }
    };
    const updateStatusInline = async (id, novoStatus)=>{
        setDespesas((prev)=>prev.map((d)=>d.id === id ? {
                    ...d,
                    status: novoStatus
                } : d));
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("despesas").update({
            status: novoStatus
        }).eq("id", id);
        if (error) {
            console.error("Erro ao atualizar status:", error);
        }
    };
    const handleOpenCreate = ()=>{
        setEditingDespesa(null);
        setIsModalOpen(true);
    };
    const handleEdit = (despesa)=>{
        setEditingDespesa(despesa);
        setIsModalOpen(true);
    };
    const handleDeleteClick = (id)=>{
        setItemToDelete(id);
    };
    const confirmDelete = async ()=>{
        if (!itemToDelete) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('despesas').delete().eq('id', itemToDelete);
        if (error) {
            console.error('Erro ao deletar despesa:', error);
            return;
        }
        setDespesas(despesas.filter((d)=>d.id !== itemToDelete));
        setItemToDelete(null);
    };
    const cancelDelete = ()=>{
        setItemToDelete(null);
    };
    const handleSaveModal = async (data)=>{
        if (!userData) {
            console.error('Usuário não carregado');
            return;
        }
        const safeValor = Number(String(data.valor).replace(/\./g, "").replace(",", "."));
        const dbData = {
            descricao: data.descricao,
            valor: safeValor,
            status: data.status,
            categoria: data.categoria_gastos || 'Variável',
            categoria_gastos: data.categoria_gastos,
            auvp: data.classificacao_auvp,
            classificacao_auvp: data.classificacao_auvp,
            tipo_divisao: data.tipo_divisao,
            forma_pagamento: data.forma_pagamento,
            responsaveis_divisao: data.responsaveis_divisao,
            is_parcelado: data.parcelado,
            parcelado: data.parcelado,
            parcela_atual: data.parcela_atual,
            total_parcelas: data.total_parcelas,
            perfil_id: data.resp === 'Todos' ? userData.perfilId : data.resp,
            familia_id: userData.familiaId
        };
        if (editingDespesa) {
            // Modo de Edição: Atualiza o item existente (mantém a data original)
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('despesas').update(dbData).eq('id', editingDespesa.id);
            if (error) {
                console.error('Erro ao atualizar despesa:', error);
                return;
            }
            fetchDespesas();
        } else {
            // Criação: Insere o novo registro herdando o mês/ano selecionado na UI (dia 1º)
            const dataFormatada = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-01`;
            dbData.data = dataFormatada;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('despesas').insert([
                dbData
            ]);
            if (error) {
                console.error('Erro ao inserir despesa:', error);
                return;
            }
            fetchDespesas();
        }
    };
    const handleImportarMesAnterior = async ()=>{
        try {
            setIsImporting(true);
            setImportError(null);
            const anoStr = currentDate.getFullYear();
            const mesAtualStr = String(currentDate.getMonth() + 1).padStart(2, '0');
            const ultimoDiaAtual = new Date(anoStr, currentDate.getMonth() + 1, 0).getDate();
            const dataMesAtual = `${anoStr}-${mesAtualStr}-01`;
            const startOfCurrentMonth = `${anoStr}-${mesAtualStr}-01`;
            const endOfCurrentMonth = `${anoStr}-${mesAtualStr}-${String(ultimoDiaAtual).padStart(2, '0')}`;
            const prevMonthDate = new Date(anoStr, currentDate.getMonth() - 1, 1);
            const prevAnoStr = prevMonthDate.getFullYear();
            const prevMesStr = String(prevMonthDate.getMonth() + 1).padStart(2, '0');
            const prevUltimoDia = new Date(prevAnoStr, prevMonthDate.getMonth() + 1, 0).getDate();
            const startOfPrevMonth = `${prevAnoStr}-${prevMesStr}-01`;
            const endOfPrevMonth = `${prevAnoStr}-${prevMesStr}-${String(prevUltimoDia).padStart(2, '0')}`;
            // 1. Busca Despesas do Mês Anterior
            const { data: despesasAnteriores, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('despesas').select('*').gte('data', startOfPrevMonth).lte('data', endOfPrevMonth);
            if (fetchError) throw fetchError;
            // Aplica a Regra de Elegibilidade para Importação
            const despesasParaImportar = (despesasAnteriores || []).filter((d)=>{
                const isParcelado = d.parcelado || d.is_parcelado;
                if (isParcelado) return d.parcela_atual < d.total_parcelas;
                return [
                    'Custo Fixo Assumido',
                    'Custo Recorrente Cancelável',
                    'Custo Recorrente Planejado'
                ].includes(d.categoria_gastos);
            });
            // 2. Busca Receitas do Mês Atual
            let queryReceitas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('receitas').select('valor').gte('data', startOfCurrentMonth).lte('data', endOfCurrentMonth);
            if (userData?.familiaId) {
                queryReceitas = queryReceitas.eq('familia_id', userData.familiaId);
            } else {
                queryReceitas = queryReceitas.eq('perfil_id', userData?.perfilId);
            }
            const { data: receitasAtuais, error: recError } = await queryReceitas;
            if (recError) throw recError;
            const somaReceitas = (receitasAtuais || []).reduce((acc, curr)=>acc + Number(curr.valor), 0);
            // 3. O BLOQUEIO DE CONSCIÊNCIA INTELIGENTE
            if (despesasParaImportar.length === 0 && somaReceitas <= 0) {
                setImportError(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-red-600",
                            children: "Atenção Dupla!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-red-500",
                            children: "Não há despesas válidas no mês passado para importar E você ainda não registrou receitas neste mês. Registre suas receitas primeiro."
                        }, void 0, false, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 502,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/despesas/page.tsx",
                    lineNumber: 500,
                    columnNumber: 11
                }, this));
                return;
            }
            if (despesasParaImportar.length > 0 && somaReceitas <= 0) {
                setImportError(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-red-600",
                            children: "Bloqueio de Consciência!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 511,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Há ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        despesasParaImportar.length,
                                        " despesa(s)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/despesas/page.tsx",
                                    lineNumber: 512,
                                    columnNumber: 55
                                }, this),
                                " prontas para importação, mas nenhuma receita registrada neste mês. O sistema exige a entrada de receitas antes de assumir novos gastos."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 512,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/despesas/page.tsx",
                    lineNumber: 510,
                    columnNumber: 11
                }, this));
                return;
            }
            if (despesasParaImportar.length === 0 && somaReceitas > 0) {
                setImportError(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-red-600",
                            children: "Tudo limpo!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 521,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-red-500",
                            children: "Não encontramos despesas fixas ou parcelas ativas no mês anterior para importar."
                        }, void 0, false, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/despesas/page.tsx",
                    lineNumber: 520,
                    columnNumber: 11
                }, this));
                return;
            }
            // 4. Executa a Inserção Limpa
            const novasDespesas = despesasParaImportar.map((d)=>{
                const { id, created_at, updated_at, ...rest } = d;
                const isParcelado = rest.parcelado || rest.is_parcelado;
                return {
                    ...rest,
                    data: dataMesAtual,
                    status: 'Pendente',
                    parcela_atual: isParcelado ? (rest.parcela_atual || 1) + 1 : rest.parcela_atual
                };
            });
            const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('despesas').insert(novasDespesas);
            if (insertError) throw insertError;
            fetchDespesas();
        } catch (err) {
            console.error('Erro inesperado na importação:', err);
        } finally{
            setIsImporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative font-sans text-[#0f0f0f] pb-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-zinc-950 sticky top-0 z-40 border-b border-gray-200 pt-5 pb-4 mb-8 shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-[1400px] px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-bold font-manrope tracking-tight hidden sm:block",
                                                children: "Despesas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                lineNumber: 562,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-px bg-gray-300 hidden sm:block mx-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm transition-all hover:shadow-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handlePrevMonth,
                                                        className: "p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors active:scale-95",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-gray-800 px-3 min-w-[160px] inline-flex justify-center text-center capitalize select-none tracking-wide",
                                                        children: displayMonth
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleNextMonth,
                                                        className: "p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors active:scale-95",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/despesas/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative hidden md:block flex-1 md:w-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold text-gray-600 hidden md:block whitespace-nowrap",
                                                            children: "Ordenar por:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: ordenacao,
                                                            onChange: (e)=>setOrdenacao(e.target.value),
                                                            className: "w-full bg-white border border-gray-200 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-colors cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "padrao",
                                                                    children: "Padrão (Data de Criação)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 587,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                    label: "Descrição",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "descricao_az",
                                                                            children: "A a Z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 589,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "descricao_za",
                                                                            children: "Z a A"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 590,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 588,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                    label: "Classificação AUVP",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "auvp_az",
                                                                            children: "A a Z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 593,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "auvp_za",
                                                                            children: "Z a A"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                    label: "Valor (R$)",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "maior_valor",
                                                                            children: "Maior Valor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 597,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "menor_valor",
                                                                            children: "Menor Valor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 598,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 596,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                lineNumber: 579,
                                                columnNumber: 17
                                            }, this),
                                            (qtdFiltrosAtivos > 0 || ordenacao !== 'padrao') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setFiltroStatus([]);
                                                    setFiltroAUVP([]);
                                                    setFiltroGastos([]);
                                                    setFiltroGastosIndividuais([]);
                                                    setFiltroGastosCompartilhados([]);
                                                    setOrdenacao("padrao");
                                                },
                                                className: "text-sm text-red-500 hover:text-red-700 font-semibold cursor-pointer flex items-center gap-1 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden sm:inline",
                                                        children: "Limpar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 617,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                lineNumber: 605,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                ref: filterMenuRef,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsFilterMenuOpen(!isFilterMenuOpen),
                                                        className: `relative inline-flex items-center justify-center gap-2 transition-all hover:shadow-md font-medium rounded-full px-4 py-2 text-sm whitespace-nowrap shrink-0 border ${isFilterMenuOpen || qtdFiltrosAtivos > 0 ? 'bg-zinc-100 border-zinc-300 text-zinc-900' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden sm:inline",
                                                                children: "Filtros"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 626,
                                                                columnNumber: 21
                                                            }, this),
                                                            qtdFiltrosAtivos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white",
                                                                children: qtdFiltrosAtivos
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 19
                                                    }, this),
                                                    isFilterMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-0 top-full mt-2 w-[320px] sm:w-[360px] bg-zinc-900 text-zinc-100 rounded-2xl shadow-xl border border-zinc-800 z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 border-b border-zinc-800 flex justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-sm",
                                                                        children: "Filtros Avançados"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setIsFilterMenuOpen(false),
                                                                        className: "text-zinc-400 hover:text-white p-1 rounded-md transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 639,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 636,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 space-y-6 max-h-[60vh] overflow-y-auto no-scrollbar",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-xs font-bold text-zinc-400 uppercase tracking-wider",
                                                                                children: "Status"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 645,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: STATUS_OPCOES.map((opcao)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "flex items-center gap-3 cursor-pointer group",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500",
                                                                                                checked: filtroStatus.includes(opcao),
                                                                                                onChange: ()=>toggleFiltro('status', opcao)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 649,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-sm text-zinc-300 group-hover:text-white transition-colors",
                                                                                                children: opcao
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 655,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, opcao, true, {
                                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                                        lineNumber: 648,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 646,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 644,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-xs font-bold text-zinc-400 uppercase tracking-wider",
                                                                                children: "Classificação AUVP"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 662,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: AUVP_OPCOES.map((opcao)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "flex items-center gap-3 cursor-pointer group",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500",
                                                                                                checked: filtroAUVP.includes(opcao),
                                                                                                onChange: ()=>toggleFiltro('auvp', opcao)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 666,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-sm text-zinc-300 group-hover:text-white transition-colors",
                                                                                                children: opcao
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 672,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, opcao, true, {
                                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                                        lineNumber: 665,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 663,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 661,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-xs font-bold text-zinc-400 uppercase tracking-wider",
                                                                                children: "Categoria de Gastos"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 679,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: GASTOS_OPCOES.map((opcao)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "flex items-center gap-3 cursor-pointer group",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500",
                                                                                                checked: filtroGastos.includes(opcao),
                                                                                                onChange: ()=>toggleFiltro('gastos', opcao)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 683,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-sm text-zinc-300 group-hover:text-white transition-colors",
                                                                                                children: opcao
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 689,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, opcao, true, {
                                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                                        lineNumber: 682,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 680,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-xs font-bold text-zinc-400 uppercase tracking-wider",
                                                                                children: "Gastos 100% Individuais"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 696,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: membrosAtivos.map((membro)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "flex items-center gap-3 cursor-pointer group",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500",
                                                                                                checked: filtroGastosIndividuais.includes(membro.id),
                                                                                                onChange: ()=>{
                                                                                                    setFiltroGastosIndividuais((prev)=>prev.includes(membro.id) ? prev.filter((v)=>v !== membro.id) : [
                                                                                                            ...prev,
                                                                                                            membro.id
                                                                                                        ]);
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 700,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-sm text-zinc-300 group-hover:text-white transition-colors",
                                                                                                children: membro.nome_usuario
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 710,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, membro.id, true, {
                                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                                        lineNumber: 699,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 697,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 695,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-xs font-bold text-zinc-400 uppercase tracking-wider",
                                                                                children: "Gastos Compartilhados"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 717,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: membrosAtivos.map((membro)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "flex items-center gap-3 cursor-pointer group",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500",
                                                                                                checked: filtroGastosCompartilhados.includes(membro.id),
                                                                                                onChange: ()=>{
                                                                                                    setFiltroGastosCompartilhados((prev)=>prev.includes(membro.id) ? prev.filter((v)=>v !== membro.id) : [
                                                                                                            ...prev,
                                                                                                            membro.id
                                                                                                        ]);
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 721,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-sm text-zinc-300 group-hover:text-white transition-colors",
                                                                                                children: membro.nome_usuario
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                                lineNumber: 731,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, `comp-${membro.id}`, true, {
                                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                                        lineNumber: 720,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 718,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 716,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 643,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-3 border-t border-zinc-800 bg-zinc-950",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setFiltroStatus([]);
                                                                        setFiltroAUVP([]);
                                                                        setFiltroGastos([]);
                                                                        setFiltroGastosIndividuais([]);
                                                                        setFiltroGastosCompartilhados([]);
                                                                        setOrdenacao("padrao");
                                                                    },
                                                                    className: "w-full py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors",
                                                                    children: "Limpar Filtros"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                lineNumber: 620,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleOpenCreate,
                                                className: "inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-md font-medium text-white bg-black rounded-full px-5 py-2 text-sm whitespace-nowrap shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Nova Despesa"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                lineNumber: 756,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/despesas/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/despesas/page.tsx",
                                lineNumber: 560,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex gap-2 overflow-x-auto no-scrollbar p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFiltroUsuarios([]),
                                        className: `user-filter-btn px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap ${filtroUsuarios.length === 0 ? 'bg-zinc-900 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black'}`,
                                        children: "Todos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/despesas/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, this),
                                    membrosAtivos.map((membro)=>{
                                        const isActive = filtroUsuarios.includes(membro.id);
                                        const cor = membro.cor_perfil || 'slate';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (isActive) {
                                                    setFiltroUsuarios((prev)=>prev.filter((id)=>id !== membro.id));
                                                } else {
                                                    setFiltroUsuarios((prev)=>[
                                                            ...prev,
                                                            membro.id
                                                        ]);
                                                }
                                            },
                                            className: `user-filter-btn px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap border ${isActive ? `${bgColors[cor] || bgColors.slate} border-transparent shadow-sm ring-2 ring-offset-1 ${ringColors[cor] || 'ring-slate-500'}` : `bg-white border-gray-200 text-gray-500 ${bgHoverColors[cor] || 'hover:bg-slate-100 hover:text-slate-700'}`}`,
                                            children: membro.nome_usuario
                                        }, membro.id, false, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 781,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/despesas/page.tsx",
                                lineNumber: 766,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/despesas/page.tsx",
                        lineNumber: 558,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/despesas/page.tsx",
                    lineNumber: 557,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mx-auto max-w-[1400px] px-6 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate",
                                            children: [
                                                "Total Previsto",
                                                filtroUsuarios.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "opacity-60 lowercase font-medium bg-gray-100 px-2 py-0.5 rounded-full text-[10px]",
                                                    children: "(filtrado)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 805,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-manrope font-semibold tracking-tight text-gray-900",
                                            children: formatCurrency(totalPrevisto)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 809,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/despesas/page.tsx",
                                    lineNumber: 804,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate",
                                            children: [
                                                "Já Pago",
                                                filtroUsuarios.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "opacity-60 lowercase font-medium bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]",
                                                    children: "(filtrado)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-manrope font-semibold tracking-tight text-emerald-700",
                                            children: formatCurrency(jaPago)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 817,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/despesas/page.tsx",
                                    lineNumber: 812,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-50/60 border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-red-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate",
                                            children: [
                                                "Falta Pagar",
                                                filtroUsuarios.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "opacity-60 lowercase font-medium bg-red-100 px-2 py-0.5 rounded-full text-[10px]",
                                                    children: "(filtrado)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 821,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-manrope font-semibold tracking-tight text-red-700",
                                            children: formatCurrency(faltaPagar)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 825,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/despesas/page.tsx",
                                    lineNumber: 820,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 803,
                            columnNumber: 11
                        }, this),
                        (()=>{
                            const sortedData = [
                                ...filteredDespesas
                            ].sort((a, b)=>{
                                if (ordenacao === 'descricao_az') return a.descricao.localeCompare(b.descricao);
                                if (ordenacao === 'descricao_za') return b.descricao.localeCompare(a.descricao);
                                if (ordenacao === 'auvp_az') return a.classificacao_auvp.localeCompare(b.classificacao_auvp);
                                if (ordenacao === 'auvp_za') return b.classificacao_auvp.localeCompare(a.classificacao_auvp);
                                if (ordenacao === 'maior_valor') return b.valor - a.valor;
                                if (ordenacao === 'menor_valor') return a.valor - b.valor;
                                if (ordenacao === 'padrao') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                                return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                            });
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] border border-white/60 animate-slide-up",
                                children: [
                                    importError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm font-semibold animate-fade-in shadow-sm",
                                        children: importError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/despesas/page.tsx",
                                        lineNumber: 845,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold font-manrope text-gray-800",
                                            children: [
                                                sortedData.length,
                                                " ",
                                                sortedData.length === 1 ? 'Lançamento encontrado' : 'Lançamentos encontrados'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 851,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/despesas/page.tsx",
                                        lineNumber: 850,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full overflow-x-auto no-scrollbar bg-white border border-gray-200 rounded-2xl shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left border-collapse whitespace-nowrap min-w-[800px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4 text-left",
                                                                children: "Descrição"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4 text-center",
                                                                children: "Parcela"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4 text-center",
                                                                children: "Responsável"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 862,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4 text-center",
                                                                children: "Classificação AUVP"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4 text-center",
                                                                children: "Valor (R$)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 864,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4 text-center",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 865,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4 text-center w-24",
                                                                children: "Ações"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 866,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "text-base divide-y divide-gray-100",
                                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 6,
                                                            className: "py-12 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-center items-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-6 h-6 border-2 border-gray-200 border-t-black rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 873,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                            lineNumber: 872,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 21
                                                    }, this) : filteredDespesas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 6,
                                                            className: "py-16 px-6 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center justify-center max-w-md mx-auto",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                            className: "w-8 h-8 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 883,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 882,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-bold text-gray-900 font-manrope mb-2",
                                                                        children: "Nenhum lançamento encontrado"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 885,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500 mb-6",
                                                                        children: "Não há registros de despesas para este mês. Adicione seu primeiro lançamento!"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 886,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: handleImportarMesAnterior,
                                                                        disabled: isImporting,
                                                                        className: "inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm disabled:opacity-50",
                                                                        children: [
                                                                            isImporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 895,
                                                                                columnNumber: 31
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$import$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Import$3e$__["Import"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 897,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            "Importar despesas do mês anterior"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 889,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                lineNumber: 881,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                            lineNumber: 880,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 21
                                                    }, this) : sortedData.map((item)=>{
                                                        const somaFatias = item.responsaveis_divisao?.reduce((acc, curr)=>acc + Number(curr.valor || 0), 0) || 0;
                                                        const erroMatematico = item.responsaveis_divisao?.length > 1 && Math.abs(somaFatias - Number(item.valor)) > 0.05;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50/80 transition-colors group align-middle",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 px-4 text-left",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-gray-800 truncate max-w-[250px]",
                                                                        children: item.descricao
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 912,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 911,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 px-4 text-center",
                                                                    children: item.parcelado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-800",
                                                                        children: [
                                                                            item.parcela_atual,
                                                                            "/",
                                                                            item.total_parcelas
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 916,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500 text-sm font-medium",
                                                                        children: "Único"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 918,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 914,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 px-4 text-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-center -space-x-1.5",
                                                                        children: item.responsaveis_divisao?.map((resp, index)=>{
                                                                            const membro = membrosAtivos.find((m)=>m.id === resp.id);
                                                                            const cor = membro?.cor_perfil || 'blue';
                                                                            const initial = membro?.nome_usuario ? membro.nome_usuario.charAt(0).toUpperCase() : 'U';
                                                                            const avatarProps = getAvatarStyle(cor);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-7 h-7 rounded-full text-white flex items-center justify-center text-[11px] font-bold border-2 border-white shadow-sm z-[${10 - index}] ${avatarProps.className || ''}`,
                                                                                style: avatarProps.style,
                                                                                title: membro?.nome_usuario,
                                                                                children: initial
                                                                            }, resp.id || index, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 930,
                                                                                columnNumber: 33
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 922,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 921,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 px-4 text-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border uppercase tracking-wide ${CORES_AUVP[item.classificacao_auvp] || 'bg-gray-100 text-gray-700 border-gray-200'}`,
                                                                        children: item.classificacao_auvp
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 943,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 942,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 px-4 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-gray-900 text-[15px]",
                                                                            children: formatCurrency(item.valor)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 948,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        erroMatematico && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-red-500 font-bold block mt-1",
                                                                            children: "⚠️ Erro de Rateio (Editar)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 951,
                                                                            columnNumber: 46
                                                                        }, this),
                                                                        item.responsaveis_divisao?.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-center gap-1.5 mt-1.5 flex-wrap max-w-[150px] mx-auto",
                                                                            children: item.responsaveis_divisao.map((resp)=>{
                                                                                const membro = membrosAtivos.find((m)=>m.id === resp.id);
                                                                                const cor = membro?.cor_perfil || 'gray';
                                                                                const textProps = getTextStyle(cor);
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-[10.5px] font-bold tracking-tight ${textProps.className || ''}`,
                                                                                    style: textProps.style,
                                                                                    children: [
                                                                                        membro?.nome_usuario?.split(' ')[0],
                                                                                        ": ",
                                                                                        formatCurrency(resp.valor)
                                                                                    ]
                                                                                }, resp.id, true, {
                                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                                    lineNumber: 961,
                                                                                    columnNumber: 35
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                                            lineNumber: 954,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 947,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 px-4 text-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider cursor-pointer ${getStatusColor(item.status)}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `w-1.5 h-1.5 rounded-full ${getStatusDot(item.status)}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 971,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                value: item.status,
                                                                                onChange: (e)=>updateStatusInline(item.id, e.target.value),
                                                                                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "Pendente",
                                                                                        children: "Pendente"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                                        lineNumber: 977,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "Realizado",
                                                                                        children: "Realizado"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                                        lineNumber: 978,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 972,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            item.status
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 970,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 969,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 px-4 text-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-center gap-2 transition-opacity",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleEdit(item),
                                                                                className: "p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                                                                title: "Editar",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                                    lineNumber: 990,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 985,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeleteClick(item.id),
                                                                                className: "p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                                                                title: "Excluir",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                                    lineNumber: 997,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/despesas/page.tsx",
                                                                                lineNumber: 992,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/despesas/page.tsx",
                                                                        lineNumber: 984,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                                    lineNumber: 983,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/src/app/despesas/page.tsx",
                                                            lineNumber: 910,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/despesas/page.tsx",
                                                    lineNumber: 869,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 857,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/despesas/page.tsx",
                                        lineNumber: 856,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/despesas/page.tsx",
                                lineNumber: 842,
                                columnNumber: 15
                            }, this);
                        })()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/despesas/page.tsx",
                    lineNumber: 801,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isModalOpen,
                    onClose: ()=>setIsModalOpen(false),
                    initialData: editingDespesa,
                    onSave: handleSaveModal
                }, void 0, false, {
                    fileName: "[project]/src/app/despesas/page.tsx",
                    lineNumber: 1013,
                    columnNumber: 9
                }, this),
                itemToDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity",
                            onClick: cancelDelete
                        }, void 0, false, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 1022,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden p-6 text-center animate-slide-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "h-6 w-6 text-red-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/despesas/page.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/despesas/page.tsx",
                                    lineNumber: 1027,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-gray-900 mb-2",
                                    children: "Excluir Despesa?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/despesas/page.tsx",
                                    lineNumber: 1030,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mb-6",
                                    children: "Tem certeza de que deseja excluir permanentemente esta despesa? Esta ação não poderá ser desfeita."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/despesas/page.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: cancelDelete,
                                            className: "px-4 py-2 font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors w-full",
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: confirmDelete,
                                            className: "px-4 py-2 font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md transition-all active:scale-95 w-full",
                                            children: "Excluir"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/despesas/page.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/despesas/page.tsx",
                                    lineNumber: 1034,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/despesas/page.tsx",
                            lineNumber: 1026,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/despesas/page.tsx",
                    lineNumber: 1021,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/despesas/page.tsx",
                    lineNumber: 1052,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/despesas/page.tsx",
            lineNumber: 554,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/despesas/page.tsx",
        lineNumber: 553,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_12tfvh2._.js.map